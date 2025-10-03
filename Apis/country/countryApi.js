const BASE = 'http://localhost:3000/countries';

export async function getCountries() {
  return fetch(BASE).then(res => res.json());
}

export async function createCountry(data) {
  return fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export async function updateCountry(id, data) {
  return fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export async function deleteCountry(id) {
  return fetch(`${BASE}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}

