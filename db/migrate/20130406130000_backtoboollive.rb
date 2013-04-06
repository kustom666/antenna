class Backtoboollive < ActiveRecord::Migration
  def change
  	remove_column :playlists, :live
  	add_column :playlists, :live, :boolean
  end
end
