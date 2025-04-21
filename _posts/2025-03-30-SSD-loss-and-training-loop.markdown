---
layout: post
title:  "SSD Loss and Training Loop"
date:   25/03/30
---

<p class="intro"><span class="dropcap">H</span>ello, and welcome! This week, I made significant progress on the SSD object detection model, nearly completing it by implementing the loss function, training loop, loss plotting, and model saving.</p>

Last week, I completed the model definition. This week, I focused on building the loss function, which calculates the bounding box offset, as well as the training loop which is where the model learns. Additionally, I worked on smaller components such as the optimizer, loss plotting, and model saving.

First, I instantiated the model we defined last week and began working on the loss function. The box_iou function calculates the Intersection over Union (IoU) between two sets of bounding boxes to determine their overlap. The encode_boxes function converts ground truth box coordinates into a format relative to default anchor boxes, improving the model's learning process. Finally, the SSD_loss class defines the loss function, combining Smooth L1 loss for localization and Cross-Entropy loss for classification while balancing positive and negative samples for stable training. The loss function's goal is to evaluate how well the predicted bounding boxes and class probabilities align with the ground truth, guiding the model toward greater accuracy.

<img src="/assets/img/ssd/box-iou-encoder.jpg" alt=""><br>
<img src="/assets/img/ssd/SSD-loss.jpg" alt=""><br>

Next, I initialized the SSD loss function and froze the first 10 layers of the VGG backbone to preserve low-level feature extraction, prevent overfitting, and speed up training by focusing updates on the higher layers that learn task-specific features. Additionally, I defined the Adam optimizer with a lower learning rate for the first and second convolution layers of the backbone to ensure more stable and gradual updates in the early feature extraction stages.

<img src="/assets/img/ssd/SSD-freezing-layers-and-optimizer.jpg" alt=""><br>

Now, it was time for the actual training loop. The loop processes batches of images, computes the loss using the SSDLoss function, backpropagates gradients, and updates the model parameters using the optimizer. After each epoch, it evaluates the model on the validation set without updating weights, records the average training and validation losses, and prints the epoch's performance metrics. The goal is to optimize the model’s parameters by minimizing training loss while tracking validation performance to ensure generalization.

<img src="/assets/img/ssd/SSD-training-loop.jpg" alt=""><br>

Finally, I added basic loss plotting to visualize the learning curve, along with code to save the trained model. I also conducted several debugging sessions to refine and improve various aspects of the code.

<img src="/assets/img/ssd/SSD-loss-plotting-and-model-saving.jpg" alt=""><br>

This post documents the state of the SSD model as of March 30, 2025.<br>
To see the current state of the model visit:

<a href="https://github.com/adrirubio/ml-rover/blob/main/ssd/ssd-object-detection.py">SSD object detection model</a>
