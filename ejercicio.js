function iniciarTest() {
    var numeros = []
    suma = 0;
    flag = true;


    while (flag == true) {
        var xxx = prompt("Numero: ")
        if (!isNaN(xxx)) {
            numeros.push(parseInt(xxx))
        } else {
            flag = false;
        }
    }


    numeros.forEach(numero => {
        suma += numero;
    });

    console.log(suma);
    document.getElementById("demo").innerHTML = "El resultado de la suma con los numeros que has introducido son: " + suma;

    return suma;

}
