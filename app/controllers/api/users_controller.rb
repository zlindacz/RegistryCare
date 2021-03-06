class Api::UsersController < ApplicationController
  before_action :require_logged_in, except: :create

  def index
    if params[:query]
      @users = User.search(params[:query])
    else
      @users = User.all
    end
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :organization_name, :email, :address1, :address2, :city, :state, :zipcode, :photo, :description, :password, :category_ids, item_ids: [])
  end
end
