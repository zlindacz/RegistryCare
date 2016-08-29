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


Search Cycles

Notes API Request Actions

fetchAllNotes

invoked from NotesIndex didMount/willReceiveProps
GET /api/notes is called.
receiveAllNotes is set as the success callback.
createNote

invoked from new note button onClick
POST /api/notes is called.
receiveSingleNote is set as the success callback.
fetchSingleNote

invoked from NoteDetail didMount/willReceiveProps
GET /api/notes/:id is called.
receiveSingleNote is set as the success callback.
updateNote

invoked from NoteForm onSubmit
POST /api/notes is called.
receiveSingleNote is set as the success callback.
destroyNote

invoked from delete note button onClick
DELETE /api/notes/:id is called.
removeNote is set as the success callback.
Notes API Response Actions

receiveAllNotes

invoked from an API callback
the NoteReducer updates notes in the application's state.
receiveSingleNote

invoked from an API callback
the NoteReducer updates notes[id] in the application's state.
removeNote

invoked from an API callback
the NoteReducer removes notes[id] from the application's state.
Notebook Cycles

Notebooks API Request Actions

fetchAllNotebooks

invoked from NotebooksIndex didMount/willReceiveProps
GET /api/notebooks is called.
receiveAllNotebooks is set as the success callback.
createNotebook

invoked from new notebook button onClick
POST /api/notebooks is called.
receiveSingleNotebook is set as the callback.
fetchSingleNotebook

invoked from NotebookDetail didMount/willReceiveProps
GET /api/notebooks/:id is called.
receiveSingleNotebook is set as the success callback.
updateNotebook

invoked from NotebookForm onSubmit
POST /api/notebooks is called.
receiveSingleNotebook is set as the success callback.
destroyNotebook

invoked from delete notebook button onClick
DELETE /api/notebooks/:id is called.
removeNotebook is set as the success callback.
Notebooks API Response Actions

receiveAllNotebooks

invoked from an API callback.
The Notebook reducer updates notebooks in the application's state.
receiveSingleNotebook

invoked from an API callback.
The Notebook reducer updates notebooks[id] in the application's state.
removeNotebook

invoked from an API callback.
The Notebook reducer removes notebooks[id] from the application's state.
SearchSuggestion Cycles

fetchSearchSuggestions

invoked from NoteSearchBar onChange when there is text
GET /api/notes is called with text param.
receiveSearchSuggestions is set as the success callback.
receiveSearchSuggestions

invoked from an API callback.
The SearchSuggestion reducer updates suggestions in the application's state.
removeSearchSuggestions

invoked from NoteSearchBar onChange when empty
The SearchSuggestion reducer resets suggestions in the application's state.
