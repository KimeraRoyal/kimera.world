---
layout: page
paginate:
  collection: projects
title: Projects
icon: "/images/titlebar/icon_projects.png"
feed: "/projects/feed.xml"
---

<div class="projects">
  <ul class="project-entries">
    <% paginator.each do |entry| %>
      <% unless entry.data.hidden == true %>
        <li class="project-entry">
          <a class ="project-cover" href="<%= relative_url(entry) %>"><img class="project-cover-image" src="/images/projects/<%= entry.data.id %>_cover.<%= entry.data.cover_format %>" /></a>
            <div class="project-padding"></div>
            <div class="project-info">
              <div class="project-tags">
                <a class="project-tag" href="projects/<%= entry.data.category.gsub(" ", "-") %>"><img src="/images/projects/icon_<%= entry.data.category.gsub(" ", "_") %>.png" /> <%= entry.data.category %></a>
                <% entry.data.tags.each do |tag| %>
                  <a class="project-tag" href="projects/<%= tag %>"><%= tag %></a>
                <% end %>
              </div>
              <a class="project-title" href="<%= relative_url(entry) %>"><%= entry.data.title %></a> (<%= entry.data.year %>)
              <div class="project-blurb"><%= entry.data.blurb %></div>
              <br/>
              <div class="project-links">
                <% for link in entry.data.links %>
                  <a class="project-link" href="<%= link.link %>"><%= link.text %></a>
                <% end %>
              </div>
            </div>
        </li>
      <% end %>
    <% end %>
  </ul>
</div>

<%= render "paginator-controls" %>