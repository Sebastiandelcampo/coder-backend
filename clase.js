
/* let numbers = [] 


function random() {
    for (let i = 0; i < 10000; i++) {
        const num = Math.floor((Math.random() * 20) + 1);
        numbers.push(num);
    }

    

}
random()
console.log(numbers)

const results = {}

numbers.forEach(number => 
    results[number] = (results[number] || 0) + 1);

console.log(results)  */

const products = [
    {id:1, nombre:"escuadra", precio: 323},
    {id:2, nombre:"camisa",precio :56785},
    {id:3,nombre :"pantalon ",precio :344},
    { id:4 , nombre:"zapato" ,precio : 12331},
    {id:5, nombre:"calcetines " ,precio : 512},
    {id:6, nombre:"tenis" ,precio :78},

]

const nombres = products.map(product => product.nombre + "," );

console.log(nombres)
    
