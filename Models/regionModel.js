export function createRegionModel(name, countryId) {
  return {
    name,
    countryId: parseInt(countryId),
    createdAt: new Date().toISOString()
  };
}
