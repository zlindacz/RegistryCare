export const UserConstants = {
  RECEIVE_IN_PROGRESS_USER: "RECEIVE_IN_PROGRESS_USER",
  REQUEST_USERS: "REQUEST_USERS",
  RECEIVE_USERS: "RECEIVE_USERS",
  REQUEST_SINGLE_USER: "REQUEST_SINGLE_USER",
  RECEIVE_SINGLE_USER: "RECEIVE_SINGLE_USER",
  UPDATE_USER: "UPDATE_USER",
  RECEIVE_USER_ERRORS: "RECEIVE_USER_ERRORS"
}

export const receiveInProgressUser = user => ({
  type: UserConstants.RECEIVE_IN_PROGRESS_USER,
  user
});

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

export const updateUser = user => ({
  type: UserConstants.UPDATE_USER,
  user
});

export const receiveErrors = errors => ({
  type: UserConstants.RECEIVE_USER_ERRORS,
  errors
});
