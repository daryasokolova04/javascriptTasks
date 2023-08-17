const USERS = [
    { id: '001', name: "Алексей", age: 25 },
    { id: '002', name: "Иван", age: 28 },
    { id: '003', name: "Егор", age: 30 },
  ];

  function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = USERS.find((user) => user.id === id);
            if (user) {
                resolve(user);
            } else {
                reject(new Error('no such id'));
            }
        }, 2500)
    });
  }


  async function start() {
    // ...
    const result1 = await fetchUser('001');
    console.log(result1); // { id: '001', name: "Алексей", age: 25 }

    const result2 = await fetchUser('005');
    console.log(result2); // no such id
    // ...
  }
  
  start();
