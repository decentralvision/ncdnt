require 'pry'
class ReportsController < ApplicationController
    def index
        reports = Report.all
        render json: ReportSerializer.new(reports)
    end
    def new
        Report.new(report_params)
    end
    def show
    end
    def delete
    end
    def create
        report = Report.create!(report_params)
        render json: ReportSerializer.new(report)
    end
    def update
    end

    def report_params
        params.require(:report).permit(:event_desc, :suspect_desc, images_attributes: [:image_link, :image_checksum], location_attributes:[:lat,:lng])
    end
end
