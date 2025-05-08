<script lang="ts">
    import { onMount } from 'svelte';
    import { page }     from '$app/stores';
    import { writable, get } from 'svelte/store';
    import { fetchReservationByCode, cancelReservation, type Reservation } from '$lib/api';
  const restId = '74538fad-dd1f-40e2-86d1-0d9b86442d07';

    const reservation = writable<Reservation | null>(null);
    const error = writable('');
    const message     = writable('');  // para feedback tras cancelar
    let code = '';
  $: {
    const qp = get(page).url.searchParams.get('code');
    if (qp !== code) {
      code = qp ?? '';
      // si llegamos con code en URL, directamente disparamos la búsqueda
      if (code) lookup();
    }
  }

    onMount(() => {
    if (code) lookup();
  });

    async function lookup() {
      error.set('');
      reservation.set(null);
      try {
        const res = await fetchReservationByCode(restId, code);
        reservation.set(res);
      } catch (e) {
        error.set((e as Error).message);
      }
    }

    async function onCancel() {
    if (!confirm('¿Seguro que quieres cancelar la reserva?')) return;
    message.set('');
    error.set('');
    try {
      await cancelReservation(restId, code);
      message.set('✅ Reserva cancelada correctamente.');
      // Refrescamos el estado para que se vea “Cancelada”
      const res = await fetchReservationByCode(restId, code);
      reservation.set(res);
    } catch (e) {
      error.set((e as Error).message);
    }
  }

  </script>
  
  <div class="max-w-md mx-auto p-6">
    <h1 class="text-2xl font-bold">Seguimiento de Reserva</h1>
    {#if $error}
    <p class="mt-4 text-red-600">❌ {$error}</p>
  {/if}
  {#if $message}
    <p class="mt-4 text-green-600">{$message}</p>
  {/if}
  {#if !$reservation}
  <label class="block mt-4">
    Código de reserva
    <input
      type="text"
      bind:value={code}
      placeholder="Ej: AB12CD34"
      class="mt-1 block w-full border rounded p-2"
    />
  </label>
  <button
    class="mt-2 bg-blue-600 text-white py-2 px-4 rounded"
    on:click|preventDefault={lookup}
  >
    Buscar
  </button>
{/if}
    
{#if $reservation}
<div class="mt-6 border p-4 rounded bg-gray-50 space-y-2">
  <p><strong>Cliente:</strong> {$reservation.nombreCliente}</p>
  <p><strong>Email:</strong> {$reservation.email}</p>
  <p><strong>Fecha:</strong> {$reservation.fechaReserva}</p>
  <p><strong>Comensales:</strong> {$reservation.numeroComensales}</p>
  <p><strong>Notas:</strong> {$reservation.notas || '–'}</p>
  <p><strong>Estado:</strong> {$reservation.estado}</p>

  {#if $reservation.estado !== 'Cancelada'}
    <button
      class="mt-4 bg-red-600 text-white py-2 px-4 rounded"
      on:click={onCancel}
    >
      Cancelar reserva
    </button>
    {/if}
  </div>
{/if}
</div>