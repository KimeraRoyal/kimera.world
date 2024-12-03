---
layout: page
paginate:
  collection: resources
title: Resources
icon: "/images/titlebar/icon_resources.png"
---

Right now, this is just a rough collection of resources from other places on the web. I struggle with remembering things, especially random websites and resources I've encountered, so this is mostly an accessibility aid for me. I'd like to organise it more, make it look nicer, and write a bit about everything eventually.

<ul>
  {% for entry in paginator.resources %}
    <li>
      <a href="{{ entry.relative_url }}">{{ entry.data.title }}</a>
    </li>
  {% endfor %}
</ul>

<div class="pagination">
  <div class="pagination-number">
    Page {{ paginator.page }} of {{ paginator.total_pages }}
  </div>

  {% if paginator.total_pages > 1 %}
    <ul class="pagination-controls">
      {% if paginator.previous_page %}
        <li>
          <a href="{{ paginator.previous_page_path }}">Previous</a>
        </li>
      {% endif %}
      {% if paginator.next_page %}
        <li>
          <a href="{{ paginator.next_page_path }}">Next</a>
        </li>
      {% endif %}
    </ul>
  {% endif %}
</div>