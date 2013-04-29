class AddPreviewToPlaylist < ActiveRecord::Migration
  def change
  	add_column :playlists, :preview, :string
  end
end
