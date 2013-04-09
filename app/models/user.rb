class User < ActiveRecord::Base
  attr_accessible :email, :nickname, :password_digest, :password, :password_confirmation, :admin, :regular, :emitter, :paying
  attr_accessor :desired_ftp_pass
  has_secure_password
  validates_presence_of :email, :nickname
  validates_uniqueness_of :email, :nickname
  validates_format_of :nickname, 
                      :with => /^[a-zA-Z\d\s]*$/, :on => :create,
                      :message => "your nickname must not contain any special characters"
  has_one :emitter
  has_one :playlist
  has_many :downloads

    validates_format_of :email,
                      :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/, :on => :create,
                      :message => 'Please input a correct email'


end
