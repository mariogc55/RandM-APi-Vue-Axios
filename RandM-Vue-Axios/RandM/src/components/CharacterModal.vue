<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-container">
      <div class="modal-header">
        <h2>Detalles del Personaje</h2>
        <button class="close-button" @click="$emit('close')">&times;</button>
      </div>
      <div class="modal-body">
        <img :src="character.image" :alt="character.name" class="modal-image">
        <h3 class="modal-name">{{ character.name }}</h3>
        <p><strong>Especie:</strong> {{ character.species }}</p>
        <p><strong>Estado:</strong> {{ character.status }}</p>
        <p><strong>Episodios en los que aparece:</strong></p>
        <ul>
          <li v-for="episode in episodes" :key="episode.id">{{ episode.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';

const props = defineProps({
  character: {
    type: Object,
    required: true
  }
});

const episodes = ref([]);

const fetchEpisodes = async () => {
  if (!props.character.episode || props.character.episode.length === 0) {
    episodes.value = [{ name: 'N/A' }];
    return;
  }
  
  // Mapea y hace las peticiones, si solo hay un episodio, no se mapea, solo se hace la peticion para evitar errores.
  const episodeUrls = Array.isArray(props.character.episode) ? props.character.episode : [props.character.episode];
  const episodePromises = episodeUrls.map(url => fetch(url).then(res => res.json()));

  try {
    const episodeData = await Promise.all(episodePromises);
    episodes.value = episodeData;
  } catch (error) {
    console.error('Error fetching episodes:', error);
    episodes.value = [{ name: 'Error' }];
  }
};

onMounted(() => {
  fetchEpisodes();
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 10px;
  box-sizing: border-box;
}

.modal-container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 15px;
  flex-shrink: 0;
}

.close-button {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #555;
  transition: color 0.2s ease-in-out;
}

.close-button:hover {
  color: #000;
}

.modal-body {
  text-align: center;
  flex-grow: 1;
  overflow-y: auto;
}

.modal-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

.modal-name {
  margin-top: 10px;
  font-size: 24px;
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
  margin: 10px 0;
  text-align: left;
  font-size: 14px;
}

li {
  padding: 4px 0;
  border-bottom: 1px dotted #eee;
}

li:last-child {
  border-bottom: none;
}
</style>