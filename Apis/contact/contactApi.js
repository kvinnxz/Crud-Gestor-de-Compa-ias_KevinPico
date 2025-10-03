const BASE = 'http://localhost:3000/contacts';

export async function getContacts() {
  return fetch(BASE).then(res => res.json());
}

export async function createContact(data) {
  return fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export async function updateContact(id, data) {
  return fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export async function deleteContact(id) {
  return fetch(`${BASE}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}
