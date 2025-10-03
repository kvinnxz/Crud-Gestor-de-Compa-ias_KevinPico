import { createContact } from '../../../Apis/contact/contactApi.js';
import { createContactModel } from '../../../Models/contactModel.js';
import { getBranches } from '../../../Apis/branch/branchApi.js';

export async function renderContactForm() {
  const branches = await getBranches();
  const html = `
    <form id="new-contact-form" class="mb-3">
      <input type="text" id="contact-name" placeholder="Nombre del contacto" class="form-control mb-2" required>
      <select id="contact-branch" class="form-select mb-2" required>
        <option value="">Seleccione sucursal</option>
        ${branches.map(b => `<option value="${b.id}">${b.name}</option>`).join('')}
      </select>
      <button type="submit" class="btn btn-success">Agregar contacto</button>
    </form>
  `;
  document.getElementById('contact-form').innerHTML = html;

  document.getElementById('new-contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const branchId = document.getElementById('contact-branch').value;
    const contact = createContactModel(name, branchId);
    await createContact(contact);
    location.reload();
  });
}
