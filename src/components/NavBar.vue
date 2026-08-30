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
        <a href="#thesis" class="hover:text-blue-600 transition-colors">{{ dict[currentLang].nav.thesis }}</a>
        
        <button @click="toggleLang" 
                class="ml-2 px-3 py-1 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 rounded-full transition-all font-bold text-xs shadow-sm border border-slate-200">
          {{ dict[currentLang].nav.btnText }}
        </button>
      </div>

      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-blue-600 font-bold p-2">
        {{ isMobileMenuOpen ? 'Close' : 'Menu' }}
      </button>
    </div>

    <div v-show="isMobileMenuOpen" class="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xl flex flex-col items-center py-6 gap-6 text-base font-medium transition-all">
      <a href="#about" @click="closeMobileMenu" class="hover:text-blue-600 transition-colors">{{ dict[currentLang].nav.about }}</a>
      <a href="#resume" @click="closeMobileMenu" class="hover:text-blue-600 transition-colors">{{ dict[currentLang].nav.resume }}</a>
      <a href="#skills" @click="closeMobileMenu" class="hover:text-blue-600 transition-colors">{{ dict[currentLang].nav.skills }}</a>
      <a href="#projects" @click="closeMobileMenu" class="hover:text-blue-600 transition-colors">{{ dict[currentLang].nav.projects }}</a>
      
      <button @click="() => { toggleLang(); closeMobileMenu(); }" 
              class="px-6 py-2 mt-2 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 rounded-full transition-all font-bold text-sm shadow-sm border border-slate-200">
        {{ dict[currentLang].nav.btnText }}
      </button>
    </div>
  </nav>
</template>

<script setup>
// 新增引入 vue 內建的 ref 功能
import { ref } from 'vue';
import { currentLang, toggleLang, dict } from '../i18n.js';

// 1. 建立一個響應式變數，負責記錄「手機選單是否打開」，預設是 false (關閉)
const isMobileMenuOpen = ref(false);

// 2. 建立一個函數，用來把選單關起來 (點擊連結後使用)
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>