class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    @props = { restaurants: Restaurant.all }
    render '/index'
  end
end
