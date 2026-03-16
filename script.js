const questions = [
  { id: 1, category: "Getting to Know You", question: "First things first — how would you describe your cricket journey so far?", options: ["Just getting started — I'm brand new to cricket", "I've played casually with friends or in school", "I play regularly at a competitive club level", "I'm a seasoned player with years of serious experience"] },
  { id: 2, category: "Getting to Know You", question: "How many years have you been playing cricket?", options: ["Less than 1 year", "1–3 years", "3–7 years", "7+ years"] },
  { id: 3, category: "Your Playing Identity", question: "When you step onto the field, what role feels most like you?", options: ["Batsman — I live for runs", "Bowler — I love taking wickets", "All-rounder — I do it all", "Wicket-keeper — the gloves are my home"] },
  { id: 4, category: "Your Playing Identity", question: "Which batting style feels natural to you?", options: ["Right-handed batsman", "Left-handed batsman", "I'm comfortable with both", "I'm still figuring it out"] },
  { id: 5, category: "Your Playing Identity", question: "If you bowl, what's your style?", options: ["Fast bowling — pace and aggression", "Medium pace — swing and seam", "Spin bowling — flight and turn", "I don't bowl much, I focus on batting"] },
  { id: 6, category: "Your Playing Identity", question: "Where do you prefer to bat in the order?", options: ["Opening — I set the tone", "Top order (3–4) — I anchor the innings", "Middle order (5–6) — I adapt to situations", "Lower order (7+) — I finish or support"] },
  { id: 7, category: "Your Playing Identity", question: "Which cricket format excites you the most?", options: ["T20 — explosive and fast-paced", "ODI — the perfect balance", "Test cricket — patience, grit, and glory", "I love all formats equally"] },
  { id: 8, category: "Your Personality", question: "How would you describe your playing temperament?", options: ["Aggressive — I attack from ball one", "Defensive — I value patience and survival", "Strategic — I read the game and adapt", "Instinctive — I go with my gut feeling"] },
  { id: 9, category: "Your Personality", question: "When you're under pressure during a match, what goes through your mind?", options: ["I thrive — pressure brings out my best", "I stay calm and focus on the process", "I get nervous but push through it", "I tend to overthink and it affects my game"] },
  { id: 10, category: "Your Personality", question: "After a poor performance, how do you typically respond?", options: ["I analyze what went wrong and fix it immediately", "I take some time to reset mentally, then come back stronger", "I talk it through with teammates or a coach", "It stays with me for a while — I need to work on bouncing back"] },
  { id: 11, category: "Goals & Dreams", question: "What's your biggest cricket goal right now?", options: ["Make it to a competitive team or academy", "Improve specific skills (batting, bowling, fielding)", "Build match fitness and consistency", "Just enjoy the game and have fun"] },
  { id: 12, category: "Goals & Dreams", question: "Where do you see your cricket in the next 2 years?", options: ["Playing at district or state level", "Representing my club at a higher division", "Becoming a well-rounded player", "I'm not sure yet — I'm open to wherever this takes me"] },
  { id: 13, category: "Goals & Dreams", question: "What does 'success' in cricket mean to you personally?", options: ["Winning trophies and titles", "Consistently performing at my best", "Being respected by teammates and opponents", "Mastering the craft and loving every session"] },
  { id: 14, category: "Training Style", question: "How often do you currently train or practice?", options: ["Almost every day — cricket is my life", "3–5 times a week", "1–2 times a week", "Rarely — I want to start training more"] },
  { id: 15, category: "Training Style", question: "What time of day works best for your training?", options: ["Early morning — I love the fresh start", "Afternoon — when the energy is high", "Evening — after school or work", "I'm flexible — whenever I get a chance"] },
  { id: 16, category: "Training Style", question: "Do you prefer training alone or with others?", options: ["Solo — I focus better on my own", "With a partner — we push each other", "In a group or team setting", "A mix of everything depending on the session"] },
  { id: 17, category: "Training Style", question: "How do you usually learn new skills?", options: ["Watching videos and tutorials", "Working directly with a coach", "Trial and error during practice", "Studying professional players and mimicking them"] },
  { id: 18, category: "Skills & Improvement", question: "Which area of your game needs the most work right now?", options: ["Batting technique and shot selection", "Bowling accuracy and variations", "Fielding, catching, and ground work", "Mental toughness and match awareness"] },
  { id: 19, category: "Skills & Improvement", question: "As a batsman, which shot do you struggle with the most?", options: ["Playing short-pitched deliveries", "Driving through the covers", "Sweep and reverse sweep", "Playing spin bowling confidently"] },
  { id: 20, category: "Skills & Improvement", question: "What's your biggest strength on the cricket field?", options: ["Power hitting and big shots", "Consistency and building innings", "Reading the game and making smart decisions", "Athleticism and energy in the field"] },
  { id: 21, category: "Mental Game", question: "How important is the mental side of cricket to you?", options: ["Extremely — it's what separates good from great", "Very important — I'm actively working on it", "Somewhat — I know I should focus more on it", "I haven't thought much about it yet"] },
  { id: 22, category: "Mental Game", question: "Do you practice any form of mental preparation before a match?", options: ["Yes — visualization, breathing, or meditation", "I have a pre-match routine that helps me focus", "Sometimes, but not consistently", "No — I'd love to learn how"] },
  { id: 23, category: "Mental Game", question: "How do you handle sledging or distractions on the field?", options: ["I stay completely focused — nothing gets to me", "I use it as fuel to perform better", "It bothers me sometimes but I manage", "It really affects my concentration"] },
  { id: 24, category: "Fitness & Body", question: "How would you rate your current fitness level?", options: ["Very fit — I train my body regularly", "Decent — I can keep up but want to improve", "Needs work — I get tired quickly on the field", "I haven't focused on fitness yet"] },
  { id: 25, category: "Fitness & Body", question: "Do you follow any specific fitness or diet plan for cricket?", options: ["Yes — structured fitness and nutrition plan", "I work out but don't follow a strict plan", "I eat well but don't exercise specifically for cricket", "Not yet — I'd like guidance on this"] },
  { id: 26, category: "Technology & Analysis", question: "How comfortable are you with using technology in your training?", options: ["Very — I already use apps, video analysis, and data", "Somewhat — I'm open to learning more", "Not much — but I'm curious about it", "This is all new to me"] },
  { id: 27, category: "Technology & Analysis", question: "Would you like SmartCrick AI to analyze your match videos?", options: ["Absolutely — that's exactly what I need", "Yes, if it's easy to use", "Maybe later, once I'm more comfortable", "I'd prefer to focus on drills and practice plans first"] },
  { id: 28, category: "Coaching & Support", question: "Do you currently work with a coach?", options: ["Yes — I have a dedicated personal coach", "I attend coaching sessions at a club or academy", "I've had coaches before but not currently", "I've never had formal coaching"] },
  { id: 29, category: "Coaching & Support", question: "What kind of coaching style works best for you?", options: ["Structured and disciplined — tell me exactly what to do", "Encouraging and supportive — build my confidence", "Analytical — show me data and let me understand why", "Flexible — adapt to how I'm feeling that day"] },
  { id: 30, category: "Inspiration", question: "Which cricketing legend inspires you the most?", options: ["Virat Kohli — passion, aggression, and elite fitness", "MS Dhoni — calm under pressure, the ultimate finisher", "Sachin Tendulkar — mastery, dedication, and grace", "Someone else — I have my own cricketing hero"] },
  { id: 31, category: "Inspiration", question: "What motivates you to keep training even on tough days?", options: ["The dream of playing at the highest level", "The love of the game — cricket is my passion", "My teammates and the people who believe in me", "Proving to myself that I can keep getting better"] },
  { id: 32, category: "Your SmartCrick Journey", question: "What feature of SmartCrick AI excites you the most?", options: ["AI-powered training plans personalized to me", "Video analysis and performance tracking", "Mental conditioning and match preparation", "All of it — I want the complete experience"] },
  { id: 33, category: "Your SmartCrick Journey", question: "How often would you like SmartCrick AI to check in with you?", options: ["Daily — keep me accountable every day", "A few times a week — regular but not overwhelming", "Weekly — a solid summary and plan each week", "I'll check in when I feel like it"] },
  { id: 34, category: "Your SmartCrick Journey", question: "Last one — what word best describes the cricketer you want to become?", options: ["Fearless", "Consistent", "Intelligent", "Unstoppable"] }
];

// App State
let phase = "welcome"; 
let qIndex = 0;
let answers = {};
let isMuted = true;
let musicStarted = false;

// DOM Elements
const appContainer = document.getElementById("app-container");
const bgMusic = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-btn");
const speakerIcon = document.getElementById("speaker-icon");
const LOGO_URL = "https://ucarecdn.com/524955bb-11c6-4b20-a6cf-974403ad7456/-/format/auto/";
const TOTAL = questions.length;

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function updateSpeakerIcon() {
  if (isMuted) {
    speakerIcon.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4A6259" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
  } else {
    speakerIcon.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4A6259" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
  }
}

muteBtn.addEventListener("click", () => {
  if (isMuted) {
    bgMusic.volume = 0.15;
    if (!musicStarted) {
      bgMusic.play().catch(e => console.log("Audio play prevented"));
      musicStarted = true;
    } else {
      bgMusic.muted = false;
    }
    isMuted = false;
  } else {
    bgMusic.muted = true;
    isMuted = true;
  }
  updateSpeakerIcon();
});

function startMusic() {
  if (!musicStarted) {
    bgMusic.volume = 0.15;
    bgMusic.play().then(() => {
      musicStarted = true;
      isMuted = false;
      updateSpeakerIcon();
    }).catch(e => console.log("Autoplay prevented"));
  }
}

function fadeTransition(callback) {
  appContainer.classList.remove("fade-in");
  appContainer.classList.add("fade-out");
  // Increased delay for a smoother, slower fade transition (Tiimo vibe)
  setTimeout(() => {
    callback();
    appContainer.classList.remove("fade-out");
    appContainer.classList.add("fade-in");
  }, 600);
}

function render() {
  if (phase === "welcome") {
    appContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center text-center max-w-2xl w-full pb-16">
        <div class="mb-10 animate-pulse-custom">
          <img src="${LOGO_URL}" alt="SmartCrick AI" class="w-36 h-36 md:w-48 md:h-48 object-contain rounded-3xl" style="filter: drop-shadow(0 15px 40px rgba(107,144,128,0.25));" />
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight" style="color: #1A2E24;">Welcome to SmartCrick AI</h1>
        <p class="text-xl md:text-2xl mb-4 font-bold tracking-wide" style="color: #4A6259;">${getGreeting()}! Hey, Champ</p>
        <p class="text-lg md:text-xl mb-12 leading-relaxed font-medium" style="color: #6B9080; max-width: 80%;">Let's start your cricket experience. We'll ask you a few thoughtful questions to personalize your training journey.</p>
        <button id="begin-btn" class="px-14 py-4 rounded-full text-white font-bold text-lg md:text-xl tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer" style="background: linear-gradient(135deg, #4A6259, #6B9080); box-shadow: 0 12px 36px rgba(107,144,128,0.4);">Begin</button>
      </div>
    `;
    document.getElementById("begin-btn").addEventListener("click", () => {
      startMusic();
      fadeTransition(() => { phase = "quiz"; render(); });
    });
  } 
  
  else if (phase === "quiz") {
    const q = questions[qIndex];
    const progress = ((qIndex + 1) / TOTAL) * 100;
    const selected = answers[qIndex];

    let optionsHtml = q.options.map((opt, idx) => {
      const picked = selected === idx;
      const bg = picked ? "linear-gradient(135deg, rgba(107,144,128,0.2), rgba(167,196,188,0.25))" : "rgba(255,255,255,0.85)";
      const border = picked ? "3px solid #4A6259" : "3px solid transparent";
      const color = picked ? "#1A2E24" : "#4A6259";
      const shadow = picked ? "0 8px 25px rgba(107,144,128,0.2)" : "0 4px 15px rgba(0,0,0,0.03)";
      const transform = picked ? "scale(1.02)" : "scale(1)";
      const checkCircleBorder = picked ? "2px solid #4A6259" : "2px solid rgba(180,210,200,0.6)";
      const checkCircleBg = picked ? "#4A6259" : "transparent";
      
      return `
        <button data-idx="${idx}" class="quiz-option w-full text-left px-6 py-5 rounded-3xl text-base md:text-lg lg:text-xl font-bold cursor-pointer" style="background: ${bg}; border: ${border}; color: ${color}; box-shadow: ${shadow}; transform: ${transform}; transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);">
          <div class="flex items-center gap-4">
            <div class="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300" style="border: ${checkCircleBorder}; background: ${checkCircleBg};">
              ${picked ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
            </div>
            <span class="leading-snug">${opt}</span>
          </div>
        </button>
      `;
    }).join("");

    appContainer.innerHTML = `
      <div class="w-full max-w-2xl mx-auto flex flex-col justify-center pb-12">
        <div class="w-full pb-10">
          <div class="w-full h-2.5 rounded-full overflow-hidden" style="background: rgba(180,210,200,0.3);">
            <div class="h-full rounded-full" style="width: ${progress}%; background: linear-gradient(90deg, #6B9080, #4A6259); transition: width 1s cubic-bezier(0.25, 0.8, 0.25, 1);"></div>
          </div>
          <div class="flex justify-between mt-3 px-1">
            <span class="text-sm tracking-widest font-bold uppercase" style="color: #6B9080;">${q.category}</span>
            <span class="text-sm font-bold" style="color: #6B9080;">${qIndex + 1} / ${TOTAL}</span>
          </div>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-10 leading-tight tracking-tight px-2" style="color: #1A2E24;">${q.question}</h2>
        <div class="flex flex-col gap-4 px-2">
          ${optionsHtml}
        </div>
        
        <div class="flex items-center justify-start mt-10 px-2" style="${qIndex === 0 ? 'visibility: hidden;' : ''}">
          <button id="back-btn" class="flex items-center gap-2 px-6 py-3 rounded-full text-base font-bold transition-all duration-300 hover:bg-white/40 cursor-pointer" style="color: #6B9080;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg> Back
          </button>
        </div>
      </div>
    `;

    // Handle Option Click (Auto-Advance logic)
    document.querySelectorAll(".quiz-option").forEach(btn => {
      btn.addEventListener("click", (e) => {
        // Prevent double clicking while animating
        document.querySelectorAll(".quiz-option").forEach(b => b.style.pointerEvents = "none");
        if(document.getElementById("back-btn")) document.getElementById("back-btn").style.pointerEvents = "none";
        
        answers[qIndex] = parseInt(e.currentTarget.getAttribute("data-idx"));
        render(); // Instantly update UI to show selection (green border/checkmark)
        
        // Wait 450ms for the user to register their selection, then fade out
        setTimeout(() => {
          if (qIndex < TOTAL - 1) {
            fadeTransition(() => { qIndex++; render(); });
          } else {
            fadeTransition(() => { phase = "done"; render(); });
          }
        }, 450);
      });
    });

    // Handle Back Click
    if(document.getElementById("back-btn")) {
      document.getElementById("back-btn").addEventListener("click", () => {
        if (qIndex > 0) { 
          fadeTransition(() => { qIndex--; render(); }); 
        }
      });
    }
  } 
  
  else if (phase === "done") {
    appContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center text-center max-w-2xl w-full pb-16">
        <div class="mb-8 animate-pulse-custom">
          <img src="${LOGO_URL}" alt="SmartCrick AI" class="w-32 h-32 md:w-44 md:h-44 object-contain rounded-3xl" style="filter: drop-shadow(0 15px 40px rgba(107,144,128,0.25));" />
        </div>
        <div class="w-20 h-20 rounded-full flex items-center justify-center mb-8 animate-pulse-fast" style="background: linear-gradient(135deg, #4A6259, #6B9080); box-shadow: 0 10px 35px rgba(107,144,128,0.4);">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h2 class="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight" style="color: #1A2E24;">You're all set, Champ!</h2>
        <p class="text-lg md:text-xl mb-4 leading-relaxed font-bold" style="color: #4A6259;">We've crafted a personalized training experience just for you. Your cricket journey with SmartCrick AI starts now.</p>
        <p class="text-base md:text-lg font-bold mb-12 leading-relaxed" style="color: #6B9080;">Are you ready to unlock the best training app of your entire life?</p>
        <a href="https://smartcricai.base44.app" class="px-14 py-4 rounded-full text-white font-extrabold text-lg md:text-xl tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 inline-block cursor-pointer" style="background: linear-gradient(135deg, #4A6259, #6B9080); box-shadow: 0 15px 45px rgba(107,144,128,0.4); text-decoration: none;">Start Training</a>
      </div>
    `;
  }
}

updateSpeakerIcon();
render();
