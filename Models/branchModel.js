export function createBranchModel(name, companyId) {
  return {
    name,
    companyId: parseInt(companyId),
    createdAt: new Date().toISOString()
  };
}
