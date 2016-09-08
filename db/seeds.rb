# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
20.times do |i|
  Restaurant.create(name: "Restaurant #{i}", address: "Dobnov #{i}, Tel Aviv", rating: rand(0.0...5.0), tenbis: [true, false].sample)
end