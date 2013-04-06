class Addlivekeytoemitter < ActiveRecord::Migration
  def change
  	add_column :emitters, :live_key, :string
  end
end
