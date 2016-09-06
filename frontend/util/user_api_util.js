export const fetchAllUsers = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/users',
    success,
    error
  });
};

export const fetchSingleUser = (user, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
    data: {user},
    success,
    error
  });
};

export const patchUser = (success) => {
  $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: {user},
    success,
    error
  });
};
