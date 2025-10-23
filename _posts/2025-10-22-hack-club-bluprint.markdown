---
layout: post
title:  "Hack Club Blueprint (I Got Distracted Again)"
date:   25/10/22
---

<p class="intro"><span class="dropcap">H</span>ello and welcome! This week, an announcement on Hack Club caught my attention. What about the rover? Postponed.  Again.</p>

On Friday, October 3rd, a new message appeared on the announcements channel on my Hack Club Slack, it read the following:

Rummage Rummage 🌳 <br>
What's that? A blueberry???🫐🫐🫐🫐🫐 <br>
Announcing........Blueprint📘! Hack Club's largest hardware event. <br>
Think of it as Highway (Hardware) x Summer of Making (Fully integrated dashboard!) <br>
Design any hardware project..... REALLY! ANYTHING: Get up to $400 to build it!!! <br>
What's more??? Use the time you spend building to get cool tools from the toolbag such as a BambuLab 3d printer <br>

- Join #blueprint 📘 on Slack (You know you want to) <br>
- Go to https://blueprint.hackclub.com/ and sign up (Don't forget to thank @Ruby for the art) <br>
- Start your first journal entry to instantly earn some cool stickers 📘! <br>
- Click explore to see other things people are making.... Live! 🔴..........you can even follow other people! <br>

I already had lots of work planned for the Rover but this message was just too tempting to ignore and so I signed up... Just by looking at the possible prizes (3d printers, bench power supplies, soldering irons and more) I knew that this was for me. I started brainstorming possible projects for someone who had never printed a PCB or designed 3d pieces. Before long I had a challenging but promising idea.

<img src="/assets/img/blueprint/blueprint.png" alt=""><br>

Blueprint: <a href="https://blueprint.hackclub.com/landing">Hack Club Blueprint</a><br>

My goal is to build a speed camera. It'll have a pcb/carrier board and a case that screws onto a universal tripod mount. Here's my base idea: I'll use a TF-Luna lidar to detect passing vehicles and measure their speed, likely using one of the two methods I mentioned in my latest journal entry (you have to journal your process since you can't use Hackatime for hardware projects). The moment it detects an object entering the lidar's field of view, it triggers the camera to take a picture. The data from both the lidar and camera gets passed to the raspi zero 2w, which calculates the speed of the vehicle, what vehicle it is, and in the case of it being a car, its license plate. Lastly, the data is sent to a phone via the pi's wifi.

<img src="/assets/img/blueprint/odins-eye.png" alt=""><br>

Odins Eye Blueprint: <a href="https://blueprint.hackclub.com/projects/413">Odins Eye Blueprint</a><br>
Odins Eye Github: <a href="https://github.com/adrirubio/odins-eye">Odins Eye Github</a><br>

Now, I don't want to repeat everything I went through to get to where I am because it's all explained on the Blueprint page for my project. But I'd just like to say that I have a good feeling about this project. I'm not sure when I'll post my next blog post, but I think I want to concentrate on the project for now and post once it's finished. In the meantime, my whole work process will be journaled on the Blueprint page.
