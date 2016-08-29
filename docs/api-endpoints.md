## API endpoints

### HTML API
- GET / -loads React web app

### JSON API

#### Users
- GET /api/users
- POST /api/users
- PATCH /api/users

#### Org
- GET /api/org
- POST /api/org
- PATCH /api/org

#### Session
- GET /api/session
- POST /api/session
- DELETE /api/session

#### Tags
Items tags will be nested under organizations and viewed on org's show page or mini displays of orgs in search results or users' favorites or follows page
GET /api/tags (for search purposes)
POST /api/user/:id/items_tags (from user sign up page)
PATCH /api/tags

#### Favorites
GET /api/user/:id/favorites
POST /api/user/:id/favorites
DELETE /api/user/:id/favorites (un-star)

#### Follows
GET /api/user/:id/follows
POST /api/user/:id/favorites
DELETE /api/user/:id/follow
