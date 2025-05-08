const API = import.meta.env.VITE_API_BASE || 'http://localhost:8000/api';

export interface Slot {
  turnoId: number;
  hora:  string;
  plazasDisponibles: number;
}

export type Reservation = {
    nombreCliente: string;
    email: string;
    fechaReserva: string;
    numeroComensales: number;
    notas?: string;
    estado: string;
  };

export async function fetchSlots(restId: string, fecha: string): Promise<Slot[]> {
  const r = await fetch(`${API}/reservas/slots?restauranteId=${restId}&fecha=${fecha}`);
  if (!r.ok) throw new Error('No pude cargar los slots');
  return r.json();
}

export async function createReservation(restId: string, payload: any) {
  const r = await fetch(`${API}/reservas?restauranteId=${restId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await r.json();
  if (!r.ok) throw new Error(data.error || 'Error al crear reserva');
  return data as { code: string };
}

// GET /api/reservas/codigo/{code}?restauranteId={restId}
export async function fetchReservationByCode(restId: string, code: string) {
    const res = await fetch(
      `http://localhost:8000/api/reservas/codigo/${code}?restauranteId=${restId}`
    );
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || res.statusText);
    }
    return (await res.json()) as {
      id: string;
      nombreCliente: string;
      email: string;
      fechaReserva: string;
      numeroComensales: number;
      notas: string;
      estado: string;
      turnoId: number;
      codigo: string;
    };
  }

  export async function cancelReservation(restauranteId: string, code: string): Promise<void> {
    const res = await fetch(
      `http://localhost:8000/api/reservas/codigo/${code}?restauranteId=${restauranteId}`,
      { method: 'DELETE' }
    );
    if (!res.ok) {
      // parseamos la respuesta para mostrar un mensaje amigable
      const err = await res.json().catch(() => null);
      throw new Error(err?.error ?? res.statusText);
    }
  }
  