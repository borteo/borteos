class HomeController < ApplicationController

  before_filter do
    headers['Cache-Control'] = 'public; max-age=86400'
  end

  def index
  	@contact = Contact.new
  end

end
