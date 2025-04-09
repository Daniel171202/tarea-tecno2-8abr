<template>
  <Navbar />
  <!-- Start Hero -->
  <section
    class="py-36 lg:py-72 lg:pb-0 md:pb-8 w-full table relative bg-[url('../../assets/images/perros/perros-callejeros.jpg')] bg-center bg-cover"
    id="home"
  >
    <div class="absolute inset-0 bg-gradient-to-r from-orange-950 via-orange-900/80 to-orange-900/50"></div>
    <div class="container relative">
      <div class="grid lg:grid-cols-12 mt-10 md:grid-cols-2 gap-[30px]">
        <div class="lg:col-span-7 lg:me-6">
          <h4
            class="text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold drop-shadow-xl"
          >
           Albergue de perritos <br />
          <span class="text-yellow-500 drop-shadow-xl"> "Huellitas"</span>
          </h4>
          <p class="text-white/70 text-lg max-w-xl">
            Los albergues para perros son lugares que reciben a animales abandonados o rescatados para brindarles atención, cuidados y alimentación. El objetivo es que los perros encuentren un nuevo hogar 
            
          </p>

        
          <!--end grid-->

    
        </div>

        <div class="lg:col-span-5 mt-8 md:mt-0">
          <div class="relative z-2">
            <img
                src="@/assets/images/perros/fentee.png"
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
        <p class="text-xl font-medium text-yellow-500 ">Albergue de perror "Huellitas" </p>

        <h1 class="mt-2 text-2xl font-semibold text-blue-900 capitalize lg:text-3xl dark:text-white">
          Nuestra Historia
        </h1>

        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full bg-orange-800 -z-10 md:h-96 rounded-2xl"></div>
            
            <div class="w-full p-6 bg-blue-800 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="data:image/jpeg;base64,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" alt="client photo" />
                
                <div class="mt-2 md:mx-6">
                   

                    <p class="mt-4 text-lg leading-relaxed text-white md:text-xl"> Un albergue de perritos es un lugar donde se rescatan, cuidan y muchas veces se dan en adopción perros que han sido abandonados, maltratados o que no tienen hogar. Aquí te dejo una descripción general que podrías usar para un proyecto o simplemente para entender mejor cómo funcionan:

                    </p>
                    
                
                </div>
            </div>
        </main>
    </div>
</section>

<section id="sobre" class="">
	
  <div
    class="relative max-w-screen-xl mt-24 px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-orange-950/90 text-gray-900 sm:rounded-lg shadow-lg"
    data-aos="fade-up" data-aos-duration="1000">
    <div class="absolute right-0 bottom-0 hero-pattern w-64 h-56" ></div>
    <div class="relative">
      <div>
        <h2 class="text-center text-yellow-50 text-4xl lg:text-5xl font-bold leading-tight">Sobre nosotros</h2>
        <div class="text-center text-yellow-500 font-light">Albergue "Huellitas"</div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-12">
        <div
          class="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-amber-100 text-gray-700 leading-snug flex flex-col justify-between">
          <div>
            <div class="flex items-center">
              <div class="ml-4">
                <div class="font-bold text-orange-900">MISIÓN</div>
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
                <div class="font-bold text-orange-800">VISIÓN</div>
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
		<h2 class="mb-2 text-4xl font-bold leading-none text-center text-blue-950">Adopta hoy!</h2>
		<h2 class="mb-8 text-md font-bold leading-none text-center text-yellow-500"> Albergue huellitas
      <span class="text-yellow-500 drop-shadow-xl"> </span></h2>
    <ul class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
			<li class="flex items-center space-x-2">
				<svg xmlns="https://www.la-razon.com/wp-content/uploads/2023/04/24/06/perros-callejeros.jpg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-blue-600">
					<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
					<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
				</svg>
				<span>Sucursal en La Paz</span>
			</li>
			<li class="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-blue-600">
					<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
					<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
				</svg>
				<span>Sucursal en Santa Cruz </span>
			</li>
			<li class="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-blue-600">
					<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
					<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
				</svg>
				<span>Sucursal en Cochabamba</span>
			</li>
      <li class="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-blue-600">
					<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
					<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
				</svg>
				<span>Administracion de empresas</span>
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
        "https://www.la-razon.com/wp-content/uploads/2023/04/24/06/perros-callejeros.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfj1wIeJdrHcTkGobPhWYU_qMDQ6eJu6ZLo9HWfk-LFQ3GR33THM1UbyWXbRJkGQFPrLw&usqp=CAU",
        "https://www.la-razon.com/wp-content/uploads/2023/04/24/06/perros-callejeros.jpg",
        "https://www.la-razon.com/wp-content/uploads/2023/04/24/06/perros-callejeros.jpg",
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