// objeto declarado

/* let persona = {}
console.log(persona); */

// objeto persona

/* let persona = {
    nombre: "Gerardo",
    apellido: "Ponce",
    edad: 33,
    estudios: ["licenciatura", "maestria"],
    hijos: false
}

console.log(persona) */

// segunda forma declarar objetos 

/* let persona = new Object()
persona.nombre = "Gerardo",
persona.apellido= "Ponce",
persona.edad = 33,

console.log(persona) */

// tercera forma

let persona = new Object()
persona["nombre"] = "Gerardo",
persona ["apellido"] = "Ponce",
persona["edad"] = 33,
console.log(`mi nombre es: ${persona.nombre} y mi apellido es: ${persona.apellido} `)
