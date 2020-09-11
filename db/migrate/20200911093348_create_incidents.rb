class CreateIncidents < ActiveRecord::Migration[6.0]
  def change
    create_table :incidents do |t|
      t.string :s_desc
      t.string :e_desc

      t.timestamps
    end
  end
end
