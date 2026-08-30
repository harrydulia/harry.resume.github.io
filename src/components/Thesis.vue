<template>
  <section id="thesis" class="md:col-span-4">
    <div class="mt-16 bg-white rounded-[2.5rem] shadow-sm border border-slate-200 p-8 lg:p-12">
        <h3 class="text-2xl font-extrabold text-slate-800 mb-8 flex items-center gap-2">
            ✏️ {{ dict[currentLang]?.thesis?.title }}
        </h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <!-- 左側：論文資訊與摘要 -->
            <div class="flex flex-col gap-6">
        <h4 class="text-xl lg:text-3xl font-bold text-slate-900 leading-tight flex flex-col gap-2">
            <span>{{ dict[currentLang]?.thesis?.paperTitle }}</span>
                        
                        
            <span v-if="dict[currentLang]?.thesis?.entitle" 
            class="text-sm lg:text-base font-medium text-slate-500 tracking-wide font-serif">
            {{ dict[currentLang]?.thesis?.entitle }}
            </span>
         </h4>
            
            <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col gap-3 text-slate-600 font-medium">
                <div class="flex items-center gap-2"><Icon icon="ph:chalkboard-teacher-fill" class="text-blue-500 text-lg"/> {{ dict[currentLang]?.thesis?.info?.advisor }}</div>
                <div class="flex items-center gap-2"><Icon icon="ph:calendar-blank-fill" class="text-blue-500 text-lg"/> {{ dict[currentLang]?.thesis?.info?.date }}</div>
                <div class="flex items-center gap-2"><Icon icon="ph:users-three-fill" class="text-blue-500 text-lg"/> {{ dict[currentLang]?.thesis?.info?.committee }}</div>
            </div>

            <div class="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
                <strong class="text-slate-800">Abstract:</strong><br>
                {{ dict[currentLang]?.thesis?.abstract }}
            </div>
            
            <div class="text-blue-500 font-bold text-sm animate-pulse mt-2">
                {{ dict[currentLang]?.thesis?.readMore }}
            </div>
            </div>

            <!-- 右側：CSS 3D 翻書效果 -->
            <div class="flex justify-center perspective-[1500px]">
            <!-- 書本容器 -->
            <div class="relative w-[280px] h-[400px] md:w-[320px] md:h-[450px] book-container shadow-2xl transition-transform duration-700" 
                @click="flipNextPage">
                
                <!-- 底層：封底 (右側固定) -->
                <div class="absolute inset-0 bg-slate-200 rounded-r-lg border-l border-slate-300"></div>

                <!-- 動態生成的頁面 -->
                <!-- z-index 計算確保第一頁在最上面，且翻過去後層級改變 -->
                <div v-for="(pageImg, index) in thesisPages" :key="index"
                    class="absolute inset-0 origin-left transition-transform duration-700 ease-in-out preserve-3d"
                    :class="{ 'flipped': currentPage > index }"
                    :style="{ zIndex: thesisPages.length - index }">
                
                <!-- 正面 (右頁) -->
                <div class="absolute inset-0 backface-hidden bg-white rounded-r-lg border border-slate-200 shadow-inner overflow-hidden">
                    <img :src="pageImg" class="w-full h-full object-cover" alt="Thesis Page">
                    <!-- 書脊陰影 -->
                    <div class="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/20 to-transparent"></div>
                </div>

                <!-- 背面 (左頁，翻過去後看到的那面) -->
                <div class="absolute inset-0 backface-hidden bg-slate-50 rounded-l-lg border border-slate-200 shadow-inner overflow-hidden rotate-y-180">
                    <!-- 這裡可以放下一頁的圖，或者留白。為了簡單，背面放淡化的背景或假字 -->
                    <div class="w-full h-full flex items-center justify-center text-slate-300 font-serif">
                    Page {{ index * 2 + 2 }}
                    </div>
                    <div class="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/10 to-transparent"></div>
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
import { Icon } from '@iconify/vue';
import { currentLang, dict } from '../i18n.js';

const thesisPages = ref([
  './thesis/1.png',      // 封面
  './thesis/2.png',   // 審定書
  './thesis/3.png',  // 摘要
  './thesis/4.png',   // 英文摘要
  './thesis/5.png',   // 致謝
  './thesis/6.png'   // 無違反學術倫理
]);

// 記錄目前翻到了第幾頁 (0 代表封面)
const currentPage = ref(0);

// 點擊書本時觸發翻頁
const flipNextPage = () => {
  if (currentPage.value < thesisPages.value.length) {
    // 翻下一頁
    currentPage.value++;
  } else {
    // 如果已經翻到底了，點擊就合上書本 (回到封面)
    currentPage.value = 0;
  }
};
</script>

<style scoped>
/* 設定 3D 視角深度 */
.perspective-\[1500px\] {
  perspective: 1500px;
}

/* 保持 3D 空間，讓正背面元素能正確渲染 */
.preserve-3d {
  transform-style: preserve-3d;
}

/* 隱藏元素轉到背面時的內容 */
.backface-hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* 翻頁的旋轉動作 (-180度代表翻到左邊去) */
.flipped {
  transform: rotateY(-180deg);
}

/* 翻到左邊後的 Y 軸翻轉，這樣背面內容才不會是鏡像反轉的 */
.rotate-y-180 {
  transform: rotateY(180deg);
}

/* 滑鼠移到書本上時稍微上浮，增加互動感 */
.book-container:hover {
  transform: translateY(-5px);
  cursor: pointer;
}
</style>