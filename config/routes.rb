Rails.application.routes.draw do
  resources :users, only: [ :index, :update, :edit ]
  get 'out' => 'players#out'
  devise_for :users
  resources :players
  root 'players#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
