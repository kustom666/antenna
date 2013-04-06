class AddContactsTovideos < ActiveRecord::Migration
  def change
  	add_column :videos, :user_id, :integer
  	add_column :videos, :playlist_id, :integer
  end
end
