Portfolio::Application.routes.draw do

  match '/download_pdf',    :to => 'home#download_pdf'
  root :to => "home#index"

end
