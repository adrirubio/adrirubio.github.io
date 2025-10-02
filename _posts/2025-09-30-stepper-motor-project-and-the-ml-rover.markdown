---
layout: post
title:  "Stepper Motor Project and the ML Rover"
date:   2025-09-30
---

<p class="intro"><span class="dropcap">H</span>ello and welcome! Over the past week and a half, I burned out a motor driver because of faulty documentation and began work on the rover.</p>

My dad and I thought the stepper motor's malfunction was due to incorrect cabling. We downloaded the documentation to verify the cabling was correct, using the cooler on the motor driver as a reference point for orientation. Since the driver was mounted on a breadboard, we took if as granted that the pinout diagram in the PDF was correct without verifying the actual chip orientation.

When we connected 24V to one row of the breadboard and 5V to the other, we heard a sort of pop and saw smoke coming from the driver. Later, after taking the motor driver off the breadboard and looking closer, we realized that the pinout diagram in the docs was wrong.

Motor driver pinout docs:

<img src="/assets/img/stepper-motor-project/motor-driver-pinout.png" alt=""><br>

Motor driver pinout labels (grey sticker shows where the cooler is on the other side):

<img src="/assets/img/stepper-motor-project/old-motor-driver.jpg" alt=""><br>

As you can see from the pictures, the documentation and pinout labels on the motor driver don't match. We bought a pack of 5 motor drivers just in case we burned out another one. This time we made sure to double-check the connections before applying power. Here's the finished result:

Once my dad and I completed the stepper motor project, I began work on the rover. It had been quite some time since I'd worked on it, and when I tried to ssh into its Raspberry Pi, I realized I had forgotten the password. I asked Claude to create a script that would let me change the password without wiping the SD card. Once I was inside, I discovered the code was mostly outdated. I plan to use Claude Code or Codex CLI to update it to the latest versions, but I haven't had the chance yet.

<img src="/assets/img/ml-rover/rover-ssh.png" alt=""><br>

Another thing I realized was that the rover had gotten dusty and needed cleaning. I fully took it apart, cleaned all the pieces, and reassembled everything. This took the entire afternoon, from after lunch until dinner, about 5 hours of continuous work.

Before cleaning:

<img src="/assets/img/ml-rover/before-rover.jpg" alt=""><br>

After cleaning:

<img src="/assets/img/ml-rover/after-rover.jpg" alt=""><br>

My goals for the next few weeks are to update the rover's code to the latest versions, implement the object detection model I built (possibly using the Jetson Nano we have), and continue working on the 'secret' project with my brother.
