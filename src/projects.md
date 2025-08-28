---
layout: page
paginate:
  collection: projects
title: Projects
icon: "/images/titlebar/icon_projects.png"
---

<div class="padding"></div>

{% assign unique_categories = array[1] %}
{% assign unique_tags = array[1] %}

{% for resource in collections.projects.resources %}
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
    <a class="project-tag" href="projects/{{ category | replace: " ", "-" }}"><img src="/images/projects/icon_{{ category | replace: " ", "_" }}.png" /> {{ category }}</a>
  {% endfor %}
  {% for tag in tags %}
    <a class="project-tag" href="projects/{{ tag }}">{{ tag }}</a>
  {% endfor %}
</div>

<div class="project-divider"></div>

<div class="projects">
  <ul class="project-entries">
    {% for entry in paginator.resources %}
      <li class="project-entry">
          <a class ="project-cover" href="{{ entry.relative_url }}"><img class="project-cover-image" src="/images/projects/{{ entry.data.id }}_cover.png" /></a>
          <div class="project-padding"></div>
          <div class="project-info">
            <div class="project-tags">
              <a class="project-tag" href="projects/{{ entry.data.category | replace: " ", "-" }}"><img src="/images/projects/icon_{{ entry.data.category | replace: " ", "_" }}.png" /> {{ entry.data.category }}</a>
              {% for tag in entry.data.tags %}
                <a class="project-tag" href="projects/{{ tag }}">{{ tag }}</a>
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