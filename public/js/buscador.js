const searchInput = document.getElementById('search-navbar');
const searchInput2 = document.getElementById('search-navbar2');
const resultsList = document.getElementById('results');


const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const modal = document.getElementById('myModal');

modal.style.display = 'none';



closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

const data = [
    { text: 'Programas >', link: 'index.html#seccion-programas' },
    { text: 'PROPEVI >', link: 'nuestros-programas-propevi.html' },
    { text: 'Historia >', link: 'nuestra-historia.html' },
    { text: 'Contacto >', link: 'contacto.html' },
    { text: 'Misión y visión >', link: 'acerca-de-nosotros-mision-y-vision-ministerial.html' },
    { text: 'Politicas públicas municipales >', link: 'institucion.html#politicas' },
    { text: 'Base jurídica >', link: 'institucion.html#base-juridica' },
    { text: 'filosofica institucional >', link: 'institucion.html#filosofia' },
    { text: 'Organigrama >', link: 'institucion.html#organigrama' },
    { text: 'Documentos >', link: 'institucion.html#documentos' },
    { text: 'Acciones de impacto >', link: 'index.html#seccion-acciones' },
    { text: 'Proyecto modelo de convivencia ciudadana >', link: 'https://mingob.gob.gt/centros-recreativos-piramide-beneficiaran-a-jovenes-de-villa-nueva/' },
    { text: 'prevención del embarazo en adolescentes >', link: 'https://mingob.gob.gt/wp-content/uploads/2020/09/PLANEA-Prevencio%CC%81n-del-Embarazo-en-Adolecentes.pdf' },
    { text: 'Campaña para concientizar y evitar las migraciones irregulares >', link: 'https://mingob.gob.gt/campana-hagamos-visible-lo-invisible-fortalece-la-concientizacion-sobre-migraciones/' },

];


function displayResults(query) {
    resultsList.innerHTML = '';


    const filteredData = data.filter(item =>
        item.text.toLowerCase().includes(query.toLowerCase())
    );

    filteredData.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = item.text;
        li.appendChild(a);
        resultsList.appendChild(li);
    });
    modal.style.display = 'block';
}

searchInput.addEventListener('input', event => {
    const query = event.target.value;
    displayResults(query);

});

searchInput2.addEventListener('input', event => {
    const query = event.target.value;
    displayResults(query);

});

