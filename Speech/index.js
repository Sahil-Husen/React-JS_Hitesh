let inputs = document.querySelector('input');
let button = document.querySelector('button')
let text;
button.addEventListener('click',speak);

function speak(){
    
    text = inputs.value
    const ans = new SpeechSynthesisUtterance(text)
   
    speechSynthesis.speak(ans)
     
  

}       


 
 
