class CreateImages < ActiveRecord::Migration[6.0]
  def change
    create_table :images do |t|
      t.string :image_link
      t.string :image_checksum
      t.integer :report_id
      t.timestamps
    end
  end
end
