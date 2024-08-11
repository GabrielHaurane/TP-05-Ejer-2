let mensaje = document.createElement(`p`);
class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, anioDeNac) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = Math.floor(10000000 + Math.random() * 90000000);

    switch (sexo) {
        case "M":
          this.sexo = sexo;
          break;
        case "H":
          this.sexo = sexo;
          break;
        
      }

    if (peso > 0) {
      this.peso = peso;
    } else {
      mensaje.innerHTML += `no ingreso un peso valido<br>`;
    }

    if (altura > 0) {
      this.altura = altura;
    } else {
      mensaje.innerHTML += `no ingreso una altura valido<br>`;
    }

    if (anioDeNac >= 1930 && anioDeNac <= 2010) {
      this.anioDeNac = anioDeNac;
    } else {
      mensaje.innerHTML += `no ingreso una fecha de nacimiento valida<br>`;
    }
  }

  // metodos
  mostrarGeneracion() {
    switch (anioDeNac) {
      case (1994 <= this.anioDeNac && this.anioDeNac <= 2010):
        mensaje.innerHTML = `<p> ${this.nombre} pertenece a la Generación Z y su rasgo característico es Irreverencia. </p>`;
        document.querySelector("main").appendChild(mensaje);
        break;
      case (1981 <= this.anioDeNac && this.anioDeNac <= 1993):
        mensaje.innerHTML = `<p> ${this.nombre} pertenece a la Generación Y (Millennials) y su rasgo característico es Frustración. </p>`;
        document.querySelector("main").appendChild(mensaje);
        break;
      case (1969 <= this.anioDeNac && this.anioDeNac <= 1980):
        mensaje.innerHTML = `<p> ${this.nombre} pertenece a la Generación X y su rasgo característico es Obsesión por el éxito. </p>`;
        document.querySelector("main").appendChild(mensaje);
        break;
      case (1949 <= this.anioDeNac && this.anioDeNac <= 1968):
        mensaje.innerHTML = `<p> ${this.nombre} pertenece a la Baby Boom y su rasgo característico es Ambición.</p>`;
        document.querySelector("main").appendChild(mensaje);
        break;
      case (1930 <= this.anioDeNac && this.anioDeNac <= 1948):
        mensaje.innerHTML = `<p> ${this.nombre} pertenece a la Silent Generation y su rasgo característico es Austeridad.</p>`;
        document.querySelector("main").appendChild(mensaje);
        break;
      
    }
  }

  
  mayorEdad() {
    if (this.edad == `` || this.edad == null || this.edad == undefined) {
      return;
    } else {
      if (this.edad >= 18) {
        mensaje.innerHTML = `la persona indicada es mayor de edad`;
        document.querySelector(`main`).appendChild(mensaje);
      } else {
        mensaje.innerHTML = `la persona indicada es menor de edad`;
        document.querySelector(`main`).appendChild(mensaje);
      }
    }
  }
}
function crearPersona() {
    return new Persona (
        document.querySelector(`#nombre`).value,
        document.querySelector(`#edadP`).value,
        document.querySelector(`#sexo`).value,
        document.querySelector(`#peso`).value,
        document.querySelector(`#altura`).value,
        document.querySelector(`#anioDeNac`).value
    )
}
const formulario = document.querySelector(`form`);
formulario.addEventListener(`submit`, function(e){
    e.preventDefault();
});
const mostrarGeneracionn = document.querySelector(`#mostrarGeneracion`);
const mayorEdadd = document.querySelector(`#mayorEdad`);
mostrarGeneracionn.addEventListener(`click`, ()=>{
    let persona1 = crearPersona();
    persona1.mostrarGeneracion();
});
mayorEdadd.addEventListener(`click`, ()=> {
    let persona1 = crearPersona();
    persona1.mayorEdad();
});


