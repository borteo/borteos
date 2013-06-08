module ApplicationHelper
  
  def tweet
    Twitter.user_timeline("borteo").first.text
  end
  
end
