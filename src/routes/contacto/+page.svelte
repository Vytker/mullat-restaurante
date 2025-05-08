<script>
    let name = '';
    let email = '';
    let message = '';
  </script>
  
  <section class="w-full px-5 py-10 md:py-16 bg-white text-gray-800">
    <h2 class="text-3xl font-bold text-center mb-2">Contacto</h2>
    <p class="text-center text-gray-600 max-w-xl mx-auto mb-8">
      ¿Tienes alguna consulta, reserva o sugerencia? Escríbenos a través del siguiente formulario. Tu mensaje será enviado a <a href="mailto:info@mullat.com" class="text-black underline">info@mullat.com</a>.
    </p>
  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      <!-- Formulario de contacto -->
      <form class="space-y-6">
        <div>
          <label for="name" class="block mb-1 text-sm font-medium">Nombre</label>
          <input bind:value={name} type="text" id="name" class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-gray-500" placeholder="Tu nombre" />
        </div>
  
        <div>
          <label for="email" class="block mb-1 text-sm font-medium">Email</label>
          <input bind:value={email} type="email" id="email" class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-gray-500" placeholder="tucorreo@ejemplo.com" />
        </div>
  
        <div>
          <label for="message" class="block mb-1 text-sm font-medium">Mensaje</label>
          <textarea bind:value={message} id="message" rows="5" class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-gray-500" placeholder="Escribe tu mensaje"></textarea>
        </div>
  
        <button type="submit" class="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">Enviar</button>
      </form>
  
      <!-- Información de contacto + Mapa -->
      <div class="space-y-6">
        <div class="text-sm text-gray-700 space-y-2">
          <p><strong>Dirección:</strong> Carrer de la Piscina, s/n, Ràfol d'Almúnia, Alicante</p>
          <p><strong>Teléfono:</strong> <a href="tel:+34612345678" class="hover:underline">+34 612 345 678</a></p>
          <p><strong>Horario:</strong> Lun - Dom: 09:00 - 23:00</p>
          <p><strong>Email:</strong> <a href="mailto:info@mullat.com" class="hover:underline">info@mullat.com</a></p>
          <div>
            <p><strong>Redes Sociales:</strong></p>
            <ul class="flex space-x-4 mt-1 text-xl">
              <li>
                <a href="https://www.instagram.com" target="_blank" class="hover:text-pink-600" aria-label="Instagram">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank" class="hover:text-blue-600" aria-label="Facebook">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        <div class="aspect-video w-full">
          <iframe
            class="w-full h-full border rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.225193485648!2d-0.03321258465615151!3d38.81987417957756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61c178e032f53b%3A0x17b79591e148ab79!2sR%C3%A0fol%20d&#39;Alm%C3%BAnia%2C%20Alicante!5e0!3m2!1ses!2ses!4v1625750668364!5m2!1ses!2ses"
            allowfullscreen
            loading="lazy"
            title="Mapa de localización de Mullat - El Baret de la Piscina de Ràfol">
          </iframe>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Recuerda incluir Font Awesome en tu proyecto -->

  