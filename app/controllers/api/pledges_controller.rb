class Api::PledgesController < ApplicationController
  before_action :require_logged_in, except: :create

  def create
    @pledge = Pledge.new(pledge_params)
    @pledge.other_user_id = current_user.id
    if @pledge.save
      @user = @pledge.user
      render "/api/users/show"
    end
  end

  def destroy
    @pledge = Pledge.find_by(other_user_id: current_user.id, user_id: params[:pledge][:user_id])
    @pledge.destroy!
    @user = @pledge.user
    render "api/users/show"
  end

  private
  def pledge_params
    params.require(:pledge).permit(:user_id, :other_user_id)
  end
end
