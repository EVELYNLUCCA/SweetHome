const inputsNombre = document.querySelectorAll(".inputNombre");
const inputMail = document.getElementById("mail");
const inputTelefono = document.getElementById("tel");

const validarNombre=/^[a-z ,.'-]+$/i;
const validarMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const validarTel = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

console.log(inputsNombre);
console.log (inputMail);
console.log (inputTelefono);

inputsNombre.forEach(element => {
    element.addEventListener("keyup",(e) =>{
        console.log(e.target.value);
        console.log(validarNombre.test(e.target.value));
    
        if (validarNombre.test(e.target.value)) {
            e.target.style.outline= '1px solid green';
        } else {
            e.target.style.outline= '1px solid red';
        }
    })
})

inputMail


inputTelefono








