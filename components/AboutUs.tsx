export default function AboutUs() {
  return (
    <section className="py-20 px-8 w-full max-w-5xl mx-auto my-16 bg-[#2c2c2c] text-[#fdfaf5] shadow-2xl rounded-2xl border-l-8 border-[#ffdf4f]" id="about">
      <h2 className="text-4xl font-extrabold mb-6 text-[#ffdf4f] drop-shadow-[0_0_10px_rgba(255,223,79,0.3)]">
        About Us
      </h2>
      <div className="space-y-6 text-lg leading-relaxed opacity-90">
        <p>
          Welcome to <span className="font-bold text-[#ffdf4f]">LUMI</span>N. We are dedicated to providing outstanding experiences built on a foundation of clean design and elegant solutions.
        </p>
        <p>
          Our journey began with a simple idea: blending the stark contrast of charcoal with the pristine clarity of soft white, tied together by a glowing touch of gold. This philosophy drives everything we create.
        </p>
        <button className="mt-8 px-8 py-3 bg-[#ffdf4f] text-[#2c2c2c] font-bold rounded-full hover:bg-[#ffe87f] hover:shadow-[0_0_15px_rgba(255,223,79,0.6)] transition-all">
          Learn More
        </button>
      </div>
    </section>
  );
}
