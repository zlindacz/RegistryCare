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

export const patchUser = (id, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: {user},
    success,
    error
  });
};
