import { getRegions, deleteRegion, updateRegion } from '../../../Apis/region/regionApi.js';

export async function renderRegionTable() {
  const regions = await getRegions();
  const html = `
    <table class="table table-bordered">
      <thead class="table-dark"><tr><th>Nombre</th><th>ID País</th><th>Creado</th><th>Acciones</th></tr></thead>
      <tbody>
        ${regions.map(r => `
          <tr>
            <td><input type="text" value="${r.name}" class="form-control" id="name-${r.id}"></td>
            <td>${r.countryId}</td>
            <td>${new Date(r.createdAt).toLocaleDateString()}</td>
            <td>
              <button class="btn btn-warning btn-sm" onclick="updateRegionUI(${r.id})">Actualizar</button>
              <button class="btn btn-danger btn-sm" onclick="deleteRegionUI(${r.id})">Eliminar</button>
            </td>
          </tr>`).join('')}
      </tbody>
    </table>
  `;
  document.getElementById('region-table').innerHTML = html;

  window.updateRegionUI = async (id) => {
    const newName = document.getElementById(`name-${id}`).value;
    await updateRegion(id, { name: newName });
    location.reload();
  };

  window.deleteRegionUI = async (id) => {
    await deleteRegion(id);
    location.reload();
  };
}
