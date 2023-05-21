const cursoReferencia = JSON.parse(localStorage.getItem('cursoSeleccionado'));

const contenedorCurso = document.getElementById('detalle-producto')

console.log(cursoReferencia);

function invocarCurso(){
    const contenedor = document.createElement("div")
    for(curso of cursoReferencia){
        contenedor.innerHTML = `<h2>${curso.nombre}</h2>`
        contenedorCurso.appendChild(contenedor)
    }
}

invocarCurso()