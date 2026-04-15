<template>
  <footer class="flex flex-col items-center justify-center pb-16 gap-4 text-slate-400">
    <div class="group cursor-pointer">
      <img src="/H RRY (5g).png" alt="Harry Logo" class="h-10 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0">
    </div>
    <div class="text-center text-[10px] tracking-[0.2em] uppercase font-medium">
      ©Harry Wu
    </div>
  </footer>
</template>
<script setup>
// 引入我們剛剛寫好的語系設定檔
import { currentLang, toggleLang, dict } from '../i18n.js';
</script>