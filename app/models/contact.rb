class Contact
  extend ActiveModel::Naming
  include ActiveModel::Conversion
  include ActiveModel::Validations
  include ActionView::Helpers::TextHelper
  
  attr_accessor :name, :email, :message, :nickname
  
  validates :name, 
            :presence => true
  
  validates :email,
            :format => { :with => /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/ }
  
  validates :message,
            :length => { :minimum => 1, :maximum => 1000 }

  validates :nickname, 
            :format => { :with => /^$/ }
  
  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end
  
  def deliver
    return false unless valid?

    key = ENV['MAILGUN_API_KEY']
    url = "https://api:#{key}@api.mailgun.net/v2/app16291732.mailgun.org"

    RestClient.post url+"/messages",
      :from => email,
      :to => "borgato.matteo@gmail.com",
      :subject => "PORTFOLIO - " +name+ " mi ha scritto",
      :text => message
    
  end
      
  def persisted?
    false
  end
end