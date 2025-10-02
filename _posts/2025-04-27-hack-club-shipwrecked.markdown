---
layout: post
title:  "Hack Club Shipwrecked"
date:   2025-04-27
---

<p class="intro"><span class="dropcap">H</span>ello and welcome! This week, I wrapped up reviewing the SSD object detection model and was just about to dive into the line-following model, when a message in the Hack Club announcements caught my attention.</p>

I kicked off the week by discussing the SSD model with Claude, breaking down each component to understand how everything fits together. It really helped me get a better grip on some of the more complex concepts. I also generated a few more inference examples, I'm still amazed at how well the model performs! To top it off, the weights are also getting some attention on Hugging Face too: it’s already been downloaded 90 times this month, and I only published it halfway through.

<img src="/assets/img/ssd/model-weight-downloads.png" alt=""><br>

I had just started diving into the line-following model for the ML Rover when a message popped up in the Hack Club announcements channel, and it definitely stole my attention.

Introducing…
Shipwrecked 🏝️ — a Hack Club hackathon on an island!
From August 8–11, you 🫵 and 130 other Hack Clubbers will gather on Cathleen Stone Island in Massachusetts Bay for a once-in-a-lifetime, 4-day, story-driven hackathon.
As soon as you arrive, you’ll start working together to survive!

- To get invited, complete "The Bay":
- Spend 60 hours building 4 projects (about 15 hours each) that you’re truly proud of
- Share them with the world—make at least one go viral (Hack Club will help with workshops, online events, and more)
- Get invited to Shipwrecked! (Travel stipends available)

As soon as I saw the announcement, a change of plans was inevitable and I decided to postpone the ML Rover project. I mean, how could I pass up the chance to go to Boston for a once-in-a-lifetime Hack Club hackathon on an island?

<a href="https://shipwrecked.hackclub.com/">Shipwrecked link</a>

<img src="/assets/img/shipwrecked/shipwrecked.png" alt=""><br>

So, naturally, I started thinking about what kind of project could actually go viral. I have to admit, I was stuck for a while. Every idea I came up with felt off, and I’d second-guess it almost immediately. That is, until my brother stepped in with an idea he picked up from one of Karpathy’s videos. In it, Karpathy mentioned that he didn’t know of any PDF reader where you could highlight text and chat with an AI about it. And just like that, I knew what I wanted to build.

<a href="https://shipwrecked.hackclub.com/info/go-viral/">How to go viral</a>

You should know, I’m not an expert in CSS, JavaScript, or front-end development in general, so I’ve been relying heavily on Claude to help guide me through this project. Still, the core idea is simple but powerful: a normal PDF reader, but enhanced with smart AI features. The main one? You can highlight a passage and instantly get a response from an AI chat that pops up right beside it.

I started working on it just two days ago, and here’s where it currently stands:

<img src="/assets/img/shipwrecked/open-pdf-landing-page.png" alt=""><br>
<img src="/assets/img/shipwrecked/pdf-reader-home.png" alt=""><br>

Right now, the project has a simple landing page where you can upload and open a PDF. Once the PDF is loaded, you can highlight any text, and a small bubble with a chat icon appears next to your selection. When you click the icon, a chat window opens, showing the highlighted message and giving you the option to choose how you'd like the AI to respond: Simple, Like I’m 5, Technical, or Custom. You can open multiple chats, close them, and ask the AI anything within each one.

I haven’t integrated the actual AI yet, but that’s coming next week!

Next week, I’m planning to integrate the AI into the chat feature, fix a few small bugs, and maybe even start exploring some of the other AI features I’ve got in mind. It’s still early, but I’m excited about where this is heading!

This post documents the state of the AI pdf reader as of April 27, 2025<br>
To see the current state of the pdf reader visit:

<a href="https://github.com/adrirubio/ai-pdf-reader">AI pdf reader github</a>
