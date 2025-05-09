<script lang="ts">
    // Datos para el menú infantil
    let menuInfantil = [
        { title: "Mini Hamburguesa", description: "Deliciosa hamburguesa en tamaño infantil.", price: "5€" },
        { title: "Pasta con Queso", description: "Pasta al dente con una suave salsa de queso.", price: "4€" },
        { title: "Nuggets de Pollo", description: "Crujientes nuggets con salsa de mostaza.", price: "6€" }
    ];

    // Datos para las opciones de cumpleaños (copiados de la carta)
    let opcionesCumpleanos = [
        { 
            title: "Opción 1 – Merienda sencilla",
            description: `Bebida, patatas fritas y bocadillo con embutido o crema de cacao y avellanas.<br>
- Medio bocadillo: 6,50 € por niño<br>
- Bocadillo entero: 7,00 € por niño`,
            price: `* Consultar disponibilidad. Se recomienda reservar con antelación. Podemos adaptar el menú a necesidades especiales.`
        },
        { 
            title: "Opción 2 – Merienda especial",
            description: `Bebida, patatas fritas y bocadillo a elegir entre embutido, tortilla o hamburguesa.<br>
- Medio bocadillo: 7,50 € por niño<br>
- Bocadillo entero: 8,50 € por niño`,
            price: `* Consultar disponibilidad. Se recomienda reservar con antelación. Podemos adaptar el menú a necesidades especiales.`
        }
    ];
</script>

<section class="max-w-7xl mx-auto px-4 py-16">
    <!-- Encabezado Zona Infantil -->
    <div class="text-center mb-8">
        <h1 class="text-4xl md:text-5xl font-extrabold text-[rgb(0,119,119)]">Zona Infantil</h1>
        <p class="text-xl text-gray-600 mt-4">
            Un espacio pensado para disfrutar y divertirse. Nuestro parque infantil está especialmente diseñado para el entretenimiento y la seguridad de los más pequeños, ofreciendo áreas de juego y actividades para estimular su creatividad.
        </p>
    </div>

    <!-- Imagen y Texto del Parque Infantil -->
    <div class="flex flex-col md:flex-row items-center mb-12 gap-8">
        <div class="flex-shrink-0">
            <img src="/images/parque_rafol.webp" alt="Parque Infantil" class="w-full md:w-96 h-auto rounded-lg shadow-md object-cover" />
        </div>
        <div>
            <h2 class="text-3xl font-bold text-[rgb(0,119,119)] mb-4">Nuestro Parque Infantil</h2>
            <p class="text-gray-700">
                Nuestro parque infantil está diseñado para garantizar la diversión y seguridad de los más pequeños. Contamos con áreas de juego adaptadas para estimular su creatividad y proporcionarles momentos inolvidables.
            </p>
        </div>
    </div>

    <!-- Opciones de Cumpleaños -->
    <div>
        <h2 class="text-3xl font-bold text-[rgb(0,119,119)] mb-4">Cumpleaños</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each opcionesCumpleanos as option}
                <div class="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                    <h3 class="text-xl font-semibold text-[rgb(0,119,119)]">{option.title}</h3>
                    <p class="text-gray-700 mt-2">{@html option.description}</p>
                    <p class="text-gray-600 mt-1 font-bold">{@html option.price}</p>
                </div>
            {/each}
        </div>
    </div>
</section>
