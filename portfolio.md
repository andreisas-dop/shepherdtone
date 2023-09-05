---
layout: page
title: Portfolio
img: "/assets/img/Film-Production.jpg"
---

<div class="container">
  <div class="row">
    <p class="text-center">&nbsp;</p>

    <p class="text-center">
The projects that we work on are a point of pride for us. We’ve been fortunate enough to have had the opportunity to work in a variety of formats enabling us to develop our can-do attitude whatever the task may be.
    </p>
  </div>
</div>

<div class="container portfolio">
{% assign collections =  site.collections | sort:"order" %}
{% for collection in collections %}
  {% assign collection_name = collection.label | default: include.collection_name | default: nil %}
  {% assign current = site[collection_name] | reverse %}
  {% assign size_curr = current | size %}

  {% if size_curr > 0 %}
  <div class="row">
   <h2>{{ collection.title }}</h2>
   <p class="text-center">{{ collection.text }}</p>
  </div>

  <div class="video-gallery">
    {% for item in current %}
      {% assign mod = forloop.index0 | modulo : 3 %}
      {% if mod == 0 %}
    <div class="row">
      {% endif %}
      <a class="col-1-of-3">
        <div class="image">
          <img src="{{ item.thumb }}">
        </div>
        <h2 class="text-center">{{ item.title }}</h2>
      {% if item.dir %}
        <h4 class="text-center">Dir. {{ item.dir }}</h4>
      {% else %}
        <h4 class="text-center">&nbsp;</h4>
      {% endif %}

      {% include video.html %}

      </a>
      {% if mod == 2 %}
    </div>
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}
</div>


<div class="container">
  <div class="row">
    <p class="text-center">
We believe we can add value to any project and by this point, we hope that you agree. Please get in touch with any enquiries and let’s make something together.
    </p>
  </div>
</div>

{% include button-contact.html %}

