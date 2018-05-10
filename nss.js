// https://es.stackoverflow.com/questions/32023/c%C3%B3mo-validar-un-n%C3%BAmero-de-seguridad-social-nss-de-m%C3%A9xico
'use strict'

// Devuelve un booleano si es un NSS válido
// (deben ser 11 dígitos sin otro caracter en el medio)
function nssValido(nss) {
    const re       = /^(\d{2})(\d{2})(\d{2})\d{5}$/,
          validado = nss.match(re);
        
    if (!validado)  // 11 dígitos y subdelegación válida?
        return false;
        
    const subDeleg = parseInt(validado[1],10),
          anno     = new Date().getFullYear() % 100;
    let   annoAlta = parseInt(validado[2],10),
          annoNac  = parseInt(validado[3],10);
    
    //Comparar años (excepto que no tenga año de nacimiento)
    if (subDeleg != 97) {
        if (annoAlta <= anno) annoAlta += 100;
        if (annoNac  <= anno) annoNac  += 100;
        if (annoNac  >  annoAlta)
    	    return false; // Err: se dio de alta antes de nacer!
    }
    
    return luhn(nss);
}

// Algoritmo de Luhn
//  https://es.wikipedia.org/wiki/Algoritmo_de_Luhn
function luhn(nss) {
    let suma   = 0,
        par    = false,
        digito;
    
    for (let i = nss.length - 1; i >= 0; i--) {
        let digito = parseInt(nss.charAt(i),10);
        if (par)
        	if ((digito *= 2) > 9)
        	    digito -= 9;
        
        par = !par;
        suma += digito;
    }
    return (suma % 10) == 0;
}


//Handler para el evento cuando cambia el input
//Elimina cualquier caracter no numérico y comprueba validez
function validarInput(input) {
    let nss       = input.replace(/\D+/g,""),
        valido;
        
    if (nssValido(nss)) {
    	valido = true
    } else {
        valido = false
    }
    return valido
}

console.log(validarInput("72795608040"))
