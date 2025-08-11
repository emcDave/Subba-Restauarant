import menuData from "./menu.json";
import type { MenuData } from "./types/menu";

const App: React.FC = () => {
  const data: MenuData = menuData;

  const snacksItems = (data.Snacks as any)?.Snacks || [];

  const hotDrinksItems = (data.Tea as any)?.Tea || [];
  const breakfast = (data["Main Course"] as any)?.Breakfast || [];
  const lunch = (data["Main Course"] as any)?.Lunch || [];

  const drinksItems = {
    whiskey: (data.Drinks as any)?.Whiskey || [],
    beer: (data.Drinks as any)?.Beer || [],
    wine: (data.Drinks as any)?.Wine || [],
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "77626862"; // Using the first contact number from the footer
    const message = "Hello! I'd like to order from Subba Restaurant.";
    const whatsappUrl = `https://wa.me/${phoneNumber}}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      <main className="">
        <div className="flex flex-col gap-[16px] m-[6%] bg-[#312F30] h-full rounded-2xl p-[5%] relative mt-[8%] mb-[0%]">
          <div className="bg-gradient-to-r from-[#FFAE01] to-[#E96B00] p-[20px] py-[1%] rounded-2xl absolute top-[-30px] left-7 sm:top-[-80px] sm:left-20 w-[85%] flex justify-center items-center">
            <h1 className="text-[40px]  sm:text-[80px] text-white">
              Food Menu
            </h1>
          </div>
          <div className="w-full flex flex-col gap-[10px] mt-[6%] justify-center items-center relative h-[450px]">
            <h1 className="text-[20px] sm:text-[34px] z-10 font-semibold text-white text-center">
              Subba Restaurant
            </h1>
            <h1 className="text-[16px] sm:text-[20px] z-10 text-white/60">
              since 2001
            </h1>

            <div className="flex justify-center items-center rounded-full bg-white p-[10px] size-[200px] sm:size-[350px] z-10">
              <img
                src="/subba.jpg"
                alt="Subba Logo"
                className="w-[200px] sm:w-[300px] h-[150px] sm:h-[229px] rounded-full"
              />
            </div>
            <h1 className="text-[16px] sm:text-[20px] z-10 text-white/70">
              77861149 / 77626862
            </h1>

            <img
              src="/bg.png"
              alt="bg Logo"
              className="absolute top-0 left-0 w-full border-2 border-white/10 rounded-[20px] h-[450px] opacity-50"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[16px] m-[6%] mb-[3%] bg-[#312F30] h-full rounded-b-[40px] p-[5%] pb-[3%] relative">
          <div className="w-full flex justify-between items-start sm:items-center">
            <div className="flex flex-col gap-[10px]">
              <div className="border-2 border-white/10 rounded-[20px] size-[100px] sm:size-[350px] p-2">
                <img
                  src="/chicken.png"
                  alt="Chicken"
                  className="w-[90px] sm:w-[340px] h-[80px] sm:h-[330px] rounded-[12px]"
                />
              </div>
              <div className="flex flex-col gap-[8px] my-[16px]">
                <p className="text-[16px] sm:text-[24px] text-white">
                  Chicken Curry
                </p>
                <p className="text-[12px] sm:text-[18px] text-white/50 hidden sm:block">
                  Rich chicken curry with spices.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="border-2 border-white/10 rounded-[20px] size-[100px] sm:size-[350px] p-2">
                <img
                  src="/rice.png"
                  alt="Rice"
                  className="w-[90px] sm:w-[340px] h-[80px] sm:h-[330px] rounded-[12px]"
                />
              </div>
              <div className="flex flex-col gap-[8px] my-[16px]">
                <p className="text-[16px] sm:text-[24px] text-white">
                  Fried Rice
                </p>
                <p className="text-[12px] sm:text-[18px] text-white/50 hidden sm:block">
                  Fried rice with mixed vegetables or meat
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[10px]">
              <div className="border-2 border-white/10 rounded-[20px] size-[100px] sm:size-[350px] p-2">
                <img
                  src="/paneer.png"
                  alt="Paneer"
                  className="w-[90px] sm:w-[340px] h-[80px] sm:h-[330px] rounded-[12px]"
                />
              </div>
              <div className="flex flex-col gap-[8px] my-[16px]">
                <p className="text-[16px] sm:text-[24px] text-white">
                  Paneer Curry
                </p>
                <p className="text-[12px] sm:text-[18px] text-white/50 hidden sm:block w-[90px] sm:w-auto">
                  Fresh cottage cheese in rich gravy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="m-[6%] my-[0%] bg-gradient-to-r from-[#FFAE01] to-[#E96B00] p-[20px] py-[1%] rounded-2xl h-[80px] sm:h-[150px] flex justify-center items-center">
          <h1 className="text-[20px] sm:text-[50px] text-white">Main Course</h1>
        </div>
        <div className="flex flex-col gap-[16px] m-[6%] mt-[3%] bg-[#312F30] h-full rounded-t-[40px] p-[5%] pb-[3%] relative">
          <div className="w-full flex justify-between items-start sm:items-center">
            <div className="flex flex-col gap-[10px]">
              <div className="border-2 border-white/10 rounded-[20px] size-[100px] sm:size-[350px] p-2">
                <img
                  src="/pork.png"
                  alt="Pork"
                  className="w-[90px] sm:w-[340px] h-[80px] sm:h-[330px] rounded-[12px]"
                />
              </div>
              <div className="flex flex-col gap-[8px] my-[16px]">
                <p className="text-[16px] sm:text-[24px] text-white">
                  Pork Curry
                </p>
                <p className="text-[12px] sm:text-[18px] text-white/50 hidden sm:block">
                  Tender pork in aromatic spices
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[10px]">
              <div className="border-2 border-white/10 rounded-[20px] size-[100px] sm:size-[350px] p-2">
                <img
                  src="/puri.png"
                  alt="Puri"
                  className="w-[90px] sm:w-[340px] h-[80px] sm:h-[330px] rounded-[12px]"
                />
              </div>
              <div className="flex flex-col gap-[8px] my-[16px]">
                <p className="text-[16px] sm:text-[24px] text-white">
                  Puri Bread
                </p>
                <p className="text-[12px] sm:text-[18px] text-white/50 hidden sm:block">
                  Traditional fried bread
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[10px]">
              <div className="border-2 border-white/10 rounded-[20px] size-[100px] sm:size-[350px] p-2">
                <img
                  src="/datshi.png"
                  alt="Datshi"
                  className="w-[90px] sm:w-[340px] h-[80px] sm:h-[330px] rounded-[12px]"
                />
              </div>
              <div className="flex flex-col gap-[8px] my-[16px]">
                <p className="text-[16px] sm:text-[24px] text-white">
                  Ema Datshi
                </p>
                <p className="text-[12px] sm:text-[18px] text-white/50 hidden sm:block">
                  Bhutan's national dish
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="m-[5%]">
          {/* Snacks Sections */}
          {/* Desktop/Web Titles */}
          <div className="grid grid-cols-2 gap-2 mx-4 mb-4 hidden sm:grid">
            <div className="bg-[#312F30] rounded-lg py-3 w-[90%]">
              <h3 className="text-white text-center text-[20px] sm:text-[30px]">
                Snacks
              </h3>
            </div>
            <div className="rounded-lg py-3 bg-[#312F30] w-[100%]">
              <h3 className="text-white text-center text-[20px] sm:text-[30px]">
                Tea & Coffee
              </h3>
            </div>
          </div>

          {/* Snacks Menu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4 mb-4">
            <div className="space-y-3 relative">
              {/* Mobile Title */}
              <div className="bg-[#312F30] rounded-lg py-3 w-full mb-2 sm:hidden">
                <h3 className="text-white text-center text-[20px]">Snacks</h3>
              </div>
              {snacksItems.map((item: any, index: number) => (
                <div key={index} className="">
                  <h4 className="font-semibold text-[18px] text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-md">{item.description}</p>
                </div>
              ))}
              <img
                src="/snack.png"
                alt="Snacks"
                className="h-[280px] sm:w-[200px] sm:h-[380px] rounded-[12px] absolute right-0 top-20 sm:top-10"
              />
            </div>
            <div className="space-y-3 relative">
              {/* Mobile Title */}
              <div className="bg-[#312F30] rounded-lg py-3 w-full mb-2 sm:hidden">
                <h3 className="text-white text-center text-[20px]">
                  Tea & Coffee
                </h3>
              </div>
              {hotDrinksItems.map((item: any, index: number) => (
                <div key={index} className="">
                  <h4 className="font-semibold text-[18px] text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-md">{item.description}</p>
                </div>
              ))}
              <img
                src="/cups.png"
                alt="Tea Cups"
                className="w-[150px] sm:w-[250px]  h-[280px] sm:h-[380px] rounded-[12px] absolute right-5 sm:right-20 top-[150px] sm:top-10"
              />
            </div>
          </div>
          {/* Food Sections */}
          {/* Desktop/Web Titles */}
          <div className="grid grid-cols-2 gap-2 mx-4 mb-4 mt-[5%] hidden sm:grid">
            <div className="rounded-lg py-3 bg-[#312F30] w-[90%]">
              <h3 className="text-white text-center text-[20px] sm:text-[30px]">
                Breakfast
              </h3>
            </div>
            <div className="rounded-lg py-3 bg-[#312F30] w-[100%]">
              <h3 className="text-white text-center text-[20px] sm:text-[30px]">
                Lunch & Dinner
              </h3>
            </div>
          </div>

          {/* Food Menu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4 pb-8">
            <div className="space-y-3 relative">
              {/* Mobile Title */}
              <div className="bg-[#312F30] rounded-lg py-3 w-full mb-2 sm:hidden">
                <h3 className="text-white text-center text-[20px]">
                  Breakfast
                </h3>
              </div>
              {breakfast.map((item: any, index: number) => (
                <div key={index} className="">
                  <h4 className="font-semibold text-[18px] text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-md">{item.description}</p>
                </div>
              ))}
              <img
                src="/breakfast.png"
                alt="Breakfast"
                className="w-[200px] sm:w-[300px] h-[145px] sm:h-[220px] rounded-[12px] absolute right-[-50px] sm:right-20 top-[400px] sm:top-40"
              />
            </div>
            <div className="space-y-3 relative">
              {/* Mobile Title */}
              <div className="bg-[#312F30] rounded-lg py-3 w-full mb-2 sm:hidden">
                <h3 className="text-white text-center text-[20px]">
                  Lunch & Dinner
                </h3>
              </div>
              {lunch.map((item: any, index: number) => (
                <div key={index} className="">
                  <h4 className="font-semibold text-[18px] text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-md">{item.description}</p>
                </div>
              ))}
              <img
                src="/dina.png"
                alt="Dinner"
                className="w-[200px] sm:w-[300px] rounded-[12px] absolute right-0 sm:right-5 top-[200px] sm:top-20"
              />
            </div>
          </div>
          <p className="p-5 py-8 bg-gray-100 rounded-lg text-[18px] text-center mt-[5%]">
            <span className="font-bold">Notice:</span> If you have any health
            concerns, allergies, or dietary restrictions, please inform us when
            ordering.
          </p>

          <div className="my-[5%] bg-gradient-to-r from-[#FFAE01] relative to-[#E96B00] p-[20px] py-[1%] rounded-2xl h-[150px] flex justify-center items-center">
            <h1 className="text-[30px] sm:text-[50px] text-bold text-white z-20">
              Alcoholic Beverages
            </h1>
            <img
              src="/al1.png"
              alt="Alcohol 1"
              className="h-[80px] sm:h-auto w-auto sm:w-[300px] rounded-[12px] absolute left-5 bottom-0"
            />
            <img
              src="/al2.png"
              alt="Alcohol 2"
              className="h-[80px] sm:h-auto w-auto sm:w-[300px] rounded-[12px] absolute right-5 bottom-0"
            />
          </div>

          {/* Drinks Sections */}
          {/* Desktop/Web Titles */}
          <div className="grid grid-cols-2 gap-2 mx-4 mb-4 hidden sm:grid">
            <div className="rounded-lg py-3 bg-[#312F30] w-[90%]">
              <h3 className="text-white text-center text-[20px] sm:text-[30px]">
                Whiskey
              </h3>
            </div>
            <div className="rounded-lg py-3 bg-[#312F30] w-[100%]">
              <h3 className="text-white text-center text-[20px] sm:text-[30px]">
                Beer & Wine
              </h3>
            </div>
          </div>

          {/* Drinks Menu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4 pb-8">
            <div className="space-y-3">
              {/* Mobile Title */}
              <div className="bg-[#312F30] rounded-lg py-3 w-full mb-2 sm:hidden">
                <h3 className="text-white text-center text-[20px]">Whiskey</h3>
              </div>
              {drinksItems.whiskey.map((item: any, index: number) => (
                <div key={index} className="">
                  <h4 className="font-semibold text-[18px] text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-md">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {/* Mobile Title */}
              <div className="bg-[#312F30] rounded-lg py-3 w-full mb-2 sm:hidden">
                <h3 className="text-white text-center text-[20px]">
                  Beer & Wine
                </h3>
              </div>
              {drinksItems.beer.map((item: any, index: number) => (
                <div key={index} className="">
                  <h4 className="font-semibold text-[18px] text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-md">{item.description}</p>
                </div>
              ))}
              <div className="rounded-lg py-3 bg-[#312F30] w-[100%] mt-6 hidden sm:block">
                <h3 className="text-white text-center text-[20px] sm:text-[30px]">
                  Wine
                </h3>
              </div>
              {/* Mobile Title for Wine */}
              <div className="bg-[#312F30] rounded-lg py-3 w-full mb-2 sm:hidden mt-6">
                <h3 className="text-white text-center text-[20px]">Wine</h3>
              </div>
              {drinksItems.wine.map((item: any, index: number) => (
                <div key={index} className="">
                  <h4 className="font-semibold text-[18px] text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-md">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full text-center h-[300px] bg-[#312F30] text-white flex items-center justify-center text-[18px] flex flex-col gap-[8px]">
        <p>Street Name | Phuentsholing | Chukha | Bhutan</p>
        <p>email: subbarestaurant@gmail.com | contact: 77861149 / 77626862</p>

        <div className="text-[14px] text-white/60">
          © 2025 Subba Restaurant. All rights reserved.
        </div>
      </footer>
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 sm:bottom-20 sm:right-20 bg-green-500 text-white p-3 rounded-full shadow-lg z-50"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="w-10 h-10" />
      </button>
    </div>
  );
};

export default App;
