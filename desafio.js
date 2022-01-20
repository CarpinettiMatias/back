class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido
    }


    getName(){
        return `Hola ${this.nombre} ${this.apellido}`
    }

    
}

const usuario = new Usuario('Matias', 'Carpinetti')


console.log(usuario.getName())