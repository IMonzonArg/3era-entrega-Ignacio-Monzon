const seleccionBares = document.getElementById("seleccionBar")
const cartaOnlineBares = document.getElementById("menuBares")
let cuentaComanda = 0


seleccionBares.addEventListener("change", () => {
    const barSeleccionado = seleccionBares.value;
    cartaOnlineBares.innerHTML = "";

    if (barSeleccionado === "bar1") {
        mostrarBar1();
    } else if (barSeleccionado === "bar2") {
        mostrarBar2();
    } else if (barSeleccionado === "bar3") {
        mostrarBar3();
    }
});

//-------------------------------------------------- Comienza logica de function bar 1 --------------------------------------------------

function mostrarBar1() {
    const infoBar = document.createElement("h2")
    infoBar.textContent = "Random Bar"
    cartaOnlineBares.appendChild(infoBar)

    const bebidasTitulo = document.createElement("h3")
    bebidasTitulo.textContent = "Bebidas"
    cartaOnlineBares.appendChild(bebidasTitulo)



    //-------------------------------------------------- Comienza logica de bebidas --------------------------------------------------

    // -------------------------------------------------- Primera opcion
    const bebidaA1 = document.createElement("p");
    bebidaA1.textContent = "1. " + cartaBar1[0].productos[0].nombre + " $" + cartaBar1[0].productos[0].precio + " ";

    //boton sumar
    const bebidaA1Sumar = document.createElement("button")
    bebidaA1Sumar.textContent = " + "
    bebidaA1Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[0].productos[0].precio
        console.log("Bebida elegida: " + cartaBar1[0].productos[0].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    bebidaA1.appendChild(bebidaA1Sumar)
    cartaOnlineBares.appendChild(bebidaA1);

    // -------------------------------------------------- Segunda opcion
    const bebidaA2 = document.createElement("p");
    bebidaA2.textContent = "2. " + cartaBar1[0].productos[1].nombre + " $" + cartaBar1[0].productos[1].precio;

    //boton sumar
    const bebidaA2Sumar = document.createElement("button")
    bebidaA2Sumar.textContent = " + "
    bebidaA2Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[0].productos[1].precio
        console.log("Bebida elegida: " + cartaBar1[0].productos[1].nombre + " | Total parcial: $ " + cuentaComanda);
    });

    bebidaA2.appendChild(bebidaA2Sumar)
    cartaOnlineBares.appendChild(bebidaA2);

    // -------------------------------------------------- Tercera opcion
    const bebidaA3 = document.createElement("p");
    bebidaA3.textContent = "3. " + cartaBar1[0].productos[2].nombre + " $" + cartaBar1[0].productos[2].precio;

    //boton sumar
    const bebidaA3Sumar = document.createElement("button")
    bebidaA3Sumar.textContent = " + "
    bebidaA3Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[0].productos[2].precio
        console.log("Bebida elegida: " + cartaBar1[0].productos[2].nombre + " | Total parcial: $ " + cuentaComanda);
    });

    // -------------------------------------------------- Cuarta opcion
    bebidaA3.appendChild(bebidaA3Sumar)
    cartaOnlineBares.appendChild(bebidaA3);


    const bebidaA4 = document.createElement("p");
    bebidaA4.textContent = "4. " + cartaBar1[0].productos[3].nombre + " $" + cartaBar1[0].productos[3].precio;

    //boton sumar
    const bebidaA4Sumar = document.createElement("button")
    bebidaA4Sumar.textContent = " + "
    bebidaA4Sumar
        .addEventListener("click", () => {
            cuentaComanda += cartaBar1[0].productos[3].precio
            console.log("Bebida elegida: " + cartaBar1[0].productos[3].nombre + " | Total parcial: $ " + cuentaComanda);
        });
    bebidaA4.appendChild(bebidaA4Sumar)
    cartaOnlineBares.appendChild(bebidaA4);

    // -------------------------------------------------- Quinta opcion
    const bebidaA5 = document.createElement("p");
    bebidaA5.textContent = "5. " + cartaBar1[0].productos[4].nombre + " $" + cartaBar1[0].productos[4].precio;

    //boton sumar
    const bebidaA5Sumar = document.createElement("button")
    bebidaA5Sumar.textContent = " + "
    bebidaA5Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[0].productos[4].precio
        console.log("Bebida elegida: " + cartaBar1[0].productos[4].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    bebidaA5.appendChild(bebidaA5Sumar)
    cartaOnlineBares.appendChild(bebidaA5);

    // -------------------------------------------------- Sexta opcion
    const bebidaA6 = document.createElement("p");
    bebidaA6.textContent = "6. " + cartaBar1[0].productos[5].nombre + " $" + cartaBar1[0].productos[5].precio;

    //boton sumar
    const bebidaA6Sumar = document.createElement("button")
    bebidaA6Sumar.textContent = " + "
    bebidaA6Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[0].productos[5].precio
        console.log("Bebida elegida: " + cartaBar1[0].productos[5].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    bebidaA6.appendChild(bebidaA6Sumar)
    cartaOnlineBares.appendChild(bebidaA6);

    // -------------------------------------------------- Septima opcion
    const bebidaA7 = document.createElement("p");
    bebidaA7.textContent = "7. " + cartaBar1[0].productos[6].nombre + " $" + cartaBar1[0].productos[6].precio;

    //boton sumar
    const bebidaA7Sumar = document.createElement("button")
    bebidaA7Sumar.textContent = " + "
    bebidaA7Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[0].productos[6].precio
        console.log("Bebida elegida: " + cartaBar1[0].productos[6].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    bebidaA7.appendChild(bebidaA7Sumar)
    cartaOnlineBares.appendChild(bebidaA7);

    // -------------------------------------------------- Octava opcion
    const bebidaA8 = document.createElement("p");
    bebidaA8.textContent = "8. " + cartaBar1[0].productos[7].nombre + " $" + cartaBar1[0].productos[7].precio;

    //boton sumar
    const bebidaA8Sumar = document.createElement("button")
    bebidaA8Sumar.textContent = " + "
    bebidaA8Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[0].productos[7].precio
        console.log("Bebida elegida: " + cartaBar1[0].productos[7].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    bebidaA8.appendChild(bebidaA8Sumar)
    cartaOnlineBares.appendChild(bebidaA8);

    //-------------------------------------------------- Termina logica de bebidas --------------------------------------------------

    // -------------------------------------------------- Comienza logica de entradas --------------------------------------------------

    const entradasTitulo = document.createElement("h3")
    entradasTitulo.textContent = "Entradas"
    cartaOnlineBares.appendChild(entradasTitulo)

    // -------------------------------------------------- Primera opcion
    const entradaA1 = document.createElement("p");
    entradaA1.textContent = "1. " + cartaBar1[1].productos[0].nombre + " $" + cartaBar1[1].productos[0].precio;

    //boton sumar
    const entradaA1Sumar = document.createElement("button")
    entradaA1Sumar.textContent = " + "
    entradaA1Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[1].productos[0].precio
        console.log("Entrada elegida: " + cartaBar1[1].productos[0].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    entradaA1.appendChild(entradaA1Sumar)
    cartaOnlineBares.appendChild(entradaA1);

    // -------------------------------------------------- Segunda opcion

    const entradaA2 = document.createElement("p");
    entradaA2.textContent = "2. " + cartaBar1[1].productos[1].nombre + " $" + cartaBar1[1].productos[1].precio;

    //boton sumar
    const entradaA2Sumar = document.createElement("button")
    entradaA2Sumar.textContent = " + "
    entradaA2Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[1].productos[1].precio
        console.log("Entrada elegida: " + cartaBar1[1].productos[1].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    entradaA2.appendChild(entradaA2Sumar)
    cartaOnlineBares.appendChild(entradaA2);

    // -------------------------------------------------- Tercera opcion
    const entradaA3 = document.createElement("p");
    entradaA3.textContent = "3. " + cartaBar1[1].productos[2].nombre + " $" + cartaBar1[1].productos[2].precio;

    //boton sumar
    const entradaA3Sumar = document.createElement("button")
    entradaA3Sumar.textContent = " + "
    entradaA3Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[1].productos[2].precio
        console.log("Entrada elegida: " + cartaBar1[1].productos[2].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    entradaA3.appendChild(entradaA3Sumar)
    cartaOnlineBares.appendChild(entradaA3);

    // -------------------------------------------------- Cuarta opcion
    const entradaA4 = document.createElement("p");
    entradaA4.textContent = "4. " + cartaBar1[1].productos[3].nombre + " $" + cartaBar1[1].productos[3].precio;

    //boton sumar
    const entradaA4Sumar = document.createElement("button")
    entradaA4Sumar.textContent = " + "
    entradaA4Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[1].productos[3].precio
        console.log("Entrada elegida: " + cartaBar1[1].productos[3].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    entradaA4.appendChild(entradaA4Sumar)
    cartaOnlineBares.appendChild(entradaA4);

    // --------------------------------------------------  Quinta opcion
    const entradaA5 = document.createElement("p");
    entradaA5.textContent = "5. " + cartaBar1[1].productos[4].nombre + " $" + cartaBar1[1].productos[4].precio;

    //boton sumar
    const entradaA5Sumar = document.createElement("button")
    entradaA5Sumar.textContent = " + "
    entradaA5Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[1].productos[4].precio
        console.log("Entrada elegida: " + cartaBar1[1].productos[4].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    entradaA5.appendChild(entradaA5Sumar)
    cartaOnlineBares.appendChild(entradaA5);

    // -------------------------------------------------- Termina logica de entradas --------------------------------------------------

    // -------------------------------------------------- Comienza logica de plato principal --------------------------------------------------

    const platoPrincipalTitulo = document.createElement("h3")
    platoPrincipalTitulo.textContent = "Plato Principal"
    cartaOnlineBares.appendChild(platoPrincipalTitulo)

    // -------------------------------------------------- Primera opcion
    const principalA1 = document.createElement("p");
    principalA1.textContent = "1. " + cartaBar1[2].productos[0].nombre + " $" + cartaBar1[2].productos[0].precio;

    //boton sumar
    const principalA1Sumar = document.createElement("button")
    principalA1Sumar.textContent = " + "
    principalA1Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[2].productos[0].precio
        console.log("Plato principal elegido: " + cartaBar1[2].productos[0].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    principalA1.appendChild(principalA1Sumar)
    cartaOnlineBares.appendChild(principalA1);

    // -------------------------------------------------- Segunda opcion
    const principalA2 = document.createElement("p");
    principalA2.textContent = "2. " + cartaBar1[2].productos[1].nombre + " $" + cartaBar1[2].productos[1].precio;

    //boton sumar
    const principalA2Sumar = document.createElement("button")
    principalA2Sumar.textContent = " + "
    principalA2Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[2].productos[1].precio
        console.log("Plato principal elegido: " + cartaBar1[2].productos[1].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    principalA2.appendChild(principalA2Sumar)
    cartaOnlineBares.appendChild(principalA2);

    // -------------------------------------------------- Tercera opcion
    const principalA3 = document.createElement("p");
    principalA3.textContent = "3. " + cartaBar1[2].productos[2].nombre + " $" + cartaBar1[2].productos[2].precio;

    //boton sumar
    const principalA3Sumar = document.createElement("button")
    principalA3Sumar.textContent = " + "
    principalA3Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[2].productos[2].precio
        console.log("Plato principal elegido: " + cartaBar1[2].productos[2].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    principalA3.appendChild(principalA3Sumar)
    cartaOnlineBares.appendChild(principalA3);

    // -------------------------------------------------- Cuarta opcion
    const principalA4 = document.createElement("p");
    principalA4.textContent = "4. " + cartaBar1[2].productos[3].nombre + " $" + cartaBar1[2].productos[3].precio;

    //boton sumar
    const principalA4Sumar = document.createElement("button")
    principalA4Sumar.textContent = " + "
    principalA4Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[2].productos[3].precio
        console.log("Plato principal elegido: " + cartaBar1[2].productos[3].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    principalA4.appendChild(principalA4Sumar)
    cartaOnlineBares.appendChild(principalA4);

    // -------------------------------------------------- Quinta opcion
    const principalA5 = document.createElement("p");
    principalA5.textContent = "5. " + cartaBar1[2].productos[4].nombre + " $" + cartaBar1[2].productos[4].precio;

    //boton sumar
    const principalA5Sumar = document.createElement("button")
    principalA5Sumar.textContent = " + "
    principalA5Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[2].productos[4].precio
        console.log("Plato principal elegido: " + cartaBar1[2].productos[4].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    principalA5.appendChild(principalA5Sumar)
    cartaOnlineBares.appendChild(principalA5);

    // -------------------------------------------------- termina logica de plato principal --------------------------------------------------

    // -------------------------------------------------- Comienza logica de postres --------------------------------------------------

    const postresTitulo = document.createElement("h3")
    postresTitulo.textContent = "Postres"
    cartaOnlineBares.appendChild(postresTitulo)
    // -------------------------------------------------- Primera opcion

    const postreA1 = document.createElement("p");
    postreA1.textContent = "1. " + cartaBar1[3].productos[0].nombre + " $" + cartaBar1[3].productos[0].precio;
    //boton sumar
    const postreA1Sumar = document.createElement("button")
    postreA1Sumar.textContent = " + "
    postreA1Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[3].productos[0].precio
        console.log("Postre elegido: " + cartaBar1[3].productos[0].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    postreA1.appendChild(postreA1Sumar)
    cartaOnlineBares.appendChild(postreA1);

    // -------------------------------------------------- Segunda opcion
    const postreA2 = document.createElement("p");
    postreA2.textContent = "2. " + cartaBar1[3].productos[1].nombre + " $" + cartaBar1[3].productos[1].precio;
    //boton sumar
    const postreA2Sumar = document.createElement("button")
    postreA2Sumar.textContent = " + "
    postreA2Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[3].productos[1].precio
        console.log("Postre elegido: " + cartaBar1[3].productos[1].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    postreA2.appendChild(postreA2Sumar)
    cartaOnlineBares.appendChild(postreA2);

    // -------------------------------------------------- Tercera opcion
    const postreA3 = document.createElement("p");
    postreA3.textContent = "3. " + cartaBar1[3].productos[2].nombre + " $" + cartaBar1[3].productos[2].precio;
    //boton sumar
    const postreA3Sumar = document.createElement("button")
    postreA3Sumar.textContent = " + "
    postreA3Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[3].productos[2].precio
        console.log("Postre elegido: " + cartaBar1[3].productos[2].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    postreA3.appendChild(postreA3Sumar)
    cartaOnlineBares.appendChild(postreA3);

    // -------------------------------------------------- Cuarta opcion
    const postreA4 = document.createElement("p");
    postreA4.textContent = "4. " + cartaBar1[3].productos[3].nombre + " $" + cartaBar1[3].productos[3].precio;
    //boton sumar
    const postreA4Sumar = document.createElement("button")
    postreA4Sumar.textContent = " + "
    postreA4Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[3].productos[3].precio
        console.log("Postre elegido: " + cartaBar1[3].productos[3].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    postreA4.appendChild(postreA4Sumar)
    cartaOnlineBares.appendChild(postreA4);

    // -------------------------------------------------- Quinta opcion
    const postreA5 = document.createElement("p");
    postreA5.textContent = "5. " + cartaBar1[3].productos[4].nombre + " $" + cartaBar1[3].productos[4].precio;
    //boton sumar
    const postreA5Sumar = document.createElement("button")
    postreA5Sumar.textContent = " + "
    postreA5Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar1[3].productos[4].precio
        console.log("Postre elegido: " + cartaBar1[3].productos[4].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    postreA5.appendChild(postreA5Sumar)
    cartaOnlineBares.appendChild(postreA5);
}

// -------------------------------------------------- termina logica de postres --------------------------------------------------

// -------------------------------------------------- termina logica de function bar 1 --------------------------------------------------

//-------------------------------------------------- Comienza logica de function bar 2 --------------------------------------------------

function mostrarBar2() {
    const infoBar = document.createElement("h2")
    infoBar.textContent = "Santa Calma Bar"
    cartaOnlineBares.appendChild(infoBar)

    const bebidasTitulo = document.createElement("h3")
    bebidasTitulo.textContent = "Bebidas"
    cartaOnlineBares.appendChild(bebidasTitulo)

    //-------------------------------------------------- Comienza logica de bebidas --------------------------------------------------

    // -------------------------------------------------- Primera opcion
    const bebidaB1 = document.createElement("p");
    bebidaB1.textContent = "1. " + cartaBar2[0].productos[0].nombre + " $" + cartaBar2[0].productos[0].precio + " ";

    //boton sumar
    const bebidaB1Sumar = document.createElement("button")
    bebidaB1Sumar.textContent = " + "
    bebidaB1Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[0].productos[0].precio
        console.log("Bebida elegida: " + cartaBar2[0].productos[0].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    bebidaB1.appendChild(bebidaB1Sumar)
    cartaOnlineBares.appendChild(bebidaB1);

    // -------------------------------------------------- Segunda opcion
    const bebidaB2 = document.createElement("p");
    bebidaB2.textContent = "2. " + cartaBar2[0].productos[1].nombre + " $" + cartaBar2[0].productos[1].precio;

    //boton sumar
    const bebidaB2Sumar = document.createElement("button")
    bebidaB2Sumar.textContent = " + "
    bebidaB2Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[0].productos[1].precio
        console.log("Bebida elegida: " + cartaBar2[0].productos[1].nombre + " | Total parcial: $ " + cuentaComanda);
    });

    bebidaB2.appendChild(bebidaB2Sumar)
    cartaOnlineBares.appendChild(bebidaB2);

    // -------------------------------------------------- Tercera opcion
    const bebidaB3 = document.createElement("p");
    bebidaB3.textContent = "3. " + cartaBar2[0].productos[2].nombre + " $" + cartaBar2[0].productos[2].precio;

    //boton sumar
    const bebidaB3Sumar = document.createElement("button")
    bebidaB3Sumar.textContent = " + "
    bebidaB3Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[0].productos[2].precio
        console.log("Bebida elegida: " + cartaBar2[0].productos[2].nombre + " | Total parcial: $ " + cuentaComanda);
    });

    bebidaB3.appendChild(bebidaB3Sumar)
    cartaOnlineBares.appendChild(bebidaB3);

    // -------------------------------------------------- Cuarta opcion
    const bebidaB4 = document.createElement("p");
    bebidaB4.textContent = "4. " + cartaBar2[0].productos[3].nombre + " $" + cartaBar2[0].productos[3].precio;

    //boton sumar
    const bebidaB4Sumar = document.createElement("button")
    bebidaB4Sumar.textContent = " + "
    bebidaB4Sumar
        .addEventListener("click", () => {
            cuentaComanda += cartaBar2[0].productos[3].precio
            console.log("Bebida elegida: " + cartaBar2[0].productos[3].nombre + " | Total parcial: $ " + cuentaComanda);
        });
    bebidaB4.appendChild(bebidaB4Sumar)
    cartaOnlineBares.appendChild(bebidaB4);

    // -------------------------------------------------- Quinta opcion
    const bebidaB5 = document.createElement("p");
    bebidaB5.textContent = "5. " + cartaBar2[0].productos[4].nombre + " $" + cartaBar2[0].productos[4].precio;

    //boton sumar
    const bebidaB5Sumar = document.createElement("button")
    bebidaB5Sumar.textContent = " + "
    bebidaB5Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[0].productos[4].precio
        console.log("Bebida elegida: " + cartaBar2[0].productos[4].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    bebidaB5.appendChild(bebidaB5Sumar)
    cartaOnlineBares.appendChild(bebidaB5);

    // -------------------------------------------------- Sexta opcion
    const bebidaB6 = document.createElement("p");
    bebidaB6.textContent = "6. " + cartaBar2[0].productos[5].nombre + " $" + cartaBar2[0].productos[5].precio;

    //boton sumar
    const bebidaB6Sumar = document.createElement("button")
    bebidaB6Sumar.textContent = " + "
    bebidaB6Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[0].productos[5].precio
        console.log("Bebida elegida: " + cartaBar2[0].productos[5].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    bebidaB6.appendChild(bebidaB6Sumar)
    cartaOnlineBares.appendChild(bebidaB6);

    // -------------------------------------------------- Septima opcion
    const bebidaB7 = document.createElement("p");
    bebidaB7.textContent = "7. " + cartaBar2[0].productos[6].nombre + " $" + cartaBar2[0].productos[6].precio;

    //boton sumar
    const bebidaB7Sumar = document.createElement("button")
    bebidaB7Sumar.textContent = " + "
    bebidaB7Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[0].productos[6].precio
        console.log("Bebida elegida: " + cartaBar2[0].productos[6].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    bebidaB7.appendChild(bebidaB7Sumar)
    cartaOnlineBares.appendChild(bebidaB7);

    // -------------------------------------------------- Octava opcion
    const bebidaB8 = document.createElement("p");
    bebidaB8.textContent = "8. " + cartaBar2[0].productos[7].nombre + " $" + cartaBar2[0].productos[7].precio;

    //boton sumar
    const bebidaB8Sumar = document.createElement("button")
    bebidaB8Sumar.textContent = " + "
    bebidaB8Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[0].productos[7].precio
        console.log("Bebida elegida: " + cartaBar2[0].productos[7].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    bebidaB8.appendChild(bebidaB8Sumar)
    cartaOnlineBares.appendChild(bebidaB8);

    //-------------------------------------------------- Termina logica de bebidas --------------------------------------------------

    // -------------------------------------------------- Comienza logica de entradas --------------------------------------------------

    const entradasTitulo = document.createElement("h3")
    entradasTitulo.textContent = "Entradas"
    cartaOnlineBares.appendChild(entradasTitulo)

    // -------------------------------------------------- Primera opcion
    const entradaB1 = document.createElement("p");
    entradaB1.textContent = "1. " + cartaBar2[1].productos[0].nombre + " $" + cartaBar2[1].productos[0].precio;

    //boton sumar
    const entradaB1Sumar = document.createElement("button")
    entradaB1Sumar.textContent = " + "
    entradaB1Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[1].productos[0].precio
        console.log("Entrada elegida: " + cartaBar2[1].productos[0].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    entradaB1.appendChild(entradaB1Sumar)
    cartaOnlineBares.appendChild(entradaB1);

    // -------------------------------------------------- Segunda opcion

    const entradaB2 = document.createElement("p");
    entradaB2.textContent = "2. " + cartaBar2[1].productos[1].nombre + " $" + cartaBar2[1].productos[1].precio;

    //boton sumar
    const entradaB2Sumar = document.createElement("button")
    entradaB2Sumar.textContent = " + "
    entradaB2Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[1].productos[1].precio
        console.log("Entrada elegida: " + cartaBar2[1].productos[1].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    entradaB2.appendChild(entradaB2Sumar)
    cartaOnlineBares.appendChild(entradaB2);

    // -------------------------------------------------- Tercera opcion
    const entradaB3 = document.createElement("p");
    entradaB3.textContent = "3. " + cartaBar2[1].productos[2].nombre + " $" + cartaBar2[1].productos[2].precio;

    //boton sumar
    const entradaB3Sumar = document.createElement("button")
    entradaB3Sumar.textContent = " + "
    entradaB3Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[1].productos[2].precio
        console.log("Entrada elegida: " + cartaBar2[1].productos[2].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    entradaB3.appendChild(entradaB3Sumar)
    cartaOnlineBares.appendChild(entradaB3);

    // -------------------------------------------------- Cuarta opcion
    const entradaB4 = document.createElement("p");
    entradaB4.textContent = "4. " + cartaBar2[1].productos[3].nombre + " $" + cartaBar2[1].productos[3].precio;

    //boton sumar
    const entradaB4Sumar = document.createElement("button")
    entradaB4Sumar.textContent = " + "
    entradaB4Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[1].productos[3].precio
        console.log("Entrada elegida: " + cartaBar2[1].productos[3].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    entradaB4.appendChild(entradaB4Sumar)
    cartaOnlineBares.appendChild(entradaB4);

    // --------------------------------------------------  Quinta opcion
    const entradaB5 = document.createElement("p");
    entradaB5.textContent = "5. " + cartaBar2[1].productos[4].nombre + " $" + cartaBar2[1].productos[4].precio;

    //boton sumar
    const entradaB5Sumar = document.createElement("button")
    entradaB5Sumar.textContent = " + "
    entradaB5Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[1].productos[4].precio
        console.log("Entrada elegida: " + cartaBar2[1].productos[4].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    entradaB5.appendChild(entradaB5Sumar)
    cartaOnlineBares.appendChild(entradaB5);

    // -------------------------------------------------- Termina logica de entradas --------------------------------------------------

    // -------------------------------------------------- Comienza logica de plato principal --------------------------------------------------

    const platoPrincipalTitulo = document.createElement("h3")
    platoPrincipalTitulo.textContent = "Plato Principal"
    cartaOnlineBares.appendChild(platoPrincipalTitulo)

    // -------------------------------------------------- Primera opcion
    const principalB1 = document.createElement("p");
    principalB1.textContent = "1. " + cartaBar2[2].productos[0].nombre + " $" + cartaBar2[2].productos[0].precio;

    //boton sumar
    const principalB1Sumar = document.createElement("button")
    principalB1Sumar.textContent = " + "
    principalB1Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[2].productos[0].precio
        console.log("Plato principal elegido: " + cartaBar2[2].productos[0].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    principalB1.appendChild(principalB1Sumar)
    cartaOnlineBares.appendChild(principalB1);

    // -------------------------------------------------- Segunda opcion
    const principalB2 = document.createElement("p");
    principalB2.textContent = "2. " + cartaBar2[2].productos[1].nombre + " $" + cartaBar2[2].productos[1].precio;

    //boton sumar
    const principalB2Sumar = document.createElement("button")
    principalB2Sumar.textContent = " + "
    principalB2Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[2].productos[1].precio
        console.log("Plato principal elegido: " + cartaBar2[2].productos[1].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    principalB2.appendChild(principalB2Sumar)
    cartaOnlineBares.appendChild(principalB2);

    // -------------------------------------------------- Tercera opcion
    const principalB3 = document.createElement("p");
    principalB3.textContent = "3. " + cartaBar2[2].productos[2].nombre + " $" + cartaBar2[2].productos[2].precio;

    //boton sumar
    const principalB3Sumar = document.createElement("button")
    principalB3Sumar.textContent = " + "
    principalB3Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[2].productos[2].precio
        console.log("Plato principal elegido: " + cartaBar2[2].productos[2].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    principalB3.appendChild(principalB3Sumar)
    cartaOnlineBares.appendChild(principalB3);

    // -------------------------------------------------- Cuarta opcion
    const principalB4 = document.createElement("p");
    principalB4.textContent = "4. " + cartaBar2[2].productos[3].nombre + " $" + cartaBar2[2].productos[3].precio;

    //boton sumar
    const principalB4Sumar = document.createElement("button")
    principalB4Sumar.textContent = " + "
    principalB4Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[2].productos[3].precio
        console.log("Plato principal elegido: " + cartaBar2[2].productos[3].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    principalB4.appendChild(principalB4Sumar)
    cartaOnlineBares.appendChild(principalB4);

    // -------------------------------------------------- Quinta opcion
    const principalB5 = document.createElement("p");
    principalB5.textContent = "5. " + cartaBar2[2].productos[4].nombre + " $" + cartaBar2[2].productos[4].precio;

    //boton sumar
    const principalB5Sumar = document.createElement("button")
    principalB5Sumar.textContent = " + "
    principalB5Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[2].productos[4].precio
        console.log("Plato principal elegido: " + cartaBar2[2].productos[4].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    principalB5.appendChild(principalB5Sumar)
    cartaOnlineBares.appendChild(principalB5);

    // -------------------------------------------------- termina logica de plato principal --------------------------------------------------

    // -------------------------------------------------- Comienza logica de postres --------------------------------------------------

    const postresTitulo = document.createElement("h3")
    postresTitulo.textContent = "Postres"
    cartaOnlineBares.appendChild(postresTitulo)
    // -------------------------------------------------- Primera opcion

    const postreB1 = document.createElement("p");
    postreB1.textContent = "1. " + cartaBar2[3].productos[0].nombre + " $" + cartaBar2[3].productos[0].precio;
    //boton sumar
    const postreB1Sumar = document.createElement("button")
    postreB1Sumar.textContent = " + "
    postreB1Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[3].productos[0].precio
        console.log("Postre elegido: " + cartaBar2[3].productos[0].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    postreB1.appendChild(postreB1Sumar)
    cartaOnlineBares.appendChild(postreB1);

    // -------------------------------------------------- Segunda opcion
    const postreB2 = document.createElement("p");
    postreB2.textContent = "2. " + cartaBar2[3].productos[1].nombre + " $" + cartaBar2[3].productos[1].precio;
    //boton sumar
    const postreB2Sumar = document.createElement("button")
    postreB2Sumar.textContent = " + "
    postreB2Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[3].productos[1].precio
        console.log("Postre elegido: " + cartaBar2[3].productos[1].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    postreB2.appendChild(postreB2Sumar)
    cartaOnlineBares.appendChild(postreB2);

    // -------------------------------------------------- Tercera opcion
    const postreB3 = document.createElement("p");
    postreB3.textContent = "3. " + cartaBar2[3].productos[2].nombre + " $" + cartaBar2[3].productos[2].precio;
    //boton sumar
    const postreB3Sumar = document.createElement("button")
    postreB3Sumar.textContent = " + "
    postreB3Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[3].productos[2].precio
        console.log("Postre elegido: " + cartaBar2[3].productos[2].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    postreB3.appendChild(postreB3Sumar)
    cartaOnlineBares.appendChild(postreB3);

    // -------------------------------------------------- Cuarta opcion
    const postreB4 = document.createElement("p");
    postreB4.textContent = "4. " + cartaBar1[3].productos[3].nombre + " $" + cartaBar1[3].productos[3].precio;
    //boton sumar
    const postreB4Sumar = document.createElement("button")
    postreB4Sumar.textContent = " + "
    postreB4Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[3].productos[3].precio
        console.log("Postre elegido: " + cartaBar2[3].productos[3].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    postreB4.appendChild(postreB4Sumar)
    cartaOnlineBares.appendChild(postreB4);

    // -------------------------------------------------- Quinta opcion
    const postreB5 = document.createElement("p");
    postreB5.textContent = "5. " + cartaBar2[3].productos[4].nombre + " $" + cartaBar2[3].productos[4].precio;
    //boton sumar
    const postreB5Sumar = document.createElement("button")
    postreB5Sumar.textContent = " + "
    postreB5Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar2[3].productos[4].precio
        console.log("Postre elegido: " + cartaBar2[3].productos[4].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    postreB5.appendChild(postreB5Sumar)
    cartaOnlineBares.appendChild(postreB5);
}
// -------------------------------------------------- Comienza logica de postres --------------------------------------------------

// -------------------------------------------------- termina logica de function bar 2 --------------------------------------------------

// -------------------------------------------------- Comienza logica de function bar 3 --------------------------------------------------

function mostrarBar3() {
    const infoBar = document.createElement("h2")
    infoBar.textContent = "Cochera Bar"
    cartaOnlineBares.appendChild(infoBar)

    const bebidasTitulo = document.createElement("h3")
    bebidasTitulo.textContent = "Bebidas"
    cartaOnlineBares.appendChild(bebidasTitulo)

    //-------------------------------------------------- Comienza logica de bebidas --------------------------------------------------

    // -------------------------------------------------- Primera opcion
    const bebidaC1 = document.createElement("p");
    bebidaC1.textContent = "1. " + cartaBar3[0].productos[0].nombre + " $" + cartaBar3[0].productos[0].precio + " ";

    //boton sumar
    const bebidaC1Sumar = document.createElement("button")
    bebidaC1Sumar.textContent = " + "
    bebidaC1Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[0].productos[0].precio
        console.log("Bebida elegida: " + cartaBar3[0].productos[0].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    bebidaC1.appendChild(bebidaC1Sumar)
    cartaOnlineBares.appendChild(bebidaC1);

    // -------------------------------------------------- Segunda opcion
    const bebidaC2 = document.createElement("p");
    bebidaC2.textContent = "2. " + cartaBar3[0].productos[1].nombre + " $" + cartaBar3[0].productos[1].precio;

    //boton sumar
    const bebidaC2Sumar = document.createElement("button")
    bebidaC2Sumar.textContent = " + "
    bebidaC2Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[0].productos[1].precio
        console.log("Bebida elegida: " + cartaBar3[0].productos[1].nombre + " | Total parcial: $ " + cuentaComanda);
    });

    bebidaC2.appendChild(bebidaC2Sumar)
    cartaOnlineBares.appendChild(bebidaC2);

    // -------------------------------------------------- Tercera opcion
    const bebidaC3 = document.createElement("p");
    bebidaC3.textContent = "3. " + cartaBar3[0].productos[2].nombre + " $" + cartaBar3[0].productos[2].precio;

    //boton sumar
    const bebidaC3Sumar = document.createElement("button")
    bebidaC3Sumar.textContent = " + "
    bebidaC3Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[0].productos[2].precio
        console.log("Bebida elegida: " + cartaBar3[0].productos[2].nombre + " | Total parcial: $ " + cuentaComanda);
    });


    bebidaC3.appendChild(bebidaC3Sumar)
    cartaOnlineBares.appendChild(bebidaC3);

    // -------------------------------------------------- Cuarta opcion

    const bebidaC4 = document.createElement("p");
    bebidaC4.textContent = "4. " + cartaBar3[0].productos[3].nombre + " $" + cartaBar3[0].productos[3].precio;

    //boton sumar
    const bebidaC4Sumar = document.createElement("button")
    bebidaC4Sumar.textContent = " + "
    bebidaC4Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[0].productos[3].precio
        console.log("Bebida elegida: " + cartaBar3[0].productos[3].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    bebidaC4.appendChild(bebidaC4Sumar)
    cartaOnlineBares.appendChild(bebidaC4);

    // -------------------------------------------------- Quinta opcion
    const bebidaC5 = document.createElement("p");
    bebidaC5.textContent = "5. " + cartaBar3[0].productos[4].nombre + " $" + cartaBar3[0].productos[4].precio;

    //boton sumar
    const bebidaC5Sumar = document.createElement("button")
    bebidaC5Sumar.textContent = " + "
    bebidaC5Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[0].productos[4].precio
        console.log("Bebida elegida: " + cartaBar3[0].productos[4].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    bebidaC5.appendChild(bebidaC5Sumar)
    cartaOnlineBares.appendChild(bebidaC5);

    // -------------------------------------------------- Sexta opcion
    const bebidaC6 = document.createElement("p");
    bebidaC6.textContent = "6. " + cartaBar3[0].productos[5].nombre + " $" + cartaBar3[0].productos[5].precio;

    //boton sumar
    const bebidaC6Sumar = document.createElement("button")
    bebidaC6Sumar.textContent = " + "
    bebidaC6Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[0].productos[5].precio
        console.log("Bebida elegida: " + cartaBar3[0].productos[5].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    bebidaC6.appendChild(bebidaC6Sumar)
    cartaOnlineBares.appendChild(bebidaC6);

    // -------------------------------------------------- Septima opcion
    const bebidaC7 = document.createElement("p");
    bebidaC7.textContent = "7. " + cartaBar3[0].productos[6].nombre + " $" + cartaBar3[0].productos[6].precio;

    //boton sumar
    const bebidaC7Sumar = document.createElement("button")
    bebidaC7Sumar.textContent = " + "
    bebidaC7Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[0].productos[6].precio
        console.log("Bebida elegida: " + cartaBar3[0].productos[6].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    bebidaC7.appendChild(bebidaC7Sumar)
    cartaOnlineBares.appendChild(bebidaC7);

    // -------------------------------------------------- Octava opcion
    const bebidaC8 = document.createElement("p");
    bebidaC8.textContent = "8. " + cartaBar3[0].productos[7].nombre + " $" + cartaBar3[0].productos[7].precio;

    //boton sumar
    const bebidaC8Sumar = document.createElement("button")
    bebidaC8Sumar.textContent = " + "
    bebidaC8Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[0].productos[7].precio
        console.log("Bebida elegida: " + cartaBar3[0].productos[7].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    bebidaC8.appendChild(bebidaC8Sumar)
    cartaOnlineBares.appendChild(bebidaC8);

    //-------------------------------------------------- Termina logica de bebidas --------------------------------------------------

    // -------------------------------------------------- Comienza logica de entradas --------------------------------------------------

    const entradasTitulo = document.createElement("h3")
    entradasTitulo.textContent = "Entradas"
    cartaOnlineBares.appendChild(entradasTitulo)

    // -------------------------------------------------- Primera opcion
    const entradaC1 = document.createElement("p");
    entradaC1.textContent = "1. " + cartaBar3[1].productos[0].nombre + " $" + cartaBar3[1].productos[0].precio;

    //boton sumar
    const entradaC1Sumar = document.createElement("button")
    entradaC1Sumar.textContent = " + "
    entradaC1Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[1].productos[0].precio
        console.log("Entrada elegida: " + cartaBar3[1].productos[0].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    entradaC1.appendChild(entradaC1Sumar)
    cartaOnlineBares.appendChild(entradaC1);

    // -------------------------------------------------- Segunda opcion

    const entradaC2 = document.createElement("p");
    entradaC2.textContent = "2. " + cartaBar3[1].productos[1].nombre + " $" + cartaBar3[1].productos[1].precio;

    //boton sumar
    const entradaC2Sumar = document.createElement("button")
    entradaC2Sumar.textContent = " + "
    entradaC2Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[1].productos[1].precio
        console.log("Entrada elegida: " + cartaBar3[1].productos[1].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    entradaC2.appendChild(entradaC2Sumar)
    cartaOnlineBares.appendChild(entradaC2);

    // -------------------------------------------------- Tercera opcion
    const entradaC3 = document.createElement("p");
    entradaC3.textContent = "3. " + cartaBar3[1].productos[2].nombre + " $" + cartaBar3[1].productos[2].precio;

    //boton sumar
    const entradaC3Sumar = document.createElement("button")
    entradaC3Sumar.textContent = " + "
    entradaC3Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[1].productos[2].precio
        console.log("Entrada elegida: " + cartaBar3[1].productos[2].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    entradaC3.appendChild(entradaC3Sumar)
    cartaOnlineBares.appendChild(entradaC3);

    // -------------------------------------------------- Cuarta opcion
    const entradaC4 = document.createElement("p");
    entradaC4.textContent = "4. " + cartaBar3[1].productos[3].nombre + " $" + cartaBar3[1].productos[3].precio;

    //boton sumar
    const entradaC4Sumar = document.createElement("button")
    entradaC4Sumar.textContent = " + "
    entradaC4Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[1].productos[3].precio
        console.log("Entrada elegida: " + cartaBar3[1].productos[3].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    entradaC4.appendChild(entradaC4Sumar)
    cartaOnlineBares.appendChild(entradaC4);

    // --------------------------------------------------  Quinta opcion
    const entradaC5 = document.createElement("p");
    entradaC5.textContent = "5. " + cartaBar3[1].productos[4].nombre + " $" + cartaBar3[1].productos[4].precio;

    //boton sumar
    const entradaC5Sumar = document.createElement("button")
    entradaC5Sumar.textContent = " + "
    entradaC5Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[1].productos[4].precio
        console.log("Entrada elegida: " + cartaBar3[1].productos[4].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    entradaC5.appendChild(entradaC5Sumar)
    cartaOnlineBares.appendChild(entradaC5);

    // -------------------------------------------------- Termina logica de entradas --------------------------------------------------

    // -------------------------------------------------- Comienza logica de plato principal --------------------------------------------------

    const platoPrincipalTitulo = document.createElement("h3")
    platoPrincipalTitulo.textContent = "Plato Principal"
    cartaOnlineBares.appendChild(platoPrincipalTitulo)

    // -------------------------------------------------- Primera opcion
    const principalC1 = document.createElement("p");
    principalC1.textContent = "1. " + cartaBar3[2].productos[0].nombre + " $" + cartaBar3[2].productos[0].precio;

    //boton sumar
    const principalC1Sumar = document.createElement("button")
    principalC1Sumar.textContent = " + "
    principalC1Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[2].productos[0].precio
        console.log("Plato principal elegido: " + cartaBar3[2].productos[0].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    principalC1.appendChild(principalC1Sumar)
    cartaOnlineBares.appendChild(principalC1);

    // -------------------------------------------------- Segunda opcion
    const principalC2 = document.createElement("p");
    principalC2.textContent = "2. " + cartaBar3[2].productos[1].nombre + " $" + cartaBar3[2].productos[1].precio;

    //boton sumar
    const principalC2Sumar = document.createElement("button")
    principalC2Sumar.textContent = " + "
    principalC2Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[2].productos[1].precio
        console.log("Plato principal elegido: " + cartaBar3[2].productos[1].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    principalC2.appendChild(principalC2Sumar)
    cartaOnlineBares.appendChild(principalC2);

    // -------------------------------------------------- Tercera opcion
    const principalC3 = document.createElement("p");
    principalC3.textContent = "3. " + cartaBar3[2].productos[2].nombre + " $" + cartaBar3[2].productos[2].precio;

    //boton sumar
    const principalC3Sumar = document.createElement("button")
    principalC3Sumar.textContent = " + "
    principalC3Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[2].productos[2].precio
        console.log("Plato principal elegido: " + cartaBar3[2].productos[2].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    principalC3.appendChild(principalC3Sumar)
    cartaOnlineBares.appendChild(principalC3);

    // -------------------------------------------------- Cuarta opcion
    const principalC4 = document.createElement("p");
    principalC4.textContent = "4. " + cartaBar3[2].productos[3].nombre + " $" + cartaBar3[2].productos[3].precio;

    //boton sumar
    const principalC4Sumar = document.createElement("button")
    principalC4Sumar.textContent = " + "
    principalC4Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[2].productos[3].precio
        console.log("Plato principal elegido: " + cartaBar3[2].productos[3].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    principalC4.appendChild(principalC4Sumar)
    cartaOnlineBares.appendChild(principalC4);

    // -------------------------------------------------- Quinta opcion
    const principalC5 = document.createElement("p");
    principalC5.textContent = "5. " + cartaBar3[2].productos[4].nombre + " $" + cartaBar3[2].productos[4].precio;

    //boton sumar
    const principalC5Sumar = document.createElement("button")
    principalC5Sumar.textContent = " + "
    principalC5Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[2].productos[4].precio
        console.log("Plato principal elegido: " + cartaBar3[2].productos[4].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    principalC5.appendChild(principalC5Sumar)
    cartaOnlineBares.appendChild(principalC5);

    // -------------------------------------------------- termina logica de plato principal --------------------------------------------------

    // -------------------------------------------------- Comienza logica de postres --------------------------------------------------

    const postresTitulo = document.createElement("h3")
    postresTitulo.textContent = "Postres"
    cartaOnlineBares.appendChild(postresTitulo)
    // -------------------------------------------------- Primera opcion

    const postreC1 = document.createElement("p");
    postreC1.textContent = "1. " + cartaBar3[3].productos[0].nombre + " $" + cartaBar3[3].productos[0].precio;
    //boton sumar
    const postreC1Sumar = document.createElement("button")
    postreC1Sumar.textContent = " + "
    postreC1Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[3].productos[0].precio
        console.log("Postre elegido: " + cartaBar3[3].productos[0].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    postreC1.appendChild(postreC1Sumar)
    cartaOnlineBares.appendChild(postreC1);

    // -------------------------------------------------- Segunda opcion
    const postreC2 = document.createElement("p");
    postreC2.textContent = "2. " + cartaBar3[3].productos[1].nombre + " $" + cartaBar3[3].productos[1].precio;
    //boton sumar
    const postreC2Sumar = document.createElement("button")
    postreC2Sumar.textContent = " + "
    postreC2Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[3].productos[1].precio
        console.log("Postre elegido: " + cartaBar3[3].productos[1].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    postreC2.appendChild(postreC2Sumar)
    cartaOnlineBares.appendChild(postreC2);

    // -------------------------------------------------- Tercera opcion
    const postreC3 = document.createElement("p");
    postreC3.textContent = "3. " + cartaBar3[3].productos[2].nombre + " $" + cartaBar3[3].productos[2].precio;
    //boton sumar
    const postreC3Sumar = document.createElement("button")
    postreC3Sumar.textContent = " + "
    postreC3Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[3].productos[2].precio
        console.log("Postre elegido: " + cartaBar3[3].productos[2].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    postreC3.appendChild(postreC3Sumar)
    cartaOnlineBares.appendChild(postreC3);

    // -------------------------------------------------- Cuarta opcion
    const postreC4 = document.createElement("p");
    postreC4.textContent = "4. " + cartaBar3[3].productos[3].nombre + " $" + cartaBar3[3].productos[3].precio;
    //boton sumar
    const postreC4Sumar = document.createElement("button")
    postreC4Sumar.textContent = " + "
    postreC4Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[3].productos[3].precio
        console.log("Postre elegido: " + cartaBar3[3].productos[3].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    postreC4.appendChild(postreC4Sumar)
    cartaOnlineBares.appendChild(postreC4);

    // -------------------------------------------------- Quinta opcion
    const postreC5 = document.createElement("p");
    postreC5.textContent = "5. " + cartaBar3[3].productos[4].nombre + " $" + cartaBar3[3].productos[4].precio;
    //boton sumar
    const postreC5Sumar = document.createElement("button")
    postreC5Sumar.textContent = " + "
    postreC5Sumar.addEventListener("click", () => {
        cuentaComanda += cartaBar3[3].productos[4].precio
        console.log("Postre elegido: " + cartaBar3[3].productos[4].nombre + " | Total parcial: $ " + cuentaComanda);
    });
    postreC5.appendChild(postreC5Sumar)
    cartaOnlineBares.appendChild(postreC5);
}

// -------------------------------------------------- termina logica de postres --------------------------------------------------

// -------------------------------------------------- termina logica de function bar 3 --------------------------------------------------


const cartaBar1 = [
    {
        categoria: "Bebidas",
        productos: [
            { ID: 10, nombre: "Pinta", precio: 800 },
            { ID: 11, nombre: "Gaseosa/agua saborizada", precio: 500 },
            { ID: 12, nombre: "Tragos", precio: 1000 },
            { ID: 13, nombre: "Stella", precio: 1400 },
            { ID: 15, nombre: "Andes", precio: 1600 },
            { ID: 16, nombre: "Heineken", precio: 1500 },
            { ID: 17, nombre: "Patagonia", precio: 1400 },
            { ID: 18, nombre: "Ninguno", precio: 0 }
        ]
    },
    {
        categoria: "Entradas",
        productos: [
            { ID: 19, nombre: "Papas con cheddar y panceta", precio: 1400 },
            { ID: 20, nombre: "Rabas", precio: 1800 },
            { ID: 21, nombre: "Papas clásicas", precio: 1200 },
            { ID: 22, nombre: "Tabla de fiambres", precio: 2000 },
            { ID: 23, nombre: "Ninguno", precio: 0 }
        ]
    },
    {
        categoria: "Plato principal",
        productos: [
            { ID: 30, nombre: "Hamburguesa", precio: 2000 },
            { ID: 31, nombre: "Lomito", precio: 2200 },
            { ID: 32, nombre: "Pizzas", precio: 1800 },
            { ID: 33, nombre: "Plato gourmet", precio: 2500 },
            { ID: 34, nombre: "Ninguno", precio: 0 }
        ]
    },
    {
        categoria: "Postres",
        productos: [
            { ID: 35, nombre: "Chocotorta", precio: 1000 },
            { ID: 36, nombre: "Cheesecake", precio: 1100 },
            { ID: 37, nombre: "Flan", precio: 1200 },
            { ID: 38, nombre: "Helado", precio: 800 },
            { ID: 39, nombre: "Ninguno", precio: 0 }
        ]
    },
];

// -------------------------------------------------- Termina carta de bar 1 --------------------------------------------------

// -------------------------------------------------- Comienza carta de bar 2 --------------------------------------------------

const cartaBar2 = [
    {
        categoria: "Bebidas",
        productos: [
            { ID: 110, nombre: "Pinta", precio: 1000 },
            { ID: 111, nombre: "Gaseosa/agua saborizada", precio: 700 },
            { ID: 112, nombre: "Tragos", precio: 1200 },
            { ID: 113, nombre: "Stella", precio: 1500 },
            { ID: 115, nombre: "Andres", precio: 1700 },
            { ID: 116, nombre: "Heineken", precio: 1600 },
            { ID: 117, nombre: "Patagonia", precio: 1500 },
            { ID: 118, nombre: "Ninguno", precio: 0 }
        ]
    },
    {
        categoria: "Entradas",
        productos: [
            { ID: 119, nombre: "Papas con cheddar y panceta", precio: 1400 },
            { ID: 120, nombre: "Rabas", precio: 1700 },
            { ID: 121, nombre: "Papas clásicas", precio: 1400 },
            { ID: 122, nombre: "Tabla de fiambres", precio: 2200 },
            { ID: 123, nombre: "Ninguno", precio: 0 }
        ]
    },
    {
        categoria: "Plato principal",
        productos: [
            { ID: 130, nombre: "Hamburguesa", precio: 2200 },
            { ID: 131, nombre: "Lomito", precio: 2400 },
            { ID: 132, nombre: "Pizzas", precio: 2000 },
            { ID: 133, nombre: "Plato gourmet", precio: 2700 },
            { ID: 134, nombre: "Ninguno", precio: 0 }
        ]
    },
    {
        categoria: "Postres",
        productos: [
            { ID: 135, nombre: "Chocotorta", precio: 1200 },
            { ID: 136, nombre: "Cheesecake", precio: 1300 },
            { ID: 137, nombre: "Flan", precio: 1400 },
            { ID: 138, nombre: "Helado", precio: 1000 },
            { ID: 139, nombre: "Ninguno", precio: 0 }
        ]
    },
];

// -------------------------------------------------- Termina carta de bar 2 --------------------------------------------------

// -------------------------------------------------- Comienza carta de bar 3 --------------------------------------------------

const cartaBar3 = [
    {
        categoria: "Bebidas",
        productos: [
            { ID: 210, nombre: "Pinta", precio: 700 },
            { ID: 211, nombre: "Gaseosa/agua saborizada", precio: 400 },
            { ID: 212, nombre: "Tragos", precio: 900 },
            { ID: 213, nombre: "Stella", precio: 1300 },
            { ID: 215, nombre: "Andres", precio: 1500 },
            { ID: 216, nombre: "Heineken", precio: 1400 },
            { ID: 217, nombre: "Patagonia", precio: 1400 },
            { ID: 218, nombre: "Ninguno", precio: 0 }
        ]
    },
    {
        categoria: "Entradas",
        productos: [
            { ID: 219, nombre: "Papas con cheddar y panceta", precio: 1100 },
            { ID: 220, nombre: "Rabas", precio: 1400 },
            { ID: 221, nombre: "Papas clásicas", precio: 1100 },
            { ID: 222, nombre: "Tabla de fiambres", precio: 1800 },
            { ID: 223, nombre: "Ninguno", precio: 0 }
        ]
    },
    {
        categoria: "Plato principal",
        productos: [
            { ID: 230, nombre: "Hamburguesa", precio: 1900 },
            { ID: 231, nombre: "Lomito", precio: 2100 },
            { ID: 232, nombre: "Pizzas", precio: 1700 },
            { ID: 233, nombre: "Plato gourmet", precio: 2400 },
            { ID: 234, nombre: "Ninguno", precio: 0 }
        ]
    },
    {
        categoria: "Postres",
        productos: [
            { ID: 235, nombre: "Chocotorta", precio: 1000 },
            { ID: 236, nombre: "Cheesecake", precio: 1200 },
            { ID: 237, nombre: "Flan", precio: 1300 },
            { ID: 238, nombre: "Helado", precio: 900 },
            { ID: 239, nombre: "Ninguno", precio: 0 }
        ]
    },
];

/* Boton de guardado */
const botonGuardado = document.getElementById('botonGuardado');
botonGuardado.addEventListener('click', function () {

    /* ---------------------------------------------------- Estructura json nombre y apellido ---------------------------------------------------- */
    const nombreApellido = document.getElementById('datosClienteInput');
    const datos = nombreApellido.value;

    const preJsonDatos = {
        Nombre: datos
    };

    const jsonDatos = JSON.stringify(preJsonDatos);
    localStorage.setItem('datos_clientes', jsonDatos);

    /* ---------------------------------------------------- Estructura json cantidad de comensales ---------------------------------------------------- */

    const comensalesCantidad = document.getElementById('cantidadComensalesInput');
    const cantidadReserva = comensalesCantidad.value;

    const preJsonComensales = {
        Comensales: cantidadReserva
    };

    const jsonComensales = JSON.stringify(preJsonComensales);
    localStorage.setItem('cantidad_de_comensales', jsonComensales);

    /* ---------------------------------------------------- Estructura json hora de reserva ---------------------------------------------------- */

    const horaReserva = document.getElementById('horarioReservaInput');
    const horario = horaReserva.value;

    const preJsonHorario = {
        Horario: horario
    };

    const jsonHorario = JSON.stringify(preJsonHorario);
    localStorage.setItem('horario_reserva', jsonHorario);

    // Mensaje de éxito
    alert('La reserva ha sido realizada con exito.');
});


// -------------------------------------------------- Termina carta de bar 3 --------------------------------------------------
