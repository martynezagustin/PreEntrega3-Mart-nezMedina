const containerFormacion = document.getElementById('containerFormacion')
const counterCourses = document.getElementById('count-course')
let coursesCart = JSON.parse(localStorage.getItem('Cursos')) || []

function renderizarCarrito(){
    containerFormacion.innerHTML = ""
    counterCourses.innerHTML = `<b>(` + coursesCart.length + `)</b>` || []
    coursesCart.forEach((curso) => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.classList.add('ancho-card')
        div.classList.add('mt-4')
        div.innerHTML = `<div class="card-body">
        <h5 class="card-title">${curso.nombre}</h5>
        <p class="card-duration"><b>Duración: <i>${curso.duracion}</i></b></p>
        <p class="card-text">${curso.descripcion}</p>
        <button onclick=removeCurso(${curso.id}) class="btn btn-add btn-secondary" id="${curso.id}">ELIMINAR</button>
        </div>`
        containerFormacion.append(div)
    })
}

function removeCurso(id){
    const cursoARemover = coursesCart.find((curso) => curso.id === id)
    const index = coursesCart.indexOf(cursoARemover)
    coursesCart.splice(index, 1)
    localStorage.setItem("Cursos", JSON.stringify(coursesCart))
    renderizarCarrito()
}

renderizarCarrito()