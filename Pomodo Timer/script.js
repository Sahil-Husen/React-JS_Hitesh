const time = document.getElementById("time");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
let second = 0;
let minute = 25;
let timeId;

// let useMinute = prompt('Enter minute');


start.addEventListener("click", () => {
  // console.log('hello');
  timeId = setInterval(() => {
    if (second === 0) {
      second = 59;
      if (minute !== 0) {
        minute--;
      }
      // second = 1;
    }
    second--;
    time.innerText = `${minute} : ${second}`;
  }, 1000);
});

stop.addEventListener('click',()=>{
    clearInterval(timeId)
})

reset.addEventListener('click',()=>{
    time.innerText = `00:00`;
})
// let date, minute, second, hours;
// date = new Date();
// second = date.getSeconds();
// minute = date.getMinutes();
// // minute = 57;
// hours = date.getHours();

// // hours = 12;
// let interval

// start.addEventListener('click',()=>{
//    interval =  setInterval(()=>{
//         // second = 0;
//         second++;
//         if(second  == 59){
//             second = 0;
//             minute++;
//         }

//         if(minute == 59 && minute > 59){
//             minute = 0;
//             hours++;
//         }
//         if(hours ==12){
//             hours ="01";

//         }
//         // if(second == 59){
//         //     minute++;
//         // }
//         // if(minute ==59){
//         //     hours++;
//         // }
//         // console.log(hours + " " + minute +" " + second);
//         let times = hours+":"+minute +":"+second;

//         time.textContent = times;

//     },1000)
// })
//  stop.addEventListener('click',()=>alert('hello'))
