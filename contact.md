---
layout: page
title: contact
img: "/assets/img/contact.png"
---

<div class="containter">
  <div class="row text-center">
    <div class="col-1-of-2 center">
      {% include contact.html %}
    </div>
  </div>
</div>

<form class="grey-bg" action="https://formspree.io/office@shepherdtone.co.uk" method="POST">
  <div class="row">
    <div class="col-1-of-3 "><p class="text-right text-center-xs text-center-sm"> Name <span class="red">*</span> </p></div>
    <div class="col-2-of-3"><input type="text" name="name" placeholder="Your Name" required=""><br></div>
  </div>
  <div class="row">
    <div class="col-1-of-3 "><p class="text-right text-center-xs text-center-sm"> Email <span class="red">*</span> </p></div>
    <div class="col-2-of-3"><input type="email" name="email" placeholder="you@example.com" required=""><br></div>
  </div>
  <div class="row">
    <div class="col-1-of-3 "><p class="text-right text-center-xs text-center-sm"> Phone <span class="red">*</span> </p></div>
    <div class="col-2-of-3"><input type="phone" name="phone" placeholder="+44 (0)0000 000 000" required=""><br></div>
  </div>
  <div class="row">
    <div class="col-1-of-3"><p class="text-right text-center-xs text-center-sm"> Message </p></div>
    <div class="col-2-of-3"><textarea name="message" rows="5"></textarea></div>
  </div>


  <div class="row">
    <input type="submit" value="Send Message" class="button red-bg white medium center">
  </div>
</form>
