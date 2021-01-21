// could optimize by caching these
const exactName = (r, term) => r.name.toLowerCase().split(" ").includes(term)
const inEmail = (r, term) => r.email.toLowerCase().includes(term)
const inName = (r, term) => r.name.toLowerCase().includes(term)

export const filter = (results, term) => {
  const lowerTerm = term.toLowerCase();
  return results.filter(r => inName(r, lowerTerm) || inEmail(r, lowerTerm));
};

export const toObject = (results) => {
  const obj = {};
  results.forEach(r => obj[r.id] = r)

  return obj;
};

export const sort = (results, term) => {
  const lowerTerm = term.toLowerCase();
  return Object.values(results).sort((a, b) => {
    // Keep in same order if possible
    if (exactName(a, lowerTerm)) return -1;
    if (exactName(b, lowerTerm)) return 1;

    if (inEmail(a, lowerTerm)) return -1;
    if (inEmail(b, lowerTerm)) return 1;

    return -1;
  })
};

