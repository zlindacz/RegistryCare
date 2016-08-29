# Registry Care

##### [Heroku Link]()

### Minimum Viable Product

Registry Care is a web application inspired by THankful Registry and Donor Choose, built using Ruby on Rails and React/Redux.

The finished product by the end of Week 9 will provide interfaces for not-for-profit organizations to create registries for needed resources, and for users to find organizations to which to donate.

The finished app will satisfy the following criteria with smooth, bug-free navigation, sufficient CSS styling, and adequate seed-data for simulations of the user-experience from both the organization's and the individual user's perspectives:

- Hosting on Heroku
- New account creation, log in, and a full demo
- Search feature with Google Maps API
- Favorites for users to save organizations
- Follows for users to get updates from organizations
- Tags for items requested by organizations
- A production README



### Design Docs

- [View Wireframs](./wireframes)
- [React Components](./components_hierarchy)
- [API endpoints](./api_endpoints)
- [DB Schema](./schema)
- [Redux Structure](./redux-structure)
- [Sample State](./sample-state)

### Implementation Timeline

#### Phase I: Backend setup and Front End User Authentication (2 days)

__Objective__: Functioning rails project with front-end Authentication for User

- New Rails project Registry Care
- User model/migration
- Back end User authentication (session/password)
- StaticPages controller and root views
- Webpack & react/redux modules
- APIUtil to interact with the API
- Redux cycle for fontend authentication for User
- User Log In components
- User Sign Up components
- Style components
- Seed 3 users


#### Phase II: Backend setup and Front End Organization Authentication (2 days)

__Objective__: Functioning rails project with front-end Authentication for Organization

- Organization model/migration
- Back end authentication (session/password) for both
- StaticPages controller and root views
- Webpack & react/redux modules
- APIUtil to interact with the API
- Redux cycle for fontend authentication for Organization
- Organization Log In components
- Organization Sign Up components
- Style components
- Seed 3-5 organizations

- Create tour buttons' functionality and routes


#### Phase III: (2 days)

__Objective__: Functioning rails project with front-end Authentication for Organization

- Organization model/migration
- Back end au





#### Phase V: Search

__Objective__:

- New Rails project Registry Care
- User model/migration

- Tour components for both User and Organization


#### Phase VI: Touching up

__Objective__:

- Add 'How it Works' page
- Add more seeds for both User and Organization all over the country (scrape listings of non-profits)





### Bonus Features (TBD)

- User has the choice to make their profile private
- Monetary donations (Credit Card/PayPal)
- User can get notifications from followed organizations
- User can makes note of what items they donated, and to which organizations, along with timestamps and estimated value for tax purposes
- User can log in with facebook or google accounts
- Make profile page categories collapsible/expandable
