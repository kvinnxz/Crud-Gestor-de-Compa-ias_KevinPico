import { getBranches, deleteBranch, updateBranch } from '../../../Apis/branch/branchApi.js';

export async function renderBranchTable() {
  const branches = await getBranches();
  const html = `
    <table class="table table-bordered">
      <thead class="table-dark"><tr><th>Nombre</th><th>ID Empresa</th><th>Creado</th><th>Acciones</th></tr></thead>
      <tbody>
        ${branches.map(b => `
          <tr>
            <td><input type="text" value="${b.name}" class="form-control" id="name-${b.id}"></td>
            <td>${b.companyId}</td>
            <td>${new Date(b.createdAt).toLocaleDateString()}</td>
            <td>
              <button class="btn btn-warning btn-sm" onclick="updateBranchUI(${b.id})">Actualizar</button>
              <button class="btn btn-danger btn-sm" onclick="deleteBranchUI(${b.id})">Eliminar</button>
            </td>
          </tr>`).join('')}
      </tbody>
    </table>
  `;
  document.getElementById('branch-table').innerHTML = html;

  window.updateBranchUI = async (id) => {
    const newName = document.getElementById(`name-${id}`).value;
    await updateBranch(id, { name: newName });
    location.reload();
  };

  window.deleteBranchUI = async (id) => {
    await deleteBranch(id);
    location.reload();
  };
}
