---
layout: default
title: Contact Me
permalink: /contact/
---

<style>
  /* Container for layout */
  #contact-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: 50px auto;
    padding: 40px;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  /* Left Section (Text) */
  .contact-text {
    width: 45%;
    text-align: left;
  }

  .contact-text h1 {
    font-size: 2.2em;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
  }

  .contact-text p {
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 15px;
    color: #555;
  }

  .contact-text a {
    color: #007bff;
    font-weight: bold;
    text-decoration: none;
  }

  .contact-text a:hover {
    text-decoration: underline;
  }

  /* Right Section (Form) */
  .contact-form {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: bold;
    margin-top: 10px;
    color: #333;
    display: block;
  }

  input, textarea {
    width: 100%;
    padding: 12px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
    background: #fff;
    transition: all 0.3s ease-in-out;
  }

  input:focus, textarea:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }

  textarea {
    resize: vertical;
    height: 150px;
  }

  /* Button Styling */
  .button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 14px 25px;
    font-size: 1.1em;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 15px;
    width: 100%;
  }

  .button:hover {
    background-color: #0056b3;
  }

  /* Responsive Design */
  @media (max-width: 800px) {
    #contact-container {
      flex-direction: column;
      text-align: center;
      padding: 30px;
    }

    .contact-text, .contact-form {
      width: 100%;
    }

    .contact-text {
      margin-bottom: 20px;
    }
  }
</style>

<div id="contact-container">
  <!-- Left Side - Contact Info -->
  <div class="contact-text">
    <h1>Contact Me</h1>
    <p>Hey there! 👋 I'd love to hear from you! Whether you have a question, a collaboration idea, or just want to say hi, feel free to reach out.</p>
    <p>You can email me directly at <a href="mailto:your@email.com">adrian.rubio.punal@gmail.com</a> or use the form on the right. I do my best to respond within 48 hours!</p>
  </div>

  <!-- Right Side - Contact Form -->
  <div class="contact-form">
    <form action="https://formspree.io/your@email.com" method="POST">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email Address</label>
      <input type="email" id="email" name="_replyto" required>

      <label for="message">Message</label>
      <textarea name="message" id="message" required></textarea>

      <input type="submit" value="Send" class="button">
    </form>
  </div>
</div>

