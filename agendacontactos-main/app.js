// Países
import { renderCountryForm } from './App/Components/countries/regCountry.js';
import { renderCountryTable } from './App/Components/countries/countryComponent.js';

// Regiones
import { renderRegionForm } from './App/Components/regions/regRegion.js';
import { renderRegionTable } from './App/Components/regions/regionComponent.js';

// Ciudades
import { renderCityForm } from './App/Components/cities/regCity.js';
import { renderCityTable } from './App/Components/cities/cityComponent.js';

// Empresas
import { renderCompanyForm } from './App/Components/companies/regCompany.js';
import { renderCompanyTable } from './App/Components/companies/companyComponent.js';

// Sucursales
import { renderBranchForm } from './App/Components/branches/regBranch.js';
import { renderBranchTable } from './App/Components/branches/branchComponent.js';

// Contactos
import { renderContactForm } from './App/Components/contacts/regContact.js';
import { renderContactTable } from './App/Components/contacts/contactComponent.js';

// Mostrar todos los módulos
renderCountryForm();   renderCountryTable();
renderRegionForm();    renderRegionTable();
renderCityForm();      renderCityTable();
renderCompanyForm();   renderCompanyTable();
renderBranchForm();    renderBranchTable();
renderContactForm();   renderContactTable();
