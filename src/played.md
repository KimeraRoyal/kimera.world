---
layout: page
paginate:
  collection: played
title: I've Been Playing
feed: "/played/feed.xml"
---

<ul>
  <% paginator.each do |entry| %>
    <% unless entry.data.hidden == true %>
      <li class="posts-entry" <% if entry.data.category %> style="list-style-image: url('/images/posts/icon_<%= entry.data.category.gsub ! " ", "_" %>.png');" <% end %>>
        <a href="<%= relative_url(entry) %>"><%= entry.data.title %>: <%= entry.data.subtitle %></a>
      </li>
    <% end %>
  <% end %>
</ul>

<%= render "paginator-controls" %>