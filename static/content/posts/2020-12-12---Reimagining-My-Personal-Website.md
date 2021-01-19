---
title: "Reimagining My Personal Website"
template: "post"
draft: false
category: "Development"
tags:
  - "Development"
  - "Typescript"
  - "React"
  - "CI/CD"
  - "Open Source"
  - "AWS"
description: "Think back to when you were younger for a minute. Remember the good ole times playing video games and how 
amazing the graphics were? But if you go look up the game now, you'll find that your nostalgic goggles have deceived 
you. Games never look as good as we remember them. I shared that same sentiment with my old personal website."
---

- [Prelude](#prelude)
- [Features](#features)
- [Architecture](#architecture)
- [Old vs New](#old-vs-new)

Think back to when you were younger for a minute. Remember the good ole times playing video games and how amazing the 
graphics were? Now, if you go look up one of those games you will find that your nostalgic goggles have deceived you. 
There is this weird phenomenon where games do not look as good as we remember them. I shared that same sentiment with 
my old personal website.

## Prelude
Back in my sophomore year of college I started to look at internships. I realized I needed more experience, a way to 
distinguish myself, and something to showcase and market myself (other than a resume). Like others in my situation, I 
turned to a personal website to achieve my goal. I ended up building my website using AngularJS and Firebase -- no 
templates, right from scratch. I was, and still am, very proud of what I made. It served as the bellwether of what I 
was capable of and opened several opportunities in my young career.

However, as I alluded to earlier, I now feel like the style and architecture is out-of-date. This is especially evident 
when auditing the site with Lighthouse. It was based on Material Design, which still looks good, but my appeal grows more and 
more poignant by the day. Lastly, recall that my personal website was originally a way to showcase myself. Well, at 
this point in my career, a static website no longer cuts it...

## Features
With all of that in mind, I am excited to share with you my new personal website. Obviously you are already using it, 
but let's go over some of the most compelling features:
1) Progressive Web App (PWA) -- this means the site will load super quick, scale on any device (responsive), and is 
   secure
2) Blog -- a place where I can share my personal and professional experiences with you all
3) CI/CD -- provides feedback during development with automated jobs, as well as automatic deployments to staging and 
   production environments
4) Dark mode -- automatically switch according to your device's preference, or you can toggle manually
5) RSS feed -- you can now subscribe to my blog posts to stay in the loop!

## Architecture
So how did I do it? Well, I first started with being more pragmatic about the situation. I didn't need to build the 
site from scratch to prove my capabilities like I did for my first site. Instead, I used Gatsby which provides 
templates and plugins for common use cases to build websites. Gatsby is built on top of React and allows for fast, 
lightweight apps. Gatsby and its plugins use a unified GraphQL layer that manages and aggregates all content and data. 
This makes it straightforward to integrate most aspects of the website with plugins, it is great.

The React components, which use Typescript, are bundled together with webpack into a PWA. This artifact is deployed to 
AWS S3 and AWS CloudFront, which acts as a CDN and proxy. DNS is handled by CloudFlare. It is nothing crazy, but these 
three pieces of cloud infrastructure provide a low cost, low latency solution to hosting my personal website.

I based my site off of this [starter theme](https://www.gatsbyjs.com/starters/alxshelepenok/gatsby-starter-lumen). 
While it looks very similar, it is not a turnkey solution, and I had to make many under-the-hood revisions. The end 
product is amazing, a PWA that scores very well on Lighthouse and has clean code.

## Old vs New
Let's take a look at how the new site fares against the old site. My previous website used Firebase which provided many 
of the same advantages as using AWS, so nothing to really discuss there. I used Lighthouse in my CI/CD jobs to ensure 
there are not regressions, and I used Lighthouse here to compare the sites objectively. As of Lighthouse version 6.4.0 
this is how the two sites performed:

![New website lighthouse score](/media/new_website_lighthouse_score.png)
_New website lighthouse score_

![Old website lighthouse score](/media/old_website_lighthouse_score.png)
_Old website lighthouse score_

The new site is obviously top-notch, though the old site put up a good fight and did well. I am very pleased with how 
the new site came out. For historical purposes, this is what the old site used to look like:

![Old website home page](/media/old_website_home_page.png)
