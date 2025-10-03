import { createBranch } from '../../../Apis/branch/branchApi.js';
import { createBranchModel } from '../../../Models/branchModel.js';
import { getCompanies } from '../../../Apis/company/companyApi.js';

export async function renderBranchForm() {
  const companies = await getCompanies();
  const html = `
    <form id="new-branch-form" class="mb-3">
      <input type="text" id="branch-name" placeholder="Nombre de la sucursal" class="form-control mb-2" required>
      <select id="branch-company" class="form-select mb-2" required>
        <option value="">Seleccione empresa</option>
        ${companies.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
      </select>
      <button type="submit" class="btn btn-success">Agregar sucursal</button>
    </form>
  `;
  document.getElementById('branch-form').innerHTML = html;

  document.getElementById('new-branch-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('branch-name').value;
    const companyId = document.getElementById('branch-company').value;
    const branch = createBranchModel(name, companyId);
    await createBranch(branch);
    location.reload();
  });
}
