const Api = {
  search(term) {
    return fetch(`http://127.0.0.1:8080/?search=${term}`)
      .then(response => response.json())
  }
};

export default Api;
