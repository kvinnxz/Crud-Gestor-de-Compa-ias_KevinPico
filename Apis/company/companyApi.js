const BASE = 'http://localhost:3000/companies';

export async function getCompanies() {
  return fetch(BASE).then(res => res.json());
}

export async function createCompany(data) {
  return fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export async function updateCompany(id, data) {
  return fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export async function deleteCompany(id) {
  return fetch(`${BASE}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}
