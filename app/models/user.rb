class User < ActiveRecord::Base
  attr_accessible :email, :nickname, :password_digest, :password, :password_confirmation, :admin, :regular
  has_secure_password
  validates_presence_of :email


end
