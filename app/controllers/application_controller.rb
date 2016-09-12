class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  protect_from_forgery with: :exception

  def index
    @props = { restaurants: Restaurant.all }
    render '/index'
  end
end
