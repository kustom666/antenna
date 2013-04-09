class Download < ActiveRecord::Base
  belongs_to :user
  attr_accessible :name, :url, :finished_at

  validates_presence_of :name, :url
  validates_format_of :url, :with => /http:\/\/.+/, :on => :create, :message => "Please provide a correct http address"

  def self.begin(id)
  	download = find(id)
  	puts "\n Running command : wget -P /home/#{download.user.nickname}/videos/ #{download.url}\n"
  	system("wget -P /home/#{download.user.nickname}/videos/ #{download.url}")
  	download.update_attribute(:finished_at, Time.zone.now)
  end
end
