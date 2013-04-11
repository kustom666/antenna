class AddOrderToVideos < ActiveRecord::Migration
  def change
  	add_column :videos, :number, :integer
  end
end
