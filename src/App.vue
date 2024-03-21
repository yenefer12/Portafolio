<script setup>
const darkModeButton = () => {
  document.documentElement.classList.toggle('dark');
}
</script>
<template>
  <div class="w-full h-screen bg-white dark:bg-midnight-navy font-pacifico">
    <section class="home w-full h-screen relative">
      <header class="p-8 bg-white  dark:bg-midnight-navy font-quicksand-bold text-lg">
        <div class="flex h-16 max-w-6xl mx-auto items-center justify-between ">
          <div>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-8 h-8 md:w-12 md:h-12  text-midnight-navy dark:text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </button>
          </div>
          <div class="hidden md:flex space-x-8 dark:text-misty-blue">
            <a href="#">Inicio</a>
            <a href="#">Acerca de</a>
            <a href="#">Resumen</a>
            <a href="#">Portafolio</a>
          </div>
          <div class="flex items-center space-x-4 dark:text-misty-blue">
            <div><button @click="darkModeButton()"
                class="dark:text-misty-blue rounded-full text-slate-500 transition-colors  hover:text-sky-500 focus:ring-2 focus:ring-slate-200 focus:ring-offset-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
            </button></div>
            <button class="hidden md:flex">Descargar CV</button>
            <button class="flex items-center justify-between md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

      </header>
    </section>
  </div>
</template>
<style scoped>
.home::before {
  content: "";
  position: absolute;
  top: 0px;
  left: -140px;
  height: 500px;
  width: 500px;
  background: url(/img/shadow-1.svg) no-repeat center;
  background-size: contain;
  z-index: 1;
}

.home::after {
  content: "";
  position: absolute;
  height: 500px;
  width: 500px;
  right: 0px;
  background: url(/img/shadow-2.svg) no-repeat center;
  background-size: contain;
  z-index: 1;
}
</style>

