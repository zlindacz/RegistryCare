export const UserConstants = {
  REQUEST_USERS: "REQUEST_USERS",
  RECEIVE_USERS: "RECEIVE_USERS",
  REQUEST_SINGLE_USER: "REQUEST_SINGLE_USER",
  RECEIVE_SINGLE_USER: "RECEIVE_SINGLE_USER",
  RECEIVE_IN_PROGRESS_USER: "RECEIVE_IN_PROGRESS_USER"
// need other_user???
}

export const requestUsers = () => ({
  type: UserConstants.REQUEST_USERS
});

export const receiveUsers = users => ({
  type: UserConstants.RECEIVE_USERS,
  users
});

export const requestSingleUser = id => ({
  type: UserConstants.REQUEST_SINGLE_USER,
  id
});


export const receiveSingleUser = user => ({
  type: UserConstants.RECEIVE_SINGLE_USER,
  user
});

export const receiveInProgressUser = user => ({
  type: UserConstants.RECEIVE_IN_PROGRESS_USER,
  user
});
