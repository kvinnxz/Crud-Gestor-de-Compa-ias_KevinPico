const BASE = 'http://localhost:3000/regions';

export async function getRegions() {
  return fetch(BASE).then(res => res.json());
}

export async function createRegion(data) {
  return fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export async function updateRegion(id, data) {
  return fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export async function deleteRegion(id) {
  return fetch(`${BASE}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}
