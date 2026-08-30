<template>
  <section id="about" class="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-500">
    <div>
      <div class="w-20 h-20 bg-slate-200 rounded-full mb-6 overflow-hidden ring-4 ring-blue-50">
        <img src="/profile.jpg" alt="Harry Wu" class="w-full h-full object-cover">
      </div>
      <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight">吳柏霖 Harry Wu</h1>
      
      <h2 class="text-lg font-medium text-blue-600 mt-2">{{ dict[currentLang].about.role }}</h2>
      
      <p class="text-slate-600 mt-4 leading-relaxed">
        {{ dict[currentLang].about.desc1 }}
        <br><br>
        {{ dict[currentLang].about.desc2 }}
        <br><br>
        {{ dict[currentLang].about.desc3 }}
      </p>
    </div>
    <div class="mt-8 flex flex-wrap gap-4 text-xs font-medium text-slate-500">
      <span class="px-3 py-1 bg-slate-100 rounded-full">11236026@ntub.edu.tw</span>
      <span class="px-3 py-1 bg-slate-100 rounded-full">Taipei, Taiwan</span>
    </div>
  </section>
</template>

<script setup>
// 一樣在 script 引入語系變數
import { currentLang, dict } from '../i18n.js';
</script>