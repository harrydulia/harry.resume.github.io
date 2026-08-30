<template>
  <section id="projects" class="md:col-span-4 mt-8">
    <h3 class="text-2xl font-extrabold text-slate-800 mb-8 flex items-center gap-2 pl-2">
      🚀 {{ dict[currentLang].projects.title }}
    </h3>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div v-for="(proj, index) in dict[currentLang].projects.items" :key="index" 
           class="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-200 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-500 flex flex-col">
        
        <div class="relative h-64 md:h-80 bg-slate-900 overflow-hidden">
          <div class="absolute inset-0 flex transition-transform duration-500 ease-out"
               :style="{ transform: `translateX(-${projectMeta[index].currentIndex * 100}%)` }">
            <template v-for="(media, iIndex) in projectMeta[index].images" :key="iIndex">
              <video v-if="media.endsWith('.mp4')" :src="media" class="w-full h-full object-cover shrink-0" autoplay loop muted playsinline></video>   
              <img v-else :src="media" class="w-full h-full object-cover shrink-0" alt="Screenshot">
            </template>
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          <button @click="prevSlide(index)" class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white/40 transition-all">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button @click="nextSlide(index)" class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white/40 transition-all">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <span v-for="(_, iIndex) in projectMeta[index].images" :key="iIndex" 
                  @click="projectMeta[index].currentIndex = iIndex" 
                  class="w-2 h-2 rounded-full cursor-pointer transition-all" 
                  :class="projectMeta[index].currentIndex === iIndex ? 'bg-white w-6' : 'bg-white/40'"></span>
          </div>

          <div class="absolute top-4 left-6 flex gap-2">
            <span class="px-3 py-1 bg-blue-600/90 text-white text-[10px] font-bold rounded-lg backdrop-blur-sm">{{ proj.type }}</span>
            <span class="px-3 py-1 bg-black/50 text-white text-[10px] font-bold rounded-lg backdrop-blur-sm">{{ projectMeta[index].date }}</span>
          </div>
        </div>

        <div class="p-8 flex flex-col flex-grow">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-2xl font-bold text-slate-900">{{ proj.name }}</h4>
            <div class="flex gap-3">
              <a v-for="link in projectMeta[index].links" :key="link.label" :href="link.url" target="_blank" class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                <span>{{ link.icon }}</span>
              </a>
            </div>
          </div>

          <p class="text-slate-600 text-sm leading-relaxed mb-6">{{ proj.desc }}</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            <div v-for="feature in proj.features" :key="feature" class="flex items-start gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <svg class="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              {{ feature }}
            </div>
          </div>

          <div class="mt-auto pt-6 border-t border-slate-100">
            <div class="flex flex-wrap gap-2">
              <div v-for="tech in projectMeta[index].techStack" :key="tech.name" 
                   class="flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors">
                <Icon :icon="tech.icon" class="text-sm" />
                {{ tech.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { currentLang, dict } from '../i18n.js';
import { Icon } from '@iconify/vue'; // 引入 Icon 組件
// 存放靜態資源與狀態的資料 (Meta Data)
const projectMeta = ref([
  {
    currentIndex: 0,
    date: '2022.12',
    images: ['./topic/ntub110/The New Me logo.png', './topic/ntub110/ntub110.mp4'],
    techStack: [
      { name: '', icon: 'logos:flutter' },
      { name: '', icon: 'logos:laravel' },
      { name: '', icon: 'logos:mysql' },
      { name: '', icon: 'logos:sqlite' },
      { name: '', icon: 'logos:php' },
      { name: 'AJAX', icon: 'mdi:sync' },
      { name: '', icon: 'logos:xampp' }
    ],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/tw/app/thenewme/id6444411370', icon: '📱' },
      { label: 'Web', url: 'http://thenewme.com.tw/thenewme/index.html', icon: '🌐' }
    ]
  },
  {
    currentIndex: 0,
    date: '2020.12',
    images: [
    './topic/ukn109/logo icon2.png', 
    './topic/ukn109/w1.png',
    './topic/ukn109/w2.png',
    './topic/ukn109/w3.png',
    './topic/ukn109/w4.png',
    './topic/ukn109/w5.png',
    './topic/ukn109/w6.png',
    './topic/ukn109/w7.png',
    './topic/ukn109/w8.png',
    './topic/ukn109/w9.png',
    './topic/ukn109/w10.png',
    './topic/ukn109/w11.png',
    './topic/ukn109/w12.png',
    './topic/ukn109/w13.png',
    './topic/ukn109/w14.png',
    './topic/ukn109/w15.png',
    './topic/ukn109/w16.png'  
    ],
    techStack: [
      { name: '', icon: 'logos:php' },
      { name: '', icon: 'logos:mysql' },
      { name: '', icon: 'logos:html-5' },
      { name: '', icon: 'logos:bootstrap' },
      { name: '', icon: 'logos:jquery' },
      { name: 'AJAX', icon: 'mdi:sync' },
      { name: '', icon: 'logos:xampp' }
    ],
    links: [
      { label: 'Web', url: 'http://mysql.im.ukn.edu.tw/~classTA/', icon: '💻' }
    ]
  }
]);

const nextSlide = (index) => {
  const meta = projectMeta.value[index];
  meta.currentIndex = (meta.currentIndex + 1) % meta.images.length;
};

const prevSlide = (index) => {
  const meta = projectMeta.value[index];
  meta.currentIndex = (meta.currentIndex - 1 + meta.images.length) % meta.images.length;
};

</script>
