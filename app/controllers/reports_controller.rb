class ReportsController < ApplicationController
    def index
        options = {
            include: [:comments, :images, :location]
          }
        reports = Report.all
        render json: ReportSerializer.new(reports, options)
    end
    def new
        Report.new(report_params)
    end
    def show
    end
    def delete
    end
    def create
        # report = Report.new(report_params[:report])
        # report.location = Location.new(report_params[:location_attributes])
        # report.save
        # comment = Comment.new(report_params[:comment_attributes])
        # comment.report_id = report.id
        # comment.save
        # report_params[:images].each do |image_data|
        #     image = Image.new(image_data)
        #     image.report_id = report.id
        #     image.save
        # end
    end
    def update
    end

    def report_params
        params.require(:report).permit!
    end
end
