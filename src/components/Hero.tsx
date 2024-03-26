import { AiOutlineRight } from "react-icons/ai";

const Hero = () => {
  return (
      <div className=" container w-full px-4 md:px-28 py-16 bg-[#000000] md:flex justify-between items-center capitalize ">
        <div className=" w-full  md:w-1/2 base:order-2">
          <div className="space-y-8 max-w-lg relative z-40">
            <p className="text-[#84CC16] font-bold"># Jangan Malas</p>
            <h1 className="text-white text-4xl md:text-6xl  font-bold">
              lime <span className="text-[#84CC16]">code</span> belajar coding
              simpel
            </h1>
            <p className="text-white">
              ayo pelajari skill baru sesuai dengan minatmu. kumpulan kelas
              coding gratis tentang html, css, javascript, php, laravel, python,
              go-lang, dll.
            </p>
            <button className="bg-[#84CC16] px-8 py-2 text-black rounded-full flex gap-2 items-center shadow-lg shadow-green-500/80  ">
              Mulai sekarang <AiOutlineRight />
            </button>
            <div className="flex bg-lime-500/30 w-[300px] h-[300px] rounded-full blur-2xl absolute left-[-200px] top-[-100px] -z-30"></div>
          </div>
        </div>
        <div className=" md:w-1/2 relative order-1">
          <div className="flex justify-center items-center">
            <img src="/Rectangle 6.png" alt="" className=" md:w-[500px]" />
          </div>
          <div className="bg-[#D9D9D9] w-[230px] h-[120px] flex justify-center items-center rounded-lg pl-4 absolute left-[-90px] bottom-10">
            <h1 className="text-black font-bold text-xl"><span className="text-md">"</span>ngoding itu mudah yang susah itu kamu malas memulainya<span>"</span></h1>
          </div>
        </div>
      </div>
  );
};

export default Hero;
