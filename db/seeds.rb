# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(:email => "paul.forti@gmail.com", :nickname => "Kustom",:password_digest => "$2a$10$HOsc8Km4g8.7coFl4wrUxugnzHpMrjzl2lusVa06H/gFdZLvaZYFW", :admin => true, :regular => false)