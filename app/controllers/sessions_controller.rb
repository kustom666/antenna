class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to users_path, notice: "Logged in!"
    else
      flash.now[:notice] = "Email or Password is incorrect!"
      render "new"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to users_path, notice: "Logged out!"
  end
end
