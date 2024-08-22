const pedirNumero = () => {
    let numero = parseInt(prompt("Ingrese un número entre 1 y 20:"));

    if (numero < 1 || numero > 20 || isNaN(numero)) {
        alert("Número fuera de rango");
        return;
    }

    for (let i = 1; i <= numero; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`);

        
        let factorial = 1;
        for (let j = 1; j <= i; j++) {
            factorial *= j;
        }
        console.log(`Factorial de ${i} es: ${factorial}`);
    }
}

pedirNumero();
