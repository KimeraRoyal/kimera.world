---
layout: page
paginate:
  collection: posts
title: Posts with tag ":prototype-term"
prototype:
    collection: posts
    term: tag
icon: "/images/titlebar/icon_post.png"
---

<div class="padding"></div>

<a class="project-back" href="/posts"><< Return to Posts</a>

<ul>
  <% paginator.each do |entry| %>
    <% unless entry.data.hidden == true %>
      <li class="posts-entry" <% if entry.data.category %> style="list-style-image: url('/images/posts/icon_<%= entry.data.category.gsub(" ", "_") %>.png');" <% end %>>
        <a href="<%= relative_url(entry) %>"><%= entry.data.date.strftime("%d/%m/%Y") %> - <%= entry.data.title %></a>
      </li>
    <% end %>
  <% end %>
</ul>

<%= render "paginator-controls" %>