/* class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }

}
let persona = new Persona("Gerardo", 33);
persona.saludar(); */

//metodo estatico
/* 
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }

    static definicion(){
        console.log("Una persona es un ser humano");
    }
}
Persona.definicion(); */

//clases y herencias

/* class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }

    static definicion(){
        console.log("Una persona es un ser humano");
    }
}

class Desarrollador extends Persona{

}
Persona.definicion(); */

//otro ejemplo
/* 
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }

    static definicion(){
        console.log("Una persona es un ser humano");
    }
}

class Desarrollador extends Persona{
    saludoDesarrollador(){
        this.saludar();
        console.log("Soy undiseñador web")
    }
    
}

let desarrollador = new Desarrollador('Alejandra', 25);
desarrollador.saludoDesarrollador(); */



//Palabra reservada super

class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }

    static definicion(){
        console.log("Una persona es un ser humano");
    }
}

class Desarrollador extends Persona{
    constructor(nombre, edad, tipo){

        super(nombre,edad);
        this.tipo = tipo;
    }

    saludoDesarrollador(){
        this.saludar();
        console.log(`Soy una ${this.tipo} web`)
    }
    
}

let desarrollador = new Desarrollador('Alejandra', 25, 'frontend');
desarrollador.saludoDesarrollador();