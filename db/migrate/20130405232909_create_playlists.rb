class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.string :title
      t.text :description
      t.references :user

      t.timestamps
    end
    add_index :playlists, :user_id
  end
end
