<script lang="ts">
 import { onMount } from 'svelte';
 import { fade, slide } from 'svelte/transition';

 let images = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg'
  ];
  let current = 0;


  onMount(() => {
    const interval = setInterval(() => {
      current = (current + 1) % images.length;
    }, 3000); 

  return () => clearInterval(interval);
    });
</script>


<!-- Versión para escritorio y tablet: mantiene tu section original -->
<section class="titulo hidden sm:block ">
  <div class="desktop-scale">
        <div class="w-full relative grid grid-cols-1 lg:grid-cols-2 gap-x-4">
          <!-- Columna izquierda: títulos y, en tablet (md), el texto debajo, sin margen ni padding -->
          <div id="titulo" class="flex flex-col md:items-center md:justify-center md:p-5 lg:p-1 lg:mb-[-30px] lg:items-start pl-4 select-none">   
              <img src="/images/logo_mullat_black_mb.svg" alt="Mullat restaurante" class="titulo_mullat_tab relative text-center"/>
          </div>

          <!-- Columna derecha: solo en lg se muestra el texto, alineado al bottom -->
          <div class="hidden show-from-850 absolute bottom-0 right-0 md:items-center md:justify-center md:p-5 lg:p-1 text-center ">
          <p class="contact-info flex items-center gap-4 text-lg m-0 p-0">
            <a href="https://www.instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-none text-[rgb(0,119,119)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a2 2 0 011.66.93l1.12 1.68a2 2 0 01-.45 2.7l-1.17.98a11.042 11.042 0 005.52 5.52l.98-1.17a2 2 0 012.7-.45l1.68 1.12a2 2 0 01.93 1.66V19a2 2 0 01-2 2h-1C7.373 21 3 16.627 3 11V5z" />
              </svg>
            </a><span>123-456-7890</span>
            <a href="https://www.instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
              <svg class="w-6 h-6 fill-current text-[rgb(0,119,119)]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9 0 63.6 51.3 114.9 114.9 114.9 63.6 0 114.9-51.3 114.9-114.9 0-63.6-51.3-114.9-114.9-114.9zm0 190.2c-41.7 0-75.3-33.6-75.3-75.3 0-41.7 33.6-75.3 75.3-75.3 41.7 0 75.3 33.6 75.3 75.3 0 41.7-33.6 75.3-75.3 75.3zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9 0-14.9 12-26.9 26.9-26.9 14.9 0 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.6C386.9 32 355.3 23.8 319.6 22c-35.8-1.8-143.2-1.8-179 0-35.7 1.7-67.3 9.9-93.6 36.2C32 106.1 23.8 137.7 22 173.4c-1.8 35.8-1.8 143.2 0 179 1.7 35.7 9.9 67.3 36.2 93.6 26.3 26.3 57.9 34.5 93.6 36.2 35.8 1.8 143.2 1.8 179 0 35.7-1.7 67.3-9.9 93.6-36.2 26.3-26.3 34.5-57.9 36.2-93.6 1.8-35.8 1.8-143.2 0-179zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99 9 132.3s2.7 102.9-9 132.3z"/>
              </svg>
            </a><span>@mullatrestaurante</span>
            <a href="https://www.facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
              <svg class="w-6 h-6 fill-current text-[rgb(0,119,119)]" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M279.14 288l14.22-92.66H168.5v-60.63c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S241.91 0 208.36 0c-73 0-121.09 44.38-121.09 124.72V195.3H22.89V288h64.38v224h100.2V288z"/>
              </svg>
            </a><span>_mullatrestaurante</span>
          </p>
          
        </div>
              </div>
        <div id="espacio-svg-titulo"></div>
        <!-- Resto del contenido que ya tienes en web -->
        <div class="relative">
          <!-- Botones y SVG de navegación -->
          <div class="botones-nav-inicio relative z-10 -translate-y-5">
          
            <div class="flex items-center justify-center gap-6 -translate-y-[-20px]">
              <a href="/reservas" class="inline-block text-white transition-all duration-300 hover:text-[rgb(0,119,119)] text-lg">
                Reservar
              </a>
              <p class="text-white text-lg">|</p>
              <a href="/menu" class="inline-block text-white transition-all duration-300 hover:text-[rgb(0,119,119)] text-lg">
                Ver Carta
              </a>
              <p class="text-white text-lg">|</p>
              <a href="/contacto" class="inline-block text-white transition-all duration-300 hover:text-[rgb(0,119,119)] text-lg">
                Contacto
              </a>
            </div>
          </div>
          
          <div class="overflow-hidden">
            <svg class="absolute bottom-[-1px] left-0 w-full h-fit" viewBox="0 0 1430 320" preserveAspectRatio="none">
                <path fill="#00000" d="M0,288L60,266.7C120,245,240,203,360,170.7C480,139,600,117,720,133.3C840,149,960,203,1080,218.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
          </div>
        </div>
</div>
</section>

<!-- Versión para móvil: se muestra solo en pantallas pequeñas -->
<section class="titulo block sm:hidden">
  <div class="w-full flex flex-col items-center">
    <!-- Nombre y subtítulo centrado -->
     <div class="mt-4"></div>
    <img src="/images/logo_mullat_black_mb.svg" alt="Mullat restaurante" class="titulo_mullat_mb relative"/>
    
  </div>
  <!-- Opcional: Menú de navegación simplificado para móvil -->
  <!-- SVG de transición (onda) debajo del menú -->
  <div>
    <svg class="w-fill h-fill" viewBox="0 50 1440 320"  xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mobileGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="rgb(0,119,119)" />
          <stop offset="100%" stop-color="#f3f3f3" />
        </linearGradient>
      </defs>
      <path fill="url(#mobileGradient)" d="M0,64L48,80C96,96,192,128,288,170.7C384,213,480,267,576,261.3C672,256,768,192,864,149.3C960,107,1056,85,1152,112C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
</div>
</section>


<section class="max-w-7xl mx-auto px-4 py-16">
    <div class="flex flex-col md:flex-row items-center gap-8">
      <!-- Texto -->
      <div class="md:w-1/2" in:slide={{ duration: 600 }}>
        <h2 class="text-center md:text-right text-3xl font-bold mb-4">
          Recogemos el producto<br />
          <span class="block">desde su lugar de origen</span>
        </h2>
        <p class="text-center md:text-right text-lg mb-6">
          Seleccionamos, cuidamos y tratamos con máxima profesionalidad nuestra materia prima, dando a cada uno de
          nuestros platos la importancia que se merece.
        </p>
        <div class="text-center md:text-right">
          <a
            href="/restaurante/"
            class="inline-block px-6 py-3 bg-[rgb(0,119,119)] text-white font-medium rounded hover:bg-[rgb(100,199,199)] transition"
            >VER CARTA</a
          >
        </div>
      </div>
  
      <!-- Slider adicional (opcional) -->
      <div class="md:w-1/2" in:slide={{ duration: 600, delay: 200 }}>
        <img src={images[current]} alt="Imagen del slider" class="w-full h-auto rounded-lg shadow-lg object-cover" />
      </div>
    </div>
  </section>
  <section class="max-w-7xl mx-auto px-4 py-16">
    <div class="bg-[rgb(0,119,119)] rounded-lg p-8 text-center shadow-lg">
      <h2 class="text-3xl font-bold text-white mb-4">¡Haz tu reserva!</h2>
      <p class="text-white text-lg mb-6">
        Asegura tu lugar en nuestro exclusivo oasis. Disfruta de un ambiente fresco, cócteles artesanales y la mejor 
        experiencia gastronómica a la orilla de la piscina. ¡Tu momento ideal te espera!
      </p>
      <a href="/reservas" class="inline-block px-8 py-3 bg-white text-[rgb(0,119,119)] font-semibold rounded hover:bg-gray-200 transition">
        Reservar Ahora
      </a>
    </div>
  </section>
  <section class="max-w-7xl mx-auto px-4 py-16">

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Card Almuerzo -->
      <div class="p-8 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105">
        <h3 class="text-center text-2xl font-bold text-[rgb(0,119,119)] mb-4">Almuerzo</h3>
        <p class="text-center text-gray-600">
          Disfruta de un menú fresco y lleno de sabor, con opciones ligeras y nutritivas para comenzar el día.
        </p>
      </div>
      <!-- Card Comida -->
      <div class="p-8 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105">
        <h3 class="text-center text-2xl font-bold text-[rgb(0,119,119)] mb-4">Comida</h3>
        <p class="text-center text-gray-600">
          Una experiencia gastronómica con platos que destacan lo mejor de nuestra cocina, perfecta para compartir.
        </p>
      </div>
      <!-- Card Cena -->
      <div class="p-8 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105">
        <h3 class="text-center text-2xl font-bold text-[rgb(0,119,119)] mb-4">Cena</h3>
        <p class="text-center text-gray-600">
          Ambiente sofisticado y platos exquisitos para cerrar el día con elegancia y estilo.
        </p>
      </div>
    </div>
  </section> 
    <h2 class="text-center text-3xl font-bold mb-8">Eventos Especiales</h2>
  <p class="mt-8 text-center text-lg text-gray-700">
    Puedes disfrutar de estos espacios con una copa o una tapita, o incluso organizar eventos inolvidables.
  </p>
  <section class="max-w-7xl mx-auto px-4 py-16">
 
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Card Pista de Pádel -->
      <div class="p-8 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex flex-col items-center">
        <img src="/images/padel.jpg" alt="Pista de Pádel" class="w-24 h-24 mb-4 rounded-full object-cover" />
        <h3 class="text-2xl font-bold text-[rgb(0,119,119)] mb-2">Pádel</h3>
        <p class="text-center text-gray-600">
          Disfruta de un partido acompañado de una copa o una tapita.
        </p>
      </div>
      <!-- Card Piscina -->
      <div class="p-8 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex flex-col items-center">
        <img src="/images/piscina.jpg" alt="Piscina" class="w-24 h-24 mb-4 rounded-full object-cover" />
        <h3 class="text-2xl font-bold text-[rgb(0,119,119)] mb-2">Piscina</h3>
        <p class="text-center text-gray-600">
          Disfruta de refrescantes momentos y cócteles al lado del agua.
        </p>
      </div>
      <!-- Card Pista de Tenis -->
      <div class="p-8 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 flex flex-col items-center">
        <img src="/images/tenis.jpg" alt="Pista de Tenis" class="w-24 h-24 mb-4 rounded-full object-cover" />
        <h3 class="text-2xl font-bold text-[rgb(0,119,119)] mb-2">Tenis</h3>
        <p class="text-center text-gray-600">
          Organiza encuentros o disfruta de un partido en un ambiente único.
        </p>
      </div>
    </div>
  </section>


  <section class="max-w-7xl mx-auto px-4 py-16">
    <h2 class="text-center text-3xl font-bold mb-6">Conócenos</h2>
    <p class="text-center text-lg text-gray-700">
      Bienvenido a nuestro oasis, donde la frescura del agua y el ambiente relajado de un bar de piscina se fusionan
      para brindarte momentos inolvidables. Aquí, entre risas, cócteles artesanales y el suave murmullo del agua,
      descubrirás un equipo apasionado por ofrecer experiencias únicas y un refugio de relax para disfrutar del sol
      y la buena compañía.
    </p>
    <div class="text-center mt-8">
      <a
        href="/restaurante/"
        class="inline-block px-6 py-3 bg-[rgb(255,255,255)] text-[rgb(0,109,109)] border border-[rgb(0,109,109)] font-medium rounded hover:bg-[rgb(0,109,109)] hover:text-white transition"
        >CONÓCENOS</a
      >
    </div>
  </section>
  <div class="relative">
    <svg class="w-full" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="decorGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="rgb(0,119,119)" />
          <stop offset="100%" stop-color="white" />
        </linearGradient>
      </defs>
      <path fill="url(#decorGradient)" d="M0,64L48,80C96,96,192,128,288,170.7C384,213,480,267,576,261.3C672,256,768,192,864,149.3C960,107,1056,85,1152,112C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>

<style>
@media (min-width: 1025px) {
  .show-from-850 {
    display: block !important;
  }
}


#espacio-svg-titulo {
        height: 100px; /* Ajusta la altura según sea necesario */
    }
  @media(max-width: 850px){
    #espacio-svg-titulo{
        height: 0px; /* Ajusta la altura según sea necesario */
    }
  }

  /* Solo afecta a resoluciones de ordenador (a partir de 1440px) */
@media (min-width: 1920px) {
  .desktop-scale {
    /* Fijamos el ancho base a 1440px y escalamos en función del viewport */
    width: 1440px;
    margin: 0 auto; 
    transform: scale(calc(100vw / 1440));
    transform-origin: top center;
  }
}

    .botones-nav-inicio {
        margin-top: 20px;
    }
    .botones-nav-inicio a {
        font-size: 1.5rem;
        font-weight: italic;
        text-decoration: none;
    }

    .titulo_mullat_mb {
      margin-top: 20px;
      margin-bottom: -20px;
        width: 70%;
        height: auto;
    }

    .titulo_mullat_tab {
        width: 50%;
        height: auto;
    }
 </style>