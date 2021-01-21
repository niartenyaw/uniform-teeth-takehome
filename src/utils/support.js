const exactName = (r, term) => r.name.toLowerCase().split(" ").includes(term)
const inEmail = (r, term) => r.email.toLowerCase().includes(term)
const inName = (r, term) => r.name.toLowerCase().includes(term)

export const filter = (results, term) => {
  const lowerTerm = term.toLowerCase();
  return results.filter(r => inName(r, lowerTerm) || inEmail(r, lowerTerm));
};

export const sort = (results, term) => {
  return results.sort((a, b) => {
    if (exactName(a, term)) return -1;
    if (exactName(b, term)) return 1;

    if (inEmail(a, term)) return -1;
    if (inEmail(b, term)) return 1;

    // doesn't matter which is first
    return -1;
  })
};
