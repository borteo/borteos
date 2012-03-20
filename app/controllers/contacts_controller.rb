class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    respond_to do |format|
      if @contact.save
        format.json { render json: @contact, status: :created, location: @contact }
      else
        format.json { render json: @contact.errors }
      end
    end
  end

end
