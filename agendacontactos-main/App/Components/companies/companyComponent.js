import { getCompanies, deleteCompany, updateCompany } from '../../../Apis/company/companyApi.js';

export async function renderCompanyTable() {
  const companies = await getCompanies();
  const html = `
    <table class="table table-bordered">
      <thead class="table-dark"><tr><th>Nombre</th><th>ID Ciudad</th><th>Creado</th><th>Acciones</th></tr></thead>
      <tbody>
        ${companies.map(c => `
          <tr>
            <td><input type="text" value="${c.name}" class="form-control" id="name-${c.id}"></td>
            <td>${c.cityId}</td>
            <td>${new Date(c.createdAt).toLocaleDateString()}</td>
            <td>
              <button class="btn btn-warning btn-sm" onclick="updateCompanyUI(${c.id})">Actualizar</button>
              <button class="btn btn-danger btn-sm" onclick="deleteCompanyUI(${c.id})">Eliminar</button>
            </td>
          </tr>`).join('')}
      </tbody>
    </table>
  `;
  document.getElementById('company-table').innerHTML = html;

  window.updateCompanyUI = async (id) => {
    const newName = document.getElementById(`name-${id}`).value;
    await updateCompany(id, { name: newName });
    location.reload();
  };

  window.deleteCompanyUI = async (id) => {
    await deleteCompany(id);
    location.reload();
  };
}
