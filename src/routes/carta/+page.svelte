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
      <div class="flex justify-between"><span>Croquetas de jamón ibérico <small>(media ración / ración)</small></span><span>6,40 € / 12,80 €</span></div>
      <div class="flex justify-between"><span>Montadito de bacon y queso de cabra</span><span>5,00 € / 10,00 €</span></div>
      <div class="flex justify-between"><span>Montadito de “figatells” (mini hamburguesa tradicional)</span><span>5,00 € / 10,00 €</span></div>
      <div class="flex justify-between"><span>Montadito de lomo y huevo de codorniz</span><span>5,40 € / 10,40 €</span></div>
      <div class="flex justify-between"><span>Montadito de tortilla de patatas</span><span>4,00 € / 8,00 €</span></div>
      <div class="flex justify-between"><span>Sepia a la plancha</span><span>12,90 €</span></div>
      <div class="flex justify-between"><span>“Escombros” (pescaditos fritos)</span><span>5,40 € / 9,90 €</span></div>
      <div class="flex justify-between"><span>Calamares a la plancha</span><span>9,20 €</span></div>
      <div class="flex justify-between"><span>Alitas de pollo fritas</span><span>4,00 € / 8,00 €</span></div>
    </div>
    <h3 class="text-2xl font-semibold mt-8 mb-4">Ensaladas</h3>
    <div class="space-y-2">
      <div class="flex justify-between"><span>Ensalada de la casa <small>(lechuga, tomate, zanahoria, cebolla, atún, huevo duro, olivas)</small></span><span>7,50 €</span></div>
      <div class="flex justify-between"><span>Ensalada César <small>(pollo a la plancha, picatostes, queso parmesano, salsa César)</small></span><span>8,50 €</span></div>
      <div class="flex justify-between"><span>Ensalada mediterránea <small>(mix de lechugas, tomate, atún, cebolla, huevo, aceitunas)</small></span><span>7,50 €</span></div>
    </div>
    <h3 class="text-2xl font-semibold mt-8 mb-4">Hamburguesas</h3>
    <div class="space-y-2">
      <div class="flex justify-between"><span>Burger Completa Especial <small>(ternera, cheddar, bacon, cebolla, tomate, lechuga, huevo)</small></span><span>9,00 €</span></div>
      <div class="flex justify-between"><span>Burger BBQ <small>(ternera, cheddar, bacon, cebolla caramelizada, salsa BBQ)</small></span><span>9,00 €</span></div>
      <div class="flex justify-between"><span>Burger Chef <small>(ternera, queso de cabra, cebolla caramelizada, mermelada dulce)</small></span><span>9,00 €</span></div>
    </div>
    <h3 class="text-2xl font-semibold mt-8 mb-4">Bocadillos</h3>
    <div class="space-y-2">
      <div class="flex justify-between"><span>Bocadillo de jamón serrano y queso</span><span>7,00 €</span></div>
      <div class="flex justify-between"><span>Bocadillo de lomo con queso</span><span>7,50 €</span></div>
      <div class="flex justify-between"><span>Bocadillo de tortilla española</span><span>6,50 €</span></div>
      <div class="flex justify-between"><span>Bocadillo vegetal <small>(atún, lechuga, tomate, huevo)</small></span><span>7,00 €</span></div>
      <div class="flex justify-between"><span>Bocadillo “Chivito” <small>(lomo, queso, bacon, lechuga, tomate, huevo)</small></span><span>8,50 €</span></div>
    </div>
    <h3 class="text-2xl font-semibold mt-8 mb-4">Postres Caseros</h3>
    <div class="space-y-2 mb-4">
      <div class="flex justify-between"><span>Rosas de hojaldre y manzana</span><span>5,50 €</span></div>
      <div class="flex justify-between"><span>Tarta de queso casera</span><span>6,00 €</span></div>
      <div class="flex justify-between"><span>Flan con nata</span><span>5,00 €</span></div>
    </div>
    <h3 class="text-2xl font-semibold mt-8 mb-4">Bebidas y Cócteles</h3>
    <div class="space-y-2">
      <div class="flex justify-between"><span>Refrescos y agua</span><span>2,00 €</span></div>
      <div class="flex justify-between"><span>Cerveza (caña / jarra)</span><span>1,50 € / 3,00 €</span></div>
      <div class="flex justify-between"><span>Copa de vino</span><span>2,00 €</span></div>
      <div class="flex justify-between"><span>Café o infusión</span><span>1,20 €</span></div>
      <div class="flex justify-between"><span>Mojito / Caipiriña</span><span>6,00 €</span></div>
      <div class="flex justify-between"><span>Gin-tonic (combinado)</span><span>7,00 €</span></div>
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