const divBlack = document.querySelector('#black')

setInterval(()=>{
    divBlack.style.color = 'white';
    divBlack.innerHTML = 'Foi'

},3000)

divBlack.addEventListener('click', (e)=>{
    console.log(e.target.innerHTML)
})