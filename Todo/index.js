// const select = document.querySelector("select");
  
// const para = document.querySelector("p");

// select.addEventListener("change", setValue);
 

// function setValue() {
//   const choose = select.value;
//   console.log(choose);
//   switch (choose) {
//     case "Sunny":
//       console.log(choose);
//       para.textContent = "It is sunny today!";
//       break;
//     case "Spring":
//       para.textContent = "It is Spring season";
//       break;

//     case "Cold":
//       para.textContent = "It is too cold";
//       break;
//     case'Too hot':
//     para.textContent = 'It is too hot';
//     break;
    
//     case 'Roam':
//       para.textContent = 'Lets go for roam'
//       break;
//     default:
//       para.textContent = ' ';
//   }
// }

 
 

const inputBox = document.getElementById("input-box");
const button = document.querySelector("button");
const list = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        inputBox.value = '';
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    saveData();
}
list.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

button.addEventListener("click", addTask);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}
function showTask(){
    const savedData = localStorage.getItem("data");
    if(savedData){
        list.innerHTML = savedData;
    }
}
window.addEventListener("load", showTask);