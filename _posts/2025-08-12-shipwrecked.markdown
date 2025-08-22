---
layout: post
title:  "Shipwrecked"
date:   2025-08-12
---

<p class="intro"><span class="dropcap">H</span>ello and welcome! This past weekend was one of the coolest experiences of my whole life. I shipped three projects in four days, and met some incredible people along the way.</p>

Shipwrecked was a four-day hackathon on an island where 130 teenagers coded and shipped three projects for prizes. My brother and I were among the 130 teenagers who attended out of 5,000 who RSVPed.

Before I get into the details, I’d like to say that the island was beautiful, and every activity and project was very well prepared and planned. I met many people and worked on three projects that I’m very proud of.

<img src="/assets/img/shipwrecked/hackathon/friends-1.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/friends-2.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/dock.jpg" alt=""><br>

So, how did this Hackathon work? Each day you had to complete (ship) a project and present it in a science-fair style event showcasing all the projects built. If you met the project requirements, shipped it, and presented it, you earned a prize. During the day, few people felt like coding because there were so many workshops, challenges, and activities. Everyone ended up coding late at night, but it was worth it because going to these activities and challenges was really fun. Some examples include Zach’s workshop on how to create a non-profit, a spicy food challenge, a contest to build the tallest house, going swimming, and much more.

<img src="/assets/img/shipwrecked/hackathon/basketball.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/tower.jpg" alt=""><br>

### 1st Project

For first project, you had to build was a system to communicate without text, using things like colors, sounds, and images. I decided to work on it with a teammate who prefers not to be named, for this post, I'll call him Byte, and Nikos (from Greece). We started brainstorming the first night and came up with a hardware project: four LEDs, each corresponds to a push-button, and each pair represents a feeling. The duration of the button press indicates the intensity of that feeling. For example, the green LED represents happiness, pressing its button for one second means you’re feeling sad, while pressing it for five seconds means you’re happy.

That night, I started designing the circuit and code in Tinkercad, finishing it by morning. After breakfast, we collected all the hardware parts needed for the project, although I had also brought my Arduino kit. Soon after, we started building the design, but we ran into a problem: the LCD screen didn’t work. Nikos and I tried for hours using the 4-pin LCD wiring method, but for some reason it just wouldn’t work. With only one hour left until the deadline to present our projects, we had to make an important decision.

<img src="/assets/img/shipwrecked/hackathon/feeling-translator.png" alt=""><br>

The decision came because our original plan was to use an ESP32 to transfer the button press data to an app Nikos was building. Unfortunately, Nikos couldn't get the ESP32 working either. In retrospect, I regret not helping him with the ESP32, maybe the app could have been more complete. We had two options: (1) focus on hardware and hope the LCD screen worked before the deadline, or (2) focus on the app and make the same thing we were working on with the hardware in an app. We ended up doing both, kind of. I built the hardware, but instead of sending output to the LCD, it displayed in the Arduino IDE’s serial monitor. Meanwhile, Nikos built the app that was practically the same as what I had done in hardware.

<a href="https://github.com/Nikos1508/Translator">Feeling Translator</a><br>

<img src="/assets/img/shipwrecked/hackathon/1st-project.jpg" alt=""><br>

Once it was finished, we presented it, and the prize was a Hack Club shirt!

<img src="/assets/img/shipwrecked/hackathon/merch/shirt.jpg" alt=""><br>

### 2nd Project

For the second project you had to build something multiplayer, it could be a game, app, website... I decided to build this with Byte and Daniel (from Italy) and we started brainstorming right after the announcement. At the very start of the event, they gave us all PCB badges where we could flash it to display our name and handle, and they would receive announcements for events. But not only that, you could code it! We decided to try and build a game for the badges in which players pressed a button, and if two people pressed the same one, they were eliminated.

<img src="/assets/img/shipwrecked/hackathon/merch/badge.jpg" alt=""><br>

At the start, Byte and I focused on getting all three badges to connect, while Daniel worked on a simple UI for the app. But for some reason, the badges didn't connect. When Daniel finished the UI he tried to help us troubleshoot.

We tried for hours, but the badges still wouldn't connect. With only an hour or two left before the event, we decided to split into smaller teams. Byte kept trying to get the badges and the game to work, while Daniel and I tried to quickly build a website as our backup plan in case the badges still wouldn’t connect by presentation time.

<a href="https://github.com/v1ctorio/badge-game">Badge Game</a><br>
<a href="https://github.com/danielscos/russian-roulette">Russian Rouletee</a><br>

<img src="/assets/img/shipwrecked/hackathon/2nd-project.jpg" alt=""><br>

In the end, with a little help from AI, we managed to build a simple Russian roulettee game. On top of that, Byte also kind of got the badges to connect and the game to function properly. We rushed down to present our projects and came away with Shipwrecked stickers!

<img src="/assets/img/shipwrecked/hackathon/merch/stickers.jpg" alt=""><br>

### 3rd Project

For our third and final project, we could build anything creative and colorful. I teamed up with Byte and Daniel, and we created a Chrome Extension that makes everything in your browser colorful and wild. At first, I thought it would be too difficult because we had so little time after all the day’s activities, but it turned out to be easier than I expected.

In just an hour or two, we had a Chrome extension with a CSS file that overrode the site’s styles. Honestly, it looked pretty cool.

<a href="https://github.com/danielscos/browser-blaster">Browser Blaster</a><br>

<img src="/assets/img/shipwrecked/hackathon/3rd-project.png" alt=""><br>

During this project, I learned how to create a Chrome extension.
Honestly, across all three projects, I also learned how to collaborate and how to distribute work with different people.

That morning, we presented our projects and received Shipwrecked keychains as a reward!

<img src="/assets/img/shipwrecked/hackathon/merch/keychain.jpg" alt=""><br>

### Final Thoughts

Shipwrecked was an incredible experience, it was everything I could have expected and more. I met so many people who share my interests and had some really interesting conversations with them. The activities were amazing: I played basketball, flew a drone across the island, explored hidden beaches, and much more. One of the best friends I made during Shipwrecked is Imesh from Italy, who is a very kind and interesting person. Everyone was welcoming, and the island itself was beautiful. Thanks to everyone who made the event possible. I hope I can attend more Hackathons in the future!

<img src="/assets/img/shipwrecked/hackathon/group-photo.JPG" alt=""><br>

<p><strong>Shipwrecked Video</strong></p>

<div style="text-align: center; margin: 2em 0;">
  <a href="https://www.youtube.com/watch?v=uXWMr0gdLJA" target="_blank" style="display: inline-block; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
    <img src="https://img.youtube.com/vi/uXWMr0gdLJA/0.jpg" alt="Shipwrecked Video" style="width: 720px; max-width: 100%; display: block;">
  </a>
</div>

### Merch

<img src="/assets/img/shipwrecked/hackathon/merch/t-shirt.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/merch/extra-stickers.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/merch/light.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/merch/small-light.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/merch/map.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/merch/map-open.jpg" alt=""><br>

<p><strong>Before & After: My laptop</strong></p>

<img src="/assets/img/shipwrecked/hackathon/merch/computer-without-stickers.jpg" alt="Laptop before stickers">
<img src="/assets/img/shipwrecked/hackathon/merch/computer-with-stickers-2.jpg" alt="Laptop after stickers">

### Pictures

<img src="/assets/img/shipwrecked/hackathon/meetup.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/ferry.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/airplane.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/campfire.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/zach.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/island.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/sunny.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/view.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/sunny-boston.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/boston-sunset.jpg" alt=""><br>
<img src="/assets/img/shipwrecked/hackathon/boston-night.jpg" alt=""><br>
