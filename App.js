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

// --- ICONS & HELPERS ---
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

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// --- MAIN ONBOARDING PAGE ---
const LOGO_URL = "https://ucarecdn.com/524955bb-11c6-4b20-a6cf-974403ad7456/-/format/auto/";

const OnboardingPage = () => {
  const [phase, setPhase] = useState("welcome");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [show, setShow] = useState(true);
  const [muted, setMuted] = useState(true);
  const audioRef = useRef(null);

  // Persistence: Load progress
  useEffect(() => {
    const saved = localStorage.getItem("sc_progress");
    if (saved) {
      const { idx, ans } = JSON.parse(saved);
      setQIndex(idx);
      setAnswers(ans);
      if (idx > 0) setPhase("quiz");
    }
    // Preload audio
    audioRef.current = new Audio("/background.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.15;
    return () => audioRef.current?.pause();
  }, []);

  // Persistence: Save progress
  useEffect(() => {
    localStorage.setItem("sc_progress", JSON.stringify({ idx: qIndex, ans: answers }));
  }, [qIndex, answers]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (muted) {
      audioRef.current.play().catch(() => {});
      audioRef.current.volume = 0.15;
    } else {
      audioRef.current.volume = 0;
    }
    setMuted(!muted);
  };

  const transition = (nextPhase, nextIdx) => {
    setShow(false);
    setTimeout(() => {
      if (nextPhase) setPhase(nextPhase);
      if (nextIdx !== undefined) setQIndex(nextIdx);
      setShow(true);
    }, 400);
  };

  const progress = ((qIndex + 1) / questions.length) * 100;
  const q = questions[qIndex];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#2D3E36] overflow-hidden font-sans relative">
      
      {/* Mute Toggle */}
      <button onClick={toggleMute} className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/50 backdrop-blur-md border border-[#B4D2C8] hover:scale-110 transition-transform shadow-sm">
        <SpeakerIcon muted={muted} />
      </button>

      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#A7C4BC]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-[5%] left-[-10%] w-80 h-80 bg-[#6B9080]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Progress Bar */}
      {phase === "quiz" && (
        <div className="w-full px-8 pt-8 transition-opacity duration-300" style={{ opacity: show ? 1 : 0.5 }}>
          <div className="h-1.5 w-full bg-[#E8F0EC] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#A7C4BC] to-[#6B9080] transition-all duration-700 ease-out" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex justify-between mt-2 text-[10px] uppercase tracking-widest font-bold text-[#8FA9A0]">
            <span>{q.category}</span>
            <span>{qIndex + 1} / {questions.length}</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`flex-1 flex flex-col items-center justify-center px-6 transition-all duration-500 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        
        {phase === "welcome" && (
          <div className="max-w-md text-center">
            <img src={LOGO_URL} alt="SmartCrick" className="w-32 h-32 mx-auto mb-8 rounded-3xl shadow-xl shadow-[#6B9080]/20" />
            <h1 className="text-3xl font-extrabold mb-4">Welcome, Champ!</h1>
            <p className="text-[#8FA9A0] mb-10">Ready to transform your game? Let's build your AI-powered training journey.</p>
            <button onClick={() => { if(muted) toggleMute(); transition("quiz"); }} className="w-full py-4 bg-gradient-to-r from-[#6B9080] to-[#A7C4BC] text-white rounded-full font-bold shadow-lg shadow-[#6B9080]/30 hover:scale-[1.02] active:scale-[0.98] transition-all">Begin Assessment</button>
          </div>
        )}

        {phase === "quiz" && (
          <div className="w-full max-w-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-8 leading-tight">{q.question}</h2>
            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <button key={i} onClick={() => setAnswers({...answers, [qIndex]: i})} className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center gap-4 ${answers[qIndex] === i ? 'bg-[#6B9080]/5 border-[#6B9080] shadow-sm' : 'bg-white border-[#E8F0EC] hover:border-[#B4D2C8]'}`}>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${answers[qIndex] === i ? 'bg-[#6B9080] border-[#6B9080]' : 'border-[#B4D2C8]'}`}>
                    {answers[qIndex] === i && <CheckIcon />}
                  </div>
                  <span className="font-medium text-sm md:text-base leading-snug">{opt}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-10">
              <button onClick={() => transition(null, qIndex - 1)} disabled={qIndex === 0} className="px-6 py-2 text-sm font-bold text-[#6B9080] disabled:opacity-20 transition-opacity">Back</button>
              <button onClick={() => qIndex < questions.length - 1 ? transition(null, qIndex + 1) : transition("done")} disabled={answers[qIndex] === undefined} className={`px-10 py-3 rounded-full text-sm font-bold text-white transition-all ${answers[qIndex] !== undefined ? 'bg-gradient-to-r from-[#6B9080] to-[#A7C4BC] shadow-md hover:scale-105' : 'bg-[#D1DBD6] cursor-not-allowed'}`}>
                {qIndex === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        )}

        {phase === "done" && (
          <div className="max-w-md text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-[#6B9080] to-[#A7C4BC] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl text-white">
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
            </div>
            <h2 className="text-3xl font-extrabold mb-4">Mastery Awaits!</h2>
            <p className="text-[#8FA9A0] mb-10">Your customized plan is ready. Let's get to work.</p>
            <a href="https://smartcricai.base44.app" onClick={() => localStorage.clear()} className="inline-block px-12 py-4 bg-gradient-to-r from-[#6B9080] to-[#A7C4BC] text-white rounded-full font-bold shadow-xl no-underline hover:scale-105 transition-transform">Enter App</a>
          </div>
        )}
      </div>

      <footer className="pb-8 text-center text-[10px] font-bold text-[#8FA9A0]/40 uppercase tracking-[0.2em]">SmartCrick AI</footer>
    </div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { setTimeout(() => setLoading(false), 1200); }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
      <div className="w-10 h-10 border-4 border-[#6B9080]/20 border-t-[#6B9080] rounded-full animate-spin" />
    </div>
  );

  return <OnboardingPage />;
}
