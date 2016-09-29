# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# heroku pg:reset DATABASE
# heroku rake db:migrate
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
              {item_type: 'HOUSEHOLD', name: 'Misc Items'},

              {item_type: 'VOLUNTEER', name: 'Volunteer: No Preferences'},
              {item_type: 'HOUSEHOLD', name: 'Volunteer: Events'},
              {item_type: 'HOUSEHOLD', name: 'Volunteer: Mentor'},
              {item_type: 'HOUSEHOLD', name: 'Volunteer: Tutor'}])


User.create!(organization_name: "The Tree House",
             username: "treehouse",
             password: "password",
             email: "contact@treehouse.org",
             address1: "123 Same St",
             address2: "Suite 34",
             city: "San Antonio",
             state: "Texas",
             zipcode: "78225",
             photo: "http://res.cloudinary.com/zlindacz/image/upload/v1473287528/u6g90inzw5toyhgsnamn.jpg",
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
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086353/creativity_explored_fotgcy.jpg",
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
             photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086447/raphaelhouse_zfqkq3.jpg",
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
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086415/mickaboo_bnlwa5.jpg",
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
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475090095/cars_rymotk.jpg",
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
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086466/wounded_warriors_ns0ddz.jpg",
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
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1473290783/exmswhnosu3apnaobfxi.jpg",
            description: "The American Red Cross Silicon Valley Chapter helps the citizens of Santa Clara County prevent, prepare for and respond to emergencies through educational health, safety and preparedness classes, youth education programs, and trained volunteer forces that are prepared to respond to any size emergency within minutes."
            )

User.create!(organization_name: "Pachamama Alliance",
            username: "pachamama",
            password: "pachamama",
            email: "contact@spachamama.org",
            address1: "The Presidio Bldg. 1009, 2nd floor",
            address2: "P.O. Box 29191",
            city: "San Francisco",
            state: "California",
            zipcode: "94129",
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086396/pachamama_emeg9l.jpg",
            description: "Our mission is to empower indigenous people of the Amazon rainforest to preserve their lands and culture and, using insights gained from that work, to educate and inspire individuals everywhere to bring forth a thriving, just and sustainable world."
            )

User.create!(organization_name: "Project Homeless Connect",
            username: "homelessconnect",
            password: "password",
            email: "contact@phc.org",
            address1: "25 Van Ness Avenue",
            address2: "Suite 340",
            city: "San Francisco",
            state: "California",
            zipcode: "94102",
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086374/homeless_connect_wz5b5c.jpg",
            description: "The mission of Project Homeless Connect (PHC) is to connect San Franciscan's experiencing homelessness with the resources they need to move forward. Project Homeless Connect (PHC), a national best practice model, originated in San Francisco under Mayor Gavin Newsom in October 2004. Today, PHC is emulated in 170 cities across the United States as well as Canada, Puerto Rico and Australia."
            )


User.create!(organization_name: "Foundation For Students Rising Above",
            username: "risingabove",
            password: "password",
            email: "contact@risingabove.org",
            address1: "PO Box 29174",
            address2: "",
            city: "San Francisco",
            state: "California",
            zipcode: "94129",
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086468/students_rising_xsmovn.jpg",
            description: "Students Rising Above helps exceptional low-income Bay Area high school students who are overcoming tremendous odds of poverty, homelessness, and neglect, to fulfill their dream of a college education. We provide the mentoring, financial assistance, and employment skills to be successful in school and in life."
            )


User.create!(organization_name: "Endangered Species International",
            username: "endangeredspecies",
            password: "password",
            email: "contact@esi.org",
            address1: "2112 Hayes Street",
            address2: "",
            city: "San Francisco",
            state: "California",
            zipcode: "94117",
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086378/endangered_species_gtgzgm.jpg",
            description: "Endangered Species International is strongly committed to reversing the trend of human-induced species extinction, saving endangered animals, and preserving wild places!"
            )
User.create!(organization_name: "W.O.M.A.N.",
            username: "woman",
            password: "password",
            email: "contact@woman.org",
            address1: "26 Boardman Place",
            address2: "",
            city: "San Francisco",
            state: "California",
            zipcode: "94103",
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086778/woman.jpg",
            description: "W.O.M.A.N., Inc. supports those impacted by violence using an innovative approach to services and programs that build stronger, safer communities. We offer 24-hour support line via peer counseling, safety planning, and referrals for needed resources. Very often our support line is used as a safe space for survivors to openly share details of their lives including the abuse they survive. "
            )
User.create!(organization_name: "Room To Read",
            username: "roomtoread",
            password: "password",
            email: "contact@readingroom.org",
            address1: "465 California Street",
            address2: "Suite 1000",
            city: "San Francisco",
            state: "California",
            zipcode: "94104",
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086385/room_read_aobu2q.jpg",
            description: "Room to Read seeks to transform the lives of millions of children in low-income countries by focusing on literacy and gender equality in education. Working in collaboration with local communities, partner organizations and governments, we develop literacy skills and a habit of reading among primary school children, and support girls to complete secondary school with the relevant life skills to succeed in school and beyond."
            )
User.create!(organization_name: "Support For Families",
            username: "familysupport",
            password: "password",
            email: "contact@supportforfamilies.org",
            address1: "1663 Mission Street ",
            address2: "7th Floor",
            city: "San Francisco",
            state: "California",
            zipcode: "94103",
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086372/family_support.jpg",
            description: " The purpose of Support for Families of Children With Disabilities is to ensure that families of children with any kind of disability or special health care need have the knowledge and support to make informed choices that enhance their children's development and well being. Through fostering partnership among families, professionals and the community our children can flourish. Mostof our staff members, volunteers, and board members are, themselves,family members of children with disabilities."
            )
User.create!(organization_name: "La Casa De Las Madres",
            username: "lacasa",
            password: "password",
            email: "contact@lacasa.org",
            address1: "1663 Mission St",
            address2: "Suite 225",
            city: "San Francisco",
            state: "California",
            zipcode: "94103",
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086383/la_casa_efenjq.jpg",
            description: "The mission of La Casa de las Madres is to respond to calls for help from domestic violence victims, of all ages, 24 hours a day, 365 days a year. We give survivors the tools to transform their lives. We seek to prevent future violence by educating the community and by redefining public perceptions about domestic violence."
            )
User.create!(organization_name: "California State Parks Foundation",
              username: "caparks",
              password: "password",
              email: "contact@parks.ca.gov",
              address1: "50 Francisco Street",
              address2: "Suite 110",
              city: "San Francisco",
              state: "California",
              zipcode: "94133",
              photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086472/state_parks_zhyuc6.jpg",
              description: "California State Parks Foundation is a member-supported nonprofit dedicated to protecting, improving and advocating for all of California’s state parks. With our community of supporters, we deliver innovative solutions for an excellent parks system by facilitating park improvements, inspiring stewardship, supporting partners, advocating for sound policies, and connecting people to parks. Together we ensure that the natural beauty, rich culture and history, and recreational and educational opportunities of our 280 state parks are available for all to enjoy now and for generations to come."
              )

User.create!(organization_name: "Soi Dog Foundation",
            username: "soidog",
            password: "password",
            email: "contact@soidog.org",
            address1: "2010 15th St",
            address2: "",
            city: "San Francisco",
            state: "California",
            zipcode: "94114",
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086401/soi_dog_erixvz.jpg",
            description: " Soi Dog Foundation supports the public education, animal protection and animal welfare efforts of the soi dog foundation a recognized charitable organization based in thailand. The purpose of Soi Dog foundation usa is to provide information and education to the american public on the plight of animals in and around Thailand and the efforts of Soi Dog foundation to prevent and eliminate animal cruelty, provide medical care, sterilization (spay and neuter), end the dog meat trade and support the foundation's other animal care projects."
            )

User.create!(organization_name: "The Coming Home Project",
            username: "cominghome",
            password: "password",
            email: "contact@cominghome.org",
            address1: "3739 Balboa St.",
            address2: "Box 193",
            city: "San Francisco",
            state: "California",
            zipcode: "94121",
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086393/coming_home_gclldy.jpg",
            description: "The Coming Home Project is a non-profit organization devoted to providing compassionate expert care, support, education, and stress management tools for Iraq and Afghanistan veterans, service members, their families, and their service providers. We are a multidisciplinary, experienced team of psychotherapists, veterans and interfaith leaders committed to helping transform the wounds of war. Our programs address the psychological, emotional, spiritual and relationship challenges experienced during all stages of deployment, especially reintegration. We help rebuild the connectivity of mind, body, heart and spirit that combat trauma can unravel, renew relationships with loved ones, and create new support networks."
            )
User.create!(organization_name: "Shanti Project",
            username: "shantiproject",
            password: "password",
            email: "contact@shanti.org",
            address1: "730 Polk St.",
            address2: "3rd Floor",
            city: "San Francisco",
            state: "California",
            zipcode: "94109",
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086456/shanti_esqiqu.jpg",
            description: "Shanti is dedicated to closing the gap between people who receive comprehensive medical care and those who do not, and provides the information, skills and support clients need to make informed decisions about their treatment, improve their health and wellness, and enjoy good health outcomes and a high quality of life."
            )
User.create!(organization_name: "Upwardly Global",
            username: "upwardlyglobal",
            password: "password",
            email: "contact@upwardly.org",
            address1: "582 Market St",
            address2: "Suite 1207",
            city: "San Francisco",
            state: "California",
            zipcode: "94104",
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086474/upwardly_global.jpg",
            description: "To eliminate employment barriers for skilled immigrants and refugees and integrate this population into the professional U.S. workforce."
            )
User.create!(organization_name: "READ (Rural Education and Development) Global",
            username: "readglobal",
            password: "password",
            email: "contact@readglobal.org",
            address1: "PO Box 29286",
            address2: "",
            city: "San Francisco",
            state: "California",
            zipcode: "94129",
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086443/rural_accojv.jpg",
            description: "READ Global believes empowering rural communities is critical to alleviating global poverty. We envision a world where individuals, families and entire communities have access to the knowledge, resources and opportunities necessary to build more prosperous futures. READ partners with communities in rural Asia to create vibrant places to live and thrive."
            )
User.create!(organization_name: "Project Night Night",
            username: "nightnight",
            password: "password",
            email: "contact@nightnight.org",
            address1: "1800 Gough Street",
            address2: "",
            city: "San Francisco",
            state: "California",
            zipcode: "94117",
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086393/nightnight_rcxjfi.jpg",
            description: "Project Night Night provides individual tote bags containing a security blanket, age-appropriate books, and stuffed animals to homeless children in an effort to help homeless children have sweeter dreams. Homelessness affects every facet of a child's development, increasing the risk for developmental delays, learning disabilities, emotional and behavioral disorders, heath concerns, and deficient social skills."
            )
User.create!(organization_name: "Swords to Plowshares",
            username: "swordsplows",
            password: "password",
            email: "contact@swordsplows.org",
            address1: "1060 Howard Street",
            address2: "",
            city: "San Francisco",
            state: "California",
            zipcode: "94103",
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086478/swords_plowshares_pcslkg.jpg",
            description: "War causes wounds and suffering that last beyond the battlefield. Our mission is to heal the wounds, to restore dignity, hope and self-sufficiency to all veterans in need, and to prevent and end homelessness and poverty among veterans."
            )
User.create!(organization_name: "Experience Corps Bay Area",
            username: "experiencecorp",
            password: "password",
            email: "contact@experiencecorp.org",
            address1: "1426 Fillmore Street",
            address2: "Suite 212",
            city: "San Francisco",
            state: "California",
            zipcode: "94115",
            photo: "http://res.cloudinary.com/zlindacz/image/upload/v1475086376/experience_corps_ifzab1.jpg",
            description: "Experience Corps is a community based nonprofit organization that has two primary missions. First we focus on helping K-3rd grade students in public schools reach grade-level reading proficiency by 3rd grade. Secondly, we focus on providing people 50+ years of age with the opportunity to utilize their knowledge, experience and understanding to help the next generation of readers."
            )

UserCategory.create!(user_id: 1, category_id: 8)
UserCategory.create!(user_id: 2, category_id: 13)
UserCategory.create!(user_id: 3, category_id: 20)
UserCategory.create!(user_id: 4, category_id: 2)
UserCategory.create!(user_id: 5, category_id: 15)
UserCategory.create!(user_id: 6, category_id: 30)
UserCategory.create!(user_id: 7, category_id: 14)
UserCategory.create!(user_id: 8, category_id: 17)
UserCategory.create!(user_id: 9, category_id: 20)
UserCategory.create!(user_id: 10, category_id: 24)
UserCategory.create!(user_id: 11, category_id: 17)
UserCategory.create!(user_id: 12, category_id: 15)
UserCategory.create!(user_id: 13, category_id: 24)
UserCategory.create!(user_id: 14, category_id: 13)
UserCategory.create!(user_id: 15, category_id: 15)
UserCategory.create!(user_id: 16, category_id: 17)
UserCategory.create!(user_id: 17, category_id: 2)
UserCategory.create!(user_id: 18, category_id: 30)
UserCategory.create!(user_id: 19, category_id: 16)
UserCategory.create!(user_id: 20, category_id: 22)
UserCategory.create!(user_id: 21, category_id: 16)
UserCategory.create!(user_id: 22, category_id: 8)
UserCategory.create!(user_id: 23, category_id: 30)
UserCategory.create!(user_id: 24, category_id: 24)


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

UserItem.create!(user_id:8, item_id: 9)
UserItem.create!(user_id:8, item_id: 11)
UserItem.create!(user_id:8, item_id: 13)

UserItem.create!(user_id:9, item_id: 7)
UserItem.create!(user_id:9, item_id: 10)
UserItem.create!(user_id:9, item_id: 11)
UserItem.create!(user_id:9, item_id: 12)

UserItem.create!(user_id:10, item_id: 11)
UserItem.create!(user_id:10, item_id: 15)
UserItem.create!(user_id:10, item_id: 19)
UserItem.create!(user_id:10, item_id: 20)

UserItem.create!(user_id:11, item_id: 11)
UserItem.create!(user_id:11, item_id: 18)

UserItem.create!(user_id:12, item_id: 17)
UserItem.create!(user_id:12, item_id: 19)

UserItem.create!(user_id:13, item_id: 14)
UserItem.create!(user_id:13, item_id: 15)
UserItem.create!(user_id:13, item_id: 17)
UserItem.create!(user_id:13, item_id: 20)

UserItem.create!(user_id:14, item_id: 11)
UserItem.create!(user_id:14, item_id: 14)
UserItem.create!(user_id:14, item_id: 15)
UserItem.create!(user_id:14, item_id: 17)
UserItem.create!(user_id:14, item_id: 18)
UserItem.create!(user_id:14, item_id: 20)

UserItem.create!(user_id:15, item_id: 1)
UserItem.create!(user_id:15, item_id: 2)
UserItem.create!(user_id:15, item_id: 3)
UserItem.create!(user_id:15, item_id: 5)
UserItem.create!(user_id:15, item_id: 9)
UserItem.create!(user_id:15, item_id: 17)

UserItem.create!(user_id:16, item_id: 17)

UserItem.create!(user_id:17, item_id: 11)
UserItem.create!(user_id:17, item_id: 17)
UserItem.create!(user_id:17, item_id: 18)

UserItem.create!(user_id:18, item_id: 10)
UserItem.create!(user_id:18, item_id: 11)
UserItem.create!(user_id:18, item_id: 12)
UserItem.create!(user_id:18, item_id: 13)

UserItem.create!(user_id:19, item_id: 11)
UserItem.create!(user_id:19, item_id: 17)
UserItem.create!(user_id:19, item_id: 19)

UserItem.create!(user_id:20, item_id: 15)
UserItem.create!(user_id:20, item_id: 16)
UserItem.create!(user_id:20, item_id: 18)
UserItem.create!(user_id:20, item_id: 19)

UserItem.create!(user_id:21, item_id: 11)
UserItem.create!(user_id:21, item_id: 15)
UserItem.create!(user_id:21, item_id: 17)

UserItem.create!(user_id:22, item_id: 1)
UserItem.create!(user_id:22, item_id: 2)
UserItem.create!(user_id:22, item_id: 4)
UserItem.create!(user_id:22, item_id: 7)
UserItem.create!(user_id:22, item_id: 14)
UserItem.create!(user_id:22, item_id: 15)

UserItem.create!(user_id:23, item_id: 1)
UserItem.create!(user_id:23, item_id: 2)
UserItem.create!(user_id:23, item_id: 11)
UserItem.create!(user_id:23, item_id: 13)

UserItem.create!(user_id:24, item_id: 13)
UserItem.create!(user_id:24, item_id: 14)
UserItem.create!(user_id:24, item_id: 15)
UserItem.create!(user_id:24, item_id: 19)
UserItem.create!(user_id:24, item_id: 20)

# Pledge.create!(user_id: 1, other_user_id: 3)
# Pledge.create!(user_id: 2, other_user_id: 5)
# Pledge.create!(user_id: 1, other_user_id: 4)
# Pledge.create!(user_id: 3, other_user_id: 1)
# Pledge.create!(user_id: 7, other_user_id: 6)
