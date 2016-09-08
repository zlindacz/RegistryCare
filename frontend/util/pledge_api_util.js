import { createPledge, destroyPledge } from '../actions/pledge_actions';

export const pledge = function(user_id, success, error) {
  $.ajax({
    method: "POST",
    url: "api/pledges",
    data: {pledge: {user_id}},
    success,
    error
  });
};

export const unpledge = function(user_id, success, error) {
  $.ajax({
    method: "DELETE",
    url: "api/pledges",
    data: {pledge: {user_id}},
    success,
    error
  });
};
