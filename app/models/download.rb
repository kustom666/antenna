class Download < ActiveRecord::Base
  belongs_to :user
  attr_accessible :name, :url, :finished_at

  validates_presence_of :name, :url
  validates_format_of :url, :with => /http:\/\/.+/, :on => :create, :message => "Please provide a correct http address"
  validates_uniqueness_of :name
  
  def self.begin(id)
  	download = find(id)
  	puts "\n Running command : wget -P /home/#{download.user.nickname}/videos/ #{download.url}\n"
  	system("wget -P /home/#{download.user.nickname}/videos/ #{download.url} -O /home/#{download.user.nickname}/videos/#{download.name}")
  	download.update_attribute(:finished_at, Time.zone.now)
  end
end
