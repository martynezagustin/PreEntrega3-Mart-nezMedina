const cursos = [{
    id: 1,
    nombre: 'CURSO DE DESARROLLO WEB',
    duracion: '52 horas',
    descripcion: 'En este curso, aprenderás los conceptos elementales de HTML y CSS para desarrollar tu sitio web.',
    categoria: 'Programación'
},
{
    id: 2,
    nombre: 'CURSO DE SASS',
    duracion: '55 horas',
    descripcion: 'SASS es un preprocesador del lenguaje CSS, muy potente para tu sitio web. Aprende con este curso.',
    categoria: 'Programación'
},
{
    id: 3,
    nombre: 'CURSO BÁSICO DE JAVASCRIPT',
    duracion: '80 horas',
    descripcion: 'Aprende los conceptos del lenguaje lógico de los navegadores, Javascript. funciones, clases, arrays.',
    categoria: 'Programación'
},
{
    id: 4,
    nombre: 'CURSO INTRODUCTORIO DE CSS',
    duracion: '78 horas',
    descripcion: 'Descubre de forma introductoria, en este curso, como crearle estilos a tu página web, con CSS.',
    categoria: 'Programación'
},
{
    id: 5,
    nombre: 'CURSO INTRODUCTORIO DE MARKETING',
    duracion: '70 horas',
    descripcion: 'Familiarizate con los principios del marketing, en un curso básico que aborda los conceptos fundamentales.',
    categoria: 'Marketing y Empresas'
},
{
    id: 6,
    nombre: 'CURSO SOBRE METODOLOGÍA DE STARTUPS',
    duracion: '67 horas',
    descripcion: 'Comienza a aprender sobre Startups, el nuevo paradigma del management empresarial. MVP y más.',
    categoria: 'Marketing y Empresas'
},
{
    id: 7,
    nombre: 'CURSO SOBRE IA Y CHAT GPT',
    duracion: '75 horas',
    descripcion: 'Incursiona en la nueva revolución de la IA, el CHAT GPT, creado para soluciones inteligentes y más.',
    categoria: 'Marketing y Empresas'
},
{
    id: 8,
    nombre: 'CURSO DE MARKETING DIGITAL',
    duracion: '60 horas',
    descripcion: 'Ábrete camino en el magnífico mundo del marketing digital y los negocios digitales con esta capacitación.',
    categoria: 'Marketing y Empresas'
}]

const divCol = document.querySelectorAll('.col')

divCol.forEach((cols) => {
    cursos.forEach((curso) => {
        const cursoDiv = document.createElement('div')
        cursoDiv.classList.add('card')
        cursoDiv.innerHTML = `<img src="../assets/imgs/courses/curso-desarrollo-web.png" class="card-img-top"
        alt="curso-desarrollo-web">
        <div class="card-body">
        <h5 class="card-title">${curso.nombre}</h5>
        <p class="card-duration"><b>Duración: <i>${curso.duracion}</i></b></p>
        <p class="card-text">${curso.descripcion}</p>
        <a href="#" class="btn btn btn-secondary">AÑADIR A MI PLAN</a>
        </div>`

        cols.appendChild(cursoDiv)
    })
})
