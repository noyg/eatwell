class CreateRestaurants < ActiveRecord::Migration[5.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :logo
      t.text :address
      t.decimal :rating, :scale => 2, :precision => 10
      t.boolean :tenbis

      t.timestamps
    end
  end
end
