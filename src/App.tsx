import menuData from "./menu.json";
import type { MenuData } from "./types/menu";
import logo from "./assets/subba.jpg";
import bg from "./assets/bg.png";

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

  return (
    <div>
      {/* Mobile Image - Full Screen on Mobile */}
      <div className="block sm:hidden">
        <img
          src="/fullmobile.png"
          alt="Subba Restaurant Mobile Menu"
          className="w-screen h-auto object-cover"
        />
      </div>

      {/* Desktop Content - Hidden on Mobile */}
      <div className="hidden sm:block">
        <main className="">
          <div className="flex flex-col gap-[16px] m-[3%] sm:m-[6%] bg-[#312F30] h-full rounded-2xl p-[3%] sm:p-[5%] relative mt-[4%] sm:mt-[8%] mb-[0%]">
            <div className="bg-gradient-to-r from-[#FFAE01] to-[#E96B00] p-[15px] sm:p-[20px] py-[1%] rounded-2xl absolute top-[-60px] sm:top-[-80px] left-50 w-[90%] sm:w-[85%] flex justify-center items-center">
              <h1 className="text-[40px] sm:text-[60px] lg:text-[80px] text-white">
                Food Menu
              </h1>
            </div>
            <div className="w-full flex flex-col gap-[10px] mt-[4%] sm:mt-[6%] justify-center items-center relative h-[500px] sm:h-[650px]">
              <h1 className="text-[24px] sm:text-[28px] lg:text-[34px] z-10 font-semibold text-white text-center">
                Subba Restaurant
              </h1>
              <h1 className="text-[16px] sm:text-[18px] lg:text-[20px] z-10 text-white/60">
                since 2001
              </h1>

              <div className="flex justify-center items-center rounded-full bg-white p-[8px] sm:p-[10px] size-[280px] sm:size-[320px] lg:size-[350px] z-10">
                <img
                  src="/subba.jpg"
                  alt="Subba Logo"
                  className="w-[240px] h-[180px] sm:w-[280px] sm:h-[210px] lg:w-[300px] lg:h-[229px] rounded-full"
                />
              </div>
              <h1 className="text-[16px] sm:text-[18px] lg:text-[20px] z-10 text-white/70">
                17645676 / 1771821
              </h1>

              <img
                src="/bg.png"
                alt="bg Logo"
                className="absolute top-0 left-0 w-full border-2 border-white/10 rounded-[20px] h-[500px] sm:h-[650px] opacity-50"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[16px] m-[3%] sm:m-[6%] mb-[3%] bg-[#312F30] h-full rounded-b-[40px] p-[3%] sm:p-[5%] pb-[3%] relative">
            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-[16px]">
              <div className="flex flex-col gap-[10px]">
                <div className="border-2 border-white/10 rounded-[20px] size-[280px] sm:size-[320px] lg:size-[350px] p-2">
                  <img
                    src="/chicken.png"
                    alt="Chicken"
                    className="w-[260px] h-[250px] sm:w-[300px] sm:h-[290px] lg:w-[340px] lg:h-[330px] rounded-[12px]"
                  />
                </div>
                <div className="flex flex-col gap-[8px] my-[16px]">
                  <p className="text-[18px] sm:text-[20px] lg:text-[24px] text-white">
                    Chicken Cury
                  </p>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-white/50">
                    Rich pork curry with spices.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="border-2 border-white/10 rounded-[20px] size-[280px] sm:size-[320px] lg:size-[350px] p-2">
                  <img
                    src="/rice.png"
                    alt="Rice"
                    className="w-[260px] h-[250px] sm:w-[300px] sm:h-[290px] lg:w-[340px] lg:h-[330px] rounded-[12px]"
                  />
                </div>
                <div className="flex flex-col gap-[8px] my-[16px]">
                  <p className="text-[18px] sm:text-[20px] lg:text-[24px] text-white">
                    Fried Rice
                  </p>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-white/50">
                    Fried bread with mixed vegetables or meat
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <div className="border-2 border-white/10 rounded-[20px] size-[280px] sm:size-[320px] lg:size-[350px] p-2">
                  <img
                    src="/paneer.png"
                    alt="Paneer"
                    className="w-[260px] h-[250px] sm:w-[300px] sm:h-[290px] lg:w-[340px] lg:h-[330px] rounded-[12px]"
                  />
                </div>
                <div className="flex flex-col gap-[8px] my-[16px]">
                  <p className="text-[18px] sm:text-[20px] lg:text-[24px] text-white">
                    Chicken Masala
                  </p>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-white/50">
                    since 2001
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-[3%] sm:m-[6%] my-[0%] bg-gradient-to-r from-[#FFAE01] to-[#E96B00] p-[15px] sm:p-[20px] py-[1%] rounded-2xl h-[120px] sm:h-[150px] flex justify-center items-center">
            <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] text-white">
              Main Course
            </h1>
          </div>
          <div className="flex flex-col gap-[16px] m-[3%] sm:m-[6%] mt-[3%] bg-[#312F30] h-full rounded-t-[40px] p-[3%] sm:p-[5%] pb-[3%] relative">
            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-[16px]">
              <div className="flex flex-col gap-[10px]">
                <div className="border-2 border-white/10 rounded-[20px] size-[280px] sm:size-[320px] lg:size-[350px] p-2">
                  <img
                    src="/pork.png"
                    alt="Pork"
                    className="w-[260px] h-[250px] sm:w-[300px] sm:h-[290px] lg:w-[340px] lg:h-[330px] rounded-[12px]"
                  />
                </div>
                <div className="flex flex-col gap-[8px] my-[16px]">
                  <p className="text-[18px] sm:text-[20px] lg:text-[24px] text-white">
                    Chicken Masalas
                  </p>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-white/50">
                    since 2001
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <div className="border-2 border-white/10 rounded-[20px] size-[280px] sm:size-[320px] lg:size-[350px] p-2">
                  <img
                    src="/puri.png"
                    alt="Puri"
                    className="w-[260px] h-[250px] sm:w-[300px] sm:h-[290px] lg:w-[340px] lg:h-[330px] rounded-[12px]"
                  />
                </div>
                <div className="flex flex-col gap-[8px] my-[16px]">
                  <p className="text-[18px] sm:text-[20px] lg:text-[24px] text-white">
                    Chicken Masala
                  </p>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-white/50">
                    since 2001
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <div className="border-2 border-white/10 rounded-[20px] size-[280px] sm:size-[320px] lg:size-[350px] p-2">
                  <img
                    src="/datshi.png"
                    alt="Datshi"
                    className="w-[260px] h-[250px] sm:w-[300px] sm:h-[290px] lg:w-[340px] lg:h-[330px] rounded-[12px]"
                  />
                </div>
                <div className="flex flex-col gap-[8px] my-[16px]">
                  <p className="text-[18px] sm:text-[20px] lg:text-[24px] text-white">
                    Chicken Masala
                  </p>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-white/50">
                    since 2001
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-[3%] sm:m-[5%]">
            {/* Snacks Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mx-4 mb-4">
              <div className="bg-[#312F30] rounded-lg py-3 w-full sm:w-[90%]">
                <h3 className="text-white text-center text-[24px] sm:text-[30px]">
                  snacks
                </h3>
              </div>
              <div className="rounded-lg py-3 bg-[#312F30] w-full sm:w-[100%]">
                <h3 className="text-white text-center text-[24px] sm:text-[30px]">
                  Tea
                </h3>
              </div>
            </div>

            {/* Snacks Menu */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4 mb-4">
              <div className="space-y-3 relative">
                {snacksItems.map((item: any, index: number) => (
                  <div key={index} className="">
                    <h4 className="font-semibold text-[16px] sm:text-[18px] text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-[14px] sm:text-md">
                      {item.description}
                    </p>
                  </div>
                ))}
                <img
                  src="/snack.png"
                  alt="Datshi"
                  className="hidden sm:block w-[150px] sm:w-[200px] h-[280px] sm:h-[380px] rounded-[12px] absolute right-4 sm:right-20 top-10"
                />
              </div>
              <div className="space-y-3 relative">
                {hotDrinksItems.map((item: any, index: number) => (
                  <div key={index} className="">
                    <h4 className="font-semibold text-[16px] sm:text-[18px] text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-[14px] sm:text-md">
                      {item.description}
                    </p>
                  </div>
                ))}
                <img
                  src="/cups.png"
                  alt="Datshi"
                  className="hidden sm:block w-[200px] sm:w-[250px] h-[280px] sm:h-[380px] rounded-[12px] absolute right-4 sm:right-20 top-10"
                />
              </div>
            </div>
            {/* food Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mx-4 mb-4 mt-[3%] sm:mt-[5%]">
              <div className="rounded-lg py-3 bg-[#312F30] w-full sm:w-[90%]">
                <h3 className="text-white text-center text-[24px] sm:text-[30px]">
                  Breakfast
                </h3>
              </div>
              <div className="rounded-lg py-3 bg-[#312F30] w-full sm:w-[100%]">
                <h3 className="text-white text-center text-[24px] sm:text-[30px]">
                  Lunch & Dinner
                </h3>
              </div>
            </div>

            {/* food Menu */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4 pb-8">
              <div className="space-y-3 relative">
                {breakfast.map((item: any, index: number) => (
                  <div key={index} className="">
                    <h4 className="font-semibold text-[16px] sm:text-[18px] text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-[14px] sm:text-md">
                      {item.description}
                    </p>
                  </div>
                ))}
                <img
                  src="/breakfast.png"
                  alt="Datshi"
                  className="hidden sm:block w-[200px] sm:w-[300px] h-[160px] sm:h-[220px] rounded-[12px] absolute right-4 sm:right-20 top-20 sm:top-40"
                />
              </div>
              <div className="space-y-3 relative">
                {lunch.map((item: any, index: number) => (
                  <div key={index} className="">
                    <h4 className="font-semibold text-[16px] sm:text-[18px] text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-[14px] sm:text-md">
                      {item.description}
                    </p>
                  </div>
                ))}
                <img
                  src="/dina.png"
                  alt="Datshi"
                  className="hidden sm:block w-[200px] sm:w-[300px] rounded-[12px] absolute right-2 sm:right-5 top-10 sm:top-20"
                />
              </div>
            </div>
            <p className="p-4 sm:p-5 py-6 sm:py-8 bg-gray-100 rounded-lg text-[16px] sm:text-[18px] text-center mt-[3%] sm:mt-[5%]">
              <span className="font-bold">Notice:</span> If you have any health
              concerns, allergies, or dietary restrictions. please inform us
              when ordering.
            </p>

            <div className="my-[3%] sm:my-[5%] bg-gradient-to-r from-[#FFAE01] relative to-[#E96B00] p-[15px] sm:p-[20px] py-[1%] rounded-2xl h-[100px] sm:h-[150px] flex justify-center items-center">
              <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] text-white z-10">
                Alcoholic Beverages
              </h1>
              <img
                src="/al1.png"
                alt="Datshi"
                className="hidden sm:block w-[200px] sm:w-[300px] rounded-[12px] absolute left-2 sm:left-5 bottom-0"
              />
              <img
                src="/al2.png"
                alt="Datshi"
                className="hidden sm:block w-[200px] sm:w-[300px] rounded-[12px] absolute right-2 sm:right-5 bottom-0"
              />
            </div>

            {/* Drinks Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mx-4 mb-4">
              <div className="rounded-lg py-3 bg-[#312F30] w-full sm:w-[90%]">
                <h3 className="text-white text-center text-[24px] sm:text-[30px]">
                  whiskey
                </h3>
              </div>
              <div className="rounded-lg py-3 bg-[#312F30] w-full sm:w-[100%]">
                <h3 className="text-white text-center text-[24px] sm:text-[30px]">
                  Beer
                </h3>
              </div>
            </div>

            {/* Drinks Menu */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4 pb-8">
              <div className="space-y-3">
                {drinksItems.whiskey.map((item: any, index: number) => (
                  <div key={index} className="">
                    <h4 className="font-semibold text-[16px] sm:text-[18px] text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-[14px] sm:text-md">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {drinksItems.beer.map((item: any, index: number) => (
                  <div key={index} className="">
                    <h4 className="font-semibold text-[16px] sm:text-[18px] text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-[14px] sm:text-md">
                      {item.description}
                    </p>
                  </div>
                ))}
                <div className="rounded-lg py-3 bg-[#312F30] w-full sm:w-[100%]">
                  <h3 className="text-[20px] sm:text-[30px] text-white text-center">
                    Wine
                  </h3>
                </div>
                {drinksItems.wine.map((item: any, index: number) => (
                  <div key={index} className="">
                    <h4 className="font-semibold text-[16px] sm:text-[18px] text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-[14px] sm:text-md">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <footer className="w-full text-center h-[200px] sm:h-[300px] bg-[#312F30] text-white flex items-center justify-center text-[16px] sm:text-[18px] flex flex-col gap-[8px]">
          <p>street name | Phuentsholing | chukha | Bhutan</p>
          <div className="text-[12px] sm:text-[14px] text-white/60">
            © 2025 Subba Restaurant. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
