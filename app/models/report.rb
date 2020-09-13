class Report < ApplicationRecord
    has_many :comments
    has_many :images
    has_one :location
    accepts_nested_attributes_for :comments
    accepts_nested_attributes_for :images 
    accepts_nested_attributes_for :location
end
