class CreateEmitters < ActiveRecord::Migration
  def change
    create_table :emitters do |t|
      t.string :title
      t.timestamps
    end
  end
end
