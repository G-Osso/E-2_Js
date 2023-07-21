const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a)  Las pizzas que tengan un id impar.
const PizzasConIdImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);

// Imprimir la respuesta en consola
console.log("¿Hay pizzas con número impar?", PizzasConIdImpar ? "Sí" : "No");

// b) Responder: ¿Hay alguna pizza que valga menos de $600?
const PizzasConPrecioMenorA600 = pizzas.some((pizza) => pizza.precio < 600);

// Imprimir la respuesta en consola
console.log("¿Hay pizzas con precio menor a 600?", PizzasConPrecioMenorA600 ? "Sí" : "No");

// c) El nombre de cada pizza con su respectivo precio.
console.log("Nombre y precio de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(`Nombre: ${pizza.nombre}, Precio: ${pizza.precio}`);
});

// d) Todos los ingredientes de cada pizza 
console.log("Ingredientes de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(`Pizza: ${pizza.nombre}`);
  pizza.ingredientes.forEach((ingrediente) => {
    console.log(`- ${ingrediente}`);
  });
});








