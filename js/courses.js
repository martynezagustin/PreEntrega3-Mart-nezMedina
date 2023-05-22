const cursos = [{
    id: 1,
    nombre: 'CURSO DE DESARROLLO WEB',
    img: "https://martynezagustin.github.io/PreEntrega3-MartinezMedina/assets/imgs/courses/curso-desarrollo-web.png",
    duracion: '52 horas',
    descripcion: 'En este curso, aprenderás los conceptos elementales de HTML y CSS para desarrollar tu sitio web.',
    categoria: 'Programación',
    referenceHTML: "curso-desarrollo-web",
    descripcionLarga: "¿Te gustaría aprender a crear sitios web increíbles y dinámicos? ¿Quieres convertirte en un desarrollador web profesional y demandado? Entonces este curso es para ti. En este curso de desarrollo web, aprenderás los fundamentos de HTML, CSS y JavaScript, los lenguajes más utilizados para crear páginas web. También aprenderás a usar frameworks y librerías populares como Bootstrap, jQuery y React, que te permitirán crear sitios web más interactivos y responsivos. Además, aprenderás a usar herramientas como Git y GitHub para gestionar tu código y colaborar con otros desarrolladores. Al final del curso, tendrás un portafolio de proyectos que mostrarán tus habilidades y te ayudarán a conseguir tu primer trabajo como desarrollador web. No necesitas tener experiencia previa en programación, solo muchas ganas de aprender y crear. ¡Inscríbete ya y empieza tu camino hacia el éxito!"
},
{
    id: 2,
    nombre: 'CURSO DE SASS',
    img: "https://martynezagustin.github.io/PreEntrega3-MartinezMedina/assets/imgs/courses/curso-sass.png",
    duracion: '55 horas',
    descripcion: 'SASS es un preprocesador del lenguaje CSS, muy potente para tu sitio web. Aprende con este curso.',
    categoria: 'Programación',
    referenceHTML: "curso-sass",
    descripcionLarga: "¿Te gustaría aprender a crear estilos web más potentes y eficientes? Entonces, el curso de SASS es para ti. SASS es un preprocesador CSS que te permite usar variables, mixins, funciones, bucles y mucho más para escribir código CSS más limpio y reutilizable. En este curso, aprenderás desde lo básico hasta lo avanzado de SASS, así como a usar herramientas como Gulp para compilar tu código en CSS puro. No te pierdas esta oportunidad de mejorar tus habilidades como desarrollador frontend y de crear páginas web más atractivas y profesionales con SASS."
},
{
    id: 3,
    nombre: 'CURSO BÁSICO DE JAVASCRIPT',
    img: "https://martynezagustin.github.io/PreEntrega3-MartinezMedina/assets/imgs/courses/curso-javascript.png",
    duracion: '80 horas',
    descripcion: 'Aprende los conceptos del lenguaje lógico de los navegadores, Javascript. funciones, clases, arrays.',
    categoria: 'Programación',
    referenceHTML: "curso-JS",
    descripcionLarga: "¿Te gustaría aprender a crear páginas web dinámicas e interactivas con el lenguaje de programación más popular de la actualidad? Entonces este curso de JAVASCRIPT es para ti. En este curso aprenderás los conceptos básicos de JAVASCRIPT, como variables, funciones, objetos, eventos y bucles. También aprenderás a usar librerías y frameworks como jQuery, Bootstrap y React para facilitar tu trabajo y crear aplicaciones web modernas y atractivas. Al final del curso, serás capaz de desarrollar tus propios proyectos web con JAVASCRIPT y mostrar tus habilidades al mundo. No esperes más y apúntate a este curso de JAVASCRIPT hoy mismo. ¡Te garantizo que no te arrepentirás!"
},
{
    id: 4,
    nombre: 'CURSO INTRODUCTORIO DE CSS',
    img: "https://martynezagustin.github.io/PreEntrega3-MartinezMedina/assets/imgs/courses/curso-css.png",
    duracion: '78 horas',
    descripcion: 'Descubre de forma introductoria, en este curso, como crearle estilos a tu página web, con CSS.',
    categoria: 'Programación',
    referenceHTML: "curso-CSS",
    descripcionLarga: "¿Te gustaría aprender a crear páginas web con un diseño profesional y atractivo? Entonces, este curso de CSS es para ti. CSS es el lenguaje que te permite dar estilo a los elementos HTML, como el color, la fuente, el tamaño, la posición, las animaciones y mucho más. Con CSS puedes transformar una página web simple en una obra de arte. En este curso aprenderás desde lo básico hasta lo avanzado de CSS, con ejemplos prácticos y proyectos reales. Aprenderás a usar CSS Grid, Flexbox, Bootstrap, SASS y otras herramientas que te harán la vida más fácil como desarrollador web. No necesitas tener experiencia previa en CSS, solo ganas de aprender y divertirte. ¡No esperes más y apúntate a este curso de CSS!"
},
{
    id: 5,
    nombre: 'CURSO INTRODUCTORIO DE MARKETING',
    img: "https://martynezagustin.github.io/PreEntrega3-MartinezMedina/assets/imgs/courses/curso-marketing.png",
    duracion: '70 horas',
    descripcion: 'Familiarizate con los principios del marketing, en un curso básico que aborda los conceptos fundamentales.',
    categoria: 'Marketing y Empresas',
    referenceHTML: "curso-marketing",
    descripcionLarga: "¿Te gustaría aprender los fundamentos del marketing y cómo aplicarlos a tu negocio o proyecto personal? Entonces este curso es para ti. En este curso de marketing básico, aprenderás los conceptos clave del marketing, como el análisis del mercado, el posicionamiento, la segmentación, el mix de marketing y el plan de marketing. También conocerás las herramientas y estrategias más efectivas para atraer y fidelizar a tus clientes, así como para medir y mejorar tus resultados. Este curso está diseñado para principiantes que quieren iniciarse en el mundo del marketing o para profesionales que quieren actualizar sus conocimientos. El curso es práctico, dinámico y divertido, con ejemplos reales y ejercicios interactivos. Al finalizar el curso, tendrás una visión global del marketing y podrás aplicarlo a tu propio caso. No lo dudes más y apúntate a este curso de marketing básico. ¡Te esperamos!"
},
{
    id: 6,
    nombre: 'CURSO SOBRE METODOLOGÍA DE STARTUPS',
    img: "https://martynezagustin.github.io/PreEntrega3-MartinezMedina/assets/imgs/courses/curso-startups.jpg",
    duracion: '67 horas',
    descripcion: 'Comienza a aprender sobre Startups, el nuevo paradigma del management empresarial. MVP y más.',
    categoria: 'Marketing y Empresas',
    referenceHTML: "curso-startups",
    descripcionLarga: "¿Te gustaría aprender a crear y validar tu propia idea de negocio? ¿Quieres conocer las herramientas y técnicas que utilizan las startups más exitosas? ¿Te interesa desarrollar tu capacidad de innovación y emprendimiento? Si la respuesta es sí, entonces este curso de metodología de startups es para ti. En este curso, aprenderás los conceptos y principios básicos de la metodología Lean Startup, que te permitirá diseñar, testear y mejorar tu propuesta de valor de forma ágil y eficiente. A lo largo del curso, realizarás ejercicios prácticos y aplicarás las herramientas más utilizadas por los emprendedores, como el lienzo de modelo de negocio, el mapa de empatía, el experimento mínimo viable y el pivote. Además, recibirás feedback y orientación de expertos y mentores que te ayudarán a validar tus hipótesis y a tomar las mejores decisiones para tu proyecto. Al finalizar el curso, tendrás una idea clara y sólida de cómo crear y lanzar tu startup al mercado, así como los conocimientos y habilidades necesarios para seguir aprendiendo y mejorando tu modelo de negocio. No esperes más y apúntate a este curso de metodología de startups. ¡Te esperamos con mucha ilusión y ganas de compartir esta experiencia contigo!"
},
{
    id: 7,
    nombre: 'CURSO SOBRE IA Y CHAT GPT',
    img: "https://martynezagustin.github.io/PreEntrega3-MartinezMedina/assets/imgs/courses/curso-chat-gpt.jpg",
    duracion: '75 horas',
    descripcion: 'Incursiona en la nueva revolución de la IA, el CHAT GPT, creado para soluciones inteligentes y más.',
    categoria: 'Marketing y Empresas',
    referenceHTML: "curso-IA-GPT",
    descripcionLarga: "¿Te gustaría aprender a crear chatbots con inteligencia artificial? Entonces, el curso de chatGPT es para ti. En este curso, aprenderás los conceptos básicos de los modelos de lenguaje generativos, cómo usar la plataforma de OpenAI para interactuar con ChatGPT, y cómo crear tus propios chatbots personalizados con diferentes tonos, estilos y propósitos. El curso es práctico, divertido y dinámico, y te permitirá desarrollar tus habilidades de programación y comunicación. ¡No te lo pierdas!"
},
{
    id: 8,
    nombre: 'CURSO DE MARKETING DIGITAL',
    img: "https://martynezagustin.github.io/PreEntrega3-MartinezMedina/assets/imgs/courses/curso-marketing-digital.png",
    duracion: '60 horas',
    descripcion: 'Ábrete camino en el magnífico mundo del marketing digital y los negocios digitales con esta capacitación.',
    categoria: 'Marketing y Empresas',
    referenceHTML: "curso-mkt-digital",
    descripcionLarga: "¿Te gustaría aprender a crear y gestionar campañas de marketing digital? ¿Quieres dominar las herramientas y estrategias más efectivas para promocionar tu negocio o marca personal en internet? Entonces, este curso de marketing digital es para ti. En este curso, aprenderás los conceptos básicos del marketing digital, cómo diseñar un plan de marketing online, cómo usar las redes sociales, el email marketing, el SEO, el SEM y el análisis web para alcanzar tus objetivos. Además, tendrás acceso a ejemplos prácticos, tutoriales y recursos para poner en marcha tus propias acciones de marketing digital. No esperes más y apúntate a este curso de marketing digital. ¡Te garantizamos que te encantará!"
}]
//selección de las filas de las categorías
const rowProgramacion = document.querySelector('.programacion')
const rowMarketingAndEmpresas = document.querySelector('.marketing')

//selecciona los cursos por categoría
let cursosProgram = cursos.filter((curso) => curso.categoria === 'Programación')
let cursosMarketingAndEmpresas = cursos.filter((curso) => curso.categoria === 'Marketing y Empresas')

let cursosPlanFormacion = JSON.parse(localStorage.getItem('Cursos')) || []
// let cursosPlanFormacionJSON = (idCurso, curso) => {localStorage.setItem(idCurso, curso)}


//crea cursos en marketing y empresas por cada uno en categoría 'Programación'
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

//crea cursos en marketing y empresas por cada uno en categoría 'Marketing y Empresas'
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

//el botón de ver curso
const btnVerCurso = document.querySelectorAll('.btn-view-course')

//funcionalidad de DOM que guarda el curso seleccionado para generarlo en otra pág
btnVerCurso.forEach((boton) => {
    boton.addEventListener("click", (e) => {

        const referenciaHTML = e.target.id
        const curso = cursos.find((c) => c.referenceHTML === referenciaHTML)
        localStorage.setItem('cursoSeleccionado', JSON.stringify(curso))
        window.location.href = 'course_detail.html'
    })
})