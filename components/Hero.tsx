export const Hero = () => {
  return (
    <div className="text-center max-w-2xl flex flex-col items-center">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
        Embrace the <span className="text-[#D4AF37]" style={{ textShadow: "0 0 15px rgba(212,175,55,0.8)" }}>Glowing</span> Simplicity
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
        A beautifully minimal focal point styled in our signature soft white and radiant gold. Designed to shine without the clutter.
      </p>
      <button className="px-8 py-3 bg-[#D4AF37] text-white font-bold text-lg rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] hover:shadow-[0_0_25px_rgba(212,175,55,1)] hover:scale-105 transition-all duration-300">
        Start Exploring
      </button>
    </div>
  );
};
