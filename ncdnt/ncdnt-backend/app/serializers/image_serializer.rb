class ImageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :image_link, :image_checksum
  belongs_to :report
end
