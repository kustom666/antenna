class AddCommercialUrlToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :commercial_url, :string
  end
end
