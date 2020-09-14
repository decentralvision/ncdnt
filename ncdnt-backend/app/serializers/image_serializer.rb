class ImageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :image_link, :image_checksum, :report_id
  belongs_to :report
end
