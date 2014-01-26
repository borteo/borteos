class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    
    respond_to do |format|  
      if @contact.deliver
        @comments = 'Thank you. I\'ll get back to you soon.'
      else
        @comments = 'Something went wrong, please try it again.'
      end
      format.js
    end
  end

end
