<script lang="ts">
	import '../app.css';
	let compact = false;
    import { page } from '$app/stores';

	function handleScroll() {
		compact = window.scrollY > 300;           // umbral
	}
	function handleScrollMobile() {
		compact = window.scrollY > 50;           // umbral
	}
	$: isHome = $page.url.pathname === '/';

	let mobileMenuOpen = false;
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

				<ul class="nav-list">
					<li class:hidden={isHome && !compact} class="inline-block text-black border-b border-black transition-all duration-300 hover:border-transparent"><a href="/">Inicio</a></li>
					<li class="inline-block border-b border-black transition-all duration-300 hover:border-transparent"><a href="/reservas">Reservas</a></li>
					<li class="inline-block border-b border-black transition-all duration-300 hover:border-transparent"><a href="/reservas">Carta</a></li>
					<li class="inline-block border-b border-black transition-all duration-300 hover:border-transparent"><a href="/reservas">Contacto</a></li>
					<li class="inline-block border-b border-black transition-all duration-300 hover:border-transparent"><a href="/conocenos">Conócenos</a></li>


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
			<button on:click={toggleMenu} aria-label="Toggle menu">
			  <svg class="w-8 h-8 text-[rgb(0,109,109)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
			  </svg>
			</button>
		  </div>
		{:else}
		  <!-- Con scroll: se muestra solo el toggle -->
		  <div class="fixed top-0 right-0 z-30 max-w-xl mx-auto px-4 py-3 flex items-end justify-end bg-[rgb(243,243,243)]/0  md:hidden">
			<button on:click={toggleMenu} aria-label="Toggle menu">
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
    <ul class="flex flex-col gap-4 items-center">
      <li><a href="/"       class="text-teal-600 text-lg font-medium">Inicio</a></li>
      <li><a href="/reservas" class="text-teal-600 text-lg font-medium">Reservas</a></li>
      <li><a href="/menu"     class="text-teal-600 text-lg font-medium">Menú</a></li>
      <li><a href="/contacto"class="text-teal-600 text-lg font-medium">Contacto</a></li>
    </ul>
  </div>
{/if}

	<main><slot /></main>

	<footer><p>&copy; 2025 Mullat Restaurante. Todos los derechos reservados.</p></footer>
</div>

<style>
/* --- layout tal cual lo tenías --- */
.layout{display:flex;flex-direction:column;min-height:100vh}
header{flex-shrink:0}
main{flex-grow:1;background:#f3f3f3}
footer{flex-shrink:0;text-align:center;padding:1rem}

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
	top:1rem;                          /* ⬅️ se baja 1 rem */
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
	font-size:1.25rem;
	background-color:rgb(0, 119, 119);
	color: white;
	border-radius:9999px;
	padding:0.5rem 1.25rem;
}

</style>
