export const fetchAllUsers = (success, error, query) => {
  $.ajax({
    method: 'GET',
    url: `api/users`,
    data: {query},
    success,
    error
  });
};

export const fetchSingleUser = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
    success,
    error
  });
};

export const patchUser = (user, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: {user},
    success,
    error
  });
};
