<div className="relative w-full h-full flex items-center justify-center">

  {/* Glow background */}
  <div className="absolute w-[500px] h-[500px] bg-yellow-400/10 blur-[100px] rounded-full" />

  {/* Grid subtle */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

  {/* Car block */}
  <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
      
      <img
        src="/car-premium.png"
        alt="Voiture"
        className="w-[380px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
      />

    </div>

    {/* Glow under car */}
    <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[250px] h-[60px] bg-yellow-400/20 blur-2xl rounded-full" />
  </div>

  {/* Floating badges */}
  <div className="absolute top-10 right-10 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-white animate-[float_5s_ease-in-out_infinite]">
    Certifié ✔
  </div>

  <div className="absolute bottom-16 right-16 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-white animate-[float_5s_ease-in-out_infinite_0.2s]">
    Service rapide ⚡
  </div>

  <div className="absolute top-1/2 left-10 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-white animate-[float_5s_ease-in-out_infinite_0.4s]">
    Toutes marques
  </div>

  {/* Keyframes inline safe */}
  <style>
    {`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
    `}
  </style>

</div>
