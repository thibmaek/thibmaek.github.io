export default (arr, prop) => arr.sort((a, b) => a[prop] < b[prop] ? - 1 : 1);
