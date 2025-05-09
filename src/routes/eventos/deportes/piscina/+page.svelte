<script>
  let links = ["Instagram", "Facebook"];
  let telefono = "+34 612 345 678";

</script>

<section class="w-full px-5 py-10 md:py-16 bg-gray-100 text-gray-800">
  <!-- Header y contenido principal -->
  <div class="flex flex-col md:flex-row items-center gap-10">
    <!-- Left content: Texto informativo y horarios -->
    <div class="flex-1 text-center md:text-left">
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        Horarios de la Piscina
      </h1>
      <p class="text-xl italic mb-6">
        Disfruta de nuestra piscina en el horario que más se adapte a ti.
      </p>
      <p class="text-gray-600 mb-6">
        <strong>Lunes a Viernes:</strong> 10:00 - 20:00<br>
        <strong>Sábados y Domingos:</strong> 09:00 - 22:00
      </p>
      
      <!-- Redes Sociales y Teléfono -->
      <div class="space-y-2">
        <p class="font-semibold">Redes Sociales y Teléfono</p>
        {#each links as link}
          <a 
            href={link === "Instagram" ? "https://www.instagram.com" : "https://www.facebook.com"} 
            target="_blank" 
            class="flex hover:text-gray-500 justify-between items-center border-b pb-1"
          >
            <span>{link}</span>
            <span>→</span>
          </a>
        {/each}
        <div class="flex justify-between items-center border-b pb-1">
          <span>Teléfono</span>
          <span>{telefono}</span>
        </div>
      </div>
    </div>
    
    <!-- Right content: Imagen de la piscina -->
    <div class="flex-1">
      <img 
        src="/images/piscina.jpg" 
        alt="Piscina" 
        class="rounded shadow-lg w-full max-w-md mx-auto md:mx-0"
      />
    </div>
  </div>
  
  <!-- Pie de página con cita -->
  <div class="mt-10 text-sm text-gray-700 border-l-4 border-gray-300 pl-4 italic">
    “La piscina es el lugar perfecto para refrescarte y disfrutar del verano en un ambiente relajado.”  
    <p class="mt-2 font-bold text-right">— MULLAT</p>
  </div>
</section>