/* JSON 

JS => JavaScript
O => Object
N => Notation */

var Pelota = {
    color: "roja",
    tam: 3,
    rebota : false,
    setBotar: function() {
        this.rebota = true
    }
}

console.log(Pelota);

/* const Usuario = {
    name: "Juanmi",
    edad: 20,
    email: "mail@mail.com"
}

document.write(Usuario.name);

document.write("<p>" + Usuario.name + "</p>");
document.write("<p>" + Usuario.edad + "</p>");
document.write("<p>" + Usuario.email + "</p>"); */

const {name, edad, email} = {
    name: "Juanmi",
    edad: 20,
    email: "mail@mail.com"
}

document.write("<p>" + name + "</p>");
document.write("<p>" + edad + "</p>");
document.write("<p>" + email + "</p>");