class AddemitterDepend < ActiveRecord::Migration
  def change
  	add_column :emitters, :user_id, :integer
  	add_column :emitters, :provider_id, :integer
  end
end
