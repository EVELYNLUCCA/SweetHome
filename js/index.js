const imagenes = document.querySelectorAll('.imagen');
console.log(imagenes);

imagenes.forEach(imagen =>{
    const textSibling = imagen.previousElementSibling;
    console.log(textSibling);

    imagen.addEventListener ('mouseover',(e) =>{
        textSibling.style.left ='-100px';
    })
    imagen.addEventListener ('mouseout',(e) =>{
        textSibling.style.left ='100px';
    })


})









