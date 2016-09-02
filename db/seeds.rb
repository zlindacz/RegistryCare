# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Seeds for categories table
['AIDS', 'Animals', 'Arts & Culture', 'Breast Cancer',
 'Bullying', 'Cancer', 'Childhood Obesity', 'Children & Youth',
 'Civil Rights', 'Climate Change', 'Crime & Law', 'Cyber Security',
 'Disabilities', 'Disaster Aid', 'Domestic Violence', 'Education',
 'Environment', 'Food', 'Gun Control', 'Homeless & Housing',
 'Human Trafficking', 'Immigration', 'LGBTQ', 'Literacy', 'Mental Health',
 'Refugees', 'Religion', 'Reproductive Rights', 'Seniors', 'Veterans',
 'Voting Rights', 'Water', 'Women'].each { |category| Category.create!(name: category) }

# Seeds for items table
Item.create!([{item_type: 'CLOTHES', name: 'Tops'},
              {item_type: 'CLOTHES', name: 'Bottoms'},
              {item_type: 'CLOTHES', name: 'Dresses'},
              {item_type: 'CLOTHES', name: 'Outerwear'},
              {item_type: 'CLOTHES', name: 'Sleepwear'},
              {item_type: 'CLOTHES', name: 'Swim'},
              {item_type: 'CLOTHES', name: 'Shoes'},
              {item_type: 'CLOTHES', name: 'Accessories'},

              {item_type: 'HOUSEHOLD', name: 'Electrical'},
              {item_type: 'HOUSEHOLD', name: 'Furniture'},
              {item_type: 'HOUSEHOLD', name: 'Computer'},
              {item_type: 'HOUSEHOLD', name: 'Kitchen'},
              {item_type: 'HOUSEHOLD', name: 'Vehicle'},
              {item_type: 'HOUSEHOLD', name: 'Toys'},
              {item_type: 'HOUSEHOLD', name: 'Books'},
              {item_type: 'HOUSEHOLD', name: 'Miscellaneous'},

              {item_type: 'VOLUNTEER', name: 'No Preferences'},
              {item_type: 'HOUSEHOLD', name: 'Events'},
              {item_type: 'HOUSEHOLD', name: 'Mentor'},
              {item_type: 'HOUSEHOLD', name: 'Tutor'}])


User.create!(organization_name: "The Tree House",
             username: "treehouse",
             password: "password",
             email: "contact@treehouse.org",
             address1: "123 Same St",
             address2: "Suite 34",
             city: "San Antonio",
             state: "Texas",
             zipcode: "78225",
             photo: "assets/img",
             description: "after school program for children in k-9"
             )


User.create!(organization_name: "Creativity Explored",
            username: "creativity_explored",
            password: "hunter12",
            email: "contact@createnow.org",
            address1: "3245 16th Street",
            address2: "",
            city: "San Francisco",
            state: "California",
            zipcode: "94103",
            photo: "assets/img",
            description: "Artists with developmental disabilities are given the opportunity to create art at Creativity Explored. The artwork is sold through CE’s studios and galleries, as well as around the world, in an effort to enable these artists to become self-employed."
            )


User.create!(organization_name: "Raphael House",
             username: "raphael",
             password: "sweden12",
             email: "contact@raphaelhouse.org",
             address1: "1065 Sutter Street",
             address2: "",
             city: "San Francisco",
             state: "California",
             zipcode: "94109",
             photo: "assets/img",
             description: "Raphael House is the first homeless shelter for families in Northern California. Through a variety of supportive and nurturing programs that provide shelter, academic enrichment, career building, children’s services, and more, it hopes to reach an additional 200 families over the next three years."
             )

UserCategory.create!(user_id: 1, category_id: 8)
UserCategory.create!(user_id: 2, category_id: 13)
UserCategory.create!(user_id: 3, category_id: 20)

UserItem.create!(user_id:1, item_id: 13)
UserItem.create!(user_id:1, item_id: 14)
UserItem.create!(user_id:1, item_id: 15)

UserItem.create!(user_id:2, item_id: 1)
UserItem.create!(user_id:2, item_id: 16)
UserItem.create!(user_id:2, item_id: 18)

UserItem.create!(user_id:3, item_id: 4)
UserItem.create!(user_id:3, item_id: 5)
UserItem.create!(user_id:3, item_id: 12)
