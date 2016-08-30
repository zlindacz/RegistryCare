## Auth Cycles

### Session API Request Actions

- SignUpUser
  - invoked from SignupDisplay onSubmit
  - POST /api/users is called
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

### User Request Response

- fetchSingleUser
  - invoked from Profile onClick didMount/willReceiveProps
  - GET /api/user/:id is called.
  - receiveSingleUser is set as the success callback.

- fetchOtherUser
  - invoked from other_user onClick willReceiveProps
  - GET /api/user/:id is called.
  - receiveOtherUser is set as the success callback.

- fetchRegistryDisplay
  - invoked from App in didMount.
  - GET /api/user/:id/registry is called with user info.
  - receiveRegistryDisplay is set as the success callback.

- fetchPledges
  - invoked from Browse didMount/willReceiveProps.
  - GET /api/users/:id/favorites.
  - receivePledges is set as the success callback.

- createPledge
  - invoked from favorite button onClick
  - POST /api/pledges is called.
  - receiveSinglePledge is set as the success callback.

- destroyPledge
  - invoked from favorite button onClick
  - DELETE /api/pledges/:id is called.
  - removePledge is set as the success callback.

- fetchDonationsDisplay
  - invoked from App in didMount.
  - GET /api/user/:id/registry is called with user info.
  - receiveDonationsDisplay is set as the success callback.


### User Requesting Organizations Response Actions

- receiveRegistryDisplay
  - invoked from an API callback
  - the RegistryReducer updates user[id] registry in the application's state.

- receiveSingleUser
  - invoked from an API callback
  - the UserReducer updates user[id] in the application's state.

- receiveOtherUser
  - invoked from an API callback
  - the OtherUserReducer updates other_user[id] in the application's state.

- receiveSinglePledge
  - invoked from an API callback
  - the PledgesReducer updates pledge[id] in the application's state.

- receivePledges
  - invoked from an API callback
  - the PledgesReducer updates pledges in the application's state.

- removePledge
  - invoked from an API callback
  - the PledgesReducer removes pledges[id] from the application's state.

- receiveDonationsDisplay
  - invoked from an API callback
  - the UserReducer updates user[id] donations in the application's state.
