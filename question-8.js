// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้

const getUsers = async () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {return data.map(x => x.name)});

}

async function asynconousFunction(){
  const newUsers = await getUsers();
  console.log(newUsers);
}

asynconousFunction();




