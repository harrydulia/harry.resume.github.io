<template>
  <!-- 💡 使用 showHighlight 判斷寬度 -->
  <section id="skills" 
           :class="showHighlight ? 'md:col-span-2' : 'md:col-span-4'"
           class="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 flex flex-col justify-center hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-500">
    
    <h3 class="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
      💻 {{ dict[currentLang].skills.title }}
    </h3>
    
    <div class="flex flex-wrap gap-3">
      <div v-for="skill in skills" :key="skill.name" 
           class="group/skill flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-600 px-4 py-2 rounded-xl hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 cursor-default">
        <Icon :icon="skill.icon" class="text-lg group-hover/skill:scale-110 transition-transform duration-300" />
        <span class="text-xs font-bold">{{ skill.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue'; 
// ✅ 確保 i18n.js 的引入只有這一行
import { currentLang, dict, showHighlight } from '../i18n.js';

const skills = ref([
  // 基礎語言與最佳化
  { name: 'Python', icon: 'logos:python' },
  { name: 'Gurobi', icon: 'simple-icons:gurobi' },
  { name: 'SQL', icon: 'mdi:database' },
  { name: 'Relational Algebra', icon: 'mdi:math-compass' },
  

  { name: 'Pandas', icon: 'simple-icons:pandas' },
  { name: 'NumPy', icon: 'simple-icons:numpy' },
  { name: 'Jupyter', icon: 'logos:jupyter' },
  { name: 'OpenCV', icon: 'logos:opencv' },
  { name: 'TensorFlow', icon: 'logos:tensorflow' },
  { name: 'PyTorch', icon: 'logos:pytorch-icon' },
  
  // 網頁與全端開發
  { name: 'Flutter', icon: 'logos:flutter' },
  { name: 'Vue 3', icon: 'logos:vue' },
  { name: 'Laravel', icon: 'logos:laravel' },
  { name: 'PHP', icon: 'logos:php' },
  { name: 'MySQL', icon: 'logos:mysql' },
  { name: 'XAMPP', icon: 'logos:xampp' }
]);
</script>