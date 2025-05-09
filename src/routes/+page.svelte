<script lang="ts">
 import { onMount } from 'svelte';
 import { fade, slide } from 'svelte/transition';

   let items = [
    {
      title: 'Cumpleaños',
      href: '/eventos/zona-infantil',
      img: '/images/parque_rafol.webp'
    },
    {
      title: 'Piscina',
      href: '/eventos/deportes/piscina',
      img: '/images/piscina.jpg'
    },
    {
      title: 'Tenis & Pádel',
      href: '/eventos/deportes/padel-tenis',
      img: '/images/padel.jpg'
    }
  ];

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
          <li><a href="/carta" class="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Ver Carta</a></li>
          <li class="select-none">|</li>
          <li><a href="/contacto" class="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Contacto</a></li>
          <li class="select-none">|</li>
          <li><a href="/conocenos" class="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Conócenos</a></li>
          <li class="select-none">|</li>
          <li><a href="/#eventos_especiales" class="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Eventos</a></li>
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
      <!-- Versión para escritorio y tablet -->
      <!-- Versión para escritorio y tablet -->
<div class="hidden md:block md:w-1/2" in:slide={{ duration: 600 }}>
  <h2 class="text-center md:text-right text-3xl font-bold mb-4">
    Ven y descubre<br />
    nuestra carta
  </h2>
  <p class="text-center md:text-right text-lg mb-6">
    Explora una selección de platos únicos, preparados con pasión y los mejores ingredientes para sorprender tu paladar.
  </p>
  <div class="text-center md:text-right">
    <a href="/carta" class="inline-block px-6 py-3 bg-[rgb(0,119,119)] text-white font-medium rounded hover:bg-[rgb(100,199,199)] transition">
      DESCUBRE NUESTRA CARTA
    </a>
  </div>
</div>

<!-- Versión para móvil -->
<div class="block md:hidden md:w-1/2 text-left" in:slide={{ duration: 600 }}>
  <h2 class="text-left text-xl font-bold mb-2">
    Ingredientes selectos<br />
    para paladares exigentes
  </h2>
  <p class="text-left text-sm mb-4">
    Escogemos lo mejor de cada origen para ofrecerte una experiencia culinaria inigualable, donde cada bocado cuenta.
  </p>
  <div class="text-center sm:text-right">
    <a href="/carta" class="inline-block px-4 py-2 bg-[rgb(0,119,119)] text-white font-medium rounded hover:bg-[rgb(100,199,199)] transition">
      CONOCE NUESTRA CARTA
    </a>
  </div>
</div>
  
      <!-- Slider adicional (opcional) -->
      <div class="md:w-1/2" in:slide={{ duration: 600, delay: 200 }}>
        <img src={images[current]} alt="Imagen del slider" class="w-full h-auto rounded-lg shadow-lg object-cover" />
      </div>
    </div>
  </section>
  <section class="max-w-7xl mx-auto px-4 py-12">
    <div class="bg-[rgb(0,119,119)] rounded-lg p-6 text-center shadow-md">
      <h2 class="text-2xl font-semibold text-white mb-3">Reserva tu mesa</h2>
      <p class="text-white text-base mb-4">
        Vive una experiencia única con nosotros. Reserva ahora y disfruta de momentos inolvidables.
      </p>
      <p class="text-white text-sm mb-4">
        Horarios: Lunes a Viernes: 9:00 - 15:00 / 19:00 - 23:00<br />
        Sábados y Domingos: 09:00 - 17:00 / 19:00 - 00:00
      </p>
      <a href="/reservas" class="inline-block px-6 py-2 bg-white text-[rgb(0,119,119)] font-medium rounded hover:bg-gray-100 transition">
        Reservar
      </a>
    </div>
  </section>
  <section class="max-w-7xl mx-auto px-4 py-16">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Card Almuerzo -->
    
      <div class="flex flex-row bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 p-2">
        <!-- Imagen pequeña a la izquierda -->
        <div class="w-1/3">
          <img src="/images/img1.jpg" alt="Turno Almuerzo" class="w-full h-full object-cover rounded-l-xl border-4 border-white" />
        </div>
        <!-- Texto a la derecha -->
        <div class="w-2/3 p-2 flex flex-col justify-center">
          <h3 class="text-lg font-bold text-[rgb(0,119,119)]">Almuerzo</h3>
          <p class="text-xs text-gray-600">
            Menú fresco y ligero para comenzar el día con energía.
          </p>
          
        </div>
      </div>
    
    <!-- Card Comida -->
    
      <div class="flex flex-row bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 p-2">
        <!-- Imagen pequeña a la izquierda -->
        <div class="w-1/3">
          <img src="/images/img2.jpg" alt="Turno Comida" class="w-full h-full object-cover rounded-l-xl border-4 border-white" />
        </div>
        <!-- Texto a la derecha -->
        <div class="w-2/3 p-2 flex flex-col justify-center">
          <h3 class="text-lg font-bold text-[rgb(0,119,119)]">Comida</h3>
          <p class="text-xs text-gray-600">
            Platos destacados que combinan tradición y modernidad.
          </p>
      
        </div>
      </div>
    
    <!-- Card Cena -->
    
      <div class="flex flex-row bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 p-2">
        <!-- Imagen pequeña a la izquierda -->
        <div class="w-1/3">
          <img src="/images/img3.jpg" alt="Turno Cena" class="w-full h-full object-cover rounded-l-xl border-4 border-white" />
        </div>
        <!-- Texto a la derecha -->
        <div class="w-2/3 p-2 flex flex-col justify-center">
          <h3 class="text-lg font-bold text-[rgb(0,119,119)]">Cena</h3>
          <p class="text-xs text-gray-600">
            Cierra el día con una experiencia gastronómica única.
          </p>
    
        </div>
      </div>
    
  </div>
</section>

<section class="max-w-7xl mx-auto px-4 py-16">
  <div class="flex flex-col md:flex-row items-center gap-8">
    <!-- Imagen del parque infantil -->
    <div class="md:w-1/2">
      <img src="/images/parque_rafol.webp" alt="Parque Infantil" class="w-full h-auto rounded-lg shadow-md object-cover" />
    </div>
    <!-- Información de la zona infantil -->
    <div class="md:w-1/2 text-center sm:text-start">
      <h2 class="text-3xl font-bold mb-4">Zona Infantil</h2>
      <p class="text-lg text-gray-700 mb-6">
        Un espacio pensado para los más pequeños, con parque y un menú diseñado a su medida.
      </p>
      <a href="/zona-infantil" class="inline-block px-6 py-3 bg-[rgb(0,119,119)] text-white font-medium rounded hover:bg-[rgb(100,199,199)] transition">
        DESCUBRE MÁS
      </a>
    </div>
  </div>
</section>

<section class="w-full px-5 py-10 md:py-16 bg-gray-100 text-gray-800">
  <!-- Header -->
  <div class="max-w-3xl mx-auto text-center mb-8">
    <h2 id="eventos_especiales"  class="text-4xl md:text-5xl font-extrabold mb-4 text-[rgb(0,109,109)]">Eventos Especiales</h2>
    <p class="text-xl italic text-gray-600">
      Descubre nuestros espacios diseñados para brindarte experiencias inolvidables.
    </p>
  </div>

  <!-- Grid en tres columnas con efecto Polaroid -->
  <div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each items as item}
      <a href={item.href} class="block">
        <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 px-4 pt-4 pb-8">
          <img src={item.img} alt={item.title} class="w-full h-48 object-cover rounded-lg" />
          <p class="mt-4 text-center text-lg font-medium text-gray-800">{item.title}</p>
            <p class="text-center text-sm text-gray-600">
              <button type="button" class="inline-block px-4 py-2 bg-[rgb(0,109,109)] text-white font-medium rounded hover:bg-[rgb(100,199,199)] transition" on:click={() => window.location.href = item.href}>
                Descubre más
              </button>
            </p>
        </div>
      </a>
    {/each}
  </div>

  <!-- Pie de sección con llamada a la acción -->
  <div class="mt-10 text-center text-gray-600 max-w-3xl mx-auto">
    ¿Tienes dudas o quieres reservar tu espacio?&nbsp;
    <a href="/contacto" class="font-semibold hover:underline">Contáctanos aquí</a>.
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
        href="/conocenos"
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