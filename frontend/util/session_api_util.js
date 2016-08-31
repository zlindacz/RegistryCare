import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const signup = function(user, success, error) {
  $.ajax({
    method: "POST",
    url: "api/users",
    data: {user: user},
    success,
    error
  });
};

export const login = function(user, success, error) {
  $.ajax({
    method: "POST",
    url: "api/session",
    data: {user: user},
    success,
    error
  });
};

export const logout = function(success, error) {
  $.ajax({
    method: "DELETE",
    url: "api/session",
    success,
    error: () => {
      console.log("Logout error in SessionApiUtil#logout");
    }
  });
};
