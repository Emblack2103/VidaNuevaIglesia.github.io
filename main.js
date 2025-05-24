// Menú móvil
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Cargar eventos
document.addEventListener('DOMContentLoaded', function() {
    loadEvents();
    loadVerseOfTheDay();
});

// Eventos de ejemplo
function loadEvents() {
    const eventsGrid = document.querySelector('.events-grid');
    
    if(eventsGrid) {
        const events = [
            {
                title: "Retiro Espiritual",
                date: "15-17 Marzo 2023",
                description: "Un fin de semana de conexión con Dios en la naturaleza.",
                image: "images/event1.jpg"
            },
            {
                title: "Noche de Alabanza",
                date: "24 Marzo 2023",
                description: "Ven y adora a Dios con nosotros en esta noche especial.",
                image: "images/event2.jpg"
            },
            {
                title: "Estudio Bíblico",
                date: "Todos los Miércoles",
                description: "Estudio profundo de la Palabra de Dios para jóvenes.",
                image: "images/event3.jpg"
            }
        ];
        
        let eventsHTML = '';
        
        events.forEach(event => {
            eventsHTML += `
                <div class="event-card">
                    <div class="event-img">
                        <img src="${event.image}" alt="${event.title}">
                    </div>
                    <div class="event-info">
                        <h3>${event.title}</h3>
                        <div class="event-date">
                            <i class="far fa-calendar-alt"></i>
                            <span>${event.date}</span>
                        </div>
                        <p>${event.description}</p>
                        <a href="#" class="btn small">Más información</a>
                    </div>
                </div>
            `;
        });
        
        eventsGrid.innerHTML = eventsHTML;
    }
}

// Versículo del día (podrías conectarlo a una API después)
function loadVerseOfTheDay() {
    const verses = [
        {
            text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree no se pierda, mas tenga vida eterna.",
            reference: "Juan 3:16"
        },
        {
            text: "Fiel es Dios, quien los ha llamado a tener comunión con su Hijo Jesucristo, nuestro Señor.",
            reference: "1 Corintios 1:9"
        },
        {
            text: "El Señor es mi pastor, nada me faltará.",
            reference: "Salmo 23:1"
        },
        {
            text: "Todo lo puedo en Cristo que me fortalece.",
            reference: "Filipenses 4:13"
        },
        {
            text: "Echad toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.",
            reference: "1 Pedro 5:7"
        }
    ];
    
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    
    if(document.getElementById('verse-text')) {
        document.getElementById('verse-text').textContent = `"${randomVerse.text}"`;
        document.getElementById('verse-reference').textContent = randomVerse.reference;
    }
}

// Efecto scroll suave para todos los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cambiar header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.9)';
        header.style.padding = '15px 0';
    } else {
        header.style.background = 'var(--primary-color)';
        header.style.padding = '20px 0';
    }
});