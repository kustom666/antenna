class Provider < ActiveRecord::Base
	has_many :emitters
  attr_accessible :description, :name, :rtmp_url
  validates_presence_of :name, :description, :rtmp_url
  validates_uniqueness_of :name, :rtmp_url
end
