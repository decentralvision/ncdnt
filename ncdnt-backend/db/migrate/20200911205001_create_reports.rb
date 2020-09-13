class CreateReports < ActiveRecord::Migration[6.0]
  def change
    create_table :reports do |t|
      t.string :suspect_desc
      t.string :event_desc
      t.timestamps
    end
  end
end
