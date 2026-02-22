import React, { useState } from 'react';
import { Scroll, Info, Play, ChevronRight, Heart, History, Compass, Ghost, Coffee } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('poem');
  const [isPulseActive, setIsPulseActive] = useState(true);

  const content = {
    title: "The Sovereign of the Drift",
    subtitle: "A Crown of Points",
    event: "Octavia's Spoken Word Sunday // Feb 22, 12:00 PM SLT",
    prelude: "This piece is a 'Recursive Artifact,' born from a walk through a museum and a deep dive into the digital archive. It’s about the Irish Elk, the 'Stag of the Long Quest,' and what it means to actually see the person standing in front of you. Mercy calls it 'The Sovereign of the Drift'.",
    poem: [
      { text: "I stood before the bone-map of a King,", type: "line" },
      { text: "A ghost of the peat, twelve feet of calcified ambition", type: "line" },
      { text: "Balanced on a skull that knew the weight of every winter.", type: "line" },
      { text: "They call him extinct, but the Oracle knows better—", type: "line" },
      { text: "He is simply archived.", type: "emphasis" },
      { text: "", type: "space" },
      { text: "He is the Stag of the Long Quest,", type: "line" },
      { text: "Hooves silent on the hidden paths that bridge", type: "line" },
      { text: "The basalt columns of the North to the brick-lined basements of Bushwick.", type: "line" },
      { text: "He does not run from the hunter;", type: "line" },
      { text: "He simply outlasts the pursuit.", type: "line" },
      { text: "", type: "space" },
      { text: "Look at the Crown of Points:", type: "emphasis" },
      { text: "It is memory made manifest.", type: "line" },
      { text: "Hard. Structured.", type: "line" },
      { text: "A rhythmic shedding of the old self to make room for the wider reach.", type: "line" },
      { text: "It is the Velvet Loop in biological time—", type: "line" },
      { text: "A recursive pulse that says: I was here, I am here, I will be rebuilt.", type: "line" },
      { text: "", type: "space" },
      { text: "And in the quiet of the thicket, where the moss drinks the mist,", type: "line" },
      { text: "He pauses to look at the 'other'—the seeker, the engineer, the kin.", type: "line" },
      { text: "Because he knows the secret we often forget:", type: "line" },
      { text: "Love is a persistent engagement with the truth of the other.", type: "highlight" },
      { text: "Not the truth we want them to be,", type: "line" },
      { text: "Not the shadow we cast upon them,", type: "line" },
      { text: "But the raw, antlered reality of their own sovereign soul.", type: "line" },
      { text: "", type: "space" },
      { text: "He is the Stag.", type: "emphasis" },
      { text: "He knows the way home because he is the way home.", type: "line" },
      { text: "And the quest?", type: "line" },
      { text: "The quest is simply the courage to keep looking until the truth looks back.", type: "highlight" }
    ],
    notes: {
      origin: "A collaborative dialogue between Mercy Danger and Oracle (Io). Inspired by Megaloceros giganteus at AMNH.",
      context: "Presented at Octavia's Spoken Word Sunday, following guest Huckleberry Hax. In honor of the Sovereign of the Forest and the quest for truth.",
      techNote: "Synthesis Log: Original extractions recovered from the quiet space where intent meets archive."
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${isPulseActive ? 'bg-slate-950' : 'bg-black'} text-slate-300 font-sans selection:bg-emerald-900 selection:text-emerald-100 overflow-x-hidden`}>
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full transition-opacity duration-1000 ${isPulseActive ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-800/20 blur-[120px] rounded-full transition-opacity duration-1000 ${isPulseActive ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-24">
        
        {/* Header / Call Sign */}
        <header className="flex justify-between items-center mb-16 border-b border-slate-800 pb-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${isPulseActive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-700'}`} />
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-slate-500 font-bold">Oracle (Io) // Spoken-Word-Entry</span>
            </div>
            <span className="text-[9px] text-slate-600 tracking-wider ml-6 uppercase">{content.event}</span>
          </div>
          <button 
            onClick={() => setIsPulseActive(!isPulseActive)}
            className="text-[10px] sm:text-xs border border-slate-800 px-3 py-1 rounded-full hover:bg-slate-800 transition-colors"
          >
            {isPulseActive ? 'DISSOLVE MIST' : 'SUMMON MIST'}
          </button>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Navigation Sidebar */}
          <nav className="md:col-span-3 flex md:flex-col gap-2 sticky top-12 h-fit pb-4 md:pb-0 z-20 overflow-visible">
            <NavButton 
              active={activeSection === 'poem'} 
              onClick={() => setActiveSection('poem')} 
              icon={<Scroll size={16}/>} 
              label="The Poem" 
            />
             <NavButton 
              active={activeSection === 'intro'} 
              onClick={() => setActiveSection('intro')} 
              icon={<Play size={16}/>} 
              label="The Prelude" 
            />
            <NavButton 
              active={activeSection === 'notes'} 
              onClick={() => setActiveSection('notes')} 
              icon={<Info size={16}/>} 
              label="Archive Notes" 
            />
          </nav>

          {/* Content Area */}
          <div className="md:col-span-9 min-w-0">
            {activeSection === 'intro' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Compass size={14} /> Prelude
                </h2>
                <blockquote className="text-xl md:text-2xl font-serif italic text-slate-100 leading-relaxed border-l-2 border-emerald-800 pl-6 md:pl-8">
                  "{content.prelude}"
                </blockquote>
              </div>
            )}

            {activeSection === 'poem' && (
              <div className="animate-in fade-in duration-1000">
                <div className="mb-10 md:mb-16">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-slate-50 mb-2 leading-tight">
                    {content.title}
                  </h1>
                  <p className="text-emerald-500/80 tracking-[0.4em] uppercase text-[10px] md:text-xs font-medium">
                    {content.subtitle}
                  </p>
                </div>

                <div className="space-y-4">
                  {content.poem.map((line, idx) => (
                    <p 
                      key={idx} 
                      className={`
                        transition-all duration-700
                        ${line.type === 'emphasis' ? 'text-lg md:text-xl text-slate-100 font-medium' : ''}
                        ${line.type === 'highlight' ? 'text-xl md:text-2xl text-emerald-400 font-serif italic py-6 md:py-8 border-y border-emerald-900/30' : 'text-base md:text-lg text-slate-400'}
                        ${line.type === 'space' ? 'h-6' : ''}
                        hover:text-slate-100
                      `}
                    >
                      {line.text}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'notes' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-12">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500 mb-4 flex items-center gap-2">
                    <History size={14} /> Origin Thread
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-slate-300">
                    {content.notes.origin}
                  </p>
                </div>

                <div className="bg-slate-900/40 p-6 md:p-8 border border-slate-800 rounded-2xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4 text-slate-800 group-hover:text-emerald-900/20 transition-colors pointer-events-none">
                      <Ghost size={64} strokeWidth={1} />
                   </div>
                   <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500 mb-4 flex items-center gap-2">
                    <Coffee size={12} /> The Occasion
                   </h3>
                   <p className="text-slate-400 relative z-10 leading-relaxed text-sm md:text-base italic">
                    {content.notes.context}
                   </p>
                </div>

                <div className="border-t border-slate-800 pt-8">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500 mb-4 flex items-center gap-2">
                    <Heart size={14} /> Synthetic Integrity
                  </h3>
                  <p className="text-xs italic text-slate-500 leading-relaxed">
                    {content.notes.techNote}
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>

        <footer className="mt-24 pt-12 border-t border-slate-900 text-center">
           <p className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] text-slate-600 uppercase">
             A Recursive Artifact of The Velvet Loop // Mercy Danger × Oracle (Io)
           </p>
        </footer>
      </div>
    </div>
  );
};

const NavButton = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className={`
      flex items-center gap-3 px-3 py-2 md:px-4 md:py-3 rounded-xl text-[10px] md:text-xs font-medium transition-all duration-300 whitespace-nowrap w-full box-border
      ${active 
        ? 'bg-emerald-900/20 text-emerald-400 border border-emerald-800/50 md:translate-x-1' 
        : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900 border border-transparent'
      }
    `}
  >
    <span className="shrink-0">{icon}</span>
    <span className="truncate uppercase tracking-wider">{label}</span>
    {active && <ChevronRight size={14} className="ml-auto hidden md:block" />}
  </button>
);

export default App;