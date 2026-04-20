const HeroVisual = () => {
  return (
    <div className="relative w-full h-full min-h-[520px] flex items-center justify-center overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-[600px] h-[600px] bg-yellow-400/10 blur-[120px] rounded-full" />

      {/* Grid tech background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Main car container */}
      <div className="relative z-10 animate-float">

        {/* Glass card effect */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">

          {/* Car image */}
          <img
            src="/car-premium.png" // 👉 remplace par une vraie image premium
            alt="Car"
            className="w-[420px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)]"
          />

        </div>

        {/* Glow under car */}
        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[300px] h-[80px] bg-yellow-400/20 blur-3xl rounded-full" />
      </div>

      {/* Floating badges */}
      <div className="absolute top-10 right-10 glass-badge">
        Certifié ✔
      </div>

      <div className="absolute bottom-16 right-20 glass-badge delay-200">
        Service rapide ⚡
      </div>

      <div className="absolute top-1/2 left-10 glass-badge delay-500">
        Toutes marques
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .glass-badge {
          backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 10px 16px;
          border-radius: 999px;
          font-size: 14px;
          color: white;
          animation: float 5s ease-in-out infinite;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
};
