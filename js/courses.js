const cursos = [{
    id: 1,
    nombre: 'CURSO DE DESARROLLO WEB',
    img: "https://martynezagustin.github.io/PreEntrega3-MartinezMedina/assets/imgs/courses/curso-desarrollo-web.png",
    duracion: '52 horas',
    descripcion: 'En este curso, aprenderás los conceptos elementales de HTML y CSS para desarrollar tu sitio web.',
    categoria: 'Programación',
    referenceHTML: "curso-desarrollo-web"
},
{
    id: 2,
    nombre: 'CURSO DE SASS',
    img: "https://martynezagustin.github.io/PreEntrega3-MartinezMedina/assets/imgs/courses/curso-sass.png",
    duracion: '55 horas',
    descripcion: 'SASS es un preprocesador del lenguaje CSS, muy potente para tu sitio web. Aprende con este curso.',
    categoria: 'Programación',
    referenceHTML: "curso-sass"
},
{
    id: 3,
    nombre: 'CURSO BÁSICO DE JAVASCRIPT',
    img: "https://martynezagustin.github.io/PreEntrega3-MartinezMedina/assets/imgs/courses/curso-javascript.png",
    duracion: '80 horas',
    descripcion: 'Aprende los conceptos del lenguaje lógico de los navegadores, Javascript. funciones, clases, arrays.',
    categoria: 'Programación',
    referenceHTML: "curso-JS"
},
{
    id: 4,
    nombre: 'CURSO INTRODUCTORIO DE CSS',
    img: "https://martynezagustin.github.io/PreEntrega3-MartinezMedina/assets/imgs/courses/curso-css.png",
    duracion: '78 horas',
    descripcion: 'Descubre de forma introductoria, en este curso, como crearle estilos a tu página web, con CSS.',
    categoria: 'Programación',
    referenceHTML: "curso-CSS"
},
{
    id: 5,
    nombre: 'CURSO INTRODUCTORIO DE MARKETING',
    img: "https://martynezagustin.github.io/PreEntrega3-MartinezMedina/assets/imgs/courses/curso-marketing.png",
    duracion: '70 horas',
    descripcion: 'Familiarizate con los principios del marketing, en un curso básico que aborda los conceptos fundamentales.',
    categoria: 'Marketing y Empresas',
    referenceHTML: "curso-marketing"
},
{
    id: 6,
    nombre: 'CURSO SOBRE METODOLOGÍA DE STARTUPS',
    img: "https://martynezagustin.github.io/PreEntrega3-MartinezMedina/assets/imgs/courses/curso-startups.jpg",
    duracion: '67 horas',
    descripcion: 'Comienza a aprender sobre Startups, el nuevo paradigma del management empresarial. MVP y más.',
    categoria: 'Marketing y Empresas',
    referenceHTML: "curso-startups"
},
{
    id: 7,
    nombre: 'CURSO SOBRE IA Y CHAT GPT',
    img: "https://martynezagustin.github.io/PreEntrega3-MartinezMedina/assets/imgs/courses/curso-chat-gpt.jpg",
    duracion: '75 horas',
    descripcion: 'Incursiona en la nueva revolución de la IA, el CHAT GPT, creado para soluciones inteligentes y más.',
    categoria: 'Marketing y Empresas',
    referenceHTML: "curso-IA-GPT"
},
{
    id: 8,
    nombre: 'CURSO DE MARKETING DIGITAL',
    img: "https://martynezagustin.github.io/PreEntrega3-MartinezMedina/assets/imgs/courses/curso-marketing-digital.png",
    duracion: '60 horas',
    descripcion: 'Ábrete camino en el magnífico mundo del marketing digital y los negocios digitales con esta capacitación.',
    categoria: 'Marketing y Empresas',
    referenceHTML: "curso-mkt-digital"
}]

const rowProgramacion = document.querySelector('.programacion')
const rowMarketingAndEmpresas = document.querySelector('.marketing')

let cursosProgram = cursos.filter((curso) => curso.categoria === 'Programación')
let cursosMarketingAndEmpresas = cursos.filter((curso) => curso.categoria === 'Marketing y Empresas')

let cursosPlanFormacion = JSON.parse(localStorage.getItem('Cursos')) || []
// let cursosPlanFormacionJSON = (idCurso, curso) => {localStorage.setItem(idCurso, curso)}

//generar cursos mediante DOM

cursosProgram.forEach((curso) => {
    const cursoDiv = document.createElement('div')
    cursoDiv.classList.add('card')
    cursoDiv.classList.add('ancho-card')
    cursoDiv.innerHTML = `<img src=${curso.img} alt="curso-desarrollo-web">
    <div class="card-body">
    <h5 class="card-title">${curso.nombre}</h5>
    <p class="card-duration"><b>Duración: <i>${curso.duracion}</i></b></p>
    <p class="card-text">${curso.descripcion}</p>
    <a href="#" class="btn btn-add btn-secondary" id="${curso.id}">AÑADIR A MI PLAN</a>
    <a href="./course_detail.html" class="btn btn-view-course mt-2 btn-secondary" id="${curso.referenceHTML}">VER CURSO</a>
    </div>`

    rowProgramacion.appendChild(cursoDiv)
})

cursosMarketingAndEmpresas.forEach((curso) => {
    const cursoDiv = document.createElement('div')
    cursoDiv.classList.add('card')
    cursoDiv.classList.add('ancho-card')
    cursoDiv.innerHTML = `<img src="${curso.img}" class="card-img-top"
                alt="curso-desarrollo-web">
                <div class="card-body">
                <h5 class="card-title">${curso.nombre}</h5>
                <p class="card-duration"><b>Duración: <i>${curso.duracion}</i></b></p>
                <p class="card-text">${curso.descripcion}</p>
                <a href="#" class="btn btn-add btn-secondary" id="${curso.id}">AÑADIR A MI PLAN</a>
                <a href="./course_detail.html" class="btn btn-view-course mt-2 btn-secondary" id="${curso.referenceHTML}">VER CURSO</a>
                </div>`

    rowMarketingAndEmpresas.appendChild(cursoDiv)
})

const btnVerCurso = document.querySelectorAll('.btn-view-course')

function cursoAVer(referencia){
    let cursoView = cursos.find(curso => curso.referenceHTML === referencia)
        localStorage.setItem("cursoSeleccionado", JSON.stringify(cursoView))
    }

btnVerCurso.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        cursoAVer(e.target.referencia)
        window.location.href = 'course_detail.html'
    })
})