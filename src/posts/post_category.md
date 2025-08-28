---
layout: page
paginate:
  collection: posts
title: Posts in category ":prototype-term"
prototype:
    collection: posts
    term: category
icon: "/images/titlebar/icon_post.png"
---

<div class="padding"></div>

<a class="project-back" href="/posts"><< Return to Posts</a>

<ul>
  {% for entry in paginator.resources %}
    {% unless entry.data.hidden == true %}
      <li class="posts-entry" {% if entry.category %} style="list-style-image: url('/images/posts/icon_{{ entry.category | replace: " ", "_" }}.png');" {% endif %}>
        <a href="{{ entry.relative_url }}">{{ entry.data.date}} - {{ entry.data.title }}</a>
      </li>
    {% endunless %}
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