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
             photo: "assets/core/logos/treehouse.jpg",
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
            photo: "assets/core/logos/creativity.jpg",
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
             photo: "assets/core/logos/raphael.jpeg",
             description: "Raphael House is the first homeless shelter for families in Northern California. Through a variety of supportive and nurturing programs that provide shelter, academic enrichment, career building, children’s services, and more, it hopes to reach an additional 200 families over the next three years."
             )

User.create!(organization_name: "Mickaboo Companion Bird Rescue",
            username: "mickaboo",
            password: "mickaboo",
            email: "contact@mickaboo.org",
            address1: "PO Box 697",
            address2: "",
            city: "San Jose",
            state: "California",
            zipcode: "95106",
            photo: "assets/core/logos/mickaboo.png",
            description: "Mickaboo was founded in 1996. Our mission is very simple: To provide protection for those who, by no fault or choice of their own cannot help themselves, and depend on humans for their care. To educate the bird owning public on the most current diet, health and general care information."
            )

User.create!(organization_name: "Cars Emancipating Moms with Children",
            username: "cemfa",
            password: "carscars",
            email: "contact@cemfa.org",
            address1: "412 Olive Avenue",
            address2: "Suite 228",
            city: "Huntington Beach",
            state: "California",
            zipcode: "92648",
            photo: "assets/core/logos/mother-children.jpg",
            description: "The CEMFA- Cars Emancipating Mothers From Abuse program is designed for Domestic Abused Women and Children, To provide safety and opportunities for healing, growth and self-determination."
            )


User.create!(organization_name: "Wounded Warrior Support Network",
            username: "warriors",
            password: "warriors",
            email: "contact@woundedwarriors.org",
            address1: "11118 Raju St.",
            address2: "",
            city: "San Diego",
            state: "California",
            zipcode: "92129",
            photo: "assets/core/logos/wwsn2.jpg",
            description: "Our mission is to help our wounded, ill and injured r through the long journey back to new lives. Each of our programs are designed to get to develop a connection so they can get to know people who can help them transition to wellness."
            )

User.create!(organization_name: "American Red Cross Silicon Valley Chapter",
            username: "svredcross",
            password: "svredcross",
            email: "contact@svredcross.org",
            address1: "2731 North First Street",
            address2: "",
            city: "San Jose",
            state: "California",
            zipcode: "95134",
            photo: "assets/core/logos/svredcross.jpg",
            description: "The American Red Cross Silicon Valley Chapter helps the citizens of Santa Clara County prevent, prepare for and respond to emergencies through educational health, safety and preparedness classes, youth education programs, and trained volunteer forces that are prepared to respond to any size emergency within minutes."
            )

UserCategory.create!(user_id: 1, category_id: 8)
UserCategory.create!(user_id: 2, category_id: 13)
UserCategory.create!(user_id: 3, category_id: 20)
UserCategory.create!(user_id: 4, category_id: 2)
UserCategory.create!(user_id: 5, category_id: 15)
UserCategory.create!(user_id: 6, category_id: 30)
UserCategory.create!(user_id: 7, category_id: 14)


UserItem.create!(user_id:1, item_id: 13)
UserItem.create!(user_id:1, item_id: 14)
UserItem.create!(user_id:1, item_id: 15)

UserItem.create!(user_id:2, item_id: 1)
UserItem.create!(user_id:2, item_id: 16)
UserItem.create!(user_id:2, item_id: 18)

UserItem.create!(user_id:3, item_id: 4)
UserItem.create!(user_id:3, item_id: 5)
UserItem.create!(user_id:3, item_id: 12)

UserItem.create!(user_id:4, item_id: 13)
UserItem.create!(user_id:4, item_id: 19)
UserItem.create!(user_id:4, item_id: 20)

UserItem.create!(user_id:5, item_id: 1)
UserItem.create!(user_id:5, item_id: 2)
UserItem.create!(user_id:5, item_id: 3)
UserItem.create!(user_id:5, item_id: 7)

UserItem.create!(user_id:6, item_id: 11)
UserItem.create!(user_id:6, item_id: 6)

UserItem.create!(user_id:7, item_id: 13)
UserItem.create!(user_id:7, item_id: 17)

Pledge.create!(user_id: 1, other_user_id: 3)
Pledge.create!(user_id: 2, other_user_id: 5)
Pledge.create!(user_id: 1, other_user_id: 4)
Pledge.create!(user_id: 3, other_user_id: 1)
Pledge.create!(user_id: 7, other_user_id: 6)
