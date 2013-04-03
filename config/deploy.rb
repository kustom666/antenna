$:.unshift(File.expand_path('./lib', ENV['rvm_path']))

# Load RVM's capistrano plugin.    
require "rvm/capistrano"

set :rvm_ruby_string, '1.9.3'
set :rvm_type, :user 

require "bundler/capistrano"
default_run_options[:pty] = true
set :application, "Antenna"
set :repository,  "git@github.com:kustom666/antenna.git"

# set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

set :branch, "master"

set :deploy_to, "/home/web/www"
role :web, "lookingfordev.com"                          # Your HTTP server, Apache/etc
role :app, "lookingfordev.com"                          # This may be the same as your `Web` server
role :db,  "lookingfordev.com", :primary => true # This is where Rails migrations will run

set :user, "deploy"  # The server's user for deploys
# if you want to clean up old releases on each deploy uncomment this:
# after "deploy:restart", "deploy:cleanup"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
namespace :deploy do
   task :start do ; end
   task :stop do ; end
   task :restart, :roles => :app, :except => { :no_release => true } do
     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
   end
 end
after :deploy, "deploy:restart"
before 'deploy:setup', 'rvm:install_rvm'
before 'deploy:setup', 'rvm:install_ruby'
