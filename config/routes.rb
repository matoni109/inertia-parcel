Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Almost every application defines a route for the root path ("/") at the top of this file.
  # root "articles#index"  inertia 'about' => 'AboutComponent'
  root to: 'inertia-example', to: 'inertia_example#index'
  get 'inertia-example', to: 'inertia_example#tailwind', as: 'tailwind'
end
