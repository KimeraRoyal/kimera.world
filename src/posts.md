---
layout: page
paginate:
  collection: posts
title: Posts
icon: "/images/titlebar/icon_post.png"
feed: "/posts/feed.xml"
---

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