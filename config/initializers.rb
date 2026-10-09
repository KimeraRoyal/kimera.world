Bridgetown.configure do |config|
  init :"bridgetown-feed"
  init :"bridgetown-sitemap"
  init :"image_processor"
  template_engine :erb
end
