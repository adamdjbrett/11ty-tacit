---
layout: base
title: Contact
permalink: /contact/
---

# Contact

Send a note using the form below. Wire this up to your preferred backend (Netlify Forms, Formspree, etc.).

<form name="contact" method="POST">
  <fieldset>
    <legend>Get in touch</legend>
    <label for="name">Name</label>
    <input id="name" name="name" type="text" required>

    <label for="email">Email</label>
    <input id="email" name="email" type="email" required>

    <label for="message">Message</label>
    <textarea id="message" name="message" rows="6" required></textarea>

    <input type="submit" value="Send">
    <input type="reset" value="Reset">
  </fieldset>
</form>
