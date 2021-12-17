Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "welcome#index"

  get "/task_one", to: "welcome#task_one", as: "task_one"
  get "/task_two", to: "welcome#task_two", as: "task_two"

end
