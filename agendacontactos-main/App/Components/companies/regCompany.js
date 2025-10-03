import { createCompany } from '../../../Apis/company/companyApi.js';
import { createCompanyModel } from '../../../Models/companyModel.js';
import { getCities } from '../../../Apis/city/cityApi.js';

export async function renderCompanyForm() {
  const cities = await getCities();
  const html = `
    <form id="new-company-form" class="mb-3">
      <input type="text" id="company-name" placeholder="Nombre de la empresa" class="form-control mb-2" required>
      <select id="company-city" class="form-select mb-2" required>
        <option value="">Seleccione ciudad</option>
        ${cities.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
      </select>
      <button type="submit" class="btn btn-success">Agregar empresa</button>
    </form>
  `;
  document.getElementById('company-form').innerHTML = html;

  document.getElementById('new-company-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('company-name').value;
    const cityId = document.getElementById('company-city').value;
    const company = createCompanyModel(name, cityId);
    await createCompany(company);
    location.reload();
  });
}