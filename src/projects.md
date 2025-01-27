---
layout: page
paginate:
  collection: projects
title: Projects
icon: "/images/titlebar/icon_projects.png"
---

<div class="projects">
  <ul class="project-entries">
    {% for entry in paginator.resources %}
      <li class="project-entry">
        <img class="project-cover" src="{{ entry.data.cover | relative_url }}" />
        <div class="project-padding"></div>
        <div class="project-info">
          <a class="project-title" href="{{ entry.relative_url }}">{{ entry.data.title }}</a>
          <div class="project-blurb">{{ entry.data.blurb }}</div>
        </div>
      </li>
    {% endfor %}
  </ul>
</div>

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