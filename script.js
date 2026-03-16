/* ============================================================
   SmartCrick AI — Onboarding Script
   Tiimo-inspired UX: auto-advance, smooth transitions, audio
   ============================================================ */

// ── Questions Data ─────────────────────────────────────────
const questions = [
  { id: 1,  category: "Getting to Know You",    question: "First things first — how would you describe your cricket journey so far?", options: ["Just getting started — I'm brand new to cricket", "I've played casually with friends or in school", "I play regularly at a competitive club level", "I'm a seasoned player with years of serious experience"] },
  { id: 2,  category: "Getting to Know You",    question: "How many years have you been playing cricket?", options: ["Less than 1 year", "1–3 years", "3–7 years", "7+ years"] },
  { id: 3,  category: "Your Playing Identity",  question: "When you step onto the field, what role feels most like you?", options: ["Batsman — I live for runs", "Bowler — I love taking wickets", "All-rounder — I do it all", "Wicket-keeper — the gloves are my home"] },
  { id: 4,  category: "Your Playing Identity",  question: "Which batting style feels natural to you?", options: ["Right-handed batsman", "Left-handed batsman", "I'm comfortable with both", "I'm still figuring it out"] },
  { id: 5,  category: "Your Playing Identity",  question: "If you bowl, what's your style?", options: ["Fast bowling — pace and aggression", "Medium pace — swing and seam", "Spin bowling — flight and turn", "I don't bowl much, I focus on batting"] },
  { id: 6,  category: "Your Playing Identity",  question: "Where do you prefer to bat in the order?", options: ["Opening — I set the tone", "Top order (3–4) — I anchor the innings", "Middle order (5–6) — I adapt to situations", "Lower order (7+) — I finish or support"] },
  { id: 7,  category: "Your Playing Identity",  question: "Which cricket format excites you the most?", options: ["T20 — explosive and fast-paced", "ODI — the perfect balance", "Test cricket — patience, grit, and glory", "I love all formats equally"] },
  { id: 8,  category: "Your Personality",       question: "How would you describe your playing temperament?", options: ["Aggressive — I attack from ball one", "Defensive — I value patience and survival", "Strategic — I read the game and adapt", "Instinctive — I go with my gut feeling"] },
  { id: 9,  category: "Your Personality",       question: "When you're under pressure during a match, what goes through your mind?", options: ["I thrive — pressure brings out my best", "I stay calm and focus on the process", "I get nervous but push through it", "I tend to overthink and it affects my game"] },
  { id: 10, category: "Your Personality",       question: "After a poor performance, how do you typically respond?", options: ["I analyze what went wrong and fix it immediately", "I take some time to reset mentally, then come back stronger", "I talk it through with teammates or a coach", "It stays with me for a while — I need to work on bouncing back"] },
  { id: 11, category: "Goals & Dreams",         question: "What's your biggest cricket goal right now?", options: ["Make it to a competitive team or academy", "Improve specific skills (batting, bowling, fielding)", "Build match fitness and consistency", "Just enjoy the game and have fun"] },
  { id: 12, category: "Goals & Dreams",         question: "Where do you see your cricket in the next 2 years?", options: ["Playing at district or state level", "Representing my club at a higher division", "Becoming a well-rounded player", "I'm not sure yet — I'm open to wherever this takes me"] },
  { id: 13, category: "Goals & Dreams",         question: "What does 'success' in cricket mean to you personally?", options: ["Winning trophies and titles", "Consistently performing at my best", "Being respected by teammates and opponents", "Mastering the craft and loving every session"] },
  { id: 14, category: "Training Style",         question: "How often do you currently train or practice?", options: ["Almost every day — cricket is my life", "3–5 times a week", "1–2 times a week", "Rarely — I want to start training more"] },
  { id: 15, category: "Training Style",         question: "What time of day works best for your training?", options: ["Early morning — I love the fresh start", "Afternoon — when the energy is high", "Evening — after school or work", "I'm flexible — whenever I get a chance"] },
  { id: 16, category: "Training Style",         question: "Do you prefer training alone or with others?", options: ["Solo — I focus better on my own", "With a partner — we push each other", "In a group or team setting", "A mix of everything depending on the session"] },
  { id: 17, category: "Training Style",         question: "How do you usually learn new skills?", options: ["Watching videos and tutorials", "Working directly with a coach", "Trial and error during practice", "Studying professional players and mimicking them"] },
  { id: 18, category: "Skills & Improvement",   question: "Which area of your game needs the most work right now?", options: ["Batting technique and shot selection", "Bowling accuracy and variations", "Fielding, catching, and ground work", "Mental toughness and match awareness"] },
  { id: 19, category: "Skills & Improvement",   question: "As a batsman, which shot do you struggle with the most?", options: ["Playing short-pitched deliveries", "Driving through the covers", "Sweep and reverse sweep", "Playing spin bowling confidently"] },
  { id: 20, category: "Skills & Improvement",   question: "What's your biggest strength on the cricket field?", options: ["Power hitting and big shots", "Consistency and building innings", "Reading the game and making smart decisions", "Athleticism and energy in the field"] },
  { id: 21, category: "Mental Game",            question: "How important is the mental side of cricket to you?", options: ["Extremely — it's what separates good from great", "Very important — I'm actively working on it", "Somewhat — I know I should focus more on it", "I haven't thought much about it yet"] },
  { id: 22, category: "Mental Game",            question: "Do you practice any form of mental preparation before a match?", options: ["Yes — visualization, breathing, or meditation", "I have a pre-match routine that helps me focus", "Sometimes, but not consistently", "No — I'd love to learn how"] },
  { id: 23, category: "Mental Game",            question: "How do you handle sledging or distractions on the field?", options: ["I stay completely focused — nothing gets to me", "I use it as fuel to perform better", "It bothers me sometimes but I manage", "It really affects my concentration"] },
  { id: 24, category: "Fitness & Body",         question: "How would you rate your current fitness level?", options: ["Very fit — I train my body regularly", "Decent — I can keep up but want to improve", "Needs work — I get tired quickly on the field", "I haven't focused on fitness yet"] },
  { id: 25, category: "Fitness & Body",         question: "Do you follow any specific fitness or diet plan for cricket?", options: ["Yes — structured fitness and nutrition plan", "I work out but don't follow a strict plan", "I eat well but don't exercise specifically for cricket", "Not yet — I'd like guidance on this"] },
  { id: 26, category: "Technology & Analysis",  question: "How comfortable are you with using technology in your training?", options: ["Very — I already use apps, video analysis, and data", "Somewhat — I'm open to learning more", "Not much — but I'm curious about it", "This is all new to me"] },
  { id: 27, category: "Technology & Analysis",  question: "Would you like SmartCrick AI to analyze your match videos?", options: ["Absolutely — that's exactly what I need", "Yes, if it's easy to use", "Maybe later, once I'm more comfortable", "I'd prefer to focus on drills and practice plans first"] },
  { id: 28, category: "Coaching & Support",     question: "Do you currently work with a coach?", options: ["Yes — I have a dedicated personal coach", "I attend coaching sessions at a club or academy", "I've had coaches before but not currently", "I've never had formal coaching"] },
  { id: 29, category: "Coaching & Support",     question: "What kind of coaching style works best for you?", options: ["Structured and disciplined — tell me exactly what to do", "Encouraging and supportive — build my confidence", "Analytical — show me data and let me understand why", "Flexible — adapt to how I'm feeling that day"] },
  { id: 30, category: "Inspiration",            question: "Which cricketing legend inspires you the most?", options: ["Virat Kohli — passion, aggression, and elite fitness", "MS Dhoni — calm under pressure, the ultimate finisher", "Sachin Tendulkar — mastery, dedication, and grace", "Someone else — I have my own cricketing hero"] },
  { id: 31, category: "Inspiration",            question: "What motivates you to keep training even on tough days?", options: ["The dream of playing at the highest level", "The love of the game — cricket is my passion", "My teammates and the people who believe in me", "Proving to myself that I can keep getting better"] },
  { id: 32, category: "Your SmartCrick Journey", question: "What feature of SmartCrick AI excites you the most?", options: ["AI-powered training plans personalized to me", "Video analysis and performance tracking", "Mental conditioning and match preparation", "All of it — I want the complete experience"] },
  { id: 33, category: "Your SmartCrick Journey", question: "How often would you like SmartCrick AI to check in with you?", options: ["Daily — keep me accountable every day", "A few times a week — regular but not overwhelming", "Weekly — a solid summary and plan each week", "I'll check in when I feel like it"] },
  { id: 34, category: "Your SmartCrick Journey", question: "Last one — what word best describes the cricketer you want to become?", options: ["Fearless", "Consistent", "Intelligent", "Unstoppable"] }
];

const TOTAL = questions.length;
const LOGO_URL = "https://ucarecdn.com/524955bb-11c6-4b20-a6cf-974403ad7456/-/format/auto/";

// ── State ──────────────────────────────────────────────────
let phase   = "welcome";   // "welcome" | "quiz" | "done"
let qIndex  = 0;
let answers = {};
let isMuted = true;
let musicStarted = false;
let isTransitioning = false;

// ── DOM Refs ───────────────────────────────────────────────
const screen    = document.getElementById("screen");
const bgMusic   = document.getElementById("bg-music");
const muteBtn   = document.getElementById("mute-btn");
const speakerEl = document.getElementById("speaker-icon");

// ── Helpers ────────────────────────────────────────────────
function getGreeting() {
  const h = new Date().getHours();
  if (h < 5)  return "Good night";
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  if (h < 21) return "Good evening";
  return "Good night";
}

function updateSpeakerIcon() {
  if (isMuted) {
    speakerEl.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
           stroke="#4E7A67" stroke-width="2.5"
           stroke-linecap="round" stroke-linejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <line x1="23" y1="9" x2="17" y2="15"/>
        <line x1="17" y1="9" x2="23" y2="15"/>
      </svg>`;
  } else {
    speakerEl.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
           stroke="#4E7A67" stroke-width="2.5"
           stroke-linecap="round" stroke-linejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      </svg>`;
  }
}

function startMusic() {
  if (!musicStarted) {
    bgMusic.volume = 0.14;
    bgMusic.play()
      .then(() => {
        musicStarted = true;
        isMuted = false;
        updateSpeakerIcon();
      })
      .catch(() => { /* autoplay blocked — that's fine */ });
  }
}

muteBtn.addEventListener("click", () => {
  if (isMuted) {
    bgMusic.volume = 0.14;
    if (!musicStarted) {
      bgMusic.play().catch(() => {});
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

// ── Smooth Screen Transition ───────────────────────────────
function transitionTo(renderFn) {
  if (isTransitioning) return;
  isTransitioning = true;

  // Exit animation
  screen.classList.add("screen-exit-active");

  setTimeout(() => {
    // Swap content
    screen.classList.remove("screen-exit-active");
    screen.classList.add("screen-enter");
    renderFn();

    // Force reflow before applying enter
    void screen.offsetWidth;

    screen.classList.remove("screen-enter");
    screen.classList.add("screen-enter-active");

    setTimeout(() => {
      screen.classList.remove("screen-enter-active");
      isTransitioning = false;
    }, 750);
  }, 500);
}

// ── Check icon SVG ─────────────────────────────────────────
const CHECK_SVG = `
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
       stroke="white" stroke-width="3.5"
       stroke-linecap="round" stroke-linejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>`;

// ── Arrow icon ─────────────────────────────────────────────
const ARROW_RIGHT = `
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2.8"
       stroke-linecap="round" stroke-linejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>`;

const ARROW_LEFT = `
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2.8"
       stroke-linecap="round" stroke-linejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>`;

// ── Render Welcome ─────────────────────────────────────────
function renderWelcome() {
  screen.innerHTML = `
    <div class="welcome-screen">
      <div class="logo-wrap">
        <img src="${LOGO_URL}" alt="SmartCrick AI" />
      </div>
      <p class="welcome-greeting">${getGreeting()}, Champ 👋</p>
      <h1 class="welcome-title">Welcome to<br>SmartCrick AI</h1>
      <p class="welcome-subtitle">
        We'll ask you a few thoughtful questions to build a cricket
        experience that's completely yours.
      </p>
      <button class="begin-btn" id="begin-btn">
        Let's Begin ${ARROW_RIGHT}
      </button>
    </div>
  `;

  document.getElementById("begin-btn").addEventListener("click", () => {
    startMusic();
    phase = "quiz";
    transitionTo(renderQuiz);
  });
}

// ── Render Quiz ────────────────────────────────────────────
function renderQuiz() {
  const q        = questions[qIndex];
  const progress = ((qIndex + 1) / TOTAL) * 100;
  const selected = answers[qIndex];

  // Build options HTML
  const optionsHtml = q.options.map((opt, idx) => {
    const isPicked = selected === idx;
    return `
      <button
        class="option-btn${isPicked ? " selected" : ""}"
        data-idx="${idx}"
        type="button"
      >
        <div class="check-circle">
          ${isPicked ? CHECK_SVG : ""}
        </div>
        <span class="option-text">${opt}</span>
      </button>
    `;
  }).join("");

  screen.innerHTML = `
    <div class="quiz-screen">
      <div class="progress-bar-track">
        <div class="progress-bar-fill" style="width: ${progress}%"></div>
      </div>
      <div class="progress-meta">
        <span class="progress-category">${q.category}</span>
        <span class="progress-count">${qIndex + 1} / ${TOTAL}</span>
      </div>

      <h2 class="question-text">${q.question}</h2>

      <div class="options-list" id="options-list">
        ${optionsHtml}
      </div>

      <button
        class="back-btn${qIndex === 0 ? " invisible" : ""}"
        id="back-btn"
        type="button"
      >
        ${ARROW_LEFT} Back
      </button>
    </div>
  `;

  // Option click handlers
  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (isTransitioning) return;

      const idx = parseInt(btn.getAttribute("data-idx"), 10);

      // Immediately reflect selection in UI (no fade — instant feedback)
      answers[qIndex] = idx;

      // Update visual state without full re-render (snappier feel)
      document.querySelectorAll(".option-btn").forEach(b => {
        const bIdx = parseInt(b.getAttribute("data-idx"), 10);
        const picked = bIdx === idx;
        b.classList.toggle("selected", picked);
        const circle = b.querySelector(".check-circle");
        circle.innerHTML = picked ? CHECK_SVG : "";
        // Disable all options after a pick
        b.style.pointerEvents = "none";
      });
      document.getElementById("back-btn").style.pointerEvents = "none";

      // Wait 480ms (Tiimo-style beat) then advance
      setTimeout(() => {
        if (qIndex < TOTAL - 1) {
          qIndex++;
          transitionTo(renderQuiz);
        } else {
          phase = "done";
          transitionTo(renderDone);
        }
      }, 480);
    });
  });

  // Back button
  const backBtn = document.getElementById("back-btn");
  if (backBtn && qIndex > 0) {
    backBtn.addEventListener("click", () => {
      if (isTransitioning) return;
      qIndex--;
      transitionTo(renderQuiz);
    });
  }
}

// ── Render Done ────────────────────────────────────────────
function renderDone() {
  screen.innerHTML = `
    <div class="done-screen">
      <img class="done-logo" src="${LOGO_URL}" alt="SmartCrick AI" />
      <div class="done-check">
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
             stroke="white" stroke-width="3"
             stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <h2 class="done-title">You're all set,<br>Champ!</h2>
      <p class="done-body">
        We've crafted a personalized training experience just for you.
        Your cricket journey with SmartCrick AI starts right now.
      </p>
      <p class="done-sub">Ready to unlock the training app of your life?</p>
      <a href="https://smartcricai.base44.app" class="start-btn">
        Start Training ${ARROW_RIGHT}
      </a>
    </div>
  `;
}

// ── Init ───────────────────────────────────────────────────
updateSpeakerIcon();

// Set initial enter state for first render
screen.classList.add("screen-enter");
renderWelcome();
void screen.offsetWidth;
screen.classList.remove("screen-enter");
screen.classList.add("screen-enter-active");
setTimeout(() => screen.classList.remove("screen-enter-active"), 750);
