const yearNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dates = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Sturday",
];
const years = [2022, 2023, 204, 2025];

let yearName = document.getElementsByClassName('yearName');
let date = document.getElementById('date')
let year = document.getElementById('year')
let day = document.getElementById('dayName')
let backward = document.getElementById('backward')
let forward = document.getElementById('forward');
 
 forward.addEventListener('click',()=>{
     dates.forEach(item=>{
       date.innerHTML =  item;
    })
 })

 wi