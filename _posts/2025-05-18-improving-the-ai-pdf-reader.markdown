---
layout: post
title:  "Improving the AI PDF Reader"
date:   2025-05-18
---

<p class="intro"><span class="dropcap">H</span>ello and welcome! Over the past two weeks, I’ve been working hard on the AI PDF Reader. I’ve improved the UI, integrated the AI API, and am now implementing a database to support the reader.</p>

I haven’t posted in the past two weeks as I’ve been fully focused on developing the AI PDF Reader. Now that I’ve found a moment, here’s a quick recap of what I’ve been working on and what to expect moving forward.

I started the week by addressing several UI issues to make the interface cleaner and more user-friendly.
I removed the “Simple,” “Like I’m Five,” and “Technical” modes, keeping only the “Custom” option to streamline the experience. I also enlarged the chat area and slightly repositioned the PDF viewer to the left for better layout balance. Instead of dumping the entire highlighted text into the chat, it now generates a compact link or button that takes you directly to the relevant section in the PDF—making navigation much smoother. Additionally, when starting a new chat, it can now retain full context from the entire PDF.

After that, I began integrating the API.
The app now supports OpenAI API keys, correctly detects them, and uses them for generating responses.
Here is a quick look at what’s changed from where we left off to this week:

<img src="/assets/img/shipwrecked/pdf-reader-home.png" alt=""><br> <img src="/assets/img/shipwrecked/pdf-reader-home2.png" alt=""><br>

Also added:
<img src="/assets/img/shipwrecked/full-context.png" alt=""><br> <img src="/assets/img/shipwrecked/chat-with-full-context.png" alt=""><br>

Yesterday, I joined the Shipwrecked kickoff call and got to see what other teenagers are building. It was exciting to hear from other builders, share early progress, and get inspired by a wide range of creative ideas. Being part of a community like this adds an extra layer of motivation.

So far, I’ve spent about 14 hours on the project. Once I finish implementing the database and polish things up a bit, I plan to launch a small web demo. After that, I’ll start promoting it across different platforms hopefully reaching 150 stars on GitHub.

<img src="/assets/img/shipwrecked/23.png" alt=""><br>

This post documents the state of the AI pdf reader as of May 18, 2025<br>
To see the current state of the ai pdf reader visit:

<a href="https://github.com/adrirubio/ai-pdf-reader">AI pdf reader github</a>

