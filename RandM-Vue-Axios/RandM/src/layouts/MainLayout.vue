<template>
    <div id="app">
      <div>

        <div class="navbar-container">
          <header class="header">
            <h1 class="title">Rick & Morty API</h1>
          </header>
          <nav class="nav">
            <ul class="nav-list">
              <li class="nav-item">
                <button  @click="router.push('/')"> Rick API </button>
              </li>
              <li class="nav-item">
                <button  @click="router.push('/carsview')" > Carros </button>
              </li>
              <li class="nav-item">
                <button  @click="router.push('/vistapersonal')" > Personal </button>
              </li>
            </ul>
          </nav>
        </div>

      </div>
      <div class="main-content">
        <title>contenido vue</title>
        </div>
    </div>
    <router-view />
</template>
  
  <script setup>
import { useRouter } from 'vue-router'
  
  const router = useRouter()
  </script>
  <style scoped>
    .navbar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f0f0f0;
}

.header {
  width: 100%;
  text-align: center;
  padding: 20px 0;
  background-color: #ffffff;
}

.title {
  color: #0c1425;
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
}

.nav {
  width: 100%;
  background-color: #0c1425;
  padding: 10px 0;
}

.nav-list {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap; 
  gap: 15px; 
}

.nav-item button {
  color: #fff;
  background-color: transparent;
  border: none;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
  cursor: pointer;
}

.nav-item button:hover {
  background-color: #777;
}

.nav-item button.active {
  background-color: #007bff;
}

:deep(.main-content) {
  padding: 20px;
}
  </style>