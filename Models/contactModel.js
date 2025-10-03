export function createContactModel(name, branchId) {
  return {
    name,
    branchId: parseInt(branchId),
    createdAt: new Date().toISOString()
  };
}
