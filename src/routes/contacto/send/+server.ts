// src/routes/contact/send/+server.ts
import type { RequestHandler } from './$types';
import { BREVO_API_KEY } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
  const { name, email, message } = await request.json();

  const API_KEY = BREVO_API_KEY;  // Usa variables de entorno para mayor seguridad

  if (!API_KEY) {
    return new Response('API key not configured', { status: 500 });
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': API_KEY,
    },
    body: JSON.stringify({
      sender: { name: "Formulario Web", email: 'vytkerpsn@gmail.com' },
      to: [{ email: 'mullatrestaurante@gmail.com' }],
      subject: 'Nuevo mensaje desde formulario de contacto',
      htmlContent: `
        <h1>Nuevo Mensaje desde la web</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    return new Response(errorText, { status: response.status });
  }

  return new Response('Mensaje enviado correctamente', { status: 200 });
};
