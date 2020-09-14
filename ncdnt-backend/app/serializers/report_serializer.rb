class ReportSerializer
  include FastJsonapi::ObjectSerializer
  attributes :event_desc, :suspect_desc, :created_at
  attribute :comments do |object|
    object.comments.as_json
  end
  attribute :images do |object|
    object.images.as_json
  end
  attribute :location do |object|
    object.location.as_json
  end
  has_many :comments
  has_many :images
  has_one :location
end
