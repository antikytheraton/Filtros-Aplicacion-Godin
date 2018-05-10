'use strict'


const fechaValida = (fecha) => {
    const   re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Enero|Marzo|Mayo|Julio|Agosto|Octubre|Diciembre)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Enero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Febrero))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre))|(?:1[0-2]|(?:Octubre|Noviembre|Diciembre)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
            validado = fecha.match(re)

    if (!validado)
        return false

    return true
}


const validarInput = (input) => {
    let fecha = input,
        valido;

    if (fechaValida(fecha)) {
        valido = true
    } else {
        valido = false
    }

    return valido
}


console.log(validarInput("01/Enero/2000"))
