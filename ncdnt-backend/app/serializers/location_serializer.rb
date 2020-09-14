class LocationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :lat, :lng, :report_id
  belongs_to :report  
end
