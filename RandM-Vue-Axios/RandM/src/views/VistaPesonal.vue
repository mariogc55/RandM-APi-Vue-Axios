<template>
  <h1>Personal</h1>
  <main class="personal-container">
    <div id="profile-card">
      <div id="profile-content">
        <img :src="profileInfo.profile_image" alt="Foto de perfil de Mario Guerrero" class="profile-img">
        <h2>{{ profileInfo.name }}</h2>
        <h3>{{ profileInfo.job_title }}</h3>
        <p>{{ profileInfo.bio }}</p>
        <div class="contact-info">
          <p><strong>Correo:</strong> <a :href="`mailto:${profileInfo.email}`">{{ profileInfo.email }}</a></p>
          <p><strong>Teléfono:</strong> {{ profileInfo.phone }}</p>
        </div>
        <div class="social-links">
          <a :href="profileInfo.social_media?.linkedin" target="_blank" class="linkedin">
            <svg class="icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.18 20.45H3.59V8.62h3.59v11.83zM5.38 7.07c-1.22 0-2.02-.8-2.02-1.81 0-1.02.8-1.81 2.02-1.81s2.02.8 2.02 1.81c.01 1.01-.8 1.81-2.02 1.81zM20.41 20.45h-3.58v-6.24c0-1.48-.52-2.5-1.87-2.5-1.02 0-1.63.68-1.9 1.35-.1.24-.13.57-.13.9v6.49h-3.59s.05-10.74 0-11.83h3.59v1.68c.48-.84 1.48-2.04 3.23-2.04 2.36 0 4.13 1.54 4.13 4.86v7.33z" />
            </svg>
          </a>
          <a :href="profileInfo.social_media?.github" target="_blank" class="github">
            <svg class="icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.82-.26.82-.57 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.611-4.043-1.611-.546-1.385-1.332-1.755-1.332-1.755-1.08-.738.082-.724.082-.724 1.192.084 1.821 1.222 1.821 1.222 1.06 1.81 2.784 1.284 3.454.981.107-.764.415-1.284.757-1.58-2.646-.3-5.424-1.32-5.424-5.88 0-1.3.465-2.36 1.222-3.19-.122-.3-.53-1.513.115-3.15 0 0 1.0-.32 3.3.123.95-.262 1.956-.392 2.96-.397 1.004.005 2.01.135 2.96.397 2.3-1.443 3.3-1.123 3.3-1.123.645 1.637.237 2.85.115 3.15.758.83 1.222 1.89 1.222 3.19 0 4.57-2.78 5.579-5.429 5.87.424.364.81.996.81 2.01 0 1.45-.015 2.62-.015 2.977 0 .315.22.686.825.57C20.565 21.802 24 17.302 24 12c0-6.627-5.373-12-12-12z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import profileDataJSON from '@/assets/dataP.json';
import profileImageSrc from '@/assets/imagen_me.jpeg';

const profileInfo = ref({});

onMounted(() => {
  profileInfo.value = { ...profileDataJSON };
  profileInfo.value.profile_image = profileImageSrc;
});
</script>

<style scoped>
.personal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

#profile-card {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  text-align: center;
  overflow: hidden;
}

#profile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-img {
  border-radius: 50%;
  height: 128px;
  width: 128px;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 4px solid #f3f4f6;
}

h2 {
  font-size: 1.875rem;
  font-weight: bold;
  color: #1f2937;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

h3 {
  font-size: 1.25rem;
  color: #4b5563;
  margin-top: 0;
  margin-bottom: 1rem;
}

p {
  color: #6b7280;
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.contact-info {
  text-align: left;
  width: 100%;
  max-width: 250px;
  margin-top: 1rem;
}

.contact-info p {
  margin-bottom: 0.5rem;
  color: #374151;
}

.contact-info a {
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.contact-info a:hover {
  text-decoration: underline;
}

.social-links {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.icon {
  width: 2rem;
  height: 2rem;
  transition: transform 0.2s ease-in-out;
}

.linkedin {
  color: #3b82f6;
}

.github {
  color: #1f2937;
}

.linkedin:hover, .github:hover {
  transform: scale(1.1);
}
</style>