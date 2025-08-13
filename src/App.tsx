import menuData from "./menu.json";

const App: React.FC = () => {
  const data: any = menuData;

  // Fix data access patterns to match the actual JSON structure
  const snacksItems = data.Snacks?.Snacks || [];
  const hotDrinksItems = data.Tea?.Tea || [];
  const breakfast = data["Main Course"]?.Breakfast || [];
  const nepalThaliVeg = data["Nepali Thali"]?.Veg || [];
  const nepalThali = data["Nepali Thali"]?.NonVeg || [];
  const chinese = data["Chinese Dish"]?.Chinese || [];
  const samyangFlavors = data["Samyang Noodles"]?.Flavors || [];
  const speciality = data["Speciality"]?.Speciality || [];

  const lunchDinner = data["Main Course"]?.["Lunch & Dinner"] || [];

  const drinksItems = {
    whiskey: data.Drinks?.Whiskey || [],
    beer: data.Drinks?.Beer || [],
    wine: data.Drinks?.Wine || [],
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "77626862";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      <main className="">
        <div className="flex flex-col gap-[16px] m-[6%] bg-[#312F30] h-full rounded-2xl p-[5%] relative mt-[8%] mb-[0%]">
          <div className="bg-gradient-to-r from-[#065F46] to-[#047857]  p-[20px] py-[3%] sm:py-[1%] rounded-2xl absolute top-[-30px] left-0 sm:top-[-80px] sm:left-20 w-[100%] sm:w-[85%] flex justify-center items-center">
            <h1 className="text-[20px] sm:text-[80px] text-white">Food Menu</h1>
          </div>
          <div className="w-full flex flex-col gap-[10px] mt-[6%] justify-center items-center relative h-[450px] sm:h-[650px]">
            <h1 className="text-[18px] sm:text-[34px] z-10 font-semibold text-white text-center">
              Subba Restaurant
            </h1>
            <h1 className="text-[14px] sm:text-[20px] z-10 text-white/60">
              since 2000
            </h1>

            <div className="flex justify-center items-center rounded-full bg-white p-[10px] size-[200px] sm:size-[350px] z-10">
              <img
                src="/subba.jpg"
                alt="Subba Logo"
                className="w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full object-cover"
              />
            </div>
            <h1 className="text-[14px] sm:text-[20px] z-10 text-white/70">
              77861149 / 77626862
            </h1>

            <img
              src="/bg.png"
              alt="bg Logo"
              className="hidden sm:block absolute top-0 left-0 w-full border-2 border-white/10 rounded-[20px] h-[450px] sm:h-[650px] opacity-50"
            />
            <img
              src="/bgsm.png"
              alt="bg Logo"
              className="block sm:hidden absolute top-0 left-0 w-full border-2 border-white/10 rounded-[20px] h-[450px] sm:h-[650px] opacity-50"
            />
          </div>
        </div>

        <div className="m-[3%] sm:m-[5%]">
          {/* Food Sections */}

          {/* Desktop/Web Titles */}
          <div className="grid grid-cols-2 gap-2 mx-4 mb-4 mt-[5%] hidden sm:grid">
            <div className="rounded-lg py-3 bg-[#312F30] w-[90%]">
              <h3 className="text-white text-center text-[16px] sm:text-[30px]">
                Breakfast
              </h3>
            </div>
            <div className="rounded-lg py-3 bg-[#312F30] w-[100%]">
              <h3 className="text-white text-center text-[16px] sm:text-[30px]">
                Main Course
              </h3>
            </div>
            <div></div>
          </div>

          {/* Food Menu */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-4 mx-2 sm:mx-4 pb-8">
            <div className="bg-gradient-to-r from-[#065F46]  col-span-2 to-[#047857] rounded-md py-2 sm:py-3 w-full mt-6 sm:mt-0 mb-1 sm:mb-2 sm:hidden h-[60px] sm:h-[150px]  flex justify-center items-center">
              <h3 className="text-white text-center text-[18px]">Breakfast</h3>
            </div>
            <div className="space-y-2 sm:space-y-4 relative min-h-[200px] sm:min-h-[600px] px-3 sm:px-0">
              {/* Mobile Title */}
              {/* <div className="bg-gradient-to-r from-[#065F46]  to-[#047857] rounded-md py-2 sm:py-3 w-full mt-6 sm:mt-0 mb-1 sm:mb-2 sm:hidden">
                <h3 className="text-white text-center text-[14px]">
                  Breakfast
                </h3>
              </div> */}
              {breakfast.map((item: string, index: number) => (
                <div key={index} className="">
                  <h4 className="font-semibold text-[10px] sm:text-[18px] text-gray-800">
                    {item}
                  </h4>
                </div>
              ))}
              <img
                src="/breakfast.png"
                alt="Breakfast"
                className="hidden sm:block w-[80px] sm:w-[300px] h-[50px] sm:h-[220px] rounded-[12px] absolute right-[-20px] sm:right-20 top-[120px] sm:top-40"
              />
            </div>
            <div className="w-full h-full flex justify-center items-end sm:hidden">
              <div className="grid grid-cols-2 gap-2">
                <img
                  src="/restaurant_icon_33.jpg"
                  alt="Restaurant Icon 1"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_icon_34.jpg"
                  alt="Restaurant Icon 2"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_icon_35.jpg"
                  alt="Restaurant Food 1"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_icon_36.jpg"
                  alt="Restaurant Food 2"
                  className="w-full h-[60px] rounded-lg object-cover"
                />

                <img
                  src="/restaurant_icon_38.jpg"
                  alt="Restaurant Food 2"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_icon_39.jpg"
                  alt="Restaurant Food 2"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_icon_40.jpg"
                  alt="Restaurant Food 2"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_icon_41.jpg"
                  alt="Restaurant Food 2"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#065F46]  to-[#047857] col-span-2 rounded-md py-2 sm:py-3 w-full mt-3 sm:my-2 sm:hidden h-[60px] sm:h-[150px]  flex justify-center items-center">
              <h3 className="text-white text-center text-[18px]">
                Main Course
              </h3>
            </div>
            <div className="space-y-2 sm:space-y-4 relative col-span-1 sm:col-span-1  mt-6 sm:mt-0 px-3 sm:px-0">
              {/* Mobile Title */}

              {lunchDinner.map((item: string, index: number) => (
                <div key={index} className="">
                  <h4 className="font-semibold text-[10px] sm:text-[18px] text-gray-800">
                    {item}
                  </h4>
                </div>
              ))}
              <img
                src="/dina.png"
                alt="Dinner"
                className="hidden sm:block w-[80px] sm:w-[300px] rounded-[12px] absolute right-0 sm:right-5 top-[80px] sm:top-20"
              />
            </div>
            <div className="w-full h-full flex justify-center items-end sm:hidden">
              <div className="grid grid-cols-2 gap-2">
                <img
                  src="/restaurant_icon_23.jpg"
                  alt="Restaurant Icon 1"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/datshi.png"
                  alt="Restaurant Icon 3"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/pork.png"
                  alt="Restaurant Food 3"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_icon_22.jpg"
                  alt="Restaurant Icon 2"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/sp1.jpg"
                  alt="Restaurant Food 1"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_icon_27.jpg"
                  alt="Restaurant Food 2"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_food_12.jpg"
                  alt="Restaurant Icon 3"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_food_11.jpg"
                  alt="Restaurant Food 3"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Nepali Thali Section */}

          <div className="my-[5%] bg-gradient-to-r from-[#065F46] relative to-[#047857] p-[10px] py-[1%] rounded-2xl h-[60px] sm:h-[150px]  flex justify-center items-center">
            <h1 className="text-[18px] sm:text-[50px] text-bold text-white z-20">
              Nepali Thali
            </h1>
          </div>

          {/* Nepali Thali Menu */}
          <div className="w-full mx-2 sm:mx-4 pb-8 flex flex-col sm:flex-row gap-2 sm:gap-4 ">
            <div className="space-y-2 sm:space-y-8 relative w-full">
              <div className="bg-[#312F30] rounded-lg py-2 sm:py-3 w-[95%] mb-2 sm:mb-4">
                <h3 className="text-white text-center text-[14px] sm:text-[30px]">
                  Vegetarian Thali
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-6 justify-center ">
                {nepalThaliVeg.map((item: string, index: number) => (
                  <div key={index} className="text-center flex-shrink-0">
                    <div className="w-16 h-16 sm:w-[150px] sm:h-[150px] mt-2 sm:mt-[30px] mx-auto mb-2 sm:mb-3 rounded-full border-2 border-[#065F46] overflow-hidden">
                      <img
                        src={`/nepal_${index + 1}.png`}
                        alt={item}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-[10px] sm:text-[16px] text-gray-800 text-center max-w-[90px] sm:max-w-[200px] ">
                      {item}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2 sm:space-y-8 relative w-full mt-6 sm:mt-0">
              <div className="bg-[#312F30] rounded-lg py-2 sm:py-3 w-[95%] mb-2 sm:mb-4">
                <h3 className="text-white text-center text-[14px] sm:text-[30px]">
                  Non-Vegetarian Thali
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-6 justify-center ">
                {nepalThali.map((item: string, index: number) => (
                  <div key={index} className="text-center flex-shrink-0">
                    <div className="w-16 h-16 sm:w-[150px] sm:h-[150px] mt-2 sm:mt-[30px] mx-auto mb-2 sm:mb-3 rounded-full border-2 border-[#065F46] overflow-hidden">
                      <img
                        src={`/nepalN_${index + 1}.jpg`}
                        alt={item}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-[10px] sm:text-[16px] text-gray-800 text-center">
                      {item}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Snacks Sections */}

          <div className="my-[5%] bg-gradient-to-r from-[#065F46] relative to-[#047857] p-[10px] py-[1%] rounded-2xl h-[60px] sm:h-[150px]  flex justify-center items-center">
            <h1 className="text-[18px] sm:text-[50px] text-bold text-white z-20">
              Snacks & Tea
            </h1>
          </div>
          {/* Desktop/Web Titles */}
          <div className="grid grid-cols-2 gap-2 mx-4 mb-4 hidden sm:grid">
            <div className="bg-[#312F30] rounded-lg py-3 w-[90%]">
              <h3 className="text-white text-center text-[14px] sm:text-[30px]">
                Snacks
              </h3>
            </div>
            <div className="bg-[#312F30] rounded-lg py-3 w-[100%]">
              <h3 className="text-white text-center text-[14px] sm:text-[30px]">
                Tea & Coffee
              </h3>
            </div>
          </div>

          {/* Snacks Menu */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 mx-2 sm:mx-4 mb-4">
            <div className="space-y-2 sm:space-y-4 relative col-span-1 sm:col-span-1 min-h-auto sm:min-h-[460px]">
              {/* Mobile Title */}
              <div className="bg-[#312F30] rounded-md py-2 sm:py-3 w-full mt-6 sm:mt-0 mb-1 sm:mb-2 sm:hidden">
                <h3 className="text-white text-center text-[14px]">Snacks</h3>
              </div>
              {snacksItems.map((item: string, index: number) => (
                <div key={index} className="">
                  <h4 className="font-semibold text-[10px] sm:text-[18px] text-gray-800 mt-auto sm:nt-[16px]">
                    {item}
                  </h4>
                </div>
              ))}
              <img
                src="/snack.png"
                alt="Snacks"
                className="hidden sm:block w-[80px] sm:w-[200px] h-[50px] sm:h-[380px] rounded-[12px] absolute right-[-20px] sm:right-[20%] top-[120px] sm:top-10"
              />
            </div>
            <div className="w-full h-full flex justify-center items-end sm:hidden">
              <div className="grid grid-cols-2 gap-2">
                <img
                  src="/restaurant_icon_28.jpg"
                  alt="Restaurant Icon 4"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_icon_26.jpg"
                  alt="Restaurant Icon 5"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_food_4.jpg"
                  alt="Restaurant Food 4"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_food_5.jpg"
                  alt="Restaurant Food 5"
                  className="w-full h-[60px] rounded-lg object-cover"
                />

                <img
                  src="/restaurant_food_6.jpg"
                  alt="Restaurant Food 6"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/omala.jpg"
                  alt="Restaurant Icon 6"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="space-y-2 sm:space-y-4 relative col-span-1 sm:col-span-1 mt-6 sm:mt-0">
              {/* Mobile Title */}
              <div className="bg-[#312F30] rounded-md py-2 sm:py-3 w-full mb-1 sm:mb-2 sm:hidden mt-auto sm:mt-[16px]">
                <h3 className="text-white text-center text-[14px]">
                  Tea & Coffee
                </h3>
              </div>
              {hotDrinksItems.map((item: string, index: number) => (
                <div key={index} className="">
                  <h4 className="font-semibold text-[10px] sm:text-[18px] text-gray-800">
                    {item}
                  </h4>
                </div>
              ))}
              <img
                src="/cups.png"
                alt="Tea Cups"
                className="hidden sm:block w-[80px] sm:w-[250px] h-[50px] sm:h-[380px] rounded-[12px] absolute right-[-20px] sm:right-20 top-[80px] sm:top-10"
              />
            </div>
            <div className="w-full h-full flex justify-center items-end sm:hidden">
              <div className="grid grid-cols-2 gap-2">
                <img
                  src="/restaurant_icon_4.jpg"
                  alt="Restaurant Icon 4"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_icon_5.jpg"
                  alt="Restaurant Icon 5"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_icon_3.jpg"
                  alt="Restaurant Food 4"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_icon_11.jpg"
                  alt="Restaurant Food 5"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_icon_6.jpg"
                  alt="Restaurant Icon 6"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_icon_12.jpg"
                  alt="Restaurant Food 6"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Chinese Section */}
          <div className="w-full mx-2 sm:mx-4 mb-4 mt-10 sm:mt-[5%]">
            <div className="space-y-2 sm:space-y-4 relative w-full">
              <div className="bg-[#312F30] rounded-md py-2 sm:py-3 w-full mb-2 sm:mb-4 w-[95%] sm:w-[100%]">
                <h3 className="text-white text-center text-[18px] sm:text-[30px] ">
                  Chinese Dishes
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-6 justify-center w-[95%] sm:w-[100%]">
                {chinese.map((item: string, index: number) => (
                  <div key={index} className="text-center flex-shrink-0">
                    <div className="w-16 h-16 sm:w-[150px] sm:h-[150px] mt-2 sm:mt-[30px] mx-auto mb-2 sm:mb-3 rounded-full border-2 border-[#065F46] overflow-hidden">
                      <img
                        src={`/c${index + 1}.jpg`}
                        alt={item}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-[10px] sm:text-[16px] text-gray-800 text-center max-w-[90px] sm:max-w-[200px] ">
                      {item}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Samyang Noodles Section */}
          <div className="w-full mx-2 sm:mx-4 mb-4 mt-2 sm:mt-[5%]">
            <div className="space-y-2 sm:space-y-4 relative w-full">
              <div className="bg-[#312F30] rounded-md py-2 sm:py-3 w-full mb-2 sm:mb-4 w-[95%] sm:w-[100%]">
                <h3 className="text-white text-center text-[18px] sm:text-[30px]">
                  Samyang Noodles( Veg / NonVeg)
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-6 justify-center ">
                {samyangFlavors.map((item: string, index: number) => (
                  <div key={index} className="text-center flex-shrink-0">
                    <div className="w-16 h-16 sm:w-[150px] sm:h-[150px] mt-2 sm:mt-[30px] mx-auto mb-2 sm:mb-3 rounded-full border-2 border-[#065F46] overflow-hidden">
                      <img
                        src={`/s${index + 1}.png`}
                        alt={item}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-[10px] sm:text-[16px] text-gray-800 text-center">
                      {item}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Speciality Section */}
          <div className="w-full mx-2 sm:mx-4 mb-4 mt-2 sm:mt-[5%]">
            <div className="space-y-2 sm:space-y-4 relative w-full">
              <div className="bg-[#312F30] rounded-md py-2 sm:py-3 w-full mb-2 sm:mb-4 w-[95%] sm:w-[100%]">
                <h3 className="text-white text-center text-[18px] sm:text-[30px]">
                  Speciality Items
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-6 justify-center ">
                {speciality.map((item: string, index: number) => (
                  <div key={index} className="text-center flex-shrink-0">
                    <div className="w-16 h-16 sm:w-[150px] sm:h-[150px] mt-2 sm:mt-[30px] mx-auto mb-2 sm:mb-3 rounded-full border-2 border-[#065F46] overflow-hidden">
                      <img
                        src={`/sp${index + 1}.jpg`}
                        alt={item}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-[10px] sm:text-[16px] text-gray-800 text-center max-w-[90px] sm:max-w-[200px] ">
                      {item}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="my-[5%] bg-gradient-to-r from-[#065F46] relative to-[#047857] p-[10px] py-[1%] rounded-2xl h-[60px] sm:h-[150px] flex justify-center items-center">
            <h1 className="text-[18px] sm:text-[50px] text-bold text-white z-20">
              Alcoholic Beverages
            </h1>
            <img
              src="/al1.png"
              alt="Alcohol 1"
              className="h-[25px] sm:h-auto w-auto sm:w-[300px] rounded-[12px] absolute left-2 sm:left-5 bottom-2 sm:bottom-0"
            />
            <img
              src="/al2.png"
              alt="Alcohol 2"
              className="h-[25px] sm:h-auto w-auto sm:w-[300px] rounded-[12px] absolute right-2 sm:right-5 bottom-2 sm:bottom-0"
            />
          </div>

          {/* Drinks Sections */}
          {/* Desktop/Web Titles */}
          <div className="grid grid-cols-2 gap-2 mx-4 mb-4 hidden sm:grid">
            <div className="rounded-lg py-3 bg-[#312F30] w-[90%]">
              <h3 className="text-white text-center text-[14px] sm:text-[30px]">
                Whiskey
              </h3>
            </div>
            <div className="rounded-lg py-3 bg-[#312F30] w-[100%]">
              <h3 className="text-white text-center text-[14px] sm:text-[30px]">
                Beer & Wine
              </h3>
            </div>
          </div>

          {/* Drinks Menu */}
          <div className="grid grid-cols-3 sm:grid-cols-2 gap-2 sm:gap-4 mx-2 sm:mx-4 pb-8">
            <div className="space-y-2 sm:space-y-4 relative col-span-1">
              {/* Mobile Title */}
              <div className="bg-[#312F30] rounded-md py-2 sm:py-3 w-full mt-6 sm:mt-0 mb-1 sm:mb-2 sm:hidden">
                <h3 className="text-white text-center text-[14px]">Whiskey</h3>
              </div>
              {drinksItems.whiskey.map((item: string, index: number) => (
                <div key={index} className="">
                  <h4 className="font-semibold text-[10px] sm:text-[18px] text-gray-800">
                    {item}
                  </h4>
                </div>
              ))}
            </div>
            <div className="space-y-2 sm:space-y-4 relative col-span-1 sm:col-span-1 mt-6 sm:mt-0">
              {/* Mobile Title */}
              <div className="bg-[#312F30] rounded-md py-2 sm:py-3 w-full mb-1 sm:mb-2 sm:hidden">
                <h3 className="text-white text-center text-[14px]">
                  Beer & Wine
                </h3>
              </div>
              {drinksItems.beer.map((item: string, index: number) => (
                <div key={index} className="">
                  <h4 className="font-semibold text-[10px] sm:text-[18px] text-gray-800">
                    {item}
                  </h4>
                </div>
              ))}
              <div className="rounded-lg py-3 bg-[#312F30] w-[100%] mt-6 hidden sm:block">
                <h3 className="text-white text-center text-[14px] sm:text-[30px]">
                  Wine
                </h3>
              </div>
              {/* Mobile Title for Wine */}
              <div className="bg-[#312F30] rounded-md py-2 sm:py-3 w-full mb-1 sm:mb-2 sm:hidden mt-6">
                <h3 className="text-white text-center text-[14px]">Wine</h3>
              </div>
              {drinksItems.wine.map((item: string, index: number) => (
                <div key={index} className="">
                  <h4 className="font-semibold text-[10px] sm:text-[18px] text-gray-800">
                    {item}
                  </h4>
                </div>
              ))}
            </div>
            <div className="w-full h-full flex justify-center items-center sm:hidden">
              <div className="grid grid-cols-2 gap-2">
                <img
                  src="/redPanda.jpg"
                  alt="Restaurant Icon 11"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_icon_46.jpg"
                  alt="Restaurant Icon 12"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/restaurant_icon_44.jpg"
                  alt="Restaurant Food 9"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/lager.jpg"
                  alt="Restaurant Food 10"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/Yalha.jpg"
                  alt="Restaurant Icon 13"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/redLabel.jpg"
                  alt="Restaurant Food 11"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/lagerbottle.jpg"
                  alt="Restaurant Food 9"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/11000.jpg"
                  alt="Restaurant Food 10"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/soju.jpeg"
                  alt="Restaurant Icon 13"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
                <img
                  src="/highland.jpeg"
                  alt="Restaurant Food 11"
                  className="w-full h-[60px] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full text-center h-[200px] sm:h-[300px] bg-[#312F30] text-white flex items-center justify-center text-[12px] sm:text-[18px] flex flex-col gap-[8px]">
        <p>Gongkhar | Jakar | Bumthang</p>
        <p>
          email:{" "}
          <a
            href="mailto:subbarestaurant@gmail.com"
            className="underline text-blue-300 hover:text-blue-500"
          >
            subbarestaurant@gmail.com
          </a>{" "}
          <br />
          contact:{" "}
          <a
            href="tel:77861149"
            className="underline text-blue-300 hover:text-blue-500"
          >
            77861149
          </a>{" "}
          /{" "}
          <a
            href="tel:77626862"
            className="underline text-blue-300 hover:text-blue-500"
          >
            77626862
          </a>
        </p>

        <div className="text-[10px] sm:text-[14px] text-white/60">
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
