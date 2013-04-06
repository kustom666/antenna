class Video < ActiveRecord::Base
	belongs_to :user
	belongs_to :playlist
  attr_accessible :name
end
