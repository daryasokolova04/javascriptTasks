const USERS = [
    { id: '001', name: "Алексей", age: 25 },
    { id: '002', name: "Иван", age: 28 },
    { id: '003', name: "Егор", age: 30 },
  ];
  

  function fetchUser(userId) {
    let res;
    for (let i = 0; i < USERS.length; i++) {
        if (USERS[i].id == userId) {
            res = USERS[i];
        }
    }
    try {
        return (res == undefined) ? err : res;
    } catch(err) {
        return 'no such id'
    }
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
