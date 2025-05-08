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


<!-- Versión para escritorio y tablet -->
<section class="titulo hidden sm:block" in:fade={{ duration: 600 }}>
  <div class="relative w-full">
    <!-- Contenedor superior: logo centrado y redes ocultas en tablet -->
    <div class="w-full flex flex-col items-center pt-0 pb-0">
      <!-- Logo centrado y de mayor tamaño -->
      <div class="select-none mb-2">
        <img src="/images/logo_mullat_black_mb.svg" alt="Mullat restaurante" class="titulo_mullat_tab w-64" />
      </div>
      
      <!-- Redes y contacto: solo se muestran en resoluciones lg y superiores -->
      

    <!-- Contenedor del SVG con navegación -->
    <div class="relative w-full overflow-hidden -mt-4 sm:-mt-30">
      <svg class="w-full h-full sm:h-[250px] pointer-events-none" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#000000" d="M0,288L60,266.7C120,245,240,203,360,170.7C480,139,600,117,720,133.3C840,149,960,203,1080,218.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L0,320Z"></path>
      </svg>

      <!-- Menú principal sobre el SVG (se mantiene, pero aseguramos que no tape el logo) -->
      <nav class="absolute inset-0 flex items-end justify-center" aria-label="Menú principal">
        <ul class="flex space-x-6 text-white font-semibold text-sm sm:text-lg">
          <li><a href="/reservas" class="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Reservar</a></li>
          <li class="select-none">|</li>
          <li><a href="/menu" class="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Ver Carta</a></li>
          <li class="select-none">|</li>
          <li><a href="/contacto" class="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Contacto</a></li>
          <li class="select-none">|</li>
          <li><a href="/conocenos" class="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Conócenos</a></li>
        </ul>
      </nav>
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


<style>

  /* Solo afecta a resoluciones de ordenador (a partir de 1440px) */
/* quita esto si puedes: */
    .titulo_mullat_mb {
      margin-top: 20px;
      margin-bottom: -20px;
        width: 70%;
        height: auto;
    }

    .titulo_mullat_tab {
      margin-top: 20px;
      
      margin-left: 3em;
        width: 70%;
        height: auto;
    }
 </style>