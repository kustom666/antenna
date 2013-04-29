class PlaylistsController < ApplicationController
  load_and_authorize_resource
  # GET /playlists
  # GET /playlists.json
  def index
    @playlists = Playlist.where(:user_id => current_user)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @playlists }
    end
  end

  # GET /playlists/1
  # GET /playlists/1.json
  def show
    @playlist = Playlist.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @playlist }
    end
  end

  # GET /playlists/new
  # GET /playlists/new.json
  def new
    @playlist = Playlist.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @playlist }
    end
  end

  # GET /playlists/1/edit
  def edit
    @playlist = Playlist.find(params[:id])
  end

  # POST /playlists
  # POST /playlists.json
  def create
    @playlist = Playlist.new(params[:playlist])
    @playlist.user = current_user
    respond_to do |format|
      if @playlist.save
        format.html { redirect_to @playlist, notice: 'Playlist was successfully created.' }
        format.json { render json: @playlist, status: :created, location: @playlist }
      else
        format.html { render action: "new" }
        format.json { render json: @playlist.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /playlists/1
  # PUT /playlists/1.json
  def update
    @playlist = Playlist.find(params[:id])

    respond_to do |format|
      if @playlist.update_attributes(params[:playlist])
        format.html { redirect_to @playlist, notice: 'Playlist was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @playlist.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /playlists/1
  # DELETE /playlists/1.json
  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy

    respond_to do |format|
      format.html { redirect_to playlists_url }
      format.json { head :no_content }
    end
  end

  def start_live
    @playlist = Playlist.find(params[:id])
    user = @playlist.user
    emitter = user.emitter
    provider = emitter.provider
    list = ""
    @playlist.videos.each do |video|
      list << "file '/home/#{user.nickname}/videos/#{video.name}'\n"
    end
    File.open("/home/deployer/videolist#{user.nickname}", 'w+') {|f| f.write(list) }
    File.open("/home/deployer/playlist#{user.nickname}.sh", 'w+') {|f| f.write("while true; do\nffmpeg -re -f concat -i /home/deployer/videolist#{user.nickname} -b 2M -bt 2M -c copy -f flv #{provider.rtmp_url}#{emitter.live_key}\ndone") }

    if @playlist.live
      redirect_to @playlist, notice: "The playlist is already live!"
    else
      puts "\n\nscreen -mdS #{user.nickname} sh /home/deployer/playlist#{user.nickname}.sh\n\n"
      system("sudo chmod -R 777 /home/#{user.nickname}/videos")
      system("screen -mdS #{user.nickname} sh /home/deployer/playlist#{user.nickname}.sh")
      @playlist.live = true
      @playlist.save
      redirect_to @playlist, notice: "The playlist is live!"
    end
  end

  def stop_live
    playlist = Playlist.find(params[:id])
    user = playlist.user
    system("screen -S #{user.nickname} -X quit") 
    playlist.live = false
    playlist.save
    redirect_to playlist, notice: "The playlist has been stopped!"
  end

  def force_stop
    playlist = playlist.find(params[:id])
    playlist.live = false
    playlist.save
    redirect_to playlist, notice: "The playlist has been forced as offline"
  end

  def generate_preview
    playlist = Playlist.find(params[:id])
    user = playlist.user 
    list = ""
    playlist.videos.each do |video|
      list << "file '/home/#{user.nickname}/videos/#{video.name}'\n"
    end
    File.open("/home/deployer/videolist#{user.nickname}", 'w+') {|f| f.write(list) }
    system("rm #{Rails.public_path}/#{user.nickname}-#{playlist.title}-preview.flv")
    system("ffmpeg -f concat -i /home/deployer/videolist#{user.nickname} -c copy -f flv #{Rails.public_path}/#{user.nickname}-#{playlist.title}-preview.flv")
    playlist.preview = "/#{user.nickname}-#{playlist.title}-preview.flv"
    playlist.save
    redirect_to playlist, notice: "The playlist preview has been generated"
  end
end
