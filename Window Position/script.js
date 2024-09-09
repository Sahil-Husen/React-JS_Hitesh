let h1 = document.querySelectorAll('h1')
 positionX = h1[0];
 positionY = h1[1];
 
 

 window.addEventListener('mouseover',(e)=>{
    positionX.innerHTML = e.screenX
    positionY.innerHTML = e.screenY
    console.log(positionX);
    console.log(positionY);
     
 })

    