<script>
  // Definimos las secciones y establecemos la pestaña activa
  let sections = ['Carta principal', 'Menú del día', 'Cumpleaños'];
  let activeTab = sections[0];
</script>

<div class="w-full px-5 py-10 md:py-16 bg-gray-100 text-gray-800">
  <div class="max-w-3xl mx-auto">
    <!-- Navegación de pestañas -->
    <div class="mb-8 border-b border-gray-300">
      <ul class="flex space-x-4">
        {#each sections as sec}
          <button
            type="button"
            class="cursor-pointer px-4 py-2 transition-colors duration-200"
            class:text-teal-600={activeTab === sec}
            class:border-b-2={activeTab === sec}
            class:border-teal-600={activeTab === sec}
            on:click={() => activeTab = sec}>
            {sec}
          </button>
        {/each}
      </ul>
    </div>
    
    <!-- Contenido según la pestaña activa -->
    {#if activeTab === 'Carta principal'}
      <section id="carta-principal" class="w-full px-5 py-10 md:py-16 bg-gray-100 text-gray-800">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold mb-6 text-center">Carta Principal</h2>
          <p class="mb-8 text-lg">Disponemos de una variada carta de opciones deliciosas y nutritivas, además de un estudiado menú diario para satisfacer a los más exigentes.</p>
          <h3 class="text-2xl font-semibold mt-8 mb-4">Entrantes y Tapas</h3>
          <div class="space-y-2">
            <div class="flex items-center">
              <span class="truncate sm:whitespace-nowrap">Croquetas de jamón ibérico <small>(media ración / ración)</small></span>
              <span class="flex-grow border-b border-gray-300 mx-2"></span>
              <span class="whitespace-nowrap">6,40 € / 12,80 €</span>
            </div>
            <div class="flex items-center">
              <span class="truncate sm:whitespace-nowrap">Montadito de bacon y queso de cabra</span>
              <span class="flex-grow border-b border-gray-300 mx-2"></span>
              <span class="whitespace-nowrap">5,00 € / 10,00 €</span>
            </div>
            <div class="flex items-center">
              <span class="truncate sm:whitespace-nowrap">Montadito de “figatells” (mini hamburguesa tradicional)</span>
              <span class="flex-grow border-b border-gray-300 mx-2"></span>
              <span class="whitespace-nowrap">5,00 € / 10,00 €</span>
            </div>
            <div class="flex items-center">
              <span class="truncate sm:whitespace-nowrap">Montadito de lomo y huevo de codorniz</span>
              <span class="flex-grow border-b border-gray-300 mx-2"></span>
              <span class="whitespace-nowrap">5,40 € / 10,40 €</span>
            </div>
            <div class="flex items-center">
              <span class="truncate sm:whitespace-nowrap">Montadito de tortilla de patatas</span>
              <span class="flex-grow border-b border-gray-300 mx-2"></span>
              <span class="whitespace-nowrap">4,00 € / 8,00 €</span>
            </div>
            <div class="flex items-center">
              <span class="truncate sm:whitespace-nowrap">Sepia a la plancha</span>
              <span class="flex-grow border-b border-gray-300 mx-2"></span>
              <span class="whitespace-nowrap">12,90 €</span>
            </div>
            <div class="flex items-center">
              <span class="truncate sm:whitespace-nowrap">“Escombros” (pescaditos fritos)</span>
              <span class="flex-grow border-b border-gray-300 mx-2"></span>
              <span class="whitespace-nowrap">5,40 € / 9,90 €</span>
            </div>
            <div class="flex items-center">
              <span class="truncate sm:whitespace-nowrap">Calamares a la plancha</span>
              <span class="flex-grow border-b border-gray-300 mx-2"></span>
              <span class="whitespace-nowrap">9,20 €</span>
            </div>
            <div class="flex items-center">
              <span class="truncate sm:whitespace-nowrap">Alitas de pollo fritas</span>
              <span class="flex-grow border-b border-gray-300 mx-2"></span>
              <span class="whitespace-nowrap">4,00 € / 8,00 €</span>
            </div>
          </div>
          <h3 class="text-2xl font-semibold mt-8 mb-4">Ensaladas</h3>
          <div class="space-y-2">
            <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Ensalada de la casa <small>(lechuga, tomate, zanahoria, cebolla, atún, huevo duro, olivas)</small></span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">7,50 €</span>
        </div>
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Ensalada César <small>(pollo a la plancha, picatostes, queso parmesano, salsa César)</small></span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">8,50 €</span>
        </div>
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Ensalada mediterránea <small>(mix de lechugas, tomate, atún, cebolla, huevo, aceitunas)</small></span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">7,50 €</span>
        </div>
        </div>
        <h3 class="text-2xl font-semibold mt-8 mb-4">Hamburguesas</h3>
        <div class="space-y-2">
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Burger Completa Especial <small>(ternera, cheddar, bacon, cebolla, tomate, lechuga, huevo)</small></span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">9,00 €</span>
        </div>
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Burger BBQ <small>(ternera, cheddar, bacon, cebolla caramelizada, salsa BBQ)</small></span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">9,00 €</span>
        </div>
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Burger Chef <small>(ternera, queso de cabra, cebolla caramelizada, mermelada dulce)</small></span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">9,00 €</span>
        </div>
        </div>
        <h3 class="text-2xl font-semibold mt-8 mb-4">Bocadillos</h3>
        <div class="space-y-2">
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Bocadillo de jamón serrano y queso</span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">7,00 €</span>
        </div>
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Bocadillo de lomo con queso</span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">7,50 €</span>
        </div>
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Bocadillo de tortilla española</span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">6,50 €</span>
        </div>
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Bocadillo vegetal <small>(atún, lechuga, tomate, huevo)</small></span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">7,00 €</span>
        </div>
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Bocadillo “Chivito” <small>(lomo, queso, bacon, lechuga, tomate, huevo)</small></span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">8,50 €</span>
        </div>
        </div>
        <h3 class="text-2xl font-semibold mt-8 mb-4">Postres Caseros</h3>
        <div class="space-y-2 mb-4">
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Rosas de hojaldre y manzana</span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">5,50 €</span>
        </div>
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Tarta de queso casera</span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">6,00 €</span>
        </div>
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Flan con nata</span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">5,00 €</span>
        </div>
        </div>
        <h3 class="text-2xl font-semibold mt-8 mb-4">Bebidas y Cócteles</h3>
        <div class="space-y-2">
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Refrescos y agua</span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">2,00 €</span>
        </div>
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Cerveza (caña / jarra)</span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">1,50 € / 3,00 €</span>
        </div>
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Copa de vino</span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">2,00 €</span>
        </div>
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Café o infusión</span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">1,20 €</span>
        </div>
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Mojito / Caipiriña</span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">6,00 €</span>
        </div>
        <div class="flex items-center">
            <span class="whitespace-normal sm:whitespace-nowrap">Gin-tonic (combinado)</span>
            <span class="flex-grow border-b border-gray-300 mx-2"></span>
            <span class="whitespace-nowrap">7,00 €</span>
        </div>
        </div>

</section>
    {:else if activeTab === 'Menú del día'}
      <section id="menu-del-dia">
        <h2 class="text-3xl font-bold mb-6 text-center">Menú del día</h2>
        <p class="mb-4 text-lg">
          Nuestro menú diario, con platos caseros y frescos, es perfecto para aquellos que buscan una comida deliciosa a un precio asequible.
        </p>
        <ul class="list-disc list-inside mb-4">
          <li><strong>Entrante:</strong> Ensalada o tapa del día.</li>
          <li><strong>Plato principal:</strong> Varias opciones caseras (arroz, pasta, carne o pescado fresco del día).</li>
          <li><strong>Postre casero</strong> o <strong>café</strong>.</li>
          <li><strong>1 bebida</strong> incluida.</li>
          <li><strong>Pan</strong> incluido.</li>
        </ul>
        <p class="font-semibold text-xl">Precio por persona: 10,00 €</p>
      </section>
    {:else if activeTab === 'Cumpleaños'}
      <section id="cumpleanos">
        <h2 class="text-3xl font-bold mb-6 text-center">Cumpleaños</h2>
        <p class="mb-4 text-lg">
          ¡Celebra tu cumpleaños con nosotros! Organizamos celebraciones especiales con menús adaptados para los más pequeños.
        </p>
        <div class="mb-6">
          <p class="font-semibold">Opción 1 – Merienda sencilla:</p>
          <p>Bebida, patatas fritas y bocadillo con embutido o crema de cacao y avellanas.</p>
          <p class="ml-4">- <strong>Medio bocadillo:</strong> 6,50 € por niño</p>
          <p class="ml-4 mb-2">- <strong>Bocadillo entero:</strong> 7,00 € por niño</p>
          <p class="font-semibold mt-4">Opción 2 – Merienda especial:</p>
          <p>Bebida, patatas fritas y bocadillo a elegir entre embutido, tortilla o hamburguesa.</p>
          <p class="ml-4">- <strong>Medio bocadillo:</strong> 7,50 € por niño</p>
          <p class="ml-4 mb-2">- <strong>Bocadillo entero:</strong> 8,50 € por niño</p>
        </div>
        <p class="italic text-sm">* Consultar disponibilidad. Se recomienda reservar con antelación. Podemos adaptar el menú a necesidades especiales.</p>
      </section>
    {/if}
  </div>
</div>