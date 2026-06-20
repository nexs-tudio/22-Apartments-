export default function AboutUs() {
  return (
    <section className="py-20 px-8 w-full max-w-5xl mx-auto my-16 bg-[#f4ecdf] text-[#1c1c1c] shadow-2xl rounded-2xl border-l-8 border-[#cca752]" id="about">
      <h2 className="text-4xl font-extrabold mb-6 text-[#cca752]">
        About Us
      </h2>
      <div className="space-y-6 text-lg leading-relaxed opacity-90">
        <p>
          Welcome to <span className="font-serif italic text-xl mr-1 text-[#cca752] drop-shadow-[0_0_2px_rgba(204,167,82,0.3)]">22</span><span className="font-bold tracking-widest uppercase">Apartments</span>. We are dedicated to providing outstanding living experiences built on a foundation of modern luxury and elegant residential solutions.
        </p>
        <p>
          Our journey began with a simple idea: blending the stark contrast of charcoal with the pristine clarity of soft white, tied together by a glowing touch of gold. This philosophy drives everything we create.
        </p>
        <button className="mt-8 px-8 py-3 bg-[#1c1c1c] text-[#f4ecdf] font-bold rounded-full hover:bg-[#2a2a2a] transition-all">
          Learn More
        </button>
      </div>
    </section>
  );
}
