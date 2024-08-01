<script setup lang="ts">
import IconGoTo from '@/components/icons/IconGoTo.vue';
import ProjectItem from '@/components/ProjectItem.vue'

import IconVue from '@/components/icons/IconVue.vue'
import IconJS from '@/components/icons/IconJS.vue'
import IconCpp from '@/components/icons/IconCpp.vue'
import IconCMake from '@/components/icons/IconCMake.vue'
import IconJUCE from '@/components/icons/IconJUCE.vue'
import IconWebAssembly from '@/components/icons/IconWebAssembly.vue';
import IconPixijs from '@/components/icons/IconPixijs.vue';
import IconReact from '@/components/icons/IconReact.vue';
import IconWebGPU from '@/components/icons/IconWeb_GPU.vue';

</script>

<template>
  <main class="project-view mt2">
    <ProjectItem>
      <template #icon>
        <a href="/projects/mood/index.html">
          <img width="100%" src="@/assets/Tha-Mood-Preview.png">
        </a>
      </template>
      <template #project-tile>
        <a href="/projects/mood/index.html">Tha Mood Synthesizer</a>
      </template>
      <template #short-description>
        Synthesizer project
      </template>
      <template #time>
        January 2025
      </template>

      A virtual analog synthesizer developed in C++ using the JUCE framework.<br>
      Available as a VST, AU, and Standalone application.<br>
      However, please note that I cannot distribute it at the moment as I do not have the required licenses. Send me an
      message via Linkedin, and I will send you the VST, AU, or Standalone version according to your OS. <br><br>
      The audio engine has also been ported to WebAssembly and integrated with a completely redesigned UI built with
      Vue.js.<br>
      <a class="flex justify-start items-center" href="/projects/mood/index.html">
        <span class="mr1">Web Demo</span>
        <IconGoTo />
      </a>
      <div>
        <h4 class="bold mt1 mb1">Tech stack :</h4>
        <ul class="tech-stack-list flex flex-wrap justify-left">
          <li class="flex mr2 items-center">
            <IconCpp class="mr1" />C++
          </li>
          <li class="flex mr2 items-center">
            <IconJUCE class="mr1" />JUCE
          </li>
          <li class="flex mr2 items-center">
            <IconCMake class="mr1" />CMake
          </li>
          <li class="flex mr2 items-center">
            <IconWebAssembly class="mr1" />WebAssembly
          </li>
          <li class="flex mr2 items-center">
            <IconVue class="mr1" />Vue.js
          </li>
          <li class="flex mr2 items-center">
            <IconJS class="mr1" />JavaScript
          </li>
          <!-- <li class="flex mr1"><IconWebAssembly class="mr1"/> WebAssembly</li> -->
        </ul>
      </div>
    </ProjectItem>

    <ProjectItem>
      <template #icon>
        <a href="/projects/celeste/index.html">
          <img width="100%" src="@/assets/Celeste-2.5D.gif">
        </a>
      </template>
      <template #project-tile>
        <a href="/projects/celeste/index.html">Celeste Classic 2.5D</a>
      </template>
      <template #short-description>
        Celeste clone (WebGPU experiment)
      </template>
      <template #time>
        December 2024
      </template>

      A WebGPU experiment, a reimplementation of <a href="https://www.lexaloffle.com/bbs/?tid=2145">Celeste Classic</a>
      with a little bit of 3D and lighting.
      It was just to test the WebGPU technology.
      <a class="flex justify-start items-center" href="/projects/celeste/index.html">
        <span class="mr1">Play the Game</span>
        <IconGoTo />
      </a>
      <div>
        <h4 class="bold mt1 mb1">Tech stack :</h4>
        <ul class="tech-stack-list flex flex-wrap justify-left">
          <li class="flex mr2 items-center">
            <IconCpp class="mr1" />C++
          </li>
          <li class="flex mr2 items-center">
            <IconWebAssembly class="mr1" />WebAssembly
          </li>
          <li class="flex mr2 items-center">
            <IconJS class="mr1" />JavaScript
          </li>
          <li class="flex mr2 items-center">
            <IconWebGPU class="mr1" />WebGPU
          </li>
          <!-- <li class="flex mr1"><IconWebAssembly class="mr1"/> WebAssembly</li> -->
        </ul>
      </div>
    </ProjectItem>

    <ProjectItem>
      <template #icon>
        <a href="/projects/straight-outta-dungeon/index.html">
          <img width="100%" src="@/assets/SOD.png" />
        </a>
      </template>
      <template #project-tile>
        <a href="/projects/straight-outta-dungeon/index.html">Straight Outta Dungeon</a>
      </template>
      <template #short-description>
        A simple game made for fun.
      </template>
      <template #time>
        June 2019
      </template>
      <a class="flex justify-start items-center" href="/projects/straight-outta-dungeon/index.html">
        <span class="mr1">Play the game</span>
        <IconGoTo />
      </a>
      <div>
        <h4 class="bold mt1 mb1">Tech stack :</h4>
        <ul class="tech-stack-list flex flex-wrap justify-left">
          <li class="flex mr2 items-center">
            <IconJS class="mr1" />JavaScript
          </li>
          <li class="flex mr2 items-center">
            <IconPixijs class="mr1" />PixiJS
          </li>
          <li class="flex mr2 items-center">
            <IconReact class="mr1" />React
          </li>
        </ul>
      </div>
    </ProjectItem>
  </main>
</template>

<style>
.project-view {
  max-width: 750px;
}

img {
  border-radius: 10px;
}
</style>
