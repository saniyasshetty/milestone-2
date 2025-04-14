import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function FoodMenuCarousel() {
  const [swiper, setSwiper] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const menuItems = [
    {
      id: 1,
      name: "North Indian Combo",
      price: "185.71",
      description: "[Combo Item] Chana Bhature [Single Bhature]+Pulao+Samosa [Single]+Lassi",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/28613416B.png",
      category: "combo"
    },
    {
      id: 2,
      name: "Sandwich Combo",
      price: "204.76",
      description: "[Combo Item] Burger+Spicy Corn [Half]+French Fries+Watermelon Juice",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/r27q5xzizllsgx506g9f",
      category: "combo",
      tag: "SPICY"
    },
    {
      id: 3,
      name: "Chinese Combo",
      price: "223.81",
      description: "[Chef's Special] [Combo Item] Spicy noodles, fried rice with gravy, gobi manchurian and manchow soup",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/a63bkxwbx7joct9p3y1z",
      category: "combo"
    },
    {
      id: 4,
      name: "Tiramisu",
      price: "176.57",
      description: "[Dessert]",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/zvece1h7vo2jqtko8ato",
      category: "dessert"
    },
    {
      id: 5,
      name: "Tropical Dhamaka",
      price: "155.57",
      description: "[Dessert]",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/odfudrnwztwnev1qcaak",
      category: "dessert"
    },
    {
      id: 6,
      name: "Bee-hive",
      price: "166.33",
      description: "[Dessert]",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/gndkjiawzbqtvgwgdnn1",
      category: "dessert"
    },
    {
      id: 10,
      name: "Gadbad",
      price: "149.00",
      description: "[Dessert] A colorful layered ice cream delight with fruits and jelly",
      image: "https://english.varthabharati.in/storage/uploads/karavali/Pabbas_vb_22.jpeg", 
      category: "dessert"
    },
    {
      id: 11,
      name: "American Choconut",
      price: "165.00",
      description: "[Dessert] Chocolate and nuts blended in creamy frozen goodness",
      image: "https://aroundmangalore.com/wp-content/uploads/2014/02/IMG_20140130_193720.jpg", 
      category: "dessert"
    },
    {
      id: 12,
      name: "Parfait",
      price: "158.00",
      description: "[Dessert] Layers of yogurt, fruits, and granola served chilled",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4SED--XoQdH0IgKqGKqetOCqFLuxa1sNAA&s",
      category: "dessert"
    },
    {
      id: 7,
      name: "Samosa",
      price: "33",
      description: "",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ulovqrxdj4ftnxxatg9d",
      category: "snack"
    },
    {
      id: 8,
      name: "Cutlet",
      price: "38",
      description: "",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/qzqw8ljaiq994qta2kgc",
      category: "snack",
      tag: "BESTSELLER"
    },
    {
      id: 9,
      name: "Coffe",
      price: "32.38",
      description: "",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/tuejnudxnm9db0onnqqu",
      category: "Hot beverage"
    }
  ];
  

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const goNext = () => {
    if (swiper) swiper.slideNext();
  };

  const goPrev = () => {
    if (swiper) swiper.slidePrev();
  };

  return (
      <div className="bg-white max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
         <h3 className="text-green-600 font-medium text-lg mb-2">MENU</h3>
         <h2 className="text-gray-800 text-4xl font-bold mb-2">Our Delicious Offerings</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
        
          <div className="flex justify-center space-x-4 mb-8">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === 'all' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            All
          </button>

          <button 
            onClick={() => setActiveCategory('snack')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === 'snack' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Snacks
          </button>

          <button 
            onClick={() => setActiveCategory('combo')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === 'combo' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Combos
          </button>
          <button 
            onClick={() => setActiveCategory('dessert')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === 'dessert' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Desserts
          </button>

        </div>
      </div>
      
      <div className="relative">
        <Swiper
          onSwiper={setSwiper}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 }
          }}
          spaceBetween={20}
          modules={[Navigation]}
          className="py-8"
        >
          {filteredItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="absolute top-2 right-2">
                    <div className="bg-white p-1 rounded-md">
                      <div className="w-4 h-4 bg-green-600 rounded-sm"></div>
                    </div>
                  </div>
                  {item.tag && (
                    <div className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-bold text-white ${item.tag === 'SPICY' ? 'bg-red-500' : 'bg-orange-500'}`}>
                      {item.tag}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                    <span className="text-green-600 font-bold">₹{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  )}
                  <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md w-full hover:bg-green-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <button 
          onClick={goPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-green-600 border border-gray-200"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button 
          onClick={goNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-green-600 border border-gray-200"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}