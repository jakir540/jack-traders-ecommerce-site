export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POSt",
      body: JSON.stringify(userData),
      headers: { "content-type": "aplication/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

// for user cradiantial checking

export function checkUser(logInfo) {
  return new Promise(async (resolve, reject) => {
    const email = logInfo.email;
    const password = logInfo.password;

    const res = await fetch("http://localhost:8080/users?email=" + email);
    const data = await res.json();
    console.log(data);

    if (data.length) {
      if (password === data[0].password) {
        console.log();
        resolve({ data: data[0] });
      } else {
        reject({ message: "Wrong Cradiantial" });
      }
    } else {
      reject({ message: "Wrong Cradiantial" });
    }
  });
}
