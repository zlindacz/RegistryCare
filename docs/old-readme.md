## RegistryCare

[RegistryCare](https://registry-care.herokuapp.com/#/?_k=m0qytc)

Registry Care is a web application inspired by Thankful Registry. It is built using Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework ont he front-end.

![splash](docs/readme/splash.png)

### Features and Implementation

Registry Care is an interface for not-for-profit organizations to create registries for needed resources.

#### User Authentication
The App features user authentication in the form of Login and Signup functionalities. Sensitive information is kept out of the front end of the app. Custom authentication methods are used to store hashed and salted passwords. The app makes API calls to the SessionController to fetch or create users. There are also "tour" buttons on the homepage to log the guest in as if they have an account. Signing up involves traversing through several information-gathering forms, including a form for uploading profile pictures, which are saved and optimized using the Cloudinary CDN.

 ![Signup Form 1](docs/readme/signup1.png)

 ![Signup Form 2](docs/readme/signup2.png)

 ![Signup Form 3](docs/readme/signup3.png)

 ![Signup Form 4](docs/readme/signup4.png)

 ![Signup Form 5](docs/readme/signup5.png)

On the back-end, user information (contact info, photo url, and description) are stored in one table. User is linked to the categories by establishing a user-category join model, and similarly with items via user-items join model.

#### Index
Once the user is logged in, they can do several things. By clicking on the heart logo or the "Index" in the top right of the header, the user will be redirected to the Index page that shows all the organizations. From there, the user can click on a picture with the logo of the organization and be directed to that organization's "registry". The index is styled using the React Masonry library which animates the entrance of the organization profiles and randomizes their order at each rendering.

![Index](docs/readme/index.png)

The index is also accessed when search terms are entered. The search bar responds on change of the input field, which dispatches an ajax call to fetch the relevant organizations and re-renders the index page, displaying the search results. The search function called by the UsersController#index lives in the User model:

```
def self.search(query)
 User.joins(:user_categories, :categories, :user_items, :items).where("categories.name ILIKE ? OR organization_name ILIKE ? OR items.name ILIKE ?", "%#{query}%", "%#{query}%", "%#{query}%").distinct
end
```

#### Search
In the center of the header there is a search bar which fades in upon cursor hovering and responds to user typing to search for organizations by organization name, category, or items needed.

![search-bar](docs/readme/search-bar.png)

The backend view utilize Jbuilder to generate the appropriate JSON data feeds. The index view uses this syntax:

```
json.array! @users do |user|
  json.partial! "api/users/user", user: user
end
```

which in turn uses a partial to extract all the necessary information from a user:

```
json.extract! user, :id, :username, :organization_name, :email, :address1, :address2, :city, :state, :zipcode, :photo, :description

json.items do
  json.array! user.items
end

json.categories do
  json.array! user.categories
end

json.pledges do
  json.array! user.pledges
end
```

#### Registry and Pledges
The registry shows the organization's purpose, category, and gives a list of items that they need. There is also a "Pledge" button on the top right corner, for the logged in user to commit to making a donation to them. Beneath there is also a count of pledges that the organization currently has.

![registry-pledged](docs/readme/registry-pledged.png)

![registry-unpledged](docs/readme/registry-unpledged.png)

On the backend, the pledge model joins users to other users, disallowing duplications. Pledge does not have its own container or component, and is instead contained in the user registry, which is rendered by the UsersController#show. The registry also uses Jbuilder and the user partial, so information about the user and their pledge status is passed to the registry component through the container, along with dispatch calls to create and destroy pledge connections.

### Future Directions for the Project

Future improvements will include:
- adding a user interface for individual donors to create an account
- adding a map API to show locations of the organizations so the user could also search by location and filter by distance
- adding a direct payment API so users can donate money directly to organizations
- adding ability for user to log in through their Facebook or Google accounts
- adding a header for the registry profile to help with app navigation