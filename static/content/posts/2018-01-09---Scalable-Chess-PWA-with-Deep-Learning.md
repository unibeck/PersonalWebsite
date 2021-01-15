---
title: Scalable Chess PWA with Deep Learning
date: "2018-01-09T22:40:32.169Z"
template: "post"
draft: false
slug: "scalable-chess-pwa-with-deep-learning"
category: "DEVOPS"
tags:
  - "Kubernetes"
  - "GCP"
  - "Tensorflow"
  - "K8"
  - "Deep Learning"
  - "Artificial Intelligence"
description: "Ever been annoyed with an app's price model or incessant ads or poor UI? Ever thought 'I could do this 
better'? That is the position I found myself in when my father and I started to get involved with chess. Along this 
journey I built some amazing friendships and learned more than I ever expected."
---

- [What is ChessMates](#what-is-chessmates)
- [Kubernetes](#kubernetes)
- [PhantomPlay AI (Tensorflow)](#phantomplay-ai-tensorflow)
- [Epilogue](#epilogue)

Ever been annoyed with an app's price model or incessant ads or poor UI? Ever thought 'I could do this
better'? That is the position I found myself in when my father and I started to get involved with chess. Along this
journey I built some amazing friendships and learned more than I ever expected.

![Platform agnostic web app, Chessmates](/media/chessmates.png)

## What is ChessMates
ChessMates allows anyone to play chess, add friends, chat with them, and analyze each other's games. When I set out my 
goal, those features made up the minimum viable product (MVP). I would later add a deep-learning AI that mimics a 
user's style of play. ChessMates was also the perfect sandbox for me to explore new technologies that I was excited 
about. I have found that implementing something concrete with a new technology is a much better way to learn about it 
than to take tests and certifications.

These technologies included large and small things like Kuberenetes, GCP, Tensorflow, OAuth, and websockets. Not only 
did I want to become proficient in them, they were also great fits for a scalable Chess application. I was running and 
paying this by myself, so I needed it to scale down appropriately to save my wallet from hating me. Though I also had 
dreams that this may take off, and I could make some money off it, so it also needed to scale up easily.

Other than seamless scaling, features include:
- Welcome/Onboarding Page
- OAuth2 sign up and sign in with Google
- Account updates like username, profile picture, etc
- Search for users, send/revoke friend requests, remove friends
- User vs user gameplay, this requires the users to be friends
- Messaging between users, inside and outside the context of a game
- Global user analytics and per friend analytics
- PhantomPlay AI, deep learning AI that mimics a player's play style based on previous games

Let's dig deeper into the fun and exciting features.

## Kubernetes
Kuberenetes, and well the GCP managed version of it GKE, was a great fit for the scalability requirements of the 
platform. It allowed me to build out the infrastructure needed for each microservice without actually worrying about 
the infrastructure. A nice feature at the time compared to other solutions by Azure or AWS was that both the control 
plane and the data plane were fully managed. This abstracts all of the headaches of provisioning and maintaining that 
infrastructure.

One of the best consequences of using this stack is an efficient developer workflow. As a dev I could run all my 
services locally as docker containers orchestrated by minikube, which acts similar to a live environment. That means I 
have more confidence of my changes when they are rolled up through the environments. Additionally, my dev machine did 
not come to a halt running all the containers, as it were if I was running VMs to replicate a similar live environment.

Kubernetes proved even more useful and powerful when we added PhantomPlay AI. We packaged the model as its own 
docker image, and launched it as its own microservice + pod. This allowed us to scale the requirements needed for the 
model's inference outside the requirements of validating chess moves, handling API requests, and managing DB records. 
Speaking of which, let's move onto talking about the exciting PhantomPlay AI.

## PhantomPlay AI (Tensorflow)
There is so much to PhantomPlay it could be its whole own posts. The premise is that the AI should mimic the style of 
play for each user. For the initial release, we started off mimicking Magnus Carlson, whose is known as the current 
best Chess player. We started with him because he had a lot of previous games and thus a lot of data for the algorithm. 
We serialized all of his games, added metadata, and supplied weights based on how recent the game was. 

The model consisted of three fully connected convolutional layers, then a hidden layer to apply dropout and a relu
function. The model's inputs were a list of possible moves, a list of previous moves made, the game state/board
context, and label. The output would be one of the possible moves provided and is the move the AI would play. The model
learned what move to choose based on all the inputs. As you could probably guess, backpropagation decreased the model's
loss substantially.

While this next feature didn't make the original release, I wanted to share it with you all to show the direction we 
wanted to take. To make PhantomPlay work efficiently for all players, we would have used tier base models. For example,
a model taught on 1600-1699 ELO rated players. For each player in their respective ELO range, we would use the range's 
base model and apply transfer learning to that player's specific model. This would allow us to achieve an accurate 
resemblance of a player's style without copious game history.

## Epilogue
This adventure brought me together with some amazing people. Specifically, I would like to extend a special thank you 
to Subhrajit Debnath and Ian Ballard. They worked with me on various parts of this application and it wouldn't be what 
it is without them. I enjoyed every minute working together and taking ChessMates to the next level. I also found 
myself sharing many serendipitous moments with my father, as well as trash talking each other as we played and 
analyzed games.

I was truly spectacular where this project ended up, however, it was without a doubt the journey that I enjoyed most. 
Did I end up building a better chess app? In many ways, _no_, but along this ride I became better at Chess, found deep 
knowledge about several compelling technologies, and had fun doing it. I achieved many of my goals and I can't wait to 
do something like this again!
