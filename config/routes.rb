Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index', as: 'app_index'

  namespace :api, format: :json do
    namespace :v1 do
      resources :restaurants, only: [:index, :create, :destroy, :update]
    end
  end
end
