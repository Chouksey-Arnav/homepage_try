import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";

// --- DATA: questions.js ---
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
  { id: 34, category: "Your SmartCrick Journey", question: "Last one — what word best describes the cricketer you want to become?", options: ["Fearless", "Consistent", "Intelligent", "Unstoppable"] },
];

// --- ICONS ---
const SpeakerIcon = ({ muted }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B9080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    {muted ? (
      <g><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></g>
    ) : (
      <g><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></g>
    )}
  </svg>
);

const CheckIcon = ({ size = 10, strokeW = 3, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// --- ONBOARDING PAGE ---
const LOGO_URL = "https://ucarecdn.com/524955bb-11c6-4b20-a6cf-974403ad7456/-/format/auto/";

function OnboardingPage() {
  const [phase, setPhase] = useState("welcome");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [show, setShow] = useState(true);
  const [muted, setMuted] = useState(true);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  // 1. Persistence Logic: Load from LocalStorage on mount
  useEffect(() => {
    const savedAnswers = localStorage.getItem("smartcrick_answers");
    const savedIndex = localStorage.getItem("smartcrick_index");
    
    if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
    if (savedIndex) {
      const idx = parseInt(savedIndex, 10);
      setQIndex(idx);
      // If they had already started, skip the welcome screen
      if (idx > 0) setPhase("quiz");
    }

    // Audio Setup
    const a = new Audio("/background.mp3");
    a.loop = true;
    a.volume = 0.15;
    audioRef.current = a;

    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  // 2. Persistence Logic: Save to LocalStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("smartcrick_answers", JSON.stringify(answers));
    localStorage.setItem("smartcrick_index", qIndex.toString());
  }, [answers, qIndex]);

  const playMusic = useCallback(() => {
    if (!audioRef.current || musicOn) return;
    audioRef.current.play().then(() => {
      setMusicOn(true);
      setMuted(false);
    }).catch(() => {});
  }, [musicOn]);

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;
    if (muted) {
      if (!musicOn) playMusic();
      audioRef.current.volume = 0.15;
      setMuted(false);
    } else {
      audioRef.current.volume = 0;
      setMuted(true);
    }
  }, [muted, musicOn, playMusic]);

  const fadeToPhase = useCallback((nextPhase, nextIdx) => {
    setShow(false);
    setTimeout(() => {
      if (nextPhase) setPhase(nextPhase);
      if (nextIdx !== undefined) setQIndex(nextIdx);
      setTimeout(() => setShow(true), 80);
    }, 500);
  }, []);

  const handleFinish = () => {
    localStorage.removeItem("smartcrick_answers");
    localStorage.removeItem("smartcrick_index");
    fadeToPhase("done");
  };

  const progress = ((qIndex + 1) / questions.length) * 100;
  const q = questions[qIndex];
  const selected = answers[qIndex];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden font-sans" style={{ background: "linear-gradient(180deg, #FAFAF8 0%, #F0F5F3 50%, #E8F0EC 100%)" }}>
      
      {/* Mute Button */}
      <button onClick={toggleMute} className="fixed top-5 right-5 z-50 w-10 h-10 rounded-full flex items-center justify-center bg-white/30 backdrop-blur-md border border-[#B4D2C8]/40 hover:scale-110 transition-all">
        <SpeakerIcon muted={muted} />
      </button>

      {/* Decorative Orbs */}
      <div className="fixed w-72 h-72 rounded-full pointer-events-none opacity-50" style={{ background: "radial-gradient(circle, #A7C4BC 0%, transparent 70%)", top: "-8%", right: "-6%", animation: "floatOrb 9s ease-in-out infinite" }} />
      <div className="fixed w-52 h-52 rounded-full pointer-events-none opacity-40" style={{ background: "radial-gradient(circle, #6B9080 0%, transparent 70%)", bottom: "8%", left: "-4%", animation: "floatOrb 11s ease-in-out infinite reverse" }} />

      {/* Progress Bar */}
      {phase === "quiz" && (
        <div className="w-full px-6 pt-5 pb-2 transition-opacity duration-300" style={{ opacity: show ? 1 : 0.5 }}>
          <div className="w-full h-1.5 rounded-full bg-[#B4D2C8]/20 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#A7C4BC] to-[#6B9080] transition-all duration-700 ease-out" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex justify-between mt-2 text-[10px] uppercase tracking-widest font-bold text-[#8FA9A0]">
            <span>{q.category}</span>
            <span>{qIndex + 1} / {questions.length}</span>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col items-center justify-center px-6 transition-all duration-500 ease-in-out ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}`}>
        
        {phase === "welcome" && (
          <div className="flex flex-col items-center text-center max-w-md">
            <img src={LOGO_URL} alt="SmartCrick" className="w-32 h-32 mb-8 rounded-2xl shadow-2xl shadow-[#6B9080]/20 animate-bounce-slow" />
            <h1 className="text-3xl font-bold text-[#2D3E36] mb-3">Welcome, Champ!</h1>
            <p className="text-[#8FA9A0] mb-10 leading-relaxed text-sm md:text-base">Ready to level up your game? Let’s customize your AI training experience with a few quick questions.</p>
            <button onClick={() => { playMusic(); fadeToPhase("quiz"); }} className="px-12 py-4 rounded-full bg-gradient-to-r from-[#6B9080] to-[#A7C4BC] text-white font-bold shadow-xl shadow-[#6B9080]/30 hover:scale-105 active:scale-95 transition-transform">Begin Journey</button>
          </div>
        )}

        {phase === "quiz" && (
          <div className="w-full max-w-lg">
            <h2 className="text-xl md:text-2xl font-bold text-[#2D3E36] mb-8 leading-tight">{q.question}</h2>
            <div className="flex flex-col gap-3">
              {q.options.map((opt, idx) => (
                <button key={idx} onClick={() => setAnswers({...answers, [qIndex]: idx})} className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-200 flex items-center gap-4 ${selected === idx ? 'bg-[#6B9080]/10 border-[#6B9080] shadow-md' : 'bg-white/60 border-[#B4D2C8]/20 hover:border-[#B4D2C8]'}`}>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selected === idx ? 'bg-[#6B9080] border-[#6B9080]' : 'border-[#B4D2C8]'}`}>
                    {selected === idx && <CheckIcon />}
                  </div>
                  <span className={`text-sm md:text-base font-medium ${selected === idx ? 'text-[#2D3E36]' : 'text-[#4A6259]'}`}>{opt}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-10">
              <button onClick={() => fadeToPhase(null, qIndex - 1)} disabled={qIndex === 0} className="flex items-center gap-2 px-6 py-2 text-sm font-bold text-[#6B9080] disabled:opacity-30">
                <ChevronLeft /> Back
              </button>
              <button onClick={() => qIndex < questions.length - 1 ? fadeToPhase(null, qIndex + 1) : handleFinish()} disabled={selected === undefined} className={`flex items-center gap-2 px-8 py-2 rounded-full text-sm font-bold text-white transition-all ${selected !== undefined ? 'bg-gradient-to-r from-[#6B9080] to-[#A7C4BC] shadow-lg' : 'bg-[#B4D2C8] opacity-50'}`}>
                {qIndex === questions.length - 1 ? "Finish" : "Next"} <ChevronRight />
              </button>
            </div>
          </div>
        )}

        {phase === "done" && (
          <div className="flex flex-col items-center text-center max-w-md">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#6B9080] to-[#A7C4BC] flex items-center justify-center mb-6 shadow-xl shadow-[#6B9080]/30 animate-pulse">
              <CheckIcon size={32} />
            </div>
            <h2 className="text-3xl font-bold text-[#2D3E36] mb-4">You're Ready!</h2>
            <p className="text-[#6B9080] mb-10 font-medium">Your personalized SmartCrick AI plan is ready to launch.</p>
            <a href="https://smartcricai.base44.app" className="px-12 py-4 rounded-full bg-gradient-to-r from-[#6B9080] to-[#A7C4BC] text-white font-bold shadow-2xl no-underline hover:scale-105 transition-transform">Start Training</a>
          </div>
        )}

      </div>

      <div className="pb-8 text-center text-[10px] font-bold text-[#8FA9A0]/50 uppercase tracking-widest">SmartCrick AI — Train Like a Champion</div>

      <style>{`
        @keyframes floatOrb { 0%, 100% { transform: translate(0, 0); } 33% { transform: translate(15px, -20px); } 66% { transform: translate(-15px, 15px); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        body { margin: 0; background: #FAFAF8; }
      `}</style>
    </div>
  );
}

// --- APP WRAPPER ---
export default function App() {
  const [route, setRoute] = useState("home");

  useEffect(() => {
    const timer = setTimeout(() => setRoute("onboarding"), 1500);
    return () => clearTimeout(timer);
  }, []);

  return route === "home" ? (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
      <div className="w-10 h-10 border-4 border-[#6B9080]/20 border-t-[#6B9080] rounded-full animate-spin" />
    </div>
  ) : <OnboardingPage />;
}
