class HomeController < ApplicationController

  def index
  end

  def download_pdf 
    send_data("#{RAILS_ROOT}/public/matteoborgato_cv.pdf", 
      :filename => "matteoborgato_cv.pdf",
      :type => "application/pdf") 
  end

end
