class AddFinishedAtToDownloads < ActiveRecord::Migration
  def change
  	add_column :downloads, :finished_at, :timestamp
  end
end
