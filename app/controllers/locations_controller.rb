class LocationsController < ApplicationController
    def index
    end
    def new
        Location.new(location_params)
    end
    def show
    end
    def delete
    end
    def create
    end
    def update
    end

    def location_params
        params.require(:location).permit!
    end
end
