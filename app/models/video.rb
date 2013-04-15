class Video < ActiveRecord::Base
	belongs_to :user
	belongs_to :playlist
  attr_accessible :name, :playlist_id, :number
  validates_presence_of :name, :playlist_id, :number
  validates_uniqueness_of :number, :scope => :playlist_id
end
