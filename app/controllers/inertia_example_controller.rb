class InertiaExampleController < ApplicationController
  def index
    render inertia: 'InertiaExample', props: {
      name: 'You Tube 2022
    '
    }
  end

  def tailwind
    render inertia: 'InertiaTailwind', props: {
      name: 'You Tube 2022
    '
    }
  end
end
