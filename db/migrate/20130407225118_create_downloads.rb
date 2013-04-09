class CreateDownloads < ActiveRecord::Migration
  def change
    create_table :downloads do |t|
      t.string :url
      t.string :name
      t.references :user

      t.timestamps
    end
    add_index :downloads, :user_id
  end
end
