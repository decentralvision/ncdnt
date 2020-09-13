Rails.application.routes.draw do
  resources :locations
  resources :comments
  resources :images
  resources :reports

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
