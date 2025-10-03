export function createCityModel(name, regionId) {
  return {
    name,
    regionId: parseInt(regionId),
    createdAt: new Date().toISOString()
  };
}
