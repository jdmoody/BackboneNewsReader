NewReader::Application.routes.draw do
  resources :feeds, only: [:index, :show, :create] do
    resources :entries, only: [:index]
  end

  resources :entries, only: [:show]

  root to: "feeds#index"
end
