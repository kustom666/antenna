class PlaylistsController < ApplicationController
  load_and_authorize_resource
  # GET /playlists
  # GET /playlists.json
  def index
    @playlists = Playlist.all

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
    #script = File.new("/home/deployer/playlist#{user.nickname}.sh", "w+")
    #script << "while true; do\nfor f in $@; do\n ffmpeg -re -i \"$f\" -vcodec copy -acodec copy -f flv #{provider.rtmp_url}#{emitter.live_key} \ndone \ndone"
    puts "\n\nrunning : sed \'s/?push_path/#{emitter.live_key}/g\' /home/deployer/scriptvideo.sh > /home/deployer/playlist#{user.nickname}.sh\n\n"
    system("sed \'s/?push_path/#{provider.rtmp_url}#{emitter.live_key}/g\' /home/deployer/scriptvideo.sh > /home/deployer/playlist#{user.nickname}.sh")
    playliststring = ""
    @playlist.videos.each do |video|
      playliststring << "/home/#{user.nickname}/videos/#{video.name} "
    end
    puts "\n\n#{playliststring}\n\n"

    if @playlist.live
      redirect_to @playlist, notice: "The playlist is already live!"
    else
      puts "\n\nscreen -mdS #{user.nickname} sh /home/deployer/playlist#{user.nickname}.sh #{playliststring}\n\n"
      system("screen -mdS #{user.nickname} sh /home/deployer/playlist#{user.nickname}.sh #{playliststring}")
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
end
