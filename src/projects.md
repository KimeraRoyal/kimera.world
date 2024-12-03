---
layout: page
paginate:
  collection: projects
title: Projects
icon: "/images/titlebar/icon_projects.png"
---

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