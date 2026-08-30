// src/i18n.js
import { ref } from 'vue';

export const currentLang = ref('zh');
export const showHighlight = ref(false); // 控制 HighlightBlock 顯示與否與區塊配置
export const toggleLang = () => {
  currentLang.value = currentLang.value === 'zh' ? 'en' : 'zh';
};

export const dict = {
  zh: {
    nav: { 
      about: '關於', 
      resume: '學經歷', 
      skills: '技能', 
      projects: '作品',
      thesis: '論文',
      btnText: 'EN'
    },
    about: {
      role: '研究生 / 最佳化工程 / 投資組合',
      desc1: '我是吳柏霖，生於雲林縣，父母從小不侷限我的發展，只叮囑我做任何事情要用認真負責的態度。',
      desc2: '在資訊科技浪潮下，我選擇了資訊管理作為我的專業領域，父母也鼓勵我要在這個時代不斷學習、與時俱進，大學時期，我紮實地建立了例如：資料庫、程式設計、計算機網路等核心知識；進入資管系人工智慧研究所後，更是我專業能力躍升的關鍵時期，目前正如火如荼在碩士論文的研究過程，在這其中，我培養了扎實的獨立研究能力，從界定問題、蒐集與分析國外文獻、設計研究方法，到寫Python來執行我的實驗，每一步過程讓我學會如何面對一個複雜且無標準答案的問題，並有系統地拆解、執行，盡可能的在最終提出有效的解決方案。',
      desc3: '最後，我期望在這個資訊爆炸、AI快速成長的世代，能夠不斷學習、與時俱進。',
      location: '台灣，台北'
    },
    highlight: {
      tag: 'Upcoming in Vienna',
      title: 'IFORS 2026 國際會議',
      desc: '將於奧地利發表論文：',
      topic: '"Omega-based Stochastic Dominance for Portfolio Selection"'
    },
    resume: {
      eduTitle: '學歷',
      certTitle: '證照',
      expTitle: '經歷',
      education: [
        { title: '國立臺北商業大學', org: '人工智慧與商業應用研究所', date: '2023.9 - 2024.6,2025.5 - 2026.8' },
        { title: '國立臺北商業大學', org: '資訊管理系', date: '2021 - 2023' }
      ],
    certs: [
    { 
        name: '98-381 Python\n\n98-364 資料庫\n\n98-367 網路安全', 
        issuer: 'Microsoft Technology Associate' 
    },
    { 
        name: '電腦軟體應用\n乙級\n\n電腦軟體應用\n丙級\n\n電腦軟體設計\n丙級\n\n電腦硬體裝修\n丙級\n\n會計事務資訊項\n丙級', 
        issuer: '勞動部勞動力發展署技能檢定中心' 
    },
    
    { 
        name: 'Google Analytics\nAdvanced\n\nGoogle Analytics\nBasic', 
        issuer: 'Google' 
    }
    ],
      experience: [
        { title: '第24屆國際作業研究學會聯合會會議(IFORS2026)', id: '發表者', date: '2026.7.12 - 2026.07.17' },
        { title: '國立臺北商業大學資管系', id: '國科會計畫研究生', date: '2025.12 - 2026.07' },
        { title: '資料庫管理', id: '課程助教', date: '2025.09 - 2026.07' },
        { title: 'IMP 資訊管理實務研討會', id: '工作人員', date: '2023.12.09' },
        { title: '第二屆保誠創新智造所黑客松', id: '組員', date: '2023.03.04 - 2023.03.05' },
        { title: '大專生證券菁英種子線上培育營', id: '組員', date: '2022.10.03' },
        { title: '台北市立永吉國中 EV3 機器人社團', id: '課程助教', date: '2020.09 - 2021.05' },
        { title: '新光醫院資訊部', id: '實習生', date: '2020.03 - 2020.07' }
      ]
    },
    skills: {
      title: '技能'
    },
    projects: {
      title: '系統開發專案',
      items: [
        {
          name: 'The New Me 情緒管理 App',
          type: '二技專題',
          desc: '結合跨平台開發與情緒管理分析的輔導 App，協助心理諮商師與家長掌握學童心理狀態。',
          features: ['介面附注音與語音朗讀', '內建心情日記與小遊戲', 'iOS/Android 跨平台開發', '後台數據同步管理']
        },
        {
          name: '輔導課管理系統',
          type: '五專專題',
          desc: '取代紙本紀錄，提供系主任與教師線上管理 TA 績效與自動產出證明之系統。',
          features: ['去紙本化系統管理', '統計課程與 TA 績效', '掌握課程運作情形', '自動產出證明 PDF']
        }
      ]
    },
    thesis: {
      title: '學位論文',
      info: {
              advisor: '指導教授：李文毅 博士',
              date: '口試日期：2026 年 06 月 23 日',
              committee: '口試委員：謝宗翰 博士、葉英傑 博士、李文毅 博士',
            },
            paperTitle: '基於Omega隨機優勢的投資組合選擇',
            entitle:'Omega-based Stochastic Dominance for Portfolio Selection',
            abstract: '傳統二階隨機優勢模型(Second-order Stochastic Dominance, SSD) 通常要求投資組合在所有報酬率水準下，其累積分配函數(Cumulative Distribution Function, CDF)皆低於基準指標之CDF，以確保其符合風險趨避投資人的偏好。然而，此條件相對嚴格，容易使投資組合配置過於保守，進而限制投資人獲取潛在超額報酬的機會。為改善上述限制，研究提出一項以Omega Ratio為基礎之隨機優勢框架，導入Omega Ratio中的門檻值(Threshold)概念，將報酬分布明確區分為上檔潛力(Upside Potential) 與下檔風險 (Downside Risk)，透過此一設計，投資人得以在有效控管下檔風險的同時，保留並主動追求較高的上檔報酬機會。研究同時引入幾乎隨機優勢(Almost Stochastic Dominance, ASD)的概念，以放寬傳統SSD對所有報酬區間皆須完全滿足優勢條件的要求。透過允許模型在特定範圍內存在有限程度的違反，幾乎隨機優勢能在維持風險趨避投資邏輯的同時，提升投資組合建構的彈性，避免因過度保守而犧牲潛在報酬機會。在計算方法上，研究採用切割平面演算法(Cutting Plane Algorithm)該方法能透過迭代方式辨識並加入關鍵限制式，避免一次性納入大量限制條件所造成的計算負擔，因而有效降低運算複雜度並提升求解效率。',
            readMore: '點擊右側翻閱論文內容'
          },
  },

  en: {
    nav: { 
      about: 'About', 
      resume: 'Resume', 
      skills: 'Skills', 
      projects: 'Projects',
      thesis: 'Thesis',
      btnText: '中'
    },
    about: {
      role: 'Graduate Researcher / Optimization / Portfolio',
      desc1: 'My name is Harry Wu, and I was born in Yunlin County. Growing up, my parents never restricted my personal development; they simply taught me to approach everything I do with a dedicated and responsible attitude.',
      desc2: "Driven by the wave of information technology, I chose Information Management as my field of expertise, encouraged by my parents to continuously learn and keep pace with the changing times. During my undergraduate studies, I built a solid foundation of core knowledge in areas such as databases, programming, and computer networks. Entering the Master's program in Artificial Intelligence within the Department of Information Management marked a critical leap in my professional capabilities. I am currently deeply engaged in my master's thesis research. Through this journey, I have cultivated robust independent research skills. From defining problems, gathering and analyzing international literature, and designing research methodologies, to writing Python code to execute my experiments—every step has taught me how to confront complex problems that have no standard answers. I have learned to systematically deconstruct these challenges, execute my plans, and ultimately propose the most effective solutions possible.",
      desc3: 'Finally,I aspire to continuously learn and evolve in this era of information explosion and rapid AI advancement.',
      location: 'Taipei, Taiwan'
    },
    highlight: {
      tag: 'Upcoming in Vienna',
      title: 'IFORS 2026 Conference',
      desc: 'Presenting research paper in Austria:',
      topic: '"Omega-based Stochastic Dominance for Portfolio Selection"'
    },
    resume: {
      eduTitle: 'Education',
      certTitle: 'Certifications',
      expTitle: 'Experience',
      education: [
        { title: 'National Taipei University of Business', org: 'M.S. in AI & Business Applications', date: '2023 - Present' },
        { title: 'National Taipei University of Business', org: 'B.B.A. in Information Management', date: '2021 - 2023' }
      ],
    certs: [
    { 
        name: '98-381 Python\n\n98-364 Database Fundamentals\n\n98-367 Security Fundamentals', 
        issuer: 'Microsoft Technology Associate' 
    },
    { 
        name: 'Computer Software Application\nLevel B\n\nComputer Software Application\nLevel C\n\nComputer Software Design\nLevel C\n\nComputer Hardware\nLevel C\n\nAccounting Info\nLevel C', 
        issuer: 'Workforce Development Agency' 
    },
    { 
        name: 'Google Analytics\nAdvanced\n\nGoogle Analytics\nBasic', 
        issuer: 'Google' 
    }
    ],
      experience: [
        { title: 'The 24th Conference of the International Federation of Operational Research Societies(IFORS2026)', id: 'Presentation', date: '2026.7.12 - 2026.07.17' },
        { title: 'Dept. of IM, NTUB', id: 'NSTC Project Research Student', date: '2025.12 - 2026.07' },
        { title: 'Database Management', id: 'Teaching Assistant', date: '2025.09 - 2026.07' },
        { title: 'IMP Conference', id: 'Staff Member', date: '2023.12.09' },
        { title: '2nd Prudential Hackathon', id: 'Team Member', date: '2023.03.04 - 2023.03.05' },
        { title: 'Securities Elite Seed Training Camp', id: 'Team Member', date: '2022.10.03' },
        { title: 'Yong-Ji Junior High School EV3 Robotics Club', id: 'Teaching Assistant', date: '2020.09 - 2021.05' },
        { title: 'Shin Kong Hospital IT Dept.', id: 'Intern', date: '2020.03 - 2020.07' }
      ]
    },
    skills: {
      title: 'Core Skills'
    },
    projects: {
      title: 'Featured Projects',
      items: [
        {
          name: 'The New Me - Emotional Management App',
          type: 'Senior Project',
          desc: 'A cross-platform app for emotional analysis, helping counselors and parents monitor children\'s mental states.',
          features: ['Bopomofo & TTS Support', 'Mood Diary & Mini-games', 'Cross-platform (iOS/Android)', 'Backend Data Sync']
        },
        {
          name: 'Teaching Assistant Management System',
          type: 'Junior Project',
          desc: 'A paperless system for managing TA performance and automatically generating certificates.',
          features: ['Paperless Records Management', 'Performance Statistics', 'Real-time Course Monitoring', 'Auto-PDF Generation']
        }
      ]
    },
    thesis: {
      title: 'Master Thesis',
      info: {
        advisor: 'Advisor: Dr. Lee, Wen-Yi',
        date: 'Date: June 23, 2026',
        committee: 'Committee: Dr. Hsieh, Chung-Han, Dr. Yeh, Ying-Chieh, Dr. Lee, Wen-Yi',
      },
      paperTitle: 'Omega-based Stochastic Dominance for Portfolio Selection',
      abstract: 'Traditional Second-order Stochastic Dominance (SSD) models typically require the cumulative distribution function (CDF) of a portfolio to remain below that of a benchmark across all return levels to ensure alignment with the preferences of risk-averse investors. However, this relatively stringent condition often leads to overly conservative portfolio allocations, thereby limiting investors opportunities to capture potential excess returns.To address these limitations, this study proposes a stochastic dominance framework based on the Omega Ratio.By incorporating the threshold concept inherent in the Omega Ratio, the framework explicitly segregates the return distribution into upside potential and downside risk. This design enables investors to effectively manage downside risk while simultaneously retaining and actively pursuing greater upside return opportunities.Furthermore, this study introduces the concept of Almost Stochastic Dominance (ASD) to relax the strict traditional SSD requirement,which mandates complete fulfillment of dominance conditions across all return intervals.By permitting limited violations within specific ranges,ASD enhances the flexibility of portfolio construction while maintaining the underlying logic of risk aversion, thereby preventing the sacrifice of potential returns due to excessive conservatism.Methodologically,this study employs the Cutting Plane Algorithm.This approach iteratively identifies and incorporates critical constraints,avoiding the computational burden associated with introducing a massive number of constraints simultaneously.Consequently,it effectively reduces computational complexity and enhances solving efficiency.',
      readMore: 'Click the book to flip pages'
    },
  }
};