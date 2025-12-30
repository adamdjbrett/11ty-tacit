---
layout: base
title: Home
---

<section>
  <h1>{{ metadata.title }}</h1>
  <p>{{ metadata.description }}</p>
  <p>This starter ships with Tacit CSS, Eleventy 3.1.2 (ESM), and a clean date filter powered by Luxon.</p>
  <p>
    <a href="/blog/">Read the blog</a> ·
    <a href="/about/">About</a> ·
    <a href="/contact/">Contact</a>
  </p>
</section>

<section>
  <h2>Latest posts</h2>
  <ul>
    {% for post in collections.posts | slice(0,3) %}
      <li>
        <strong><a href="{{ post.url }}">{{ post.data.title }}</a></strong><br>
        <small>{{ post.date | date("LLL d, yyyy") }}</small><br>
        {{ post.data.description or post.templateContent | striptags | truncate(140) }}
      </li>
    {% else %}
      <li>No posts yet.</li>
    {% endfor %}
  </ul>
</section>
