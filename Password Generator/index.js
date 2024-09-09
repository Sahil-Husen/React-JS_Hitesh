const display = document.getElementById("display");
const inputNumber = document.querySelector("#inputNumber");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const specialchar = document.querySelector("#specialchar");
const generatePass = document.querySelector("#generate");

generatePass.addEventListener("click", password);

function password() {
  let str = " ";
  let uppercases = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
  let lowercases = "abcdefghijklmnoprstuwxyz";
  let specials = "!@#$%^&*()_+{}|:><?~";
  let pass = "";

  if (!(uppercase.checked || lowercase.checked || specialchar.checked)) {
    alert("Please Select any choice");
  } else {
    if (uppercase.checked) {
      str += uppercases;
    }
    if (lowercase.checked) {
      str += lowercases;
    }
    if (specialchar.checked) {
      str += specials;
    }

    for (let i = 0; i < inputNumber.value; i++) {
      let index = Math.floor(Math.random() * str.length + 1);

      pass += str[index];
    }
    display.value = pass;
  }
}
