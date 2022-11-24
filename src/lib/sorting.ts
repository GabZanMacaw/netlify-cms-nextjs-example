export function sortAlphabetically(field: string) {
  return (a, b) => {
    const flatA = a[field].toLowerCase();
    const flatB = b[field].toLowerCase();
    return flatA === flatB ? 0 : flatA < flatB ? -1 : 1;
  };
}

export function sortDate(field: string, oldest = false) {
  return (a, b) => {
    var dateA = new Date(a[field]).getTime();
    var dateB = new Date(b[field]).getTime();
    if (oldest) {
      return dateA === dateB ? 0 : dateA < dateB ? 1 : -1;
    } else {
      return dateA === dateB ? 0 : dateA > dateB ? 1 : -1;
    }
  };
}
