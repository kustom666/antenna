class CreateIndexPages < ActiveRecord::Migration
  def change
    create_table :index_pages do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
