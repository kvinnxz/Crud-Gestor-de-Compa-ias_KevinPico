export function createCountryModel(name) {
  return {
    name,
    createdAt: new Date().toISOString()
  };
}
