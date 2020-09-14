class ReportSerializer
  include FastJsonapi::ObjectSerializer
  attributes :event_desc, :suspect_desc, :created_at
  has_many :comments
  has_many :images
  has_one :location
end
