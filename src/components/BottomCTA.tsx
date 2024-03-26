import { AiFillStar, AiOutlineRight } from "react-icons/ai";

const BottomCTA = () => {
  return (
    <main className="container mx-auto capitalize">
      <div className="w-full px-28 py-16 bg-black">
        <div className="flex justify-between">
          <div className="text-white space-y-4">
            <h1 className="text-2xl font-bold text-[#84CC16]">Kelas Terbaru</h1>
            <h1 className="text-4xl font-bold max-w-md">
              kelas terbaru online di lime{" "}
              <span className="text-[#84CC16]">code</span>
            </h1>
          </div>
          <div className="">
            <button className="bg-[#84CC16] text-black px-4 py-2 rounded-md mt-8 flex gap-2 items-center ">
              Semua kelas <AiOutlineRight />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-20">
          <div className="w-[400px] h-[535px] bg-white rounded-xl">
            <div className=" w-[400px] h-[315px] rounded-xl"><img src="/Rectangle 61.png" alt="" /></div>
              
            <div>
              <div className="flex justify-between px-4 py-2">
                <p className="text-black font-bold text-lg">by adriana silva</p>
                <p className="text-black font-semibold flex items-center gap-2"><AiFillStar className="text-yellow-500" /> 4.5 (penilaian)</p>
              </div>
              <div className="px-4 py-2 space-y-4">
                <h1 className="text-black font-bold text-2xl">complete freelancer uI/UX & illustration design</h1>
                <p className="text-black font-semibold text-xl">rp. 567,00</p>
              </div>
            </div>
          </div>
          <div className="w-[400px] h-[535px] bg-white rounded-xl">
            <div className="bg-red-500 w-[400px] h-[315px] rounded-xl" ></div>
            <div>
              <div className="flex justify-between px-4 py-2">
                <p className="text-black font-bold text-lg">by adriana silva</p>
                <p className="text-black font-semibold flex items-center gap-2"><AiFillStar className="text-yellow-500" /> 4.5 (penilaian)</p>
              </div>
              <div className="px-4 py-2 space-y-4">
                <h1 className="text-black font-bold text-2xl">Complete Full-Stack Laravel React JS</h1>
                <p className="text-black font-semibold text-xl">Rp. 690,000</p>
              </div>
            </div>
          </div>
          <div className="w-[400px] h-[535px] bg-white rounded-xl">
            <div className="bg-red-500 w-[400px] h-[315px] rounded-xl "></div>
            <div>
              <div className="flex justify-between px-4 py-2">
                <p className="text-black font-bold text-lg">by adriana silva</p>
                <p className="text-black font-semibold flex items-center gap-2"><AiFillStar className="text-yellow-500" /> 4.5 (penilaian)</p>
              </div>
              <div className="px-4 py-2 space-y-4">
                <h1 className="text-black font-bold text-2xl">Complete Full-Stack Laravel Flutter</h1>
                <p className="text-black font-semibold text-xl">Rp. 690,000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 mt-10">
          <div className="w-[400px] h-[535px] bg-white rounded-xl">
            <div className="bg-red-500 w-[400px] h-[315px] rounded-xl"></div>
            <div>
              <div className="flex justify-between px-4 py-2">
                <p className="text-black font-bold text-lg">by adriana silva</p>
                <p className="text-black font-semibold flex items-center gap-2"><AiFillStar className="text-yellow-500" /> 4.5 (penilaian)</p>
              </div>
              <div className="px-4 py-2 space-y-4">
                <h1 className="text-black font-bold text-2xl">complete freelancer uI/UX & illustration design</h1>
                <p className="text-black font-semibold text-xl">rp. 567,00</p>
              </div>
            </div>
          </div>
          <div className="w-[400px] h-[535px] bg-white rounded-xl">
            <div className="bg-red-500 w-[400px] h-[315px] rounded-xl" ></div>
            <div>
              <div className="flex justify-between px-4 py-2">
                <p className="text-black font-bold text-lg">by adriana silva</p>
                <p className="text-black font-semibold flex items-center gap-2"><AiFillStar className="text-yellow-500" /> 4.5 (penilaian)</p>
              </div>
              <div className="px-4 py-2 space-y-4">
                <h1 className="text-black font-bold text-2xl">Complete Full-Stack Laravel React JS</h1>
                <p className="text-black font-semibold text-xl">Rp. 690,000</p>
              </div>
            </div>
          </div>
          <div className="w-[400px] h-[535px] bg-white rounded-xl">
            <div className="bg-red-500 w-[400px] h-[315px] rounded-xl "></div>
            <div>
              <div className="flex justify-between px-4 py-2">
                <p className="text-black font-bold text-lg">by adriana silva</p>
                <p className="text-black font-semibold flex items-center gap-2"><AiFillStar className="text-yellow-500" /> 4.5 (penilaian)</p>
              </div>
              <div className="px-4 py-2 space-y-4">
                <h1 className="text-black font-bold text-2xl">Complete Full-Stack Laravel Flutter</h1>
                <p className="text-black font-semibold text-xl">Rp. 690,000</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default BottomCTA;
