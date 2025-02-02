// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista de amigos
let amigos = [];

// Función para agregar amigos a la lista

const inputName = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');

function agregarAmigo() {
    const nombre = inputName.value.trim();
    console.log(nombre);


    if (nombre === "") {
        alert("Por favor ingresa un nombre valido.");
        return;
    }

    amigos.push(nombre);
    const li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);
    inputName.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }
    const resultado = document.getElementById("resultado");
    const elegido = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${elegido}</strong></li>`;
}