class Ability
  include CanCan::Ability

  def initialize(user)
    # Define abilities for the passed in user here. For example:
    #
    user ||= User.new # guest user (not logged in)
    if user.admin?
        can :manage, :all
    elsif user.paying?
        cannot :read, :users
        can :read, :articles
        can :read, :providers
        can :read, Emitter, :user_id => user.id
        can :manage, Emitter, :user_id=> user.id
        can :manage, Download, :user_id=> user.id
        can :read, Video, :user_id => user.id
        can :manage, Video, :user_id => user.id
        can :manage, User, :id => user.id
        can :manage, Playlist, :user_id => user.id
        cannot :index, Emitter
        can :read, Emitter
        
    elsif user.regular?
        cannot :read, :users
        can :read, :articles
        can :read, :providers
        can :manage, User, :id => user.id
        cannot :index, Emitter
    end
    #
    # The first argument to `can` is the action you are giving the user 
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on. 
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, :published => true
    #
    # See the wiki for details:
    # https://github.com/ryanb/cancan/wiki/Defining-Abilities
  end
end
