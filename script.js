
const education = [
    {
        categoria: "educacion",
        imagen: "ruta/a/la/imagen1.jpg",
        fecha: "2020-06-01",
        institucion: "Universidad XYZ",
        titulo: "Licenciatura en Informática"
    },
    
];

const experience = [
    {
        categoria: "experiencia",
        imagen: "images/adsLogo.jpg",
        periodo: "Abr 2021 - Presente",
        titulo: "Business Analyst en Atento Argentina",
        descripcion: "Responsable de definir, analizar y comunicar métricas clave y tendencias de negocios para el equipo de ventas."
    },
    
];

const skills = [
    {
        categoria: "habilidades",
        imagen: "images/codingIcon.jpg",
        titulo: "Coding:",
        institucion: "HTML/CSS/PHP/SQL/React Native/Java",
    }, 
];

// Función para renderizar los datos de una categoría específica
function renderData(data, category) {
    const container = document.getElementById(`${category}-container`);
    data.filter(item => item.categoria === category)
        .forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.innerHTML = `
                <img src="${item.imagen}" alt="${item.titulo}">
                <h3>${item.titulo}</h3>
                <p>${item.descripcion || item.institucion}</p>
            `;
            container.appendChild(itemElement);

            // Agregar la clase "loaded" para animar la aparición del elemento
            setTimeout(() => {
                itemElement.classList.add('loaded');
            }, 100);
        });
}

// Llamamos a la función para renderizar los datos al cargar la página
window.onload = function() {
    renderData(education, 'educacion');
    renderData(experience, 'experiencia');
    renderData(skills, 'habilidades');
};

