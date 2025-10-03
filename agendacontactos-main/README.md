# COMPANIA MANAGER 🏢

**COMPANIA MANAGER** es una aplicación web modular para la gestión de entidades empresariales como países, regiones, ciudades, empresas, sucursales y contactos. Está construida con JavaScript puro, Bootstrap para el diseño visual, y JSON Server como backend simulado.

---

## 🚀 Características principales

- Arquitectura modular: cada entidad tiene su propio modelo, API y componentes.
- CRUD completo (Crear, Leer, Actualizar, Eliminar) para cada módulo.
- Validación básica de formularios (no permite campos vacíos).
- Interfaz limpia y profesional con Bootstrap.
- Backend simulado con `db.json` usando JSON Server.

---

   ## 📁 Estructura del proyecto
        ``` COMPANIAMANAGER/
                    ├── index.html
                    ├── app.js
                    ├── db.json
                    ├── App/
                    ├── Components/
                    │   ├── countries/
                    │   │   ├── regCountry.js
                    │   │   └── countryComponent.js
                    │   ├── regions/
                    │   │   ├── regRegion.js
                    │   │   └── regionComponent.js
                    │   ├── cities/
                    │   │   ├── regCity.js
                    │   │   └── cityComponent.js
                    │   ├── companies/
                    │   │   ├── regCompany.js
                    │   │   └── companyComponent.js
                    │   ├── branches/
                    │   │   ├── regBranch.js
                    │   │   └── branchComponent.js
                    │   └── contacts/
                    │       ├── regContact.js
                    │       └── contactComponent.js
                    ├── Models/
                    │   ├── countryModel.js
                    │   ├── regionModel.js
                    │   ├── cityModel.js
                    │   ├── companyModel.js
                    │   ├── branchModel.js
                    │   └── contactModel.js
                    └── Apis/
                        ├── country/
                        │   └── countryApi.js
                        ├── region/
                        │   └── regionApi.js
                        ├── city/
                        │   └── cityApi.js
                        ├── company/
                        │   └── companyApi.js
                        ├── branch/
                        │   └── branchApi.js
                        |── contact/
                        |    └── contactApi.js
                            └── README.md               
 ```

# 👨‍💻 Autor
Kevin - 👉 [@kvinnxz](https://github.com/kvinnxz/Crud-Gestor-de-Compa-ias_KevinPico.git/)

# ⚙️ Instalación y ejecución
1. Clona el repositorio o copia los archivos del proyecto.

2. Instala JSON Server globalmente si no lo tienes:
   npm install -g json-server

3. Ejecuta JSON Server en el archivo db.json:
   json-server --watch db.json --port 3000

4. Abre el archivo index.html con Live Server (extensión de VS Code).

5. Asegúrate de que el backend esté corriendo en http://localhost:3000
   y que el frontend esté cargado correctamente en el navegador.

6. ¡Listo! Ya puedes comenzar a registrar países, regiones, ciudades, empresas, sucursales y contactos.