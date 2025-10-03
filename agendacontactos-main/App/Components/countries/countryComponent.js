import { getCountries, deleteCountry, updateCountry } from '../../../Apis/country/countryApi.js';

export async function renderCountryTable() {
  const countries = await getCountries();
  const html = `
    <table class="table table-bordered">
      <thead class="table-dark">
        <tr><th>Nombre</th><th>Creado</th><th>Acciones</th></tr>
      </thead>
      <tbody>
        ${countries.map(c => `
          <tr>
            <td><input type="text" value="${c.name}" class="form-control" id="name-${c.id}"></td>
            <td>${new Date(c.createdAt).toLocaleDateString()}</td>
            <td>
              <button class="btn btn-warning btn-sm" onclick="updateCountryUI(${c.id})">Actualizar</button>
              <button class="btn btn-danger btn-sm" onclick="deleteCountryUI(${c.id})">Eliminar</button>
            </td>
          </tr>`).join('')}
      </tbody>
    </table>
  `;
  document.getElementById('country-table').innerHTML = html;

  window.updateCountryUI = async (id) => {
    const newName = document.getElementById(`name-${id}`).value;
    await updateCountry(id, { name: newName, updatedAt: new Date().toISOString() });
    location.reload();
  };

  window.deleteCountryUI = async (id) => {
    await deleteCountry(id);
    location.reload();
  };
}
