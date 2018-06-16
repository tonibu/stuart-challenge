export default store => next => action => {
  if (!action || !action.fetchConfig) {
    return next(action)
  }

  const config = action.fetchConfig;

  const path = config.path || '/';
  const method = config.method || 'POST';
  const body = JSON.stringify(config.body);

  return fetch(path, {
    method,
    body,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      };

      return response.json();
    });
}