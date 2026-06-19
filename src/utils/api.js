const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`)
    .then(checkResponse)
    .then((items) => {
      items.reverse();
      return items;
    });
}

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function addItems({ name, weather, imageUrl }, token) {
  return fetch(`${baseUrl}/items`, {
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
  }).then(checkResponse);
}

function deleteItems({ _id }, token) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: { authorization: `Bearer ${token}` },
  }).then(checkResponse);
}

function addCardLike({_id}, token) {
  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "PUT",
    headers: { authorization: `Bearer ${token}` },
  }).then(checkResponse);
}

function removeCardLike({_id}, token) {
  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "DELETE",
    headers: { authorization: `Bearer ${token}` },
  }).then(checkResponse);
}

export { getItems, addItems, deleteItems, addCardLike, removeCardLike, checkResponse };
