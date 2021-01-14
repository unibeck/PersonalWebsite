---
title: "Async Smart Home"
date: "2019-03-28"
template: "post"
draft: false
slug: "async-smart-home"
category: "Development"
tags:
  - "Open source"
  - "Home Assistant"
  - "Development"
  - "Python"
  - "Smart Home"
description: ""
socialImage: "/media/gutenberg.jpg"
---

---

Historic States in Home Assistant
TLDR; I have created a Home Assistant (HA) custom component to support states that have occurred in the past. This integration sets a state's last_updated and last_changed datetimes based on client data. You can find the project and more details at https://gitlab.com/jbeckman/retro_state.


---

Background
Unfortunately there is no official support to handle historic states in HA. This seemed odd to me as many components in HA do not have true, real-time states. Any cloud component will incur some latency, which unreliable internet would magnify. The frequency of published reports limits batch processing to that instant (exhibit A). Even local components will have some latency, depending on the integration and/or hardware the user is hosting HA on (exhibit B).
Users have been using HA with inaccurate datetimes since its creation. Most of the time, the latency is only a few hundred milliseconds. But even if a state's datetime is a couple seconds off, what is the big deal? Knowing the exact millisecond my light turned off was not my goal. My goal was to collect field data where accurate, in-order data points is crucial. Then integrate it with HA without losing data integrity.
Plan
My first thought was to create a native implementation in HA for this. After getting my hands dirty for my first time with HA, I submitted a PR for the project. It needed work and an architectural discussion, which I also submitted a PR for. My rebuttals were never addressed by HA project owner Paulus Schoutsen and my PR still lies languished today.
I then entertained the idea of forking HA or starting a new project with Flutter. Though I had my reservations about both of those ideas. The other option I considered was to create a HA custom component. After deliberation with my colleagues, I decided this was my best option.
Fast forward two months and I am ready to share the first, public release of retro_state! Below is an overview of the project and what I use it for. However, high and low-level explanations of the project are also available in the README.md.
Project Overview & Personal Use
The idea is based on the client device, not HA, providing the datetime when the state changed. The client device knows when the state changed occurred because the device made the change itself. Imagine your light bulb, sprinkler system, or vehicle providing these datetimes. The state's datetime no longer has baggage from internet hops, third-party processing, or HA processing. Furthermore, this preserves the order of when state changes occurred, not the order HA received them.
For me, I wanted to gather metrics from my Ford F-150. An OBD II bluetooth adapter provides data to my no longer defunct Nexus 5. Using Torque and Tasker, I marshal the data into JSON with a datetime. The Nexus 5 sends the JSON to HA via its HTTP API, then processed via retro_state's historic_template. I use the HTTP API because using HTTPS and a proxy breaks the native Torque component. With the HTTP API I provide the client datetimes as attributes, where templates parses them into states.
I lose some accuracy from the OBD II adapter not providing the datetime for each data point. However, it is not as severe as HA waiting for a 3G network to provide a state change. When no wireless service is available, the client (Nexus 5) persists the data locally. The client can then process the data at a later time with no data or integrity lost.
Retro_state supports persisting states that have occurred in the past with the recorder and influxdb components. The historic_template component handles the creation of states that have occurred in the past. It is familiar to work with as it is based on the native HA template component. Though you can also template the last_updated and last_changed datetimes of a state.
Conclusion
Thanks for making it to the end, I hope you enjoyed reading about my journey. Contributions to retro_state are welcomed. I only implemented the components that I needed, but there are many other components that could benefit from this.

*Originally published on [Medium](https://medium.com/@jonathantbeckman/historic-states-in-home-assistant-3ffe2ae0480a).*
