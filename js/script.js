const container = document.getElementById('container')

async function getUsers() {
    const response = await fetch('http://localhost:3000/users')
    if(!response.ok){
        throw new Error('No se pudo mostrar los usuarios')
    }
    const data = await response.json()
    container.innerHTML='';
     
    const card = data.map(user => {
        const {nombre, apellidos, correo, coleccion, wishlist} = user
        container.innerHTML +=
        `<li>
        <h2>${nombre} ${apellidos}</h2>
        <p>Correo electrónico: ${correo}</p>
        <h4>Colleciones:</h4>
        <div class='lista'>${coleccion}</div>
        <h4>Wishlist:</h4> 
        <div class='lista'>${wishlist}</div>
        </li>
    `}).join('');
}

async function getBooks() {
 const response = await fetch('http://localhost:3000/books')
    if(!response.ok){
        throw new Error('No se pudo mostrar los libros')
    }
    const data = await response.json()
    container.innerHTML=''
     
    const card = data.map(book => {
        const {titulo, autor, fechaPublicacion, imagen} = book
        container.innerHTML +=
        `<li>
        <h2>${titulo}</h2>
        <img src='${imagen}' alt='${titulo}'/>
        <p>Autor: ${autor}</p>
        <p>Fecha de publicación: ${fechaPublicacion}</p>
        </li>
    `}).join('');
}