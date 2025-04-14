

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-pink-300 to-pink-500 relative overflow-hidden px-6 py-16 md:py-24">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side Text */}
        <div className="text-center md:text-left max-w-xl">
          <span className="bg-orange-700 text-white px-3 py-1 rounded-md text-sm font-semibold inline-block mb-4">FOOD TIME</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
           MILY WAY TO<br />YOUR HEART
          </h1>
          <ul className="text-white text-lg space-y-2 mb-8 font-semibold">
            <li className="flex items-center space-x-2">
              <span className="text-orange-700 text-xl">⬤</span>
              <span>ICECREAMS</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-orange-700 text-xl">⬤</span>
              <span>BEST QUALITY VEGETABLES</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-orange-700 text-xl">⬤</span>
              <span>MOZZARELLA CHEESE</span>
            </li>
          </ul>
          <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-orange-700 font-bold transition duration-300">
            I WANT ICECREAM
          </button>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/src/assets/pabbas.png"
            alt="Stacked Burger"
            className="w-full max-w-md mx-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
