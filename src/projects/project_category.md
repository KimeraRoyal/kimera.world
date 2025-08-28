---
layout: page
paginate:
  collection: projects
title: Projects in category ":prototype-term"
prototype:
    collection: projects
    term: category
icon: "/images/titlebar/icon_projects.png"
---

<div class="padding"></div>

<a class="project-back" href="/projects"><< Return to Projects</a>

<div class="projects">
  <ul class="project-entries">
    {% for entry in paginator.resources %}
      <li class="project-entry">
          <a class ="project-cover" href="{{ entry.relative_url }}"><img class="project-cover-image" src="/images/projects/{{ entry.data.id }}_cover.png" /></a>
          <div class="project-padding"></div>
          <div class="project-info">
            <div class="project-tags">
              <a class="project-tag" href="{{ entry.data.category | replace: " ", "-" }}"><img src="/images/projects/icon_{{ entry.data.category | replace: " ", "_" }}.png" /> {{ entry.data.category }}</a>
              {% for tag in entry.data.tags %}
                <a href="{{ tag }}"><div class="project-tag">{{ tag }}</div></a>
              {% endfor %}
            </div>
            <a class="project-title" href="{{ entry.relative_url }}">{{ entry.data.title }}</a> ({{ entry.data.year }})
            <div class="project-blurb">{{ entry.data.blurb }}</div>
            <br/>
            <div class="project-links">
              {% for link in entry.data.links %}
                <a class="project-link" href="{{link.link}}">{{ link.text }}</a>
              {% endfor %}
            </div>
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