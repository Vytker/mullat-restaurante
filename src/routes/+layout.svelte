<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';


	let compact = false;
	let showEventos = false;
	let mobileMenuOpen = false;
	let innerWidth = 0;


	$: isHome = $page.url.pathname === '/';
	$: isReservas = $page.url.pathname === '/reservas';
	$: isContacto = $page.url.pathname === '/contacto';
	$: isCarta = $page.url.pathname === '/carta';

    onMount(() => {
      innerWidth = window.innerWidth;
    });

	
	function handleScroll() {
		compact = window.scrollY > (isHome ? 300 : 20);           // umbral
	}
	function handleScrollMobile() {
		compact = window.scrollY > 50;           // umbral
	}
	
  function toggleEventos() {
    showEventos = !showEventos;
  }

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  
</script>

<svelte:window on:scroll={(e) => {
	if (window.innerWidth < 768) {
	  handleScrollMobile();
	} else {
	  handleScroll();
	}
  }} />

<div class="layout">
	<header>
		<!-- ⬇️ la clase compact se pone en NAV -->
		{#if ! (isHome && !compact)}
		<nav class="nav hidden sm:flex" class:compact={compact}>
			
			<div class="nav-container" class:hidden={isHome || compact}>
				<div class="nav-logo"><a href="/"><img src="/images/mullat_logo_black1.png" alt="Mullat restaurante" class="titulo_mullat relative" /></a></div>

				<ul class="nav-list font-bold ">
					<li class:hidden={isHome && !compact} class="inline-block text-black border-b border-black transition-all duration-300 hover:border-transparent"><a href="/">Inicio</a></li>
					<li class="inline-block border-b border-black transition-all duration-300 hover:border-transparent"><a href="/reservas">Reservas</a></li>
					<li class="inline-block border-b border-black transition-all duration-300 hover:border-transparent"><a href="/carta">Carta</a></li>
					<li class="inline-block border-b border-black transition-all duration-300 hover:border-transparent"><a href="/contacto">Contacto</a></li>
					<li class="inline-block border-b border-black transition-all duration-300 hover:border-transparent"><a href="/conocenos">Conócenos</a></li>
					<li class="inline-block border-b border-black transition-all duration-300 hover:border-transparent"><a href="/eventos">Eventos</a></li>
				
				</ul>

				<div class="nav-tlf">
					<h3>123-456-789</h3>
				</div>
			</div>
		</nav>
		{/if}
		
		{#if isHome}
		 <!-- Sin scroll: se muestra el nav completo con logo a la izquierda y toggle a la derecha -->
		 <div class="fixed top-0 right-0 z-30 max-w-xl mx-auto px-4 py-3 flex items-end justify-end bg-[rgb(243,243,243)]/0  sm:hidden">
			<button on:click={toggleMenu} aria-label="Toggle menu">
			  <svg class="w-8 h-8 text-[rgb(0,109,109)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
			  </svg>
			</button>
		  </div>
		{:else}
		{#if !compact}
		  <!-- Sin scroll: se muestra el nav completo con logo a la izquierda y toggle a la derecha -->
		  <div class="sticky top-0 z-30 max-w-xl mx-auto px-4 py-3 flex items-center justify-between bg-[rgb(243,243,243)] shadow md:hidden">
			<div class="nav-logo-mobile left-0 -ml-8">
			  <a href="/"><img src="/images/mullat_logo_black1.png" alt="Mullat restaurante" class="titulo_mullat relative"/></a>
			</div>
			<button on:click={toggleMenu} aria-label="Toggle menu" class:hidden={mobileMenuOpen}>
			  <svg class="w-8 h-8 text-[rgb(0,109,109)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
			  </svg>
			</button>
		  </div>
		{:else}
		  <!-- Con scroll: se muestra solo el toggle -->
		  <div class="fixed top-0 right-0 z-30 max-w-xl mx-auto px-4 py-3 flex items-end justify-end bg-[rgb(243,243,243)]/0  md:hidden">
			<button on:click={toggleMenu} aria-label="Toggle menu" class:hidden={mobileMenuOpen}>
			  <svg class="w-8 h-8 text-[rgb(0,109,109)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
			  </svg>
			</button>
		  </div>
		{/if}
	  {/if}

	</header>

{#if mobileMenuOpen && innerWidth < 768}
  <!-- Fondo overlay semitransparente para cerrar el menú al hacer click fuera -->
  <div
  class="fixed inset-0 z-40"
  on:click={toggleMenu}
  on:keydown={(e) => e.key === 'Escape' && toggleMenu()}
  aria-hidden="true"
></div>

  <!-- Menú lateral -->
  <div
	class="fixed top-0 right-0 w-2/3 max-w-sm h-full bg-white/90 shadow p-4 z-50"
	on:click|stopPropagation
	on:keydown={(e) => e.key === 'Escape' && toggleMenu()}
	tabindex="0"
	role="dialog"
	aria-modal="true"
	aria-label="Mobile menu"
  >
  <div class="flex">
	<button class="ml-auto mb-4" on:click={toggleMenu} aria-label="Cerrar menú">
	  <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
	  </svg>
	</button>
  </div>

    <ul class="flex flex-col gap-4 items-start">
		<li>
			<a href="/" class="text-teal-600 text-lg font-medium">
			  <i class="fa-solid fa-house mr-2"></i>Inicio
			</a>
		  </li>
		  <li>
			<a href="/reservas" class="text-teal-600 text-lg font-medium">
			  <i class="fa-solid fa-calendar-alt mr-2"></i>Reservas
			</a>
		  </li>
		  <li>
			<a href="/carta" class="text-teal-600 text-lg font-medium">
			  <i class="fa-solid fa-utensils mr-2"></i>Carta
			</a>
		  </li>
		  <li>
			<a href="/contacto" class="text-teal-600 text-lg font-medium">
			  <i class="fa-solid fa-envelope mr-2"></i>Contacto
			</a>
		  </li>
		  <li>
			<a href="/conocenos" class="text-teal-600 text-lg font-medium">
			  <i class="fa-solid fa-info-circle mr-2"></i>Conócenos
			</a>
		  </li>
  <!-- En el móvil también se incluye la opción de Eventos -->
        <li>
          <button on:click={toggleEventos} class="flex items-center text-teal-600 text-lg font-medium focus:outline-none">
            <i class="fa-solid fa-calendar-plus mr-2"></i>Eventos
          </button>
        </li>
      </ul>
      {#if showEventos}
        <div class="mt-4 border-t border-gray-300 pt-4">
          <ul class="flex flex-col gap-2">
            <li><a href="/eventos/zona-infantil" class="text-teal-600 hover:underline transition">Cumpleaños / Zona Infantil</a></li>
            <li><a href="/eventos/deportes/padel-tenis" class="text-teal-600 hover:underline transition">Pádel / Tenis</a></li>
            <li><a href="/eventos/deportes/piscina" class="text-teal-600 hover:underline transition">Piscina</a></li>
          </ul>
        </div>
      {/if}
  </div>
{/if}


	<main><slot /></main>



	<footer class="relative w-full overflow-hidden -mt-1"
	class:bg-white={isReservas || isContacto}
	class:bg-[#f5f5f5]={!(isReservas || isContacto)}>
  
	<!-- Ola SVG superior -->
	<div class="w-full h-20 sm:h-36">
	  <svg
  viewBox="0 0 1440 320"
  class="w-full h-full rotate-180 scale-x-[-1] sm:rotate-0 sm:scale-x-100"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="footerGradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color={innerWidth < 768 ? "#808080" : "#007777"} />
        <stop offset="100%" stop-color={innerWidth < 768 ? "#000" : (isReservas || isContacto ? "#ffffff" : "#f5f5f5")} />
      
    </linearGradient>
  </defs>
  <path
    fill="url(#footerGradient)"
    d="M0,64L48,80C96,96,192,128,288,170.7C384,213,480,267,576,261.3C672,256,768,192,864,149.3C960,107,1056,85,1152,112C1248,139,1344,213,1392,250.7L1440,288L1440,320L0,320Z"
  />
</svg>
	</div>
  
	<!-- Contenido del footer -->
	<div class="relative z-10 px-4 -py-5 -my-7  lg:py-10 text-center flex justify-center text-sm text-gray-800 font-medium space-y-4">
	  
  
	  <!-- Elementos típicos de un footer -->
	  <div class="flex flex-col md:flex-row justify-around items-center lg:gap-6 text-gray-600 text-sm pt-5 lg:pt-0">
		<div class="gap-3 md:gap-4 flex md:flex-row items-center">
			<a href="/contacto" class="hover:underline">Contacto</a>
			<a href="/politica-privacidad" class="hover:underline">Política de privacidad</a>
			<a href="/aviso-legal" class="hover:underline">Aviso legal</a>

		</div>
		
		<div class="flex justify-center space-x-4 text-lg mt-2">
			<a href="https://instagram.com" target="_blank" aria-label="Instagram" class="hover:text-pink-600">
			<i class="fab fa-instagram"></i>
			</a>
			<a href="https://facebook.com" target="_blank" aria-label="Facebook" class="hover:text-blue-600">
			<i class="fab fa-facebook"></i>
			</a>
	  	</div>

			<p class="pb-3 lg:pb-0">&copy; 2025 Mullat Restaurante. Todos los derechos reservados.</p>

	  </div>

	  
	</div>
  </footer>
  
	  
	  
</div>

<style>
/* --- layout tal cual lo tenías --- */
.layout{display:flex;flex-direction:column;min-height:100vh}
header{flex-shrink:0}
main{flex-grow:1;background:#f3f3f3}
footer{flex-shrink:0;text-align:center;}

/* --- NAV estado inicial (pegado arriba) --- */
.nav{
	position:sticky;
	top:0;left:0;z-index:1000;
	width:100%;
	background: #f3f3f3;
	border: black solid 0px;
	padding:.5rem 0;
	box-shadow:0px 5px 5px rgba(0, 24, 112, 0.2);

	/* animaciones suaves */
	transition:
		top   250ms ease,
		left  250ms ease,
		width 250ms ease,
		border-radius 250ms ease,
		padding 250ms ease,
		transform 250ms ease;
}

/* --- NAV cuando hay scroll --- */
.nav.compact{
	/* lo convertimos en fixed para poder separarlo del borde */
	position:fixed;
	top:1rem;                          /* se baja 1 rem */
	left:50%;                          /* lo centramos */
	transform:translateX(-50%);

	width:100%;                      /* ancho deseado   */
	max-width: 800px;
	border-radius:9999px;              /* forma píldora   */
	padding:0.5rem 1.25rem;             /* reajuste padding*/
	transition:
		top   250ms ease,
		left  250ms ease,
		width 250ms ease,
		border-radius 250ms ease,
		padding 250ms ease,
		transform 250ms ease;
}

/* --- Contenido interno --- */
.nav-container{
    position:relative;
    display:flex;
    align-items:center;
    width:100%;
    padding:0 1rem;
}

.nav-logo{
	
	 width: 20%;
	}

.nav-logo-mobile{
	width: 50%;
   }
/* lista centrada horizontalmente */
.nav-list{
    position:absolute;                 /* sale del flujo */
    left:50%; transform:translateX(-50%);  /* la centramos */
    display:flex; gap:1.25rem;
    margin:0; padding:0; list-style:none;
	font-size: small;
	margin-left: -2rem;
}

.nav.compact .nav-list{
    position:static;                   /* vuelve al flujo flex */
    transform:none;                    /* quita el translate */
    margin-left:auto;                  /* empuja a la derecha */
}
.nav-list a{text-decoration:none;color:rgb(0, 119, 119)}

.nav-tlf{
	flex:0 0 auto;
	margin-left:auto;                  /* empuja a la derecha */
	
	font-size:1em;
	background-color:rgb(0, 119, 119);
	color: white;
	border-radius:9999px;
	padding:0.5rem 1.25rem;
}

</style>
