const baseUrl = process.env.NODE_ENV === "production" 
  ? "https://api.jayniechwtwr.thrilladesign.com"
  : "http://localhost:3001";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

function getItems() {
  return request(`${baseUrl}/items`)
    .then((items) => {
      items.reverse();
      return items;
    });
}

function addItems({ name, weather, imageUrl }, token) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  });
}

function deleteItems({ _id }, token) {
  return request(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: { authorization: `Bearer ${token}` },
  });
}

function addCardLike({ _id }, token) {
  return request(`${baseUrl}/items/${_id}/likes`, {
    method: "PUT",
    headers: { authorization: `Bearer ${token}` },
  });
}

function removeCardLike({ _id }, token) {
  return request(`${baseUrl}/items/${_id}/likes`, {
    method: "DELETE",
    headers: { authorization: `Bearer ${token}` },
  });
}

export {
  getItems,
  addItems,
  deleteItems,
  addCardLike,
  removeCardLike,
  checkResponse,
};
