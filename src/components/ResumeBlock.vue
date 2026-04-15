<template>
  <section id="resume" class="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-500">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 h-full relative">
      <div class="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-slate-100 -translate-x-1/2"></div>
      
      <div class="flex flex-col">
        <div class="mb-10">
          <h3 class="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">🎓 {{ dict[currentLang].resume.eduTitle }}</h3>
          <div class="space-y-6">
            <div v-for="(edu, index) in dict[currentLang].resume.education" :key="index" class="relative pl-4 border-l-2 border-blue-200">
              <div class="absolute w-2 h-2 bg-blue-600 rounded-full -left-[5px] top-1.5"></div>
              <h4 class="font-bold text-slate-800 text-sm leading-tight">{{ edu.title }}</h4>
              <p class="text-xs text-blue-700 mt-1">{{ edu.org }}</p>
              <p class="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-wider">{{ edu.date }}</p>
            </div>
          </div>
        </div>

        <div class="mt-auto border-t border-slate-50 pt-8">
          <h3 class="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 ">📜 {{ dict[currentLang].resume.certTitle }}</h3>
          <div class="grid grid-cols-1 gap-4">
            <div v-for="(cert, index) in dict[currentLang].resume.certs" :key="index" class="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center group/item hover:bg-blue-50 transition-colors">
              <div>
                <h4 class="text-[11px] font-bold text-slate-700 group-hover/item:text-blue-700 whitespace-pre-line">{{ cert.name }}</h4>
                <p class="text-[9px] text-slate-400 mt-0.5">{{ cert.issuer }}</p>
              </div>
              <div class="text-blue-300 opacity-0 group-hover/item:opacity-100 transition-opacity">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.3 1.241.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">💼 {{ dict[currentLang].resume.expTitle }}</h3>
        <div class="space-y-6 pr-2">
          <div v-for="(exp, index) in dict[currentLang].resume.experience" :key="index" class="relative pl-4 border-l-2 border-slate-100 hover:border-slate-300 transition-colors">
            <div class="absolute w-2 h-2 bg-slate-400 rounded-full -left-[5px] top-1.5"></div>
            <h4 class="font-bold text-slate-800 text-sm leading-tight pr-2">{{ exp.title }}</h4>
            <p class="text-[10px] text-blue-600 mt-1 font-medium">{{ exp.id }}</p>
            <p class="text-[10px] text-slate-400 mt-0.5 font-mono tracking-widest">{{ exp.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { currentLang, dict } from '../i18n.js';
</script>