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

function addItems({ name, weather, imageUrl }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  }).then(checkResponse);
}

function deleteItems({ _id }) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
  }).then(checkResponse);
}

export { getItems, addItems, deleteItems, checkResponse };
