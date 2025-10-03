import { createCountry } from '../../../Apis/country/countryApi.js';
import { createCountryModel } from '../../../Models/countryModel.js';

export function renderCountryForm() {
  const html = `
    <form id="new-country-form" class="mb-3">
      <input type="text" id="country-name" placeholder="Nombre del país" class="form-control mb-2" required>
      <button type="submit" class="btn btn-success">Agregar país</button>
    </form>
  `;
  document.getElementById('country-form').innerHTML = html;

  document.getElementById('new-country-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('country-name').value;
    const country = createCountryModel(name);
    await createCountry(country);
    location.reload();
  });
}
