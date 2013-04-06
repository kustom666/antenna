class AddLiveToPlaylist < ActiveRecord::Migration
  def change
  	add_column :playlists, :live, :boolean
  end
end
