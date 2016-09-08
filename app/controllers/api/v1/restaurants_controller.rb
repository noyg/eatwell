class Api::V1::RestaurantsController < Api::V1::BaseController
  def index
    respond_with Restaurant.all
  end

  def create
    respond_with :api, :v1, Restaurant.create(restaurant_params)
  end

  def destroy
    respond_with Restaurant.destroy(params[:id])
  end

  def update
    rest = Restaurant.find(params[:id])
    rest.update_attributes(restaurant_params)
    respond_with rest, json: rest
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:id, :name, :address, :logo, :tenbis)
  end
end