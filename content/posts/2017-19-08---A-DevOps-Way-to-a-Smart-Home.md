---
title: A DevOps Way to a Smart Home
date: "2017-08-19T22:40:32.169Z"
template: "post"
draft: false
slug: "a-devops-way-to-a-smart-home"
category: "DEVOPS"
tags:
  - "DevOps"
  - "Infrastructure-as-Code"
  - "Chef"
  - "Home Assistant"
  - "Smart Home"
description: "A smart home is great and all, but what about having observability, automation, and Infrastructure-as-Code 
to support your smart home stack? I incorporated these DevOps principles into my smart home, and it brought the whole 
experience to the next level."
socialImage: "/media/42-line-bible.jpg"
---

- [Infrastructure-as-Code](#infrastructure-as-code)
- [Monitoring](#monitoring)
- [Automation](#automation)

A smart home is great and all, but what about having observability, automation, and Infrastructure-as-Code 
to support your smart home stack? I incorporated these DevOps principles into my smart home, and it brought the whole 
experience to the next level.

My open-sourced project, [Vestalect](https://gitlab.com/vestalect), is the result of marrying smart home and DevOps 
principles together. Below is a high-level summary of the project, where I review setting up 
[Home Assistant (HA)](https://www.home-assistant.io/) with common DevOps tools like Chef, Prometheus, and CI/CD. 
For a more detailed look feel free to browse the code, use the project, or even make contributions!

## Infrastructure-as-Code

The first thing I needed to do was set up a reproducible environment where I could test my changes locally, before
deploying them to my 'prod' environment. This was crucial for prototyping significant stack updates without 
interfering with my home's operations. Infrastructure-as-Code (IaC) frameworks such as Chef, Ansible, and Terraform 
were top candidates. IaC also enables the use of CI/CD pipelines, where I could automate testing and deploying. I will 
go into further detail on how I integrated CI/CD automation later in the post.

Piggy-backing off previous my experience and the feature set this project required, Chef Infra was the perfect framework.
Chef Infra enabled me to make changes in a local VM, iterate quickly, and update my production stack with confidence. I
have used Terraform before and their markup-esque `HCL` language was a pain to do anything complex. Having a real 
programming language, `Ruby` in Chef's case, to define your infrastructure made development much easier.

With Chef, we can configure HA and its configs in a reproducible manner, like so:
```ruby
remote_directory "/opt/#{node['vestalect']['user']}/hass/config" do
  source 'config'
  owner node['vestalect']['user']
  group node['vestalect']['group']
  files_owner node['vestalect']['user']
  files_group node['vestalect']['group']
  mode '0755'
  notifies :run, 'execute[RestartHomeAssistant]', :delayed
  recursive true
end

template "/opt/#{node['vestalect']['user']}/docker-compose.yml" do
  source 'docker-compose.yml.erb'
  owner node['vestalect']['user']
  group node['vestalect']['group']
  mode '0755'
  variables(
    vestalect_user_id: "\"#{node['vestalect']['user_id']}\"",
    docker_apps_root: "/opt/#{node['vestalect']['user']}",
    home_assistant_tag: node['hass']['home_assistant_tag'],
    # ...
  )
end

docker_image 'homeassistant/home-assistant' do
  tag node['hass']['home_assistant_tag']
  action :pull_if_missing
end
```
Now if I wanted to update HA or change its config before I deploy it to my prod environment, I simply run 
Chef on a local VM and test it. This is one of the great powers of IaC!

## Monitoring

Every DevOps Engineer knows how important it is to have visibility into their infrastructure. Even more so for a stack 
that manages your home's security, automation, and configuration. It is essential to have insight into the health 
and performance of your smart home. If my smart home is incapacitated for any reason, I need to be aware.

My favorite technologies to hit the ground running with addressing my concerns are Prometheus and Grafana. I can pipe 
real-time host and service metrics into Prometheus to aggregate and store the data. With Prometheus's AlertManager I 
then alert myself via Slack if anything significant comes up. Grafana allows me to visualize real-time and historical 
data to have a holistic view of my smart home. 

Even cooler about this set up is that HA has integration with Prometheus. I use this to send all HA events 
to Prometheus for analytics and long term storage. I find it fun to use the powerful visualization tools of Grafana to 
look at the patterns of my home. ___For instance, I found that it only cost me $0.21/month to keep my computer idle 
instead of shutting it down every night.___

One last measure to ensure my smart home has minimal downtime is to integrate an external service to monitor my smart 
home. Here I use Site24x7 to ensure that my smart home and its DNS is accessible externally. This service checks in 
from several locations across the contential US, which is helpful if I need to manage my smart home while traveling.

## Automation

One of the biggest reasons people get into smart homes is for automation, like turning on a light when you arrive home. 
However, in this article I am interested in a different kind of automation. I want tests to run automatically when I 
make a commit, giving me confidence in the quality and effectiveness of my change. Then when my change is production 
ready and merged into master, it should be deployed to PROD without my intervention.

A test suite is extremely important for my development workflow. It gives me a way to validate my changes in a 
consistent manner. Now let's couple that with the ability to make my changes and test them in a local VM I mentioned 
earlier. These two together allow me to deploy with confidence to my live environment.

So what does this look like? Here are the basics:
```yaml
chef_lint:
  stage: test
  image: chef/chefdk:4.9.17
  script:
    - /opt/chefdk/bin/cookstyle .
    - /opt/chefdk/bin/foodcritic ./cookbooks/

hass_lint:
  stage: test
  image: homeassistant/amd64-homeassistant:0.116.2
  script:
    - hass --script check_config -c ./cookbooks/homeAssistantSetup/files/default/config/

test_kitchen:
  stage: test
  artifacts:
    expire_in: 7d
    when: on_failure
    paths:
      - .kitchen/logs
  script:
    - kitchen test -d always -c 3
```
The first section ensures my Ruby code is valid and formatted consistently. The `hass_lint` job ensures that my Home 
Assistant configuration will work when it is deployed. `test_kitchen` will run my Chef test suite, which checks that 
my infrastructure will be provisioned correctly and minimize security risks.
