class Api::UsersController < ApplicationController
  def index
  end

  def show
  end

  def new
  end

  def create
    @user = User.new(user_params)
    # cloud_name = ENV['CLOUD_NAME']
    # upload_preset = Figaro.env.UPLOAD_PRESET
    # puts "API KEYS: #{cloud_name} #{upload_preset}"
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
  end

  private
  def user_params
    params.require(:user).permit(:username, :organization_name, :email, :address1, :address2, :city, :state, :zipcode, :photo, :description, :password)
  end
end
