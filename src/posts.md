---
layout: page
paginate:
  collection: posts
title: Posts
icon: "/images/titlebar/icon_post.png"
---

<div class="padding"></div>

{% assign unique_categories = array[1] %}
{% assign unique_tags = array[1] %}

{% for resource in collections.posts.resources %}
  {% unless unique_categories contains resource.category %}
    {% capture unique_categories %}{{ unique_categories }}{% if unique_categories %}, {% endif %}{{ resource.category }}{% endcapture %}
  {% endunless %}

  {% for tag in resource.tags %}
    {% unless unique_tags contains tag %}
      {% capture unique_tags %}{{ unique_tags }}{% if unique_tags %}, {% endif %}{{ tag }}{% endcapture %}
    {% endunless %}
  {% endfor %}
{% endfor %}

{% assign categories = unique_categories | split: ", " | sort %}
{% assign tags = unique_tags | split: ", " | sort_natural %}

<div class="projects-tag-list">
  {% for category in categories %}
    <a class="project-tag" href="posts/{{ category | replace: " ", "-" }}"><img src="/images/posts/icon_{{ category | replace: " ", "_" }}.png" /> {{ category }}</a>
  {% endfor %}
  {% for tag in tags %}
    <a class="project-tag" href="posts/{{ tag | replace: " ", "-" }}">{{ tag }}</a>
  {% endfor %}
</div>

<ul>
  {% for entry in paginator.resources %}
    <li class="posts-entry" {% if entry.category %} style="list-style-image: url('/images/posts/icon_{{ entry.category | replace: " ", "_" }}.png');" {% endif %}>
      <a href="{{ entry.relative_url }}">{{ entry.data.date}} - {{ entry.data.title }}</a>
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