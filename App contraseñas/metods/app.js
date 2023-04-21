
// realiza una seleccion al azar de caracteres entre numeros ,letras,y algunos caracteres especiales(,:_-+*/#!?°$%&=)
// console.log('hola broo')


//let bank=verifPreferncias()
function randContraseña(long,bank) {
        if (long==0) {//verifica si la longitud es igual  a 0 en dado caso otorga una longitud automatica
            long = Math.floor(Math.random() * (14 - 8) + 8)//numero entre 8 y 14
            console.log(long)
        }
        let aleatoria = "";
        const caracteres = bank;
        console.log(long);
        if (long>20) {
            alert("cantidad de caracteres exede el maximo")
            document.getElementById("long").value="";
            let elemento=document.querySelector(".long");
            elemento.firstElementChild.innerHTML="cantidad de caracteres incorrecta"
        }else{
            for (let i = 0; i < long; i++) {
                aleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            }
            navigator.clipboard.writeText(aleatoria)
            document.getElementById("long").value=""
            let elemento=document.querySelector(".long");
            elemento.firstElementChild.innerHTML="contraseña ["+ aleatoria+"] generada y copiada al portapapeles"
            console.log(aleatoria);
            document.getElementById("long").value="";
            
        }
    return ;
};

function verifPreferncias() {
    let bank ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789;,:._{[}]¿-+*/#!?°$%&=()^><.|°¬'
    if (document.getElementById('noMay').checked) {
        console.log('no may');
        bank=bank.replace('ABCDEFGHIJKLMNOPQRSTUVWXYZ',''); 
    }
    
    if (document.getElementById('noMin').checked) {
        console.log('no min');
        bank=bank.replace('abcdefghijklmnopqrstuvwxyz','');
    }

    if (document.getElementById('noNum').checked) {
        console.log('no num');
        bank=bank.replace('0123456789','');
    }

    if (document.getElementById("noEspCar").checked) {
        bank=bank.replace(';,:._{[}]¿-+*/#!?°$%&=()^><.|°¬','');
    }

    return bank
}
function genContraseña() {
    const a=this.verifPreferncias();
    this.randContraseña(document.getElementById("long").value,a);
    return 
}

function verContraseña() {
    let elemento=document.querySelector(".verify")
    contraseña = document.getElementById("contrVerificar").value;
    
    if (contraseña.length>10){
        elemento.firstElementChild.innerHTML=`contraseña [${contraseña}] es segura`;
    }else{
        elemento.firstElementChild.innerHTML=`contraseña [${contraseña}]  NO es segura`;
    }
    document.getElementById("contrVerificar").value="";
    return
}


// document.querySelector('.contenido').innerHTML=`[${randContraseña(long)}] es su contraseña`;
// alert(`contraseña generada con ${long} caracteres`);

// console.log(aleatoria)