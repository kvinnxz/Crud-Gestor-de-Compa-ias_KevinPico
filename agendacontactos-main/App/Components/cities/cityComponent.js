import { getCities, deleteCity, updateCity } from '../../../Apis/city/cityApi.js';

export async function renderCityTable() {
  const cities = await getCities();
  const html = `
    <table class="table table-bordered">
      <thead class="table-dark"><tr><th>Nombre</th><th>ID Región</th><th>Creado</th><th>Acciones</th></tr></thead>
      <tbody>
        ${cities.map(c => `
          <tr>
            <td><input type="text" value="${c.name}" class="form-control" id="name-${c.id}"></td>
            <td>${c.regionId}</td>
            <td>${new Date(c.createdAt).toLocaleDateString()}</td>
            <td>
              <button class="btn btn-warning btn-sm" onclick="updateCityUI(${c.id})">Actualizar</button>
              <button class="btn btn-danger btn-sm" onclick="deleteCityUI(${c.id})">Eliminar</button>
            </td>
          </tr>`).join('')}
      </tbody>
    </table>
  `;
  document.getElementById('city-table').innerHTML = html;

  window.updateCityUI = async (id) => {
    const newName = document.getElementById(`name-${id}`).value;
    await updateCity(id, { name: newName });
    location.reload();
  };

  window.deleteCityUI = async (id) => {
    await deleteCity(id);
    location.reload();
  };
}
