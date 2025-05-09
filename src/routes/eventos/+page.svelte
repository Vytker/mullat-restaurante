<script lang="ts">
  // Eventos con su imagen y enlace
  let items = [
    {
      title: 'Zona Infantil',
      href: '/eventos/zona-infantil',
      img: '/images/parque_rafol.webp'
    },
    {
      title: 'Piscina',
      href: '/eventos/piscina',
      img: '/images/piscina.jpg'
    },
    {
      title: 'Tenis & Pádel',
      href: '/eventos/deportes',
      img: '/images/padel.jpg'
    }
  ];
</script>

<section class="w-full px-5 py-10 md:py-16 bg-gray-100 text-gray-800">
  <!-- Header -->
  <div class="max-w-3xl mx-auto text-center mb-8">
    <h1 class="text-4xl md:text-6xl font-extrabold mb-4">
      Eventos Especiales
    </h1>
    <p class="text-xl italic text-gray-600">
      Descubre nuestros espacios diseñados para brindarte experiencias inolvidables.
    </p>
  </div>

  <!-- Grid en tres columnas con efecto Polaroid -->
  <div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each items as item}
      <a href={item.href} class="block">
        <div
          class="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105
                 px-4 pt-4 pb-8"
        >
          <img
            src={item.img}
            alt={item.title}
            class="w-full h-48 object-cover rounded-lg"
          />
          <p class="mt-4 text-center text-lg font-medium text-gray-800">
            {item.title}
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
