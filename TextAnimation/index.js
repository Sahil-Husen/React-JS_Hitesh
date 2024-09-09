let span = document.querySelectorAll('span')
span.forEach((item)=>{
    item.addEventListener('mouseover',()=>{
        item.classList.toggle("active")
         console.log(item);
    })
})