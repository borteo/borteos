class HomeController < ApplicationController

  def index
  end

  def download_pdf 
    send_data("#{RAILS_ROOT}/public/matteo_borgato_cv.pdf", 
      :filename => "matteo_borgato_cv.pdf",
      :type => "application/pdf") 
  end

end
