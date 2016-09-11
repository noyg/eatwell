class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    @init_props = {restaurants: []}
    render '/index'
  end
end
