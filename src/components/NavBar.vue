<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img src="/icon.png" alt="Harry Wu" class="w-8 h-10 rounded-full">
        <span class="font-bold text-xl tracking-tight text-blue-600">Harry Wu.</span>
      </div>
      
      <div class="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#about" class="hover:text-blue-600 transition-colors">{{ dict[currentLang].nav.about }}</a>
        <a href="#resume" class="hover:text-blue-600 transition-colors">{{ dict[currentLang].nav.resume }}</a>
        <a href="#skills" class="hover:text-blue-600 transition-colors">{{ dict[currentLang].nav.skills }}</a>
        <a href="#projects" class="hover:text-blue-600 transition-colors">{{ dict[currentLang].nav.projects }}</a>
        
        <button @click="toggleLang" 
                class="ml-2 px-3 py-1 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 rounded-full transition-all font-bold text-xs shadow-sm border border-slate-200">
          {{ dict[currentLang].nav.btnText }}
        </button>
      </div>

      <div class="md:hidden text-blue-600 font-bold">Menu</div>
    </div>
  </nav>
</template>

<script setup>
// 引入我們剛剛寫好的語系設定檔
import { currentLang, toggleLang, dict } from '../i18n.js';
</script>