## Auth Cycles

### Session API Request Actions

- SignUpUser
  - invoked from SignupDisplay onSubmit
  - POST /api/users is called
  - receiveCurrentUser is set as the success callback

- SignUpOrg
  - invoked from SignupDisplay onSubmit
  - POST /api/orgs is called
  - receiveCurrentUser is set as the success callback

- LogInForm
  - invoked from LogInForm onSubmit
  - POST /api/session is called.
  - receiveCurrentUser is set as the callback.

- logOut
  - invoked from LogOut onClick
  - DELETE /api/session is called.
  - removeCurrentUser is set as the success callback.

- fetchCurrentUser
  - invoked from App in didMount
  - GET /api/session is called.
  - receiveCurrentUser is set as the success callback.


### Session API Response Actions

- receiveCurrentUser
  - invoked from an API callback
  - the SessionReducer stores currentUser in the application's state.

- removeCurrentUser
  - invoked from an API callback
  - the SessionReducer removes currentUser from the application's state.

## Error Cycles

### Error API Response Actions

- setErrors
  - invoked from API callbacks on error for actions that generate POST requests
  - the ErrorReducer stores the form in the application's state; errors are mapped to their respective forms

- removeErrors
  - invoked from API callbacks on success for actions that generate POST requests
  - the ErrorReducer removes errors for a given form in the application's state.


## Search Cycles

-fetchSearchSuggestions
  - invoked from Give or SearchBar onSubmit from the Find tab on User HomeDisplay.
  - GET /api/orgs is called with text params.
  - receiveSearchSuggestions is set as the success callback.

- receiveSearchSuggestions
  - invoked from an API callback.
  - the SearchSuggestion reducer updates suggestions in the application's state.

## User-Request-Organizations Cycles

### User Requesting Organizations Request Response

- fetchHomeDisplaySuggestions
  - invoked from App in didMount.
  - GET /api/orgs is called with user's location info.
  - receiveHomeSuggestions is set as the success callback.

- fetchSingleOrg
  - invoked from OrgDetail didMount/willReceiveProps
  - GET /api/orgs/:id is called.
  - receiveSingleOrg is set as the success callback.

- fetchFavorites
  - invoked from Favorites didMount/willReceiveProps.
  - GET /api/users/:id/favorites.
  - receiveFavorites is set as the success callback.

- createFavorite
  - invoked from favorite button onClick
  - POST /api/favorites is called.
  - receiveFavorites is set as the success callback.

- destroyFavorite
  - invoked from favorite button onClick
  - DELETE /api/favorites/:id is called.
  - removeFavorite is set as the success callback.

- fetchFollowings
  - invoked from Following didMount/willReceiveProps.
  - GET /api/users/:id/followings.
  - receiveFollowings is set as the success callback.

- createFollowing
  - invoked from following button onClick
  - POST /api/followings is called.
  - receiveFollowings is set as the success callback.

- destroyFollowing
  - invoked from following button onClick
  - DELETE /api/followings/:id is called.
  - removeFollowing is set as the success callback.

### User Requesting Organizations Response Actions

- receiveHomeSuggestions
  - invoked from an API callback
  - the OrgsReducer updates organizations in the application's state.

- receiveSingleOrg
  - invoked from an API callback
  - the OrgsReducer updates orgs[id] in the application's state.

- receiveFavorite
  - invoked from an API callback
  - the FavoritesReducer updates favorites[id] in the application's state.

- removeFavorite
  - invoked from an API callback
  - the FavoritesReducer removes favorites[id] from the application's state.

- receiveFollowing
  - invoked from an API callback
  - the FollowingsReducer updates following[id] in the application's state.

- removeFollowing
  - invoked from an API callback
  - the FollowingsReducer removes following[id] from the application's state.


## Organization Request Cycles

### Organization Items Request Response

- fetchItems
  - invoked from App in didMount.
  - GET /api/orgs/:id/items is called.
  - receiveItems is set as the success callback.

- fetchSingleOrg
  - invoked from OrgDetail didMount/willReceiveProps
  - GET /api/orgs/:id is called.
  - receiveSingleOrg is set as the success callback.

### User Requesting Organizations Response Actions

- receiveItems
  - invoked from an API callback
  - the ItemsReducer updates organizations in the application's state.
