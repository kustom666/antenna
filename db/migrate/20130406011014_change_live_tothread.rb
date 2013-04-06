class ChangeLiveTothread < ActiveRecord::Migration
  def change
   remove_column :playlists, :live
   add_column :playlists, :live, :text
  end
end
