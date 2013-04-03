class AddAbilitiesToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :admin, :boolean
  	add_column :users, :regular, :boolean
  end
end
