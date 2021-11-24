//1. synchronous task
// console.log(`hello`);
// console.log(`world, `);
// console.log(`Good bye`);
//2. asynchronous task
console.log(`hello`);
//setTimeout=asynchronous function
let num = 0;
async function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`world, `);
      resolve(10);
    }, 3000);
  });
}

async function getNum() {
  num = await delay();
  console.log(`Good bye: ${num}`);
}
getNum();



const friends = [
    { fullname: 'Paul lee', address: 'Bangkok, Thailand' },
    { fullname: 'Yoko Naree', address: 'Kyoto, Japan' }
  ];
  
  function getFullName(name, surname) {
    return `${name} ${surname}`;
  }
  //getFriendName is a higher order function
  
  function getFriendName(name, surname, callbackFn) {
    const fullname = callbackFn(name, surname);
    console.log(fullname);
  }
  
  //getFullName is a callback function
  getFriendName('Paul', 'lee', getFullName);



//1. using promist.then() method
getFriendName('Paul', 'lee', getFullName)
.then((myFriendName) => {
  console.log(myFriendName);
  return myFriendName;
})
.then((friendFullName) => {
  console.log(friendFullName);
  getAddress(friendFullName).then((friendAddr) => console.log(friendAddr));
})
.catch((err) => console.log(err));

function getAddress(fullname) {
    return new Promise((resolve, reject) => {
      let myFriend = friends.find((friend) => friend.fullname.includes(fullname));
      if (myFriend === undefined) reject(new Error('your friend was not found'));
      resolve(myFriend.address);
    });
}

function getFriendName(name, surname, callbackFn) {
  return new Promise((resolve, reject) => {
    const fullname = callbackFn(name, surname);
    if (fullname === undefined) reject(new Error('cannot get full name!'));
    resolve(fullname);
  });
}