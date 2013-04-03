class Article < ActiveRecord::Base
  belongs_to :user
  attr_accessible :content, :image, :title, :category

  has_attached_file :image
end
