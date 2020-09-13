class LocationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :lat, :lng
  belongs_to :report  
end
