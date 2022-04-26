
function sumArray(num) {

    myArreglo = num
    
    var total = 0;
    
    myArreglo.forEach(e => {
        total = parseInt(total) + parseInt(e);
    });

    //var fin = rexxx;
    return total;
}

var res = sumArray([1,2,3]);
console.log(res);
var res = sumArray([10,3,10,4]);
console.log(res);
var res = sumArray([-5,100]);
console.log(res);
