class Emitter < ActiveRecord::Base
  belongs_to :provider
  belongs_to :user
  attr_accessible :title, :provider_id, :live_key
  validates :user_id, :uniqueness => true
end
