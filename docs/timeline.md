### Implementation Timeline

#### Phase I: Backend setup and Front End User Authentication (w8d2-3, 2 days)

__Objective__: Functioning rails project with front-end Authentication for User

- New Rails project Registry Care
- User model/migration
- Back end User authentication (session/password)
- Redux cycle for fontend authentication for User
- StaticPages controller and root views
- Webpack & react/redux modules
- APIUtil to interact with the API
- User Log In components
- User Sign Up components
- Set up demo
- Style components
- Seed 5 users


#### Phase II: Create registry and enable CRUD (w8d4-5, 2 days)

__Objective__: Users can edit their registry to update name, address, password, description, items needed, and photo

- Registry model
- Seed database with test data
- CRUD API for registries
- jBuilder views for registries
- Registry components and respective Redux loops
- Style components


#### Phase III: Create join tables for pledges, and create the registry index (w9d1-2, 2 days)

__Objective__: Users make donations to other Users via pledges, and can browse other Users through the index.

- pledges model
- seed database
- ability to create and delete pledges
- React components and Redux loops to make listings responsive to toggling pledging
- RegistryIndex
- RegistryIndexItem
- Style components

#### Phase IV: Finish the Index and start the Dashboard (w9d3-4, 2 days)

__Objective__: Users make donations to other Users via pledges, and can browse other Users through the index.

- Improve index with React Masonry
- Make the necessary React components and Redux loops
- Implement search function (filtering by issue or items on the backend)
- Dashboard shows current pledges
- Front end
- Styling

#### Phase V: Finish the dashboard, and touch up (w9d5, 1 day)

__Objective__: Dashboard's saved donations

- Dashboard shows past donations
- Front end and styling
- Create tour buttons' functionality and routes
- Add 'How it Works' page
- Add more seeds for both User and Organization all over the country (scrape listings of non-profits)


### Bonus Features (TBD)

- User can also indicate what items they can donate
- User has the choice to make their profile private
- Search with location data
- Google Maps API
- Implement filtering by Map Location, items, or organization's focus
- Monetary donations (Credit Card/PayPal)
- User can sign up/log in with facebook and google accounts
- Make profile page's categories collapsible/expandable
- Improve UX
