defmodule MusicqueueWeb.Router do
  use MusicqueueWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", MusicqueueWeb do
    pipe_through :api
  end
end
