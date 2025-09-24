<template>
  <CharactersList :personajes="personajes" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CharactersList from '@/components/CharactersList.vue';

const personajes = ref([]);

async function consumoAPI() {
  try {
    const url = 'https://rickandmortyapi.com/api/character';
    const response = await axios.get(url);
    personajes.value = response.data.results;
  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error);
  }
}

onMounted(() => {
  consumoAPI();
});
</script>