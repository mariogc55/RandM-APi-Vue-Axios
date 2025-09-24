<template>
    <h1>Carros</h1>
    <main class="container mx-auto p-8 grid gap-8">
    <article
      v-for="car in cars"
      :key="car.id"
      class="car-card rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
    >
      <div class="image-container">
        <img :src="car.imageUrl" :alt="`Imagen del ${car.brand} ${car.model}`" class="car-image">
      </div>

      <div class="p-6 text-center text-content">
        <h2 class="text-xl font-bold text-gray-800">{{ car.brand }}</h2>
        <h3 class="text-lg text-gray-600">{{ car.model }} ({{ car.year }})</h3>
        <p class="text-gray-500 mt-2 text-sm">{{ car.description }}</p>
      </div>
    </article>
  </main>

  <div 
    v-if="!cars.length" 
    id="no-encontrado" 
    class="text-center text-xl text-red-500 mt-8"
  >
    No se encontraron vehículos que coincidan con la búsqueda.
  </div>

</template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import carData from '@/assets/cars.json';

  const cars = ref([]);

  function fetchCars() {
    try {
      cars.value = carData;
    } catch (error) {
      console.error('Error al cargar los datos del JSON:', error);
    }
  }

  onMounted(() => {
    fetchCars();
  });
  </script>
  
  <style scoped>
    .car-card {
      width: 100%;
      background-color: #ffffff;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      overflow: hidden;
      transition: transform 0.3s ease-in-out;
    }

    .car-card:hover {
      transform: scale(1.03);
    }

    /* Contenedor de la imagen */
    .image-container {
      width: 100%;
      height: 200px;
      overflow: hidden;
    }

    /* Estilos de la imagen para que se adapte al contenedor */
    .car-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Contenedor principal del grid */
    .container {
      max-width: 80rem;
      margin: 0 auto;
      padding: 1rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    /* Media Query para móvil (a partir de 340px) */
    @media (min-width: 340px) {
      .container {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
    }

    /* Media Query para tablet (a partir de 768px) */
    @media (min-width: 768px) {
      .container {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }
    }

    /* Media Query para PC (a partir de 1024px) */
    @media (min-width: 1024px) {
      .container {
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
      }
    }

    /* Estilo para el contenedor de texto */
    .text-content {
      padding: 1rem; /* Añade un padding interno de 16px */
    }

    /* Estilo para el mensaje de "no encontrado" */
    #no-encontrado {
      text-align: center;
      font-size: 1.25rem;
      line-height: 1.75rem;
      color: #ef4444;
      margin-top: 2rem;
    }

    h1 {
      text-align: center;
      margin-top: 2rem;
    }
  </style>