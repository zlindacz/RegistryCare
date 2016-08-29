### Implementation Timeline

#### Phase I: Backend setup and Front End User Authentication (w8d2-3, 2 days)

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


#### Phase II: Backend setup and Front End Organization Authentication (w8d4-5, 2 days)

__Objective__: Functioning rails project with front-end Authentication for Organization

- Organization model/migration
- Back end authentication (session/password) for both
- Errors
- StaticPages controller and root views
- Webpack & react/redux modules
- APIUtil to interact with the API
- Redux cycle for fontend authentication for Organization
- Organization Log In components
- Organization Sign Up components
- Style components
- Seed 3-5 organizations


#### Phase III: Set up favorites and followings (w8d7-1, 2 days)

__Objective__: Users can add/remove organizations to/from their favorites/followings lists

- Favorites and Follows models and join models Favortings and Followings
- Back end for both, user able to favorite/delete and remove those associations
- Make the buttons and stars on the orgs cards work
- Webpack & react/redux modules
- APIUtils to interact with the APIs
- Redux cycle for frontend
- Style components
- Seed databases with more orgs, users, favoritings, and followings


#### Phase V: Search and incorporate Google Maps (w9d2-4, 3 days)

__Objective__: Users and Orgs can search for organizations by inputting organization's name, items of interest, or organization's focus, and limit the results to around the user's location by State, city, or zip code (and current location for homeDisplay)

- Create OrgMap component
- Create parent component Search (in all pages for "Give" & User "Find" tab)
- Attach a Google map to OrgMap
- Implement map markers for organizations
- Create MarkerManager in util
- Connect OrgMap with MarkerManager
- Webpack & react/redux modules
- APIUtils to interact with the APIs
- Backend containers, actions, reducers, middleware
- Redux cycle for frontend
- Style components
- Seed databases with more users and orgs in different locations
- test functionality


#### Phase VI: Touching up (W9d5, 1 day)

__Objective__:

- Create tour buttons' functionality and routes
- Add 'How it Works' page
- Add more seeds for both User and Organization all over the country (scrape listings of non-profits)


### Bonus Features (TBD)

- User has the choice to make their profile private
- Monetary donations (Credit Card/PayPal)
- User can get notifications from followed organizations
- Implement filtering by Map Location, items, or organization's focus
- User can makes note of what items they donated, and to which organizations, along with timestamps and estimated value for tax purposes
- User can sign up/log in with facebook and google accounts
- Make profile page's categories collapsible/expandable
- Improve UX
