module ApplicationHelper
  
  def facebook_like
    content_tag :iframe, nil, :src => "http://www.facebook.com/plugins/like.php?href=#{CGI::escape(request.url)}&layout=standard&show_faces=true&width=500&action=like&font=arial&colorscheme=light&height=30", :scrolling => 'no', :frameborder => '0', :allowtransparency => true, :id => :facebook_like
  end
  
  def tweet
    Twitter.user_timeline("borteo").first.text
  end
  
end
