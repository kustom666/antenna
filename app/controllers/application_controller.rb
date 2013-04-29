class ApplicationController < ActionController::Base
  protect_from_forgery

  include SimpleCaptcha::ControllerHelpers

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
    unless Rails.env.production?
      @oauth_client = OAuth2::Client.new("q5hxdxcnxll8ia57y3502psde0ry8jo", "69oufy6bb4i45qorgyyalexz9y3efsh", site: "https://api.twitch.tv/kraken/", authorize_url: "oauth2/authorize", token_url: "oauth2/token") 
    else  
      @oauth_client = OAuth2::Client.new("89zsmep91o84s4c1uqux4vlq8ks7ch9", "kcv7ohn2t9z4ls8by9m1c2lxskekble", site: "https://api.twitch.tv/kraken/", authorize_url: "oauth2/authorize", token_url: "oauth2/token") 
    end
  end
  helper_method :oauth_client

  public
  def oauth
    access_token = params[:code]
    scope = params[:scope]
    if Rails.env.production?
      access = oauth_client.auth_code.get_token(access_token, redirect_uri: "https://bytechain.com/oauth")
    else
      access = oauth_client.auth_code.get_token(access_token, redirect_uri: "http://127.0.0.1:3000/oauth")
    end

    resp = "https://api.twitch.tv/kraken/channel?oauth_token=#{access.token}"
    output = open(resp).read
    parsed_output = JSON.parse(output)

    unless current_user.emitter
      @emitter = Emitter.new
      @emitter.user = current_user
      @emitter.provider_id = 1
      @emitter.live_key = parsed_output["stream_key"]
      @emitter.title = parsed_output["url"]
      @emitter.save
    end

    prep_user = User.find(current_user)
    prep_user.twitch_token = access.token
    prep_user.commercial_url = parsed_output["_links"]["commercial"]
    prep_user.save

    respond_to do |format|
        format.html { redirect_to @emitter, notice: 'Emitter was successfully created.' }
        format.json { render json: @emitter, status: :created, location: @emitter }
    end
  end

end
