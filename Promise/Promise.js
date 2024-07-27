// // const promiseOne = new Promise((resolve,reject)=>{
// //     // Async tasks
// //     // Db connectivity, cryptography etc..
// //     setTimeout(()=>{
// //         console.log("Promise one executed")
// //         resolve()
// //     },1000)
// // }).then(()=>{
// //     console.log('One  reolved')
// // })

// // Promise Second
// // const PromiseSecond = new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         console.log('Promise 2nd is executed')
// //         // yaha resolve receive hota hai
// //         resolve({name:'sahil',age:21})

// //     },1000)
// // }).then((data)=>{
// //     console.log(data);
// //     console.log(data.name)
// //     console.log(data.age)
// // })

// // Promise Third

// const PromiseThird = new Promise((resolve, reject) => {
//   // any asyns task
//   let error = true;
//   setTimeout(() => {
//     if (!error) {
//       resolve({ username: "sahil", pass: 1234 });
//     } else {
//       reject("ERROR code got brust");
//     }
//   }, 1000);
// });
// PromiseThird.then((user) => {
//   console.log(user);
//   return user.username;
// })
//   .then((username) => {
//     console.log(username);
//   })

//   .catch((error) => {
//     console.log(error);
//   });

// async function getApiData(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = await response.json();
//         console.log(data);
//         console.log(response.status);
//         // console.log(response);

//     } catch (error) {
//             console.log(error);
//     }
// }
//  getApiData()

// Now fetching an API using FETCH WITH .then() and .catch() method

let response = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    JSON.stringify(data);
    console.log("Response data is ");
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
