import { AiFillCarryOut } from "react-icons/ai";

const Benefit = () => {
  return (
    <main className="container mx-auto capitalize">
      <div className="w-full px-28 py-16 bg-black items-center text-white">
        <div className="mt-20 space-y-4 grid grid-cols-2">
          <div className="relative">
            <div className=" flex justify-center ">
              <img src="/Rectangle 28.png" alt="" className="w-[500px]" />
            </div>
            <div className="bg-[#D9D9D9] w-[230px] h-[160px] flex flex-col  items-center rounded-lg absolute py-2 space-y-2 left-32 bottom-[-50px] animate-bounce ">
              <h1 className="text-black font-bold text-xl">
                Pelajari Skill Baru
              </h1>
              <div className="flex flex-col justify-start">
                <p className="flex gap-2 items-center">
                  <img src="/pngwing 8.png" alt="" />
                  <span className="text-md text-black font-bold">Laravel</span>
                </p>
                <p className="flex gap-2 items-center">
                  <img src="/pngwing 15.png" alt="" />
                  <span className="text-md text-black font-bold">
                    Javascript
                  </span>
                </p>
                <p className="flex gap-2 items-center">
                  <img src="/pngwing 14.png" alt="" />
                  <span className="text-md text-black font-bold">PHP</span>
                </p>
                <p className="flex gap-2 items-center">
                  <img src="/pngwing 16.png" alt="" />
                  <span className="text-md text-black font-bold">React</span>
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4 flex flex-col justify-center">
            <h1 className="text-[#84CC16] text-2xl font-bold">Join LimeCode</h1>
            <h1 className="text-white text-4xl font-bold max-w-lg">
              banyak keuntungan bergadung di lime{" "}
              <span className="text-[#84CC16]">code</span>
            </h1>
            <div className="text-2xl space-y-4 max-w-lg">
              <p className="flex gap-2 items-center">
                <span>
                  <AiFillCarryOut className="text-[#84CC16]" />
                </span>
                akses video selamanya
              </p>
              <p className="flex gap-2 items-center">
                <span>
                  <AiFillCarryOut className="text-[#84CC16]" />
                </span>
                meningkatkan skill terbaru kamu
              </p>
              <p className="flex gap-2 items-center">
                <span>
                  <AiFillCarryOut className="text-[#84CC16]" />
                </span>
                membangun networking yang luas
              </p>
              <p className="flex gap-2 items-center">
                <span>
                  <AiFillCarryOut className="text-[#84CC16]" />
                </span>
                forum bertanya tentang web, android dan design
              </p>
              <div className="flex justify-left ">
                <button className="bg-[#84CC16] mt-4 px-32 py-1 text-black rounded-md flex gap-2 items-center shadow-lg font-semibold ">
                  Join Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Benefit;
