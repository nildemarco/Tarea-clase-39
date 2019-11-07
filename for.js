// Hacer un programa que le permita a dos usuarios jugar al piedra, papel o tijera

// El primer usuario tiene que ingresar su eleccion
// Si no ingresa piedra, papel o tijera le decimos que no puede jugar
// Despues el segundo usuario
// Les respondemos quien gano .

// piedra gana a tijera
// papel gana piedra
// tijera gana a papel
// 



let puntosJugador1 = 0;
let puntosJugador2 = 0;

for (let i = 0; puntosJugador1 == 2 || puntosJugador2 == 2; i++) {
    let opcionIngresadaUno = prompt(`Usuario 1: Elegi piedra, papel o tijera?`)
    if (opcionIngresadaUno == "piedra" || opcionIngresadaUno == "papel" || opcionIngresadaUno == "tijera") {
        let opcionIngresadaDos = prompt(`Usuario 2: Elegi piedra, papel o tijera?`)
        if (opcionIngresadaDos == "piedra" || opcionIngresadaDos == "papel" || opcionIngresadaDos == "tijera") {
            if (opcionIngresadaDos == "piedra" && opcionIngresadaUno == "papel") {
                alert(`Gano el usuario 1`)
                puntosJugador1++
            }
            else if (opcionIngresadaDos == "papel" && opcionIngresadaUno == "piedra") {
                alert(` Gano el usuario 2 `)
                puntosJugador2++
            }
            else if (opcionIngresadaDos == "tijera" && opcionIngresadaUno == "papel") {
                alert(`Gano el usuario 2`)
                puntosJugador2++
            }
            else if (opcionIngresadaDos == "tijera" && opcionIngresadaUno == "piedra") {
                alert(`Gano el usuario 1`)
                puntosJugador1++
            }
            else if (opcionIngresadaDos == "papel" && opcionIngresadaUno == "tijera") {
                alert(`Gano el usuario 1`)
                puntosJugador1++
            }
            else if (opcionIngresadaDos == "piedra" && opcionIngresadaUno == "tijera") {
                alert(`Gano el usuario 2`)
                puntosJugador2++
            }
            else if (opcionIngresadaDos == opcionIngresadaUno) {
                alert(`Empate!`)
            }

        }
        else {
            alert(`No podes jugar`)
        }

    } else {
        alert(`No podes jugar`)
    }

}

