<script setup lang="ts">
import JobItem from '@/components/JobItem.vue'
import IconVue from '@/components/icons/IconVue.vue'
import IconPhp from '@/components/icons/IconPhp.vue'
import IconBitbucket from '@/components/icons/IconBitbucket.vue'
import IconJira from '@/components/icons/IconJira.vue'
import IconJS from '@/components/icons/IconJS.vue'
import IconCpp from '@/components/icons/IconCpp.vue'
import IconGit from '@/components/icons/IconGit.vue'
import IconSTM32 from '@/components/icons/IconSTM32.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconCMake from '@/components/icons/IconCMake.vue'
import IconJUCE from '@/components/icons/IconJUCE.vue'
import IconPostgres from '@/components/icons/IconPostgres.vue'
import IconJenkins from '@/components/icons/IconJenkins.vue'
import IconLaravel from '@/components/icons/IconLaravel.vue'
import IconAngularJS from '@/components/icons/IconAngularJS.vue'
import IconWebpack from '@/components/icons/IconWebpack.vue'
import IconAppStoreConnect from '@/components/icons/IconAppStoreConnect.vue'
import IconMicrosoftStore from '@/components/icons/IconMicrosoftStore.vue'
</script>

<template>
  <main>
    <JobItem>
      <template #icon>
        <a class="logo-company-link flex justify-center" href="https://jouemusic.com">
          <img class="logo-company" src="@/assets/J-Music_logo_white_220x.avif" >
        </a>
      </template>
      <template #job-tile>
        C++ Software Developer <i style="font-size: 0.8rem;">(3 years)</i>
      </template>
      <template #company>
        Joue Music Instruments
      </template>
      <template #time>
        December 2021 - December 2024 - Bordeaux
      </template>
      - Maintained and developed music applications J-Play App (Windows, macOs and iPad) and J-Music Maker (iOS)<br>
      - Developed MIDI debugging tools and firmware update utilities in JavaScript<br>
      - Contributed to the firmware development of a MIDI controller prototype<br>
      <div>
        <h4 class="bold mt1 mb1">Tech stack :</h4>
        <ul class="tech-stack-list flex flex-wrap justify-left">
          <li class="flex mr2 items-center"><IconCpp class="mr1"/>C++</li>
          <li class="flex mr2 items-center"><IconJUCE class="mr1"/>JUCE</li>
          <li class="flex mr2 items-center"><IconCMake class="mr1"/>CMake</li>
          <li class="flex mr2 items-center"><IconSTM32 class="mr1"/>STM32 tools</li>
          <li class="flex mr2 items-center"><IconJS class="mr1"/>JavaScript</li>
          <li class="flex mr2 items-center"><IconGithub class="mr1"/>Github</li>
          <li class="flex mr2 items-center"><IconGithub class="mr1"/>Github Actions</li>
          <li class="flex mr2 items-center"><IconJira class="mr1"/>Jira</li>
          <li class="flex mr2 items-center"><IconGit class="mr1"/>Git</li>
          <li class="flex mr2 items-center"><IconAppStoreConnect class="mr1"/>App Store tools</li>
          <li class="flex mr2 items-center"><IconMicrosoftStore class="mr1"/>Microsoft Store tools</li>
          <!-- <li class="flex mr1"><IconWebAssembly class="mr1"/> WebAssembly</li> -->
        </ul>
      </div>
    </JobItem>

    <JobItem>
      <template #icon>
        <a class="logo-company-link flex justify-center" href="https://www.compagnie-fiduciaire.com/">
          <img class="logo-company" src="@/assets/CF-Compagnie-Fiduciaire-blanc.svg">
        </a>
      </template>
      <template #job-tile>
        Lead Developer <i style="font-size: 0.8rem;">(3 years)</i>
      </template>
      <template #company>
        Compagnie Fiduciaire
      </template>
      <template #time>
        July 2018 - December 2021 - Bordeaux
      </template>
      - Led a team of 9 developers<br>
      - Oversaw a complete application overhaul, including migration to Vue.js and a back-end revamp with Laravel 8<br>
      - Designed system architecture, implemented unit tests, conducted code reviews and managed deployments<br>
      <div>
        <h4 class="bold mt1 mb1">Tech stack :</h4>
        <ul class="tech-stack-list flex flex-wrap justify-left">
          <li class="flex mr2 items-center"><IconVue class="mr1"/>Vue.js</li>
          <li class="flex mr2 items-center"><IconLaravel class="mr1"/>Laravel 8</li>
          <li class="flex mr2 items-center"><IconJS class="mr1"/>JavaScript</li>
          <li class="flex mr2 items-center"><IconPhp class="mr1"/>PHP</li>
          <li class="flex mr2 items-center"><IconPostgres class="mr1"/>Postgres</li>
          <li class="flex mr2 items-center"><IconJira class="mr1"/>Jira</li>
          <li class="flex mr2 items-center"><IconBitbucket class="mr1"/>Bitbucket</li>
          <li class="flex mr2 items-center"><IconJenkins class="mr1"/>Jenkins</li>
          <li class="flex mr2 items-center"><IconGit class="mr1"/>Git</li>
        </ul>
      </div>
    </JobItem>

    <JobItem>
      <template #icon>
        <a class="logo-company-link flex justify-center" href="https://www.compagnie-fiduciaire.com/">
          <img class="logo-company" src="@/assets/CF-Compagnie-Fiduciaire-blanc.svg">
        </a>
      </template>
      <template #job-tile>
        Full-Stack Developer (work study placement) <i style="font-size: 0.8rem;">(2 years)</i>
      </template>
      <template #company>
        Compagnie Fiduciaire
      </template>
      <template #time>
        September 2016 - July 2018 - Bordeaux
      </template>
      - Developed and maintained accounting applications<br>
      - Migrated from jQuery to AngularJS as part of an application overhaul<br>
      - Integrate webpack to facilitate the development and management of existing AngularJS code<br>
      <div>
        <h4 class="bold mt1 mb1">Tech stack :</h4>
        <ul class="tech-stack-list flex flex-wrap justify-left">
          <li class="flex mr2 items-center"><IconAngularJS class="mr1"/>AngularJS</li>
          <li class="flex mr2 items-center"><IconLaravel class="mr1"/>Laravel 5</li>
          <li class="flex mr2 items-center"><IconJS class="mr1"/>JavaScript</li>
          <li class="flex mr2 items-center"><IconPhp class="mr1"/>PHP</li>
          <li class="flex mr2 items-center"><IconPostgres class="mr1"/>Postgres</li>
          <li class="flex mr2 items-center"><IconWebpack class="mr1"/>webpack</li>
          <li class="flex mr2 items-center"><IconJira class="mr1"/>Jira</li>
          <li class="flex mr2 items-center"><IconBitbucket class="mr1"/>Bitbucket</li>
          <li class="flex mr2 items-center"><IconGit class="mr1"/>Git</li>
        </ul>
      </div>
      <br/>
    </JobItem>
  </main>
</template>

<style scoped>
.logo-company-link {
  width: 100%;
}

.logo-company {
  width: 85%;
  height: auto;
}
</style>
