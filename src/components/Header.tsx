import { ShoppingCart, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-200 to-pink-300 py-4 px-6 shadow-md w-full">

      {/* Logo */}
      <div className="w-full max-w-[1280px] flex items-center justify-between m-auto">
      <div className="flex items-center space-x-2">
     <img src="https://pabbasidealcafe.in/assets/config/logods.png" alt="" className="w-[100px] h-[100px]"/>
      </div>

      {/* Nav Links */}
      <nav className="flex space-x-6 text-white font-semibold text-sm">
        <div className="relative group">
          <span className="bg-orange-700 px-3 py-1 rounded-md cursor-pointer group-hover:bg-orange-800 transition-colors duration-200">Home ▾</span>
        </div>
        <div className="relative group cursor-pointer">Pages</div>
        <div className="relative group cursor-pointer">Blog</div>
        <div className="relative group cursor-pointer">Portfolio</div>
        <div className="relative group cursor-pointer">Shop</div>
        <div className="cursor-pointer">Contacts</div>
      </nav>

     {/* Icons and Button */}
<div className="flex items-center space-x-4">
  <div className="relative">
    <input
      type="text"
      placeholder="Search..."
      className="px-3 py-1 rounded-full border border-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
    />
    <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white w-4 h-4 cursor-pointer" />
  </div>
  <ShoppingCart className="text-white w-5 h-5 cursor-pointer" />
  <button className="bg-white text-orange-700 font-bold rounded-full px-6 py-2 hover:bg-orange-100">
    CALL ME NOW
  </button>
</div>


      </div>
    </header>
  );
}