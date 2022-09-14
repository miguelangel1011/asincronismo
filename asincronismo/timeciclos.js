//
for (let j = 0; j< 10; j++){
    setTimeout(() => {
        console.log(j);
    },(1000*j));
}

setInterval(()=> {
    console.log ('amo el futbol');

},1000);

//repetir con el intervalo de 2 segundos
let timerid = setInterval(()=> console.log('futbol'), 1000)
//despues de 6 segundos parar
setTimeout(() => {
   clearInterval(timerid); 
}, 6000);
//hacer un arregol qu ellene un numero de quinse elementos se imprima infinita mente poner eso
x=Math.random(Math.random()* (25-5) +5)

function NumeriosAleatorios(limite) {
    var numeros = [];
    for (let i =0; i < limite; i++) {
        numeros[i]=Math.random(Math.random() * (100-20) + 20);
    }
    console.log(numeros)
}
function numerosUno(limite){
    var numeros1=[]
    for (let i =0;i < limite;i++){
        numeros1[i]=1

    }
    console.log(numeros1)
}

setTimeout(NumeriosAleatorios ,3000,x)
numerosUno(x)
// 
var vec=[];
for (let i=0; i < 10 ; i++){
    vec[i]=Math.random(Math.random()*100);
}

var k=0;
setInterval(() => {
   console.log(vec[k])
   k++;
   k==10?k=0:k=k 
}, (1000));

for (let i =0; i < vec.length; i++);
