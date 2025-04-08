<template>
  <Navbar />
  <!-- Start Hero -->
  <section
    class="py-36 lg:py-72 lg:pb-0 md:pb-8 w-full table relative bg-[url('../../assets/images/ucb/fondo.webp')] bg-center bg-cover"
    id="home"
  >
    <div class="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-blue-900/50"></div>
    <div class="container relative">
      <div class="grid lg:grid-cols-12 mt-10 md:grid-cols-2 gap-[30px]">
        <div class="lg:col-span-7 lg:me-6">
          <h4
            class="text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold drop-shadow-xl"
          >
           Universidad Católica Boliviana <br />
          <span class="text-yellow-500 drop-shadow-xl"> "San Pablo"</span>
          </h4>
          <p class="text-white/70 text-lg max-w-xl">
            La Universidad Católica Boliviana "San Pablo" (UCB) es una universidad perteneciente al Sistema de la Universidad Boliviana, con sede principal en la ciudad de La Paz, Bolivia. Es una de las instituciones educativas más importantes y representativas del país 
            
          </p>

        
          <!--end grid-->

    
        </div>

        <div class="lg:col-span-5 mt-8 md:mt-0">
          <div class="relative z-2">
            <img
                src="@/assets/images/ucb/logo5.png"
                class="shadow-md rounded-md  "
                alt=""
              />
          
          </div>
        </div>
      </div>
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <div class="relative">
    <div
      class="shape overflow-hidden text-white dark:text-slate-900 rtl:-scale-x-[1]"
    >
      <svg
        viewBox="0 0 2880 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M720 125L2160 0H2880V250H0V125H720Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  </div>
  <!-- End Hero -->
  <section id="historia" class="bg-white dark:bg-gray-900">
    <div class="max-w-6xl px-6 py-10 mx-auto" data-aos="fade-up" data-aos-duration="1000" >
        <p class="text-xl font-medium text-yellow-500 ">Universidad Católica Boliviana "San Pablo" </p>

        <h1 class="mt-2 text-2xl font-semibold text-blue-900 capitalize lg:text-3xl dark:text-white">
          Nuestra Historia
        </h1>

        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full bg-blue-950 -z-10 md:h-96 rounded-2xl"></div>
            
            <div class="w-full p-6 bg-blue-800 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://lpz.ucb.edu.bo/wp-content/uploads/2018/11/diferencia-infraestructura.jpg" alt="client photo" />
                
                <div class="mt-2 md:mx-6">
                   

                    <p class="mt-4 text-lg leading-relaxed text-white md:text-xl"> La fundación de la Universidad Católica Boliviana tiene sus orígenes en el año 1963, cuando el Monseñor Gennaro Prata Vuolo con Monseñor Carmine Rocco y el Dr. Luis Adolfo Siles Salinas establecieron el "Comité Pro Universidad Católica", con el objetivo de fundar una institución de educación superior inspirada en los principios de la Iglesia Católica.

Tres años más tarde, el 16 de julio de 1966 la universidad es establecida en La Paz bajo el nombre de Instituto Superior de Economía y Empresa. </p>
                    
                
                </div>
            </div>
        </main>
    </div>
</section>

<section id="sobre" class="">
	
  <div
    class="relative max-w-screen-xl mt-24 px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-blue-950/90 text-gray-900 sm:rounded-lg shadow-lg"
    data-aos="fade-up" data-aos-duration="1000">
    <div class="absolute right-0 bottom-0 hero-pattern w-64 h-56" ></div>
    <div class="relative">
      <div>
        <h2 class="text-center text-yellow-50 text-4xl lg:text-5xl font-bold leading-tight">Sobre nosotros</h2>
        <div class="text-center text-yellow-500 font-light">Universidad Católica Boliviana "San Pablo"</div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-12">
        <div
          class="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-amber-100 text-gray-700 leading-snug flex flex-col justify-between">
          <div>
            <div class="flex items-center">
              <div class="ml-4">
                <div class="font-bold text-blue-900">MISIÓN</div>
                  </div>
            </div> <div class="mx-auto w-full border border-gray-300 my-8"></div>
           
          </div>
          <div class="">
            La constante búsqueda de la verdad mediante la investigación, la conservación y la comunicación del saber para el bien de la sociedad. La Universidad Católica participa en esta misión aportando sus características específicas y su finalidad (EcE,1990, núm. 30; Ests. 2021, Art. 10).
          </div>
      
        </div>
        <div
          class="mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-amber-100 text-gray-700 leading-snug flex flex-col justify-between">
          <div class="-ml-4">
          </div>
          <div>
            <div class="flex items-center">
              <div class="ml-4">
                <div class="font-bold text-blue-800">VISIÓN</div>
                  </div>
            </div> <div class="mx-auto w-full border border-gray-300 my-8"></div>
           
          </div>
          <div class="">
            Somos universidad católica en salida, que desde su identidad investiga
éticamente, forma integralmente profesionales de calidad y brinda educación para la vida, interactuando socialmente en internacionalización,
con responsabilidad social ambiental. </div>
        </div>
      </div>
    </div>
  </div>
	</section>
  
  <div class="circle-blue" data-aos="fade-up" data-aos-duration="1000"></div>
  
  <div class="circle" data-aos="fade-up" data-aos-duration="1000"></div>
  <div class="circle-sky" data-aos="fade-up" data-aos-duration="1000"></div>
<section id="carreras" class="mt-[8rem] mb-[8rem]" >
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-100 dark:text-gray-800"
  data-aos="fade-up" data-aos-duration="1000">
		<h2 class="mb-2 text-4xl font-bold leading-none text-center text-blue-950">Carreras con las que contamos</h2>
		<h2 class="mb-8 text-md font-bold leading-none text-center text-yellow-500"> Universidad Católica Boliviana 
      <span class="text-yellow-500 drop-shadow-xl"> "San Pablo"</span></h2>
    <ul class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
			<li class="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-blue-600">
					<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
					<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
				</svg>
				<span>Ingenieria de Sistemas</span>
			</li>
			<li class="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-blue-600">
					<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
					<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
				</svg>
				<span>Ingenieria Psicopedagogia </span>
			</li>
			<li class="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-blue-600">
					<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
					<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
				</svg>
				<span>Derecho</span>
			</li>
      <li class="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-blue-600">
					<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
					<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
				</svg>
				<span>Administracion de empresas</span>
			</li>
      <li class="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-blue-600">
					<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
					<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
				</svg>
				<span>Contaduria publica</span>
			</li>
		</ul>
	</div>  
  

  <div id="default-carousel" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden md:h-96">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="hidden duration-700 ease-in-out"
        data-carousel-item
      >
        <img
          :src="image"
          class="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="carousel image"
        />
      </div>
    </div>

    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      <button
        v-for="(image, index) in images"
        :key="'indicator-' + index"
        type="button"
        class="w-3 h-3 rounded-full"
        :aria-label="'Slide ' + (index + 1)"
        :data-carousel-slide-to="index"
      ></button>
    </div>

    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>

</section>
  <!-- iframe end  -->
   <Footer />
</template>

<script >
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  data() {
    return {
      isActive: false,
      images: [
        "https://lpz.ucb.edu.bo/wp-content/uploads/2025/02/UCB-Mensajes_Bienvenidos-Portada-FB.png",
        "https://i.postimg.cc/W3XGXdHk/sis.jpg",
        "https://lpz.ucb.edu.bo/wp-content/uploads/2024/12/UCB-Traspaso-Cero-Web_Banner-1500x420-1.jpg",
        "https://i.postimg.cc/jS7htdLp/adm.jpg",
       "https://lpz.ucb.edu.bo/wp-content/uploads/2024/11/ucb-banner-web-1500x420-prestigio.jpg",
        "https://feriavocacional.ucr.ac.cr/wp-content/uploads/2020/09/header_contaduriapublica.jpg",
        "https://lpz.ucb.edu.bo/wp-content/uploads/2025/01/UCB-Nuevas-Carreras_banner-web-1500x420-1.png"
      ]
    };
  },
  components: {
    Footer,
    Navbar,
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
  mounted() {
    // Initialize AOS here
    AOS.init();
  }
};
</script>

<style>
  .circle {
    position: absolute;
    top: 220%;
    left: 95%;
    width: 150px;
    height: 150px;
    background: rgb(242, 213, 50); /* Color amarillo */
    border-radius: 50%;
  }
  .circle-blue {
    position: absolute;
    top: 120%;
    left: 90%;
    width: 330px;
    height:330px;
    background: rgb(84, 94, 150); /* Color amarillo */
    border-radius: 50%;
  }
  .circle-sky {
    position: absolute;
    top: 300%;
    left: 0%;
    width: 250px;
    height: 250px;
    z-index: -2;
    background: rgb(27, 40, 74); /* Color amarillo */
    border-radius: 50%;
  }
</style>

<style lang="scss" scoped>
</style>