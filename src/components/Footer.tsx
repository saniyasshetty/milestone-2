import { MapPin, Phone, Mail, Twitter, Facebook, Send, Linkedin } from 'lucide-react';

export default function RestaurantFooter() {
  return (
    <footer className="bg-black text-white py-16 relative">
      {/* Torn paper effect at the top */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-black">
        <div className="w-full h-4 bg-white" style={{
          maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1000 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,100 C150,30 350,70 500,50 C650,30 850,70 1000,0 L1000,100 L0,100 Z\' fill=\'%23000\'/%3E%3C/svg%3E")',
          maskSize: '100% 100%',
          maskPosition: 'bottom',
          maskRepeat: 'no-repeat',
          transform: 'rotate(180deg)'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact Information - Left Side */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-6">Dont Be Shy, Say HI!</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-amber-500 mr-3" size={20} />
                <p>27 Hampankatta, NY 10002, Manglore</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-amber-500 mr-3" size={20} />
                <p>+ 8 (123) 578 987 455</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-amber-500 mr-3" size={20} />
                <p>Idealcafe.com</p>
              </div>
            </div>
            
            {/* Logo */}
            <div className="mt-8">
              <svg width="140" height="80" viewBox="0 0 140 80" className="text-amber-500">
                <path
                  fill="currentColor"
                  d="M70,15 C85,15 100,20 110,30 C120,40 125,50 120,60 C115,70 90,70 70,70 C50,70 25,70 20,60 C15,50 20,40 30,30 C40,20 55,15 70,15 Z"
                />
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                  d="M30,65 C50,75 90,75 110,65 M30,70 C50,80 90,80 110,70"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Empty Middle Section for Spacing */}
          <div className="hidden md:block md:w-1/6"></div>

          {/* Opening Hours - Right Side */}
          <div className="mt-10 md:mt-0 md:w-1/2">
            <h3 className="text-xl font-bold mb-6">Opening Hours</h3>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-2">Monday</td>
                  <td className="text-center">...................................</td>
                  <td className="text-amber-500 py-2">8.00 AM - 10.00 PM</td>
                </tr>
                <tr>
                  <td className="py-2">Tuesday</td>
                  <td className="text-center">...................................</td>
                  <td className="text-amber-500 py-2">8.00 AM - 10.00 PM</td>
                </tr>
                <tr>
                  <td className="py-2">Wednesday</td>
                  <td className="text-center">...................................</td>
                  <td className="text-amber-500 py-2">8.00 AM - 10.00 PM</td>
                </tr>
                <tr>
                  <td className="py-2">Thursday</td>
                  <td className="text-center">...................................</td>
                  <td className="text-amber-500 py-2">8.00 AM - 10.00 PM</td>
                </tr>
                <tr>
                  <td className="py-2">Friday</td>
                  <td className="text-center">...................................</td>
                  <td className="text-amber-500 py-2">8.00 AM - 10.00 PM</td>
                </tr>
                <tr>
                  <td className="py-2">Saturday</td>
                  <td className="text-center">...................................</td>
                  <td className="text-amber-500 py-2">8.00 AM - 10.00 PM</td>
                </tr>
                <tr>
                  <td className="py-2">Sunday</td>
                  <td className="text-center">............................................</td>
                  <td className="text-amber-500 py-2">CLOSED</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-400">Copyright © 2025 Ideals 
              <a href="#" className="text-white hover:text-amber-500 ml-1">Cafe</a>. All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-500 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              <Send size={20} />
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}