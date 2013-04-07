class Playlist < ActiveRecord::Base
  belongs_to :user
  has_many :videos
  attr_accessible :description, :title
  validates :user_id, :uniqueness => true
  validates_presence_of :title, :description
end
