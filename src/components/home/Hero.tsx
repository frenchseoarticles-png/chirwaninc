import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/content/config";
import { openWhatsApp } from "@/lib/whatsapp";
import { ArrowRight, MessageCircle, ShieldCheck, Clock, Wrench, Zap } from "lucide-react";

/* ═══════════════════════════════════════════
   PREMIUM AUTOMOTIVE HERO VISUAL
   ═══════════════════════════════════════════ */
const HeroVisual = () => (
  <div className="relative w-full h-full min-h-[520px] flex items-center justify-center select-none overflow-visible">

    <style>{`
      @keyframes hv-float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
      @keyframes hv-spin    { to{transform:rotate(360deg)} }
      @keyframes hv-sweep   { from{transform:rotate(-30deg)} to{transform:rotate(330deg)} }
      @keyframes hv-glow    { 0%,100%{opacity:.28} 50%{opacity:.55} }
      @keyframes hv-beam    { 0%,100%{opacity:.12} 50%{opacity:.28} }
      @keyframes hv-badge   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
      @keyframes hv-dot     { 0%,100%{opacity:.35;transform:scale(1)} 50%{opacity:1;transform:scale(1.5)} }
      @keyframes hv-speed   { 0%{stroke-dashoffset:120;opacity:0} 30%{opacity:.35} 100%{stroke-dashoffset:0;opacity:0} }
      @keyframes hv-shimmer { 0%,100%{opacity:0} 45%,55%{opacity:.07} }
      @keyframes hv-scanpip { 0%,100%{opacity:.4} 50%{opacity:1} }

      .hv-car     { animation: hv-float  5s   ease-in-out infinite }
      .hv-wR      { transform-origin:162px 238px; animation:hv-spin 2.8s linear infinite }
      .hv-wF      { transform-origin:418px 238px; animation:hv-spin 2.8s linear infinite }
      .hv-sweep   { transform-origin:280px 148px; animation:hv-sweep 6s linear infinite }
      .hv-glow    { animation: hv-glow   3.5s ease-in-out infinite }
      .hv-beam    { animation: hv-beam   2.2s ease-in-out infinite }
      .hv-shimmer { animation: hv-shimmer 4s  ease-in-out infinite }
      .hv-b1 { animation: hv-badge 4s ease-in-out infinite 0s   }
      .hv-b2 { animation: hv-badge 4s ease-in-out infinite 1.2s }
      .hv-b3 { animation: hv-badge 4s ease-in-out infinite 0.6s }
      .hv-sp1 { stroke-dasharray:60 200; animation:hv-speed 2.4s ease-in-out infinite 0s   }
      .hv-sp2 { stroke-dasharray:40 200; animation:hv-speed 2.4s ease-in-out infinite 0.3s }
      .hv-sp3 { stroke-dasharray:30 200; animation:hv-speed 2.4s ease-in-out infinite 0.6s }
    `}</style>

    {/* ── Deep ambient glow ── */}
    <div className="hv-glow absolute pointer-events-none" style={{
      width:440, height:440, borderRadius:"50%",
      background:"radial-gradient(circle,rgba(234,179,8,.22) 0%,rgba(30,64,175,.12) 45%,transparent 72%)",
      filter:"blur(48px)", top:"50%", left:"50%", transform:"translate(-50%,-50%)",
    }} />

    <svg viewBox="0 0 560 296" width="100%" style={{ maxWidth:560, overflow:"visible" }} aria-hidden="true">
      <defs>
        <linearGradient id="hv-body" x1=".5" y1="0" x2=".5" y2="1">
          <stop offset="0%"   stopColor="hsl(45,96%,62%)" />
          <stop offset="50%"  stopColor="hsl(43,96%,52%)" />
          <stop offset="100%" stopColor="hsl(38,90%,36%)" />
        </linearGradient>
        <linearGradient id="hv-spec" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="white" stopOpacity="0"    />
          <stop offset="40%"  stopColor="white" stopOpacity=".14"  />
          <stop offset="100%" stopColor="white" stopOpacity="0"    />
        </linearGradient>
        <linearGradient id="hv-cabin" x1=".5" y1="0" x2=".5" y2="1">
          <stop offset="0%"  stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e3a5f" />
        </linearGradient>
        <linearGradient id="hv-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#1d3461" stopOpacity=".92" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity=".7"  />
        </linearGradient>
        <radialGradient id="hv-tire" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0a0f1a" />
        </radialGradient>
        <radialGradient id="hv-rim" cx="38%" cy="32%" r="65%">
          <stop offset="0%"   stopColor="#94a3b8" />
          <stop offset="60%"  stopColor="#475569" />
          <stop offset="100%" stopColor="#1e293b" />
        </radialGradient>
        <radialGradient id="hv-hl" cx="30%" cy="40%" r="70%">
          <stop offset="0%"   stopColor="white"               stopOpacity=".9" />
          <stop offset="100%" stopColor="hsl(45,96%,62%)" stopOpacity=".8" />
        </radialGradient>
        <linearGradient id="hv-hlBeam" x1="0" y1=".5" x2="1" y2=".5">
          <stop offset="0%"   stopColor="hsl(45,96%,70%)" stopOpacity=".55" />
          <stop offset="100%" stopColor="hsl(45,96%,70%)" stopOpacity="0"   />
        </linearGradient>
        <radialGradient id="hv-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="black" stopOpacity=".5" />
          <stop offset="100%" stopColor="black" stopOpacity="0"  />
        </radialGradient>
        <radialGradient id="hv-tail" cx="60%" cy="50%" r="60%">
          <stop offset="0%"   stopColor="#ff4444" />
          <stop offset="100%" stopColor="#7f0000" />
        </radialGradient>
        <linearGradient id="hv-radarGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="hsl(43,96%,52%)" stopOpacity="0"    />
          <stop offset="100%" stopColor="hsl(43,96%,52%)" stopOpacity=".25"  />
        </linearGradient>
      </defs>

      {/* ── Radar circles ── */}
      <g opacity=".18">
        <circle cx="280" cy="148" r="72"  fill="none" stroke="hsl(43,96%,52%)" strokeWidth=".7" strokeDasharray="5 7"  />
        <circle cx="280" cy="148" r="112" fill="none" stroke="hsl(43,96%,52%)" strokeWidth=".7" strokeDasharray="5 9"  />
        <circle cx="280" cy="148" r="158" fill="none" stroke="hsl(43,96%,52%)" strokeWidth=".7" strokeDasharray="4 11" />
        <circle cx="280" cy="148" r="205" fill="none" stroke="hsl(43,96%,52%)" strokeWidth=".5" strokeDasharray="3 14" />
      </g>

      {/* ── Radar sweep ── */}
      <g className="hv-sweep" style={{ transformOrigin:"280px 148px" }} opacity=".18">
        <path d="M280 148 L488 148 A208 208 0 0 0 280 -60 Z" fill="url(#hv-radarGrad)" />
        <line x1="280" y1="148" x2="280" y2="-62" stroke="hsl(43,96%,52%)" strokeWidth="1" opacity=".6" />
      </g>

      {/* ── Speed lines ── */}
      <line className="hv-sp1" x1="5"  y1="168" x2="125" y2="168" stroke="hsl(43,96%,52%)" strokeWidth="1.5" strokeLinecap="round" />
      <line className="hv-sp2" x1="5"  y1="182" x2="105" y2="182" stroke="hsl(43,96%,52%)" strokeWidth="1"   strokeLinecap="round" opacity=".6" />
      <line className="hv-sp3" x1="5"  y1="155" x2="85"  y2="155" stroke="hsl(43,96%,52%)" strokeWidth=".8"  strokeLinecap="round" opacity=".4" />

      {/* ── Headlight beam ── */}
      <g className="hv-beam">
        <polygon points="462,152 555,118 555,188 462,170" fill="url(#hv-hlBeam)" />
        <polygon points="463,152 555,108 555,126 463,155" fill="url(#hv-hlBeam)" opacity=".6" />
      </g>

      {/* ══════════ CAR GROUP ══════════ */}
      <g className="hv-car">

        {/* Ground shadow */}
        <ellipse cx="290" cy="250" rx="196" ry="11" fill="url(#hv-shadow)" />

        {/* Reflection */}
        <g transform="translate(0,250) scale(1,-0.3)" opacity=".2">
          <path
            d="M 70 240 L 70 200 C 75,184 84,174 96,167 L 115,158 C 134,150 154,142 168,134
               L 188,115 C 202,100 218,85 238,72 L 256,58 C 268,50 280,46 300,44
               L 356,42 C 376,42 394,50 408,63 L 428,82 C 444,96 456,112 464,130
               C 470,144 472,158 470,174 L 468,198 C 467,214 462,228 457,236 L 460,240 Z"
            fill="url(#hv-body)"
          />
        </g>

        {/* ── BODY ── */}
        <path
          d="M 70 240 L 70 200 C 75,184 84,174 96,167 L 115,158
             C 134,150 154,142 168,134 L 188,115
             C 202,100 218,85 238,72 L 256,58
             C 268,50 280,46 300,44 L 356,42
             C 376,42 394,50 408,63 L 428,82
             C 444,96 456,112 464,130 C 470,144 472,158 470,174
             L 468,198 C 467,214 462,228 457,236 L 460,240 Z"
          fill="url(#hv-body)"
        />

        {/* Lower sill */}
        <path
          d="M 96,215 C 116,210 148,207 168,206 L 265,204 L 360,204
             L 420,206 C 440,208 454,212 458,218 L 460,226 L 460,240 L 70,240 L 70,228
             C 74,220 84,217 96,215 Z"
          fill="hsl(38,85%,30%)"
        />

        {/* Chrome beltline */}
        <path
          d="M 96,167 C 140,158 175,153 210,150 C 265,146 320,144 380,148 C 412,150 438,156 458,165"
          stroke="hsl(45,100%,78%)" strokeWidth="1.5" fill="none" opacity=".5" strokeLinecap="round"
        />

        {/* ── CABIN / ROOF ── */}
        <path
          d="M 238,72 L 256,58 C 268,50 280,46 300,44 L 356,42
             C 376,42 394,50 408,63 L 428,82
             L 405,83 L 338,82 L 248,82 L 220,83 Z"
          fill="url(#hv-cabin)"
        />
        {/* Roof glare */}
        <path d="M 260,52 L 352,44 C 368,44 382,50 394,60 L 390,62 C 378,52 364,46 350,46 L 258,54 Z"
          fill="white" opacity=".05" />

        {/* ── WINDOWS ── */}
        <path d="M 408,65 L 380,82 L 355,82 L 348,44 C 366,42 384,50 408,65 Z"  fill="url(#hv-glass)" />
        <path d="M 404,68 L 380,80 L 373,74 L 396,60 Z" fill="white" opacity=".09" />
        <path d="M 344,82 L 350,42 L 280,42 L 272,82 Z" fill="url(#hv-glass)" />
        <path d="M 347,80 L 350,44 L 338,42 L 335,80 Z" fill="white" opacity=".07" />
        <path d="M 268,82 L 275,42 L 210,46 L 205,82 Z" fill="url(#hv-glass)" opacity=".9" />
        <path d="M 200,82 L 206,48 C 220,46 232,48 242,54 L 256,60 L 248,82 Z" fill="url(#hv-glass)" opacity=".75" />

        {/* Window pillars */}
        <path d="M 238,72 L 248,82 M 272,82 L 275,42 M 344,82 L 350,42"
          stroke="hsl(38,60%,24%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 220,83 L 248,82 L 338,82 L 405,83"
          stroke="hsl(38,60%,24%)" strokeWidth="2" fill="none" opacity=".8" />

        {/* ── HEADLIGHT ── */}
        <path d="M 460,140 C 466,144 470,154 468,168 L 458,170 C 455,162 455,148 460,140 Z"
          fill="hsl(38,60%,28%)" />
        <path d="M 458,135 C 466,130 472,136 470,144"
          stroke="white" strokeWidth="2.2" fill="none" opacity=".75" strokeLinecap="round" />
        <path d="M 458,142 C 464,144 468,152 467,164 L 460,166 C 458,157 458,148 458,142 Z"
          fill="url(#hv-hl)" opacity=".95" />

        {/* Grille lines */}
        <path d="M 464,175 C 466,180 468,190 468,200 L 460,202 C 460,193 460,182 458,176 Z"
          fill="hsl(38,50%,22%)" />
        {[178,185,192,199].map((y, i) => (
          <line key={i} x1="458" y1={y} x2="468" y2={y} stroke="hsl(43,96%,52%)" strokeWidth=".8" opacity=".4" />
        ))}

        {/* ── TAILLIGHT ── */}
        <path d="M 71,162 C 66,158 64,148 67,138 L 76,138 C 76,148 76,158 71,162 Z"
          fill="url(#hv-tail)" opacity=".9" />
        <path d="M 76,130 C 72,128 68,130 67,136"
          stroke="#ff6060" strokeWidth="1.8" fill="none" opacity=".8" strokeLinecap="round" />

        {/* Exhausts */}
        <ellipse cx="90"  cy="236" rx="7" ry="4" fill="#1e293b" />
        <ellipse cx="104" cy="236" rx="5" ry="3" fill="#1e293b" />

        {/* ── FRONT WHEEL ── */}
        <g className="hv-wF">
          <circle cx="418" cy="238" r="42" fill="url(#hv-tire)" />
          <circle cx="418" cy="238" r="42" fill="none" stroke="#0a0f1a" strokeWidth="5" />
          <circle cx="418" cy="238" r="37" fill="none" stroke="#1e293b" strokeWidth="1.5" />
          <circle cx="418" cy="238" r="30" fill="hsl(215,28%,17%)" />
          {Array.from({length:7}).map((_,i)=>{
            const rad=((i*360/7)*Math.PI)/180;
            return <line key={i}
              x1={418+9*Math.cos(rad)} y1={238+9*Math.sin(rad)}
              x2={418+27*Math.cos(rad)} y2={238+27*Math.sin(rad)}
              stroke="url(#hv-rim)" strokeWidth="4" strokeLinecap="round" />;
          })}
          <circle cx="418" cy="238" r="10" fill="url(#hv-rim)" />
          <circle cx="418" cy="238" r="5"  fill="#0a0f1a" />
          <circle cx="418" cy="238" r="4.5" fill="hsl(43,96%,52%)" opacity=".85" />
        </g>

        {/* ── REAR WHEEL ── */}
        <g className="hv-wR">
          <circle cx="162" cy="238" r="42" fill="url(#hv-tire)" />
          <circle cx="162" cy="238" r="42" fill="none" stroke="#0a0f1a" strokeWidth="5" />
          <circle cx="162" cy="238" r="37" fill="none" stroke="#1e293b" strokeWidth="1.5" />
          <circle cx="162" cy="238" r="30" fill="hsl(215,28%,17%)" />
          {Array.from({length:7}).map((_,i)=>{
            const rad=((i*360/7)*Math.PI)/180;
            return <line key={i}
              x1={162+9*Math.cos(rad)} y1={238+9*Math.sin(rad)}
              x2={162+27*Math.cos(rad)} y2={238+27*Math.sin(rad)}
              stroke="url(#hv-rim)" strokeWidth="4" strokeLinecap="round" />;
          })}
          <circle cx="162" cy="238" r="10" fill="url(#hv-rim)" />
          <circle cx="162" cy="238" r="5"  fill="#0a0f1a" />
          <circle cx="162" cy="238" r="4.5" fill="hsl(43,96%,52%)" opacity=".85" />
        </g>

        {/* Body shimmer */}
        <path className="hv-shimmer"
          d="M 70 240 L 70 200 C 75,184 84,174 96,167 L 115,158
             C 134,150 154,142 168,134 L 188,115
             C 202,100 218,85 238,72 L 256,58
             C 268,50 280,46 300,44 L 356,42
             C 376,42 394,50 408,63 L 428,82
             C 444,96 456,112 464,130 C 470,144 472,158 470,174
             L 468,198 C 467,214 462,228 457,236 L 460,240 Z"
          fill="url(#hv-spec)"
        />

      </g>{/* end .hv-car */}

      {/* ── Diagnostic annotation dots ── */}
      <g style={{animation:"hv-dot 2.2s ease-in-out infinite 0s"}}>
        <circle cx="442" cy="132" r="3.5" fill="hsl(43,96%,52%)" />
        <circle cx="442" cy="132" r="9"   fill="none" stroke="hsl(43,96%,52%)" strokeWidth=".8" opacity=".45" />
        <line x1="450" y1="126" x2="494" y2="94" stroke="hsl(43,96%,52%)" strokeWidth=".8" opacity=".35" strokeDasharray="3 3" />
      </g>
      <g style={{animation:"hv-dot 2.2s ease-in-out infinite 0.7s"}}>
        <circle cx="162" cy="196" r="3.5" fill="hsl(43,96%,52%)" />
        <circle cx="162" cy="196" r="9"   fill="none" stroke="hsl(43,96%,52%)" strokeWidth=".8" opacity=".45" />
        <line x1="154" y1="192" x2="95" y2="162" stroke="hsl(43,96%,52%)" strokeWidth=".8" opacity=".35" strokeDasharray="3 3" />
      </g>
      <g style={{animation:"hv-dot 2.2s ease-in-out infinite 1.4s"}}>
        <circle cx="280" cy="208" r="3.5" fill="hsl(43,96%,52%)" />
        <circle cx="280" cy="208" r="9"   fill="none" stroke="hsl(43,96%,52%)" strokeWidth=".8" opacity=".45" />
        <line x1="280" y1="216" x2="280" y2="258" stroke="hsl(43,96%,52%)" strokeWidth=".8" opacity=".35" strokeDasharray="3 3" />
      </g>

    </svg>

    {/* ══ FLOATING BADGES ══ */}

    {/* Certifié */}
    <div className="hv-b1 absolute flex items-center gap-2.5 rounded-2xl" style={{
      top:"6%", right:"3%", padding:"10px 16px",
      background:"linear-gradient(135deg,rgba(234,179,8,.22),rgba(234,179,8,.06))",
      border:"1px solid rgba(234,179,8,.5)",
      backdropFilter:"blur(16px)",
      boxShadow:"0 8px 32px rgba(234,179,8,.2),inset 0 1px 0 rgba(255,255,255,.1)",
    }}>
      <div style={{width:30,height:30,borderRadius:"50%",background:"rgba(234,179,8,.2)",
        display:"flex",alignItems:"center",justifyContent:"center"}}>
        <ShieldCheck style={{width:15,height:15,color:"hsl(43,96%,52%)"}} />
      </div>
      <div>
        <p style={{fontSize:10,color:"rgba(255,255,255,.5)",fontWeight:500,margin:0,lineHeight:1.2}}>STATUS</p>
        <p style={{fontSize:13,color:"white",fontWeight:700,margin:0,letterSpacing:".02em"}}>Certifié</p>
      </div>
    </div>

    {/* Service rapide */}
    <div className="hv-b2 absolute flex items-center gap-2.5 rounded-2xl" style={{
      bottom:"10%", right:"2%", padding:"10px 16px",
      background:"linear-gradient(135deg,rgba(255,255,255,.1),rgba(255,255,255,.03))",
      border:"1px solid rgba(255,255,255,.18)",
      backdropFilter:"blur(16px)",
      boxShadow:"0 8px 32px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.08)",
    }}>
      <div style={{width:30,height:30,borderRadius:"50%",background:"rgba(255,255,255,.1)",
        display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Clock style={{width:15,height:15,color:"rgba(255,255,255,.85)"}} />
      </div>
      <div>
        <p style={{fontSize:10,color:"rgba(255,255,255,.5)",fontWeight:500,margin:0,lineHeight:1.2}}>DÉLAI</p>
        <p style={{fontSize:13,color:"white",fontWeight:700,margin:0,letterSpacing:".02em"}}>Service rapide</p>
      </div>
    </div>

    {/* Toutes marques */}
    <div className="hv-b3 absolute flex items-center gap-2.5 rounded-2xl" style={{
      top:"28%", left:"-2%", padding:"10px 16px",
      background:"linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.02))",
      border:"1px solid rgba(255,255,255,.14)",
      backdropFilter:"blur(16px)",
      boxShadow:"0 8px 32px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.07)",
    }}>
      <div style={{width:30,height:30,borderRadius:"50%",background:"rgba(234,179,8,.15)",
        display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Wrench style={{width:15,height:15,color:"hsl(43,96%,52%)"}} />
      </div>
      <div>
        <p style={{fontSize:10,color:"rgba(255,255,255,.5)",fontWeight:500,margin:0,lineHeight:1.2}}>MARQUES</p>
        <p style={{fontSize:13,color:"white",fontWeight:700,margin:0,letterSpacing:".02em"}}>Toutes marques</p>
      </div>
    </div>

    {/* ── Scan HUD pill ── */}
    <div style={{
      position:"absolute", bottom:"4%", left:"50%", transform:"translateX(-50%)",
      display:"flex", alignItems:"center", gap:6,
      padding:"6px 14px", borderRadius:999,
      background:"rgba(0,0,0,.45)",
      border:"1px solid rgba(234,179,8,.3)",
      backdropFilter:"blur(12px)",
    }}>
      <span style={{
        width:7,height:7,borderRadius:"50%",
        background:"hsl(43,96%,52%)",
        boxShadow:"0 0 8px hsl(43,96%,52%)",
        display:"inline-block",
        animation:"hv-dot 1.5s ease-in-out infinite",
      }} />
      <span style={{fontSize:11,color:"rgba(255,255,255,.6)",fontWeight:600,letterSpacing:".08em"}}>
        SCAN EN COURS…
      </span>
      <Zap style={{width:11,height:11,color:"hsl(43,96%,52%)"}} />
    </div>

  </div>
);

/* ═══════════════════════════════════════════
   MAIN HERO COMPONENT
   ═══════════════════════════════════════════ */
const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-primary">

      {/* Background image with Ken Burns */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-hero-zoom"
        style={{ backgroundImage: `url(${siteConfig.hero.backgroundImage})` }}
      />
      {/* Overlays — stronger on right so visual breathes */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/92 to-primary/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,hsl(var(--yellow)/0.14),transparent_55%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:"linear-gradient(hsl(var(--yellow)) 1px,transparent 1px),linear-gradient(90deg,hsl(var(--yellow)) 1px,transparent 1px)",
        backgroundSize:"48px 48px",
      }} />

      <div className="relative z-10 container mx-auto px-4 py-24 text-primary-foreground">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

          {/* ─── LEFT ─── */}
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow text-yellow-foreground text-xs md:text-sm font-bold mb-6 shadow-lg">
              <Wrench className="h-4 w-4" />
              {siteConfig.company.name} — Montréal • {siteConfig.company.founded}
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
              {t("hero.title")}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-xl">
              {t("hero.subtitle")}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-lg bg-yellow text-yellow-foreground font-bold btn-press shadow-2xl text-base"
              >
                {t("hero.cta1")} <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-lg bg-white/10 backdrop-blur border border-white/30 text-white font-semibold btn-press"
              >
                <MessageCircle className="h-5 w-5" /> {t("hero.cta2")}
              </button>
            </div>

            {/* Trust strip */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
              {[
                { icon: ShieldCheck, key: "hero.badge.certified" as const },
                { icon: Clock,       key: "hero.badge.fast"      as const },
                { icon: Wrench,      key: "hero.badge.allBrands" as const },
              ].map(({ icon: Icon, key }) => (
                <div key={key} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                  <span className="h-9 w-9 rounded-lg bg-yellow/20 border border-yellow/40 flex items-center justify-center text-yellow">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-semibold">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── RIGHT : Premium Visual ─── */}
          <div className="hidden lg:block relative h-[520px]">
            <HeroVisual />
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-primary-foreground/60">
        <span className="text-xs uppercase tracking-widest">scroll</span>
        <span className="h-10 w-[2px] bg-gradient-to-b from-yellow to-transparent" />
      </div>

    </section>
  );
};

export default Hero;
