let categoria = ["1) tortas","2) galletas", "3) salados"];
let lista = ["torta de chocolate", " torta de vainilla", " torta de frutillas", " torta mixta"]; 
let lista2 = ["galletitas con chocolate", " galletitas de avena", " chipa"];
let lista3 = ["pizzas", " milanesas", " sandwiches", " hamburguesas"];

let h1 = document.getElementById ("h1");
let ul = document.getElementById ("categoriaS");

document.getElementById("nombre").value =  nombre = prompt ("Hola. Cual es tu nombre?");

let boton = document.getElementById("btnMain")
boton.onclick = () => {alert("Gracias por su compra!")}


// SALUDO
function saludar  () {
    let frase = (`Bienvenido ${nombre} a RichCakes, los mejores productos! `);
    alert (frase);
    h1.innerHTML = (frase);
}

saludar();

//PRODUCTOS
let elegir = prompt (`Estos son nuestros productos, elija una categoria: \n ${categoria}`);
 ul.innerHTML = "Categorias:" + categoria;


if (elegir == 1 || elegir == "tortas" || elegir == "torta") {
    alert (`Estos son nuestros productos de la categoria tortas: ${lista}.`);

let padre = document.getElementById("productos");
let productos = lista;
for (const listados of productos) {
    let li = document.createElement("li");
    li.innerHTML = listados
    padre.appendChild(li);

}

} else if (elegir == 2 || elegir == "galletas" || elegir == "galleta") {
    alert (`Estos son nuestros productos de la categoria galletas: ${lista2}. \n Se venden por docena.`);

let padre = document.getElementById("productos");
let productos = lista2;
for (const listados of productos) {
    let li = document.createElement("li");
    li.innerHTML = listados
    padre.appendChild(li);
}

} else if (elegir == 3 || elegir == "salados" || elegir == "salado") {
     alert (`Estos son nuestros productos de la categoria salados: ${lista3}.`);
let padre = document.getElementById("productos");
let productos = lista3;
for (const listados of productos) {
    let li = document.createElement("li");
    li.innerHTML = listados
    padre.appendChild(li);
}
    
    }

 class Prod  {
     constructor (producto, cantidad, precio) {
     this.producto = producto;
     this.cantidad = cantidad;
     this.precio = precio;
     this.eleccion = alert (`Usted eligió ${this.producto} y su precio es $ ${this.precio * this.cantidad}`)
     document.getElementById("alimento").value   = this.producto;
     document.getElementById("cantidad").value   = this.cantidad;
     document.getElementById("precio").value   =  this.precio * this.cantidad;
    }
}

if (elegir == 1 || elegir == "tortas" || elegir == "torta") {
const producto = prompt (`elegi un producto: ${lista}`);
const cantidad = prompt ("cuantas unidades?");

 const torta1 = new Prod (producto,cantidad, 1000) 
} else if (elegir == 2 || elegir == "galletas" || elegir == "galleta") {
    const producto = prompt (`elegi un producto: ${lista2}`);
const cantidad = prompt ("cuantas unidades?");

 const galleta1 = new Prod (producto,cantidad, 500)
} else if (elegir == 3 || elegir == "salados" || elegir == "salado") {
    const producto = prompt (`elegi un producto: ${lista3}`);
const cantidad = prompt ("cuantas unidades?");

 const galleta1 = new Prod (producto,cantidad, 700)
} else (alert ("no le gustó nada de nuestro menú?"))


