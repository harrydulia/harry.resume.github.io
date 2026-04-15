<template>
  <div class="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[2rem] p-8 text-white shadow-lg flex flex-col justify-center relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/40 transition-all duration-500">
    <div class="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl group-hover:scale-110 transition-transform"></div>
    
    <span class="text-xs font-bold uppercase tracking-widest text-blue-200 mb-2">
      {{ dict[currentLang].highlight.tag }}
    </span>
    
    <h3 class="text-2xl font-bold italic">{{ dict[currentLang].highlight.title }}</h3>
    
    <p class="text-sm mt-3 opacity-90 border-l-2 border-blue-400 pl-3 leading-snug">
      {{ dict[currentLang].highlight.desc }}<br>
      <span class="font-semibold">{{ dict[currentLang].highlight.topic }}</span>
    </p>
  </div>
</template>

<script setup>
import { currentLang, dict } from '../i18n.js';
</script>