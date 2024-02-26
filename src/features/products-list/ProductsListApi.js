export function fetchAllProducts() {
  //todo
  return new Promise(async (resolve) => {
    // const response = await fetch("https://dummyjson.com/products?_limit=100");
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
 
    resolve({ data });
  });
}

//for Brand Api

export function fetchBrandsProducts() {
  //todo
  return new Promise(async (resolve) => {
    // const response = await fetch("https://dummyjson.com/products?_limit=100");
    const response = await fetch("http://localhost:8080/brand");
    const data = await response.json(); 
    resolve({ data });
  });
}
//for Categories Api

export function fetchCategoriesProducts() {
  //todo
  return new Promise(async (resolve) => {
    // const response = await fetch("https://dummyjson.com/products?_limit=100");
    const response = await fetch("http://localhost:8080/category");
    const data = await response.json(); 
    resolve({ data });
  });
}




export function fetchAllProductsByFilter(filter) {
  console.log(filter)
  let queryString = "";

  
  for (let key in filter) {
    const categoriesValues = filter[key]
    console.log(categoriesValues)
 if (categoriesValues.length > 0) {
  console.log("ziro theke boro")
  const lastCategoriesValue = categoriesValues[categoriesValues.length -1]
  console.log({lastCategoriesValue})
  queryString += `${key}=${lastCategoriesValue}&`;
  console.log({queryString})
 }
  }
 

  //todo
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?"+queryString
    );
    console.log(queryString)
    const data = await response.json();
    console.log(data)
    resolve({ data });
  });
}


