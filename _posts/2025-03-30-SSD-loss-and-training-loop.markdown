---
layout: post
title:  "SSD Loss and Training Loop"
date:   25/03/30
---

<p class="intro"><span class="dropcap">H</span>ello, and welcome! This week, I made significant progress on the SSD object detection model, nearly completing it by implementing the loss function, training loop, loss plotting, and model saving.</p>

Last week, I completed the model definition. This week, I focused on building the loss function, which calculates the bounding box offset, as well as the training loop which is where the model learns. Additionally, I worked on smaller components such as the optimizer, loss plotting, and model saving.

First, I instantiated the model we defined last week and began working on the loss function. The box_iou function calculates the Intersection over Union (IoU) between two sets of bounding boxes to determine their overlap. The encode_boxes function converts ground truth box coordinates into a format relative to default anchor boxes, improving the model's learning process. Finally, the SSD_loss class defines the loss function, combining Smooth L1 loss for localization and Cross-Entropy loss for classification while balancing positive and negative samples for stable training. The loss function's goal is to evaluate how well the predicted bounding boxes and class probabilities align with the ground truth, guiding the model toward greater accuracy.

<img src="/assets/img/box-iou-encoder.jpg" alt=""><br>
<img src="/assets/img/SSD-loss.jpg" alt=""><br>
