
let usuario =  [
    {nombre: prompt("inserte su nombre de usuario").toUpperCase(), contraseña: prompt("Inserte su contraseña")},
    {saldo: 100, inversiones: ""}
    ]
    function ingresarUsuario () {
        if (usuario.nombre === usuario.nombre && usuario.contraseña === usuario.contraseña) {
            alert(`Bienvenido ${usuario[0].nombre.toUpperCase()}. Su saldo actual es: ${usuario[1].saldo}`)
        } else {
            alert("Usuario o contraseña no válidos")
        }
    }
    ingresarUsuario()
    
    let invertir = prompt("Desea hacer una inversión? (Responder `si` ó `no`)").toUpperCase()//"Desea hacer una inversión?" 
    let plazoDeInversion
    let cantidadDeInversion
    
    function invertirSaldo() {
        if (invertir === "si".toUpperCase()) {
            cantidadDeInversion =  parseFloat(prompt("Que cantidad desea invertir?"))
            
        } else {
            alert("Gracias por su tiempo")
        }
    
        if (cantidadDeInversion < usuario[1].saldo) {
            plazoDeInversion =  parseInt(prompt("A que plazo le gustaría invertir? 3, 6, ó 12 meses?"))
        }  else{
            alert("Su saldo no es suficiente para la inversión que desea realizar")
        }
    
    
    
        switch (plazoDeInversion) {
            case 3: 
            alert(`Su rendimiento en plazo de 3 meses sería: ${cantidadDeInversion * .09}`)
            alert(`El total de la inversión al final del plazo sería: ${cantidadDeInversion * 1.11}`)
            usuario[1].saldo -= cantidadDeInversion
            usuario[1].inversiones = "El saldo invertido a plazo de 3 meses es: " + cantidadDeInversion 
            break
    
            case 6: 
            alert(`Su rendimiento en plazo de 6 meses sería: ${cantidadDeInversion * .13}`)
            alert(`El total de la inversión al final del plazo sería: ${cantidadDeInversion * 1.13}`)
            usuario[1].saldo -= cantidadDeInversion
            usuario[1].inversiones = "El saldo invertido a plazo de 6 meses es: " + cantidadDeInversion
            break
    
            case 12: 
            alert(`Su rendimiento en plazo de 12 meses sería: ${cantidadDeInversion * .15}`)
            alert(`El total de la inversión al final del plazo sería: ${cantidadDeInversion * 1.13}`)
            usuario[1].saldo -= cantidadDeInversion
            usuario[1].inversiones = "El saldo invertido a plazo de 12 meses es: " + cantidadDeInversion
            break

            default:
                alert("El plazo es incorrecto, vuelva a intentarlo")
                break
        }
        let aceptarInversion = prompt("Proceder a invertir el monto? (responder `si` ó `no`)").toUpperCase
            if (aceptarInversion == "si".toUpperCase) {
                alert("Ha realizado su inversión correctamente")
            } else {
                alert("Inversión cancelada")
            }
    }
    invertirSaldo()
    
    let filtrarInversiones = usuario.filter((el) => el.inversiones)
    
    function consultarSaldosEInversiones() {    
        let consultarInversiones = prompt('Desea consultar sus inversiones? (responda "si" o "no")').toUpperCase()
        if (consultarInversiones == "si".toUpperCase()) {
            console.log(filtrarInversiones)
        } else {
            alert("Gracias, vuelva pronto")
        }
    }
    
    consultarSaldosEInversiones()
    