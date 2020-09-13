class CommentsController < ApplicationController
    def index
    end
    def new
        Comment.new(comment_params)
    end
    def show
    end
    def delete
    end
    def create
    end
    def update
    end

    def comment_params
        params.require(:comment).permit!
    end
end
