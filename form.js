var pozitiveNumber = [];
var negativeNumber = [];


function addPositiveNumber() {
    let positivetextbox = document.getElementById('pNumber')
    let number = positivetextbox.value;
    pozitiveNumber.push(number);

    let p = document.getElementById('pozitiveSonuc');
    p.innerHTML += number + "<br>";

};

function addNegativeNumber() {
    var negativetextbox = document.getElementById('nNumber')
    var number = negativetextbox.value;
    negativeNumber.push(number);

    let p = document.getElementById('negativeSonuc');
    p.innerHTML += number + "<br>";


};

function findTotal(array){


    let total=0;

    for(let x=0; x<array.length; x++ ){

        total=eval(total)+ eval(array[x]);
    }
    return total;
};

function calculate(){
    let positiveTotal = findTotal(pozitiveNumber);
    let negativeTotal = findTotal(negativeNumber);

    let ppozitive =document.getElementById('pTotal');
    ppozitive.innerHTML = positiveTotal;
    let nnegative =document.getElementById('nTotal');
    nnegative.innerHTML=negativeTotal;

}