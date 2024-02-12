export function fetchAllProducts() {
  //todo
  return new Promise(async (resolve) => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();
    resolve({data});
  });
}
