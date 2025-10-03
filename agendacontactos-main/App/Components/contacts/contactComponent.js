import { getContacts, deleteContact, updateContact } from '../../../Apis/contact/contactApi.js';

export async function renderContactTable() {
  const contacts = await getContacts();
  const html = `
    <table class="table table-bordered">
      <thead class="table-dark"><tr><th>Nombre</th><th>ID Sucursal</th><th>Creado</th><th>Acciones</th></tr></thead>
      <tbody>
        ${contacts.map(c => `
          <tr>
            <td><input type="text" value="${c.name}" class="form-control" id="name-${c.id}"></td>
            <td>${c.branchId}</td>
            <td>${new Date(c.createdAt).toLocaleDateString()}</td>
            <td>
              <button class="btn btn-warning btn-sm" onclick="updateContactUI(${c.id})">Actualizar</button>
              <button class="btn btn-danger btn-sm" onclick="deleteContactUI(${c.id})">Eliminar</button>
            </td>
          </tr>`).join('')}
      </tbody>
    </table>
  `;
  document.getElementById('contact-table').innerHTML = html;

  window.updateContactUI = async (id) => {
    const newName = document.getElementById(`name-${id}`).value;
    await updateContact(id, { name: newName });
    location.reload();
  };

  window.deleteContactUI = async (id) => {
    await deleteContact(id);
    location.reload();
  };
}
