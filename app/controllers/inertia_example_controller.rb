class InertiaExampleController < ApplicationController
  def index
    render inertia: 'InertiaExample', props: {
      name: 'You Tube 2022
    '
      # user: current_user
    }
  end
end
