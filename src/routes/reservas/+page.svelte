<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { fetchSlots, createReservation, type Slot } from '$lib/api';
    import { goto } from '$app/navigation';

    const restId = '74538fad-dd1f-40e2-86d1-0d9b86442d07';
    let fecha = new Date().toISOString().slice(0,10);
    let turnoId: number | null = null;
    let nombre = '', email = '', num = 1, notas = '';
  
    const slots = writable<Slot[]>([]);
  
    async function loadSlots() {
      try {
        slots.set(await fetchSlots(restId, fecha));
      } catch(e) {
        alert((e as Error).message);
      }
    }
  
    onMount(loadSlots);
    let selectedHora: string; // ej. "19:00:00"
    async function submit() {
      if (!turnoId) return alert('Selecciona un turno');
      try {
        const payload = {
          NombreCliente: nombre,
          Email: email,
          FechaReserva: `${fecha}T${selectedHora}`,
          NumeroComensales: num,
          Notas: notas,
          TurnoId: turnoId,
        };
        const { code } = await createReservation(restId, payload);
    // Display success message or navigate to the tracking page
    alert(`✅ Reserva creada: Este es tu codigo de seguimiento: ${code} Revisa el email para más detalles`);
        goto(`/track?code=${code}`);
      } catch (e) {
        alert(`❌ ${(e as Error).message}`);
      }
    }
  </script>
  
  <div class="max-full mx-auto p-6 space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
       <!-- Columna izquierda: Texto de ejemplo -->
       <div class="flex flex-col items-center justify-center space-y-4">
        <p class="text-lg text-center">
          Bienvenido a Mullat Restaurante. Aquí podrás realizar tu reserva y disfrutar de una experiencia única en nuestra cocina.
        </p>
        <p class="text-md text-gray-700 text-center">
          Recibirás un correo electrónico con los detalles de tu reserva. Ten en cuenta que la reserva no se confirmará hasta que el restaurante la confirme.
        </p>
        <p class="text-md text-gray-700 text-center">
          Para grupos grandes o para información personalizada, por favor contáctanos: 
          <br/><strong>Teléfono: 123-456-7890</strong>,
          <br/><span class="inline-flex items-center gap-1">
            <!-- Instagram Icono -->
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.012 7.052.07 5.775.128 4.602.443 3.635 1.41 2.667 2.377 2.352 3.55 2.294 4.827.012 5.475 0 5.88 0 9.144s.012 3.668.07 4.947c.058 1.277.373 2.45 1.34 3.418.967.967 2.14 1.282 3.417 1.34C8.332 23.988 8.736 24 12 24s3.668-.012 4.947-.07c1.277-.058 2.45-.373 3.417-1.34.967-.967 1.282-2.14 1.34-3.417.058-1.279.07-1.683.07-4.947s-.012-3.668-.07-4.947c-.058-1.277-.373-2.45-1.34-3.417-.967-.967-2.14-1.282-3.417-1.34C15.668.012 15.264 0 12 0z"/>
              <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.838 3.838 0 1 1 0-7.676 3.838 3.838 0 0 1 0 7.676z"/>
              <circle cx="18.406" cy="5.594" r="1.44"/>
            </svg>
            Instagram: <strong>@mullatrestaurante</strong>
          </span>
          <br/><span class="inline-flex items-center gap-1">
            <!-- Facebook Icono -->
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495V14.708h-3.13v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.505 0-1.797.716-1.797 1.767v2.317h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"/>
            </svg>
            Facebook: <strong>/mullatrestaurante</strong>
          </span>
        </p>
        <div class="w-full h-64 mt-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1481.2093116873991!2d-0.05389009733066265!3d38.820933844800415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61e302acf0e743%3A0x8f27df40aee55338!2sBar%20Piscina%20Mulla&#39;t%20R%C3%A0fol%20d&#39;Alm%C3%BAnia!5e0!3m2!1ses!2ses!4v1746525357066!5m2!1ses!2ses"
           style="border:0;" 
           class="w-full h-full block"
           allowfullscreen={true} 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade" 
           title="Google Maps location of Bar Piscina Mullat Ràfol d'Almúnia">
          </iframe>
        </div>
      </div>


      <!-- Columna derecha: Formulario de reserva -->
      <div class="border border-[rgb(0,119,119)] p-6 rounded shadow">
    <h1 class="text-2xl font-bold">Hacer Reserva</h1>
    <div class="space-y-4">
    <label class="block">
      Fecha
      <input type="date" bind:value={fecha} on:change={loadSlots}
             class="mt-1 block w-full border rounded p-2"/>
    </label>
  
    <label class="block">
      Turno
      <select  bind:value={turnoId} on:change={() => {
        const sel = turnoId ? $slots.find(s => s.turnoId === turnoId) : null;
        selectedHora = sel?.hora ?? '';  // guardamos la hora (string "HH:mm:ss")
    }} class="mt-1 block w-full border rounded p-2">
      <option value="" disabled>– selecciona –</option>
      {#each $slots as s}
        <option value={s.turnoId}>
          {s.hora} ({s.plazasDisponibles} plazas)
        </option>
      {/each}
    </select>
    </label>
  
    <label class="block">
      Nombre
      <input type="text" bind:value={nombre} required
             class="mt-1 block w-full border rounded p-2"/>
    </label>
  
    <label class="block">
      Email
      <input type="email" bind:value={email} required
             class="mt-1 block w-full border rounded p-2"/>
    </label>
  
    <label class="block">
      Comensales
      <input type="number" min="1" bind:value={num} required
             class="mt-1 block w-full border rounded p-2"/>
    </label>
  
    <label class="block">
      Notas
      <textarea bind:value={notas}
                class="mt-1 block w-full border rounded p-2"></textarea>
    </label>
  
    <button on:click|preventDefault={submit}
            class="w-full bg-[rgb(0,119,119)] text-white py-2 rounded">
      Reservar
    </button>
  </div>
</div>
</div>
</div>