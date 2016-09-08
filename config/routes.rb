Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, except: :destroy
    resource :session, only: [:new, :create, :destroy]
    resources :pledges, only: [:create]
    delete 'pledges', to: 'pledges#destroy'
  end

  root to: "static_pages#root"
end
