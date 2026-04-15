<template>
  <div class="min-h-screen bg-slate-100 font-sans text-slate-800 scroll-smooth">
    
    <NavBar />

    <main class="pt-24 pb-12 px-4 md:px-8">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
        
        <AboutBlock />
        <HighlightBlock />
        <ResumeBlock />
        <SkillsBlock />
        <ProjectList />

      </div>
    </main>
    
    <FooterBlock />

  </div>
</template>

<script setup>
// 將剛剛建立的所有組件引入
import NavBar from './components/NavBar.vue';
import AboutBlock from './components/AboutBlock.vue';
import HighlightBlock from './components/HighlightBlock.vue';
import ResumeBlock from './components/ResumeBlock.vue';
import SkillsBlock from './components/SkillsBlock.vue';
import ProjectList from './components/ProjectList.vue';
import FooterBlock from './components/FooterBlock.vue';
</script>

<style>
/* 保持全域樣式，確保描點捲動功能正常 */
section {
  scroll-margin-top: 6rem;
}
html {
  scroll-behavior: smooth;
}
</style>