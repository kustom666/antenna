class Provider < ActiveRecord::Base
	has_many :emitters
  attr_accessible :description, :name, :rtmp_url
end
