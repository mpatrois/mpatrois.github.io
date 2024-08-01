<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconLinkedIn from './components/icons/IconLinkedIn.vue';
import IconGmail from './components/icons/IconGmail.vue';
</script>

<template>
  <header class="flex flex-column justify-center mt2">
    <div class="wrapper flex flex-column justify-center items-center">
      <h1 class="center center">Emmanuel Patrois</h1>
      <h3 class="center">
        Developer with 8 years of experience.
        <div class="contact flex justify-center mt1">
          <a href="https://www.linkedin.com/in/emmanuel-p-716365a8/" target="_blank" class="contact-link flex items-center">
            <IconLinkedIn class="mr1"/>
          </a>
          <a class="contact-link flex items-center" target="_blank" href="mailto:emmanuel.patrois@gmail.com">
            <IconGmail class="mr1"/>
          </a>
        </div>
      </h3>
    </div>
    <div>
      <nav class="flex justify-center">
        <RouterLink to="/">Working Experience</RouterLink>
        <RouterLink to="/projects">Personal projects</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

header h1 {
  color: #F1E8B8;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

/* nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

nav a.router-link-exact-active:hover {
  color: var(--color-text);
} */

.router-link-active {
  color: #F1E8B8;
}

nav a {
  color: var(--color-text);
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-align: center;
}

nav a:hover{
  color: #F1E8B8;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    min-width: 630px;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.contact-link svg {
  width: 1.2rem;
  height: 1.2rem;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-leave-active{
  display: none;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to {
  opacity: 1;
}
</style>
