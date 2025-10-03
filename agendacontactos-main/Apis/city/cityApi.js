const BASE = 'http://localhost:3000/cities';

export async function getCities() {
  return fetch(BASE).then(res => res.json());
}

export async function createCity(data) {
  return fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export async function updateCity(id, data) {
  return fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export async function deleteCity(id) {
  return fetch(`${BASE}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}
