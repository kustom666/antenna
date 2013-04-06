class Playlist < ActiveRecord::Base
  belongs_to :user
  has_many :videos
  attr_accessible :description, :title
end