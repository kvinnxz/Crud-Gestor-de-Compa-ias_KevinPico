export function createCompanyModel(name, cityId) {
  return {
    name,
    cityId: parseInt(cityId),
    createdAt: new Date().toISOString()
  };
}
