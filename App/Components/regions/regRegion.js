import { createRegion } from '../../../Apis/region/regionApi.js';
import { createRegionModel } from '../../../Models/regionModel.js';
import { getCountries } from '../../../Apis/country/countryApi.js';

export async function renderRegionForm() {
  const countries = await getCountries();
  const html = `
    <form id="new-region-form" class="mb-3">
      <input type="text" id="region-name" placeholder="Nombre de la región" class="form-control mb-2" required>
      <select id="region-country" class="form-select mb-2" required>
        <option value="">Seleccione país</option>
        ${countries.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
      </select>
      <button type="submit" class="btn btn-success">Agregar región</button>
    </form>
  `;
  document.getElementById('region-form').innerHTML = html;

  document.getElementById('new-region-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('region-name').value;
    const countryId = document.getElementById('region-country').value;
    const region = createRegionModel(name, countryId);
    await createRegion(region);
    location.reload();
  });
}
