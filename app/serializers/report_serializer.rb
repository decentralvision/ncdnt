class ReportSerializer
  include FastJsonapi::ObjectSerializer
  attributes :event_desc, :suspect_desc
  has_many :comments
  has_many :images
  has_one :location
end
