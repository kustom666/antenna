class AddPayingToUser < ActiveRecord::Migration
  def change
  	add_column :users, :paying, :boolean
  end
end
