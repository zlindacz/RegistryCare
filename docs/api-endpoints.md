## API endpoints

### HTML API
- GET / -loads React web app

### JSON API

#### Users
- GET /api/users
- POST /api/users
- PATCH /api/users

#### Session
- GET /api/session
- POST /api/session
- DELETE /api/session

#### Tags
Items tags will be nested under users and viewed on the index or show page, and will be used to filter search results

GET /api/tags (for search purposes)
POST /api/user/:id/items_tags (from user sign up page)
PATCH /api/tags

#### Pledges
Join table between user and other users

GET /api/user/:id/pledges
POST /api/user/:id/pledges
DELETE /api/user/:id/pledges
