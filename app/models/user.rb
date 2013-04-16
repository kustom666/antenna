class User < ActiveRecord::Base
  attr_accessible :email, :nickname, :password_digest, :password, :password_confirmation, :admin, :regular, :emitter, :paying
  attr_accessor :desired_ftp_pass
  has_secure_password
  apply_simple_captcha :message => "The code you inputed is wrong"
  validates_presence_of :email, :nickname
  validates_uniqueness_of :email, :nickname
  validates_format_of :nickname, 
                      :with => /^[a-zA-Z\d\s]*$/, :on => :create,
                      :message => "your nickname must not contain any special characters"
  has_one :emitter
  has_many :playlists
  has_many :downloads

    validates_format_of :email,
                      :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/, :on => :create,
                      :message => 'Please input a correct email'


  def self.create_on_disk(username, userpass) 
    userpass = userpass.crypt("ku")
    system "sudo mkdir /home/#{username}/" 
    system "sudo chmod 777 /home/#{username}"
    system "sudo mkdir /home/#{username}/videos"
    system "sudo chmod 777 /home/#{username}/videos"
    system "sudo useradd #{username} -p #{userpass} -d /home/#{username}/videos/ -G livepushers -s /bin/MySecureShell"
    system "sudo chown -R #{username} /home/#{username}"
    system "sudo chgrp -R livepushers /home/#{username}"
  end

  def self.delete_on_disk(username)
    system "sudo userdel #{username}"
    #system "sudo rm -rf /home/#{username}"
  end

  def self.update_ftp_password(username, new_pass)
    new_pass = new_pass.crypt("ku")
    system "sudo usermod -p #{new_pass} #{username}"
  end

end
