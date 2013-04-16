class EmittersController < ApplicationController
  load_and_authorize_resource
  skip_authorize_resource :only => [:index]
  # GET /emitters
  # GET /emitters.json
  def index
    if current_user
      if current_user.emitter
        redirect_to emitter_path(current_user.emitter)
      else
        redirect_to new_emitter_path
      end
    else
      redirect_to "/login"
    end
  end

  # GET /emitters/1
  # GET /emitters/1.json
  def show
    @emitter = Emitter.find(params[:id])
    @playlists = Playlist.where(:user_id => current_user)
    @videos = Video.where(:user_id => current_user)
    @downloads = Download.where(:user_id => current_user)
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @emitter }
    end
  end

  # GET /emitters/new
  # GET /emitters/new.json
  def new
    @emitter = Emitter.new
    @twitch_login_url = oauth_client.auth_code.authorize_url(redirect_uri: "https://176.31.181.107/oauth")+"&scope=channel_read"
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @emitter }
    end
  end

  # GET /emitters/1/edit
  def edit
    @emitter = Emitter.find(params[:id])
  end

  # GET /etmitters/1/playlist
  def playlist
    @emitter = Emitter.find(params[:id])
    @files = Dir.new("/home/#{@emitter.user}/videos")
  end

  def oauth
    access_token = params[:code]
    scope = params[:scope]
    access = oauth_client.auth_code.get_token(access_token, redirect_uri: "https://176.31.181.107/oauth")
    resp = "https://api.twitch.tv/kraken/channel?oauth_token=#{access.token}"
    output = open(resp).read
    parsed_output = JSON.parse(output)
    @emitter = Emitter.new
    @emitter.user = current_user 
    @emitter.provider_id = 1
    @emitter.live_key = parsed_output["stream_key"]
    @emitter.title = parsed_output["url"]
    respond_to do |format|
      if @emitter.save
        format.html { redirect_to @emitter, notice: 'Emitter was successfully created.' }
        format.json { render json: @emitter, status: :created, location: @emitter }
      else
        format.html { redirect_to new_emitter_path, notice: "An error prevented your emitter from being created" }
        format.json { render json: @emitter.errors, status: :unprocessable_entity }
      end
    end

  end

  # POST /emitters
  # POST /emitters.json
  def create
    @emitter = Emitter.new(params[:emitter])
    @emitter.user = current_user
    respond_to do |format|
      if @emitter.save
        format.html { redirect_to @emitter, notice: 'Emitter was successfully created.' }
        format.json { render json: @emitter, status: :created, location: @emitter }
      else
        format.html { render action: "new" }
        format.json { render json: @emitter.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /emitters/1
  # PUT /emitters/1.json
  def update
    @emitter = Emitter.find(params[:id])

    respond_to do |format|
      if @emitter.update_attributes(params[:emitter])
        format.html { redirect_to @emitter, notice: 'Emitter was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @emitter.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /emitters/1
  # DELETE /emitters/1.json
  def destroy
    @emitter = Emitter.find(params[:id])
    @emitter.destroy

    respond_to do |format|
      format.html { redirect_to emitters_url }
      format.json { head :no_content }
    end
  end
end
