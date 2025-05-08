<script>
    let links = ["Instagram", "Facebook"];
  </script>
  
  <section class="w-full px-5 py-10 md:py-16 bg-gray-100 text-gray-800">
    <!-- Header -->
    
  
    <!-- Main section -->
    <div class="flex flex-col md:flex-row items-center gap-10">
      <!-- Left content -->
      <div class="flex-1 text-center md:text-left">
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            MULLAT – EL BARET DE LA PISCINA DE RAFOL
        </h1>
        <p class="text-xl italic mb-6">Bar - Restaurante</p>
        <p class="text-gray-600 mb-6">
            "Donde el deporte y la diversión se fusionan en una experiencia única: disfruta de nuestra refrescante piscina, vibrante pista de pádel, canchas de tenis de alto nivel y un parque infantil pensado para la alegría de los más pequeños."
        </p>
  
        <!-- Social links -->
        <div class="space-y-2">
          <p class="font-semibold">Redes Sociales</p>
          {#each links as link}
          <a href={link === "Instagram" ? "https://www.instagram.com" : "https://www.facebook.com"} target="_blank" class="flex hover:text-gray-500 justify-between items-center border-b pb-1">
            <span>{link}</span>
            <span>→</span>
          </a>
          {/each}
        </div>
      </div>
  
      <!-- Right image -->
      <div class="flex-1">
        <img src="/images/entrada_rafol.webp" alt="Persona" class="rounded shadow-lg w-full max-w-md mx-auto md:mx-0" />
      </div>
    </div>
  
<div class="mt-10 text-sm text-gray-700 border-l-4 border-gray-300 pl-4 italic">
    “La experiencia en la cocina de este restaurante es una verdadera revelación. Cada plato, meticulosamente elaborado, despierta todos los sentidos y refleja la pasión por la tradición y la innovación. Sin duda, es un deleite para los paladares más exigentes.”
    <p class="mt-2 font-bold text-right">— Juan Pérez</p>
  </div>
  </section>
  