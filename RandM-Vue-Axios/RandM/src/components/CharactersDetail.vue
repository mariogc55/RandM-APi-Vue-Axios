<template>
  <div class="character-detail-container">
    <div v-if="personaje" class="character-detail-card">
      <img :src="personaje.image" :alt="`Imagen de ${personaje.name}`" class="detail-image">
      <div class="detail-content">
        <h1>{{ personaje.name }}</h1>
        <p><strong>Estado:</strong> {{ personaje.status }}</p>
        <p><strong>Especie:</strong> {{ personaje.species }}</p>
        <p><strong>Origen:</strong> {{ personaje.origin.name }}</p>
        <p><strong>Ubicación:</strong> {{ personaje.location.name }}</p>
        
        <div class="episodes-section">
          <h2>Episodios:</h2>
          <ul>
            <li v-for="episodio in episodios" :key="episodio.id">
              {{ episodio.episode }} - {{ episodio.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Cargando datos del personaje...</p>
    </div>
    <button @click="goBack" class="back-button">Volver</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const personaje = ref(null);
const episodios = ref([]);

async function fetchCharacter() {
  try {
    const id = route.params.id;
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener el personaje.');
    }
    const data = await response.json();
    personaje.value = data;
    await fetchEpisodes(data.episode);
  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error);
  }
}

async function fetchEpisodes(episodeUrls) {
  try {
    const promises = episodeUrls.map(url => fetch(url).then(res => res.json()));
    episodios.value = await Promise.all(promises);
  } catch (error) {
    console.error('Error al obtener los episodios:', error);
  }
}

function goBack() {
  router.back();
}

onMounted(() => {
  fetchCharacter();
});
</script>

<style scoped>
.character-detail-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.character-detail-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 2rem;
  text-align: center;
}
.detail-image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #f0f0f0;
}
.detail-content {
  margin-top: 1rem;
}
.episodes-section {
  margin-top: 2rem;
  width: 100%;
  text-align: left;
}
.episodes-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
}
.episodes-section ul {
  list-style-type: none;
  padding: 0;
}
.episodes-section li {
  background-color: #f0f0f0;
  padding: 0.5rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
}
.back-button {
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #1b1c15;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
}
.back-button:hover {
  background-color: #b1b1b1;
}

</style>
