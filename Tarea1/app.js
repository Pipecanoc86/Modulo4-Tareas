const url = 'https://randomuser.me/api/';
const boton = document.getElementById('boton')
const contenido = document.querySelector('#contenido');

const mostrarData = async() =>{
    const res = await fetch(url);
    const data = await res.json();
    console.log(data,'data');
    contenido.innerHTML = `<img src='${data.results[0].picture.large}'>
                            <p class="texto1">${data.results[0].cell}</p>
                            <p class="texto1">${data.results[0].email}</p>
                            <p class="texto1">${data.results[0].gender}</p>
                            <p class="texto2">${data.results[0].name.first} ${data.results[0].name.last}</p>`
}

mostrarData();

boton.addEventListener('click', mostrarData);
