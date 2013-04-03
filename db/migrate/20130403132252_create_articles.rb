class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.text :content
      t.string :category
      t.references :user
      t.attachment :image

      t.timestamps
    end
    add_index :articles, :user_id
  end
end
