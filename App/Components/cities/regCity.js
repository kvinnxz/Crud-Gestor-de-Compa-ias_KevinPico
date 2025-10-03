import { createCity } from '../../../Apis/city/cityApi.js';
import { createCityModel } from '../../../Models/cityModel.js';
import { getRegions } from '../../../Apis/region/regionApi.js';

export async function renderCityForm() {
  const regions = await getRegions();
  const html = `
    <form id="new-city-form" class="mb-3">
      <input type="text" id="city-name" placeholder="Nombre de la ciudad" class="form-control mb-2" required>
      <select id="city-region" class="form-select mb-2" required>
        <option value="">Seleccione región</option>
        ${regions.map(r => `<option value="${r.id}">${r.name}</option>`).join('')}
      </select>
      <button type="submit" class="btn btn-success">Agregar ciudad</button>
    </form>
  `;
  document.getElementById('city-form').innerHTML = html;

  document.getElementById('new-city-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('city-name').value;
    const regionId = document.getElementById('city-region').value;
    const city = createCityModel(name, regionId);
    await createCity(city);
    location.reload();
  });
}
