class ImagesController < ApplicationController
    def index
    end
    def new
        Image.new(images_params)
    end
    def show
    end
    def delete
    end
    def create
    end
    def update
    end

    def image_params
        params.require(:image).permit!
    end
end
