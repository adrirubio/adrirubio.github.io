---
layout: post
title:  "ESP32 Environment Monitor"
date:   2025-09-19
---

<p class="intro"><span class="dropcap">H</span>ello and welcome! During this past month after Shipwrecked, I have built an ESP32 environment monitor, completed a hardware project with my dad, and started a very interesting project with my brother.</p>

The main thing I worked on this past month was my ESP32 environment monitor. I designed the circuit in Fritzing instead of Tinkercad because it had the sensors I needed. I was initially going to use a DHT22 and an MQ135, but decided that the BME280 and the SGP30 were more efficient and gave more accurate readings. The advantage of the BME280 over the DHT22 is that it measures temperature, humidity, altitude, and pressure, while the DHT22 only measures temperature and humidity. For the gas sensor, I decided to use the SGP30 because its readings are much more accurate than the MQ135. I decided to use an ESP32 because I wanted to display the readings both on a web page over the house WiFi and on an LCD screen.

After a week of iterating through different possible designs, I ended up with one I was quite happy with and decided to build it once I had all the parts. The two sensors required pin soldering, but unfortunately the SGP30 didn't work. I still don't know if it was faulty out of the box or if my soldering somehow damaged the sensor. We had to buy a replacement, but thankfully this one worked perfectly.

<img src="/assets/img/esp32-environment-monitor/esp32-environment-monitor.png" alt=""><br>

Once the project was functional, I made some final touches to the code. Soon I had a cool standalone environment monitor that displayed: temperature, humidity, pressure, altitude, forecast prediction, TVOC and CO2 levels (air quality), air quality status (good, moderate, or bad), and the IP address for the web page.

<a href="https://github.com/adrirubio/esp32-environment-monitor">ESP32 Environment Monitor GitHub</a><br>

<img src="/assets/img/esp32-environment-monitor/temperature-humidity.jpg" alt=""><br>
<img src="/assets/img/esp32-environment-monitor/top-view.jpg" alt=""><br>

Around the same time I was acquiring the parts for the ESP32 environment monitor, I built another project with my dad that rotates a stepper motor to activate or deactivate an ultrasonic sensor in one of the industrial printers he was working on. It uses an ESP32-S3 WROOM on a breakout board, a Nema 17 stepper motor, and a motor driver to control the motor. After some iteration, we successfully made the motor move. The only problem is that the movement isn't entirely accurate, and we believe it has faulty code, but we still haven't had a chance to fix it. When it's fixed, hopefully by the next blog post, I'll try to show a video of the project working.

<img src="/assets/img/stepper-motor-project/stepper-motor-project.jpg" alt=""><br>

I am currently building a project with my brother that we believe has quite a bit of potential. It isn't finished yet, and I would not like to disclose too much information here, but it is a really cool project. The next blog post might be in a few weeks, as I would like to talk about the project once it is up and running.

I think during these next few months I will concentrate on this project I am building with my brother, and I would also like to come back to the rover and implement more AI models I plan on building. But I can't really plan too far ahead, and I will see where the project with my brother takes me.
