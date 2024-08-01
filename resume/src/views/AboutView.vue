<script setup lang="ts">
import IconAngularJS from '@/components/icons/IconAngularJS.vue'
import IconAppStoreConnect from '@/components/icons/IconAppStoreConnect.vue'
import IconVSCode from '@/components/icons/IconVSCode.vue'
import IconBash from '@/components/icons/IconBash.vue'
import IconBitbucket from '@/components/icons/IconBitbucket.vue'
import IconCpp from '@/components/icons/IconCpp.vue'
import IconGit from '@/components/icons/IconGit.vue'
import IconFigma from '@/components/icons/IconFigma.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconJenkins from '@/components/icons/IconJenkins.vue'
import IconJira from '@/components/icons/IconJira.vue'
import IconJS from '@/components/icons/IconJS.vue'
import IconLaravel from '@/components/icons/IconLaravel.vue'
import IconMicrosoftStore from '@/components/icons/IconMicrosoftStore.vue'
import IconPhp from '@/components/icons/IconPhp.vue'
import IconPostgres from '@/components/icons/IconPostgres.vue'
import IconSTM32 from '@/components/icons/IconSTM32.vue'
import IconJUCE from '@/components/icons/IconJUCE.vue'
import IconCMake from '@/components/icons/IconCMake.vue'
import IconVue from '@/components/icons/IconVue.vue'
import IconWebAssembly from '@/components/icons/IconWebAssembly.vue';
import IconWebGPU from '@/components/icons/IconWeb_GPU.vue';
import IconWebpack from '@/components/icons/IconWebpack.vue'
import IconReact from '@/components/icons/IconReact.vue'
import IconInskcape from '@/components/icons/IconInskcape.vue'
import IconVitejs from '@/components/icons/IconVitejs.vue'
import IconMongoDB from '@/components/icons/IconMongoDB.vue'
import IconMySQL from '@/components/icons/IconMySQL.vue'
import IconRust from '@/components/icons/IconRust.vue'
import IconPython from '@/components/icons/IconPython.vue'
import IconGimp from '@/components/icons/IconGimp.vue'
import IconSDL from '@/components/icons/IconSDL.vue'
import IconLinux from '@/components/icons/IconLinux.vue'
import IconMacOS from '@/components/icons/IconMacOS.vue'
import IconWindows from '@/components/icons/IconWindows.vue'
</script>

<template>
  <div class="flex justify-center items-center flex-column">
    <div class="lg-col-6 mt1 p1">
      I am Emmanuel Patrois, a French developer based in Bordeaux.<br><br>
      Specializing in web application development, I primarily work with Laravel and Vue.js.<br>
      Passionate about music production, both in software and hardware,
      I have focused on C++ over the past four years to advance in this field.
      Aware of the complexity and vastness of this language, I continuously strive to deepen my knowledge.<br>
      Recently, I started exploring signal processing, a field as vast as it is technical.
      I am just beginning and do not claim any expertise, but I understand its fundamental importance.<br><br>
      Curious and eager to learn, I enjoy exploring new technologies by developing projects related to video games and music creation.<br>
      I particularly appreciate collaborating with other developers, as the exchange of knowledge and experience is essential for mutual growth.<br>
      When designing software projects, I try to follow industry standards and best practices, integrating tools that facilitate their implementation.
    </div>
    <div class="lg-col-6 mt1 p1">
      <h4 class="bold mt1 mb1">
        Here is a list of the tools, software, and programming languages I have
        used the most during my professional and personal experience.
      </h4>
      <ul class="tech-stack-list flex flex-column flex-wrap justify-left">
        <li class="col-12 lg-col-6">
          - Frameworks / APIs
          <ul>
            <li class="flex mr2 items-center"><IconAngularJS class="mr1"/>AngularJS</li>
            <li class="flex mr2 items-center"><IconJUCE class="mr1"/>JUCE</li>
            <li class="flex mr2 items-center"><IconLaravel class="mr1"/>Laravel</li>
            <li class="flex mr2 items-center"><IconReact class="mr1"/>React</li>
            <li class="flex mr2 items-center"><IconVue class="mr1"/>Vue.js</li>
            <li class="flex mr2 items-center"><IconWebAssembly class="mr1"/>WebAssembly</li>
            <li class="flex mr2 items-center"><IconWebGPU class="mr1"/>WebGPU</li>
            <li class="flex mr2 items-center"><IconSDL class="mr1"/>SDL</li>
          </ul>
        </li>
        <li class="col-12 lg-col-6">
          - Programming Languages
          <ul>
            <li class="flex mr2 items-center"><IconBash class="mr1"/>Bash</li>
            <li class="flex mr2 items-center"><IconCpp class="mr1"/>C++</li>
            <li class="flex mr2 items-center"><IconJS class="mr1"/>JavaScript</li>
            <li class="flex mr2 items-center"><IconPhp class="mr1"/>PHP</li>
            <li class="flex mr2 items-center"><IconPython class="mr1"/>Python</li>
            <li class="flex mr2 items-center"><IconRust class="mr1"/>Rust</li>
          </ul>
        </li>
        <li class="col-12 lg-col-6">
          - CI/CD
          <ul>
            <li class="flex mr2 items-center"><IconAppStoreConnect class="mr1"/>App Store tools</li>
            <li class="flex mr2 items-center"><IconGithub class="mr1"/>Github Actions</li>
            <li class="flex mr2 items-center"><IconJenkins class="mr1"/>Jenkins</li>
            <li class="flex mr2 items-center"><IconMicrosoftStore class="mr1"/>Microsoft Store tools</li>
          </ul>
        </li>
        <li class="col-12 lg-col-6">
          - Databases
          <ul>
            <li class="flex mr2 items-center"><IconMongoDB class="mr1"/>MongoDB</li>
            <li class="flex mr2 items-center"><IconMySQL class="mr1"/>MySQL</li>
            <li class="flex mr2 items-center"><IconPostgres class="mr1"/>Postgres</li>
          </ul>
        </li>
        <li class="col-12 lg-col-6">
          - Versionning/Management tools
          <ul>
            <li class="flex mr2 items-center"><IconBitbucket class="mr1"/>Bitbucket</li>
            <li class="flex mr2 items-center"><IconGit class="mr1"/>Git</li>
            <li class="flex mr2 items-center"><IconGithub class="mr1"/>Github</li>
            <li class="flex mr2 items-center"><IconJira class="mr1"/>Jira</li>
          </ul>
        </li>
        <li class="col-12 lg-col-6">
          - Build tools
          <ul>
            <li class="flex mr2 items-center"><IconCMake class="mr1"/>CMake</li>
            <li class="flex mr2 items-center"><IconSTM32 class="mr1"/>STM32 tools</li>
            <li class="flex mr2 items-center"><IconVitejs class="mr1"/>Vite</li>
            <li class="flex mr2 items-center"><IconWebpack class="mr1"/>webpack</li>
          </ul>
        </li>
        <li class="col-12 lg-col-6">
          - Other
          <ul>
            <li class="flex mr2 items-center"><IconFigma class="mr1"/>Figma</li>
            <li class="flex mr2 items-center"><IconGimp class="mr1"/>Gimp</li>
            <li class="flex mr2 items-center"><IconInskcape class="mr1"/>Inskcape</li>
            <li class="flex mr2 items-center"><IconVSCode class="mr1"/>VSCode</li>
          </ul>
        </li>
        <li class="col-12 lg-col-6">
          - OS
          <ul>
            <li class="flex mr2 items-center"><IconLinux class="mr1"/>Linux</li>
            <li class="flex mr2 items-center"><IconMacOS class="mr1"/>MacOS</li>
            <li class="flex mr2 items-center"><IconWindows class="mr1"/>Windows</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.tech-stack-list{
  padding: 0px;
  display: flex;
  flex-direction: row;
}
.tech-stack-list ul {
  padding-left: 1rem;
}

.tech-stack-list > li {
  list-style-type: none;
  margin-top: 1rem;
}
</style>
