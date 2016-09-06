class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :is_logged_in?

  def login! user
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def is_logged_in?
    !!current_user
  end

  def require_logged_in
    render json: {base: ['Invalid Credentials']}, status: 401 unless is_logged_in?
  end

  def current_user
    return nil unless session[:session_token]
    @current_user || User.find_by_session_token(session[:session_token])
  end
end
