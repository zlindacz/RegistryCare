class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Incorrect Credentials"], status: 401
    end
  end

  def destroy
    if is_logged_in?
      logout!
      render json: {}
    else
      render json: ["Cannot perform action: not logged in"], status: 404
    end
  end
end
