function sumArray(num) {

    myArreglo = num

    var total = 0;

    myArreglo.forEach(e => {
        total = parseInt(total) + parseInt(e);
    });

    //var fin = rexxx;
    return total;
}

var n1 = prompt("Dime el numero uno: ")
var n2 = prompt("Dime el numero dos: ")
var n3 = prompt("Dime el numero tres: ")
var res = sumArray([n1, n2, n3]);

console.log(res);

// var res = sumArray([10,3,10,4]);
// console.log(res);
// var res = sumArray([-5,100]);
// console.log(res);


function revelarRes() {

    document.getElementById("demo").innerHTML = res;

}
