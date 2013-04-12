class ApplicationController < ActionController::Base
  protect_from_forgery

  rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_url, :alert => exception.message
  end
  private
  def current_user
  	  @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  helper_method :current_user
  #The global md renderer
  def mdrender
  	@markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, :autolink => true, :space_after_headers => true)
  end
  helper_method :mdrender

  def oauth_client
    @oauth_client = OAuth2::Client.new("89zsmep91o84s4c1uqux4vlq8ks7ch9", "kcv7ohn2t9z4ls8by9m1c2lxskekble", site: "https://api.twitch.tv/kraken/", authorize_url: "oauth2/authorize", token_url: "oauth2/token") 
  end
  helper_method :oauth_client
end
