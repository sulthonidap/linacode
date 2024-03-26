import {
  AiFillAndroid,
  AiFillCode,
  AiFillRead,
  AiFillVideoCamera,
} from "react-icons/ai";

const Category = () => {
  return (
    <main className="container mx-auto capitalize ">
      <div className="w-full px-28 py-8 bg-black items-center text-white">
        <div className="text-center mt-20 space-y-4">
          <h1 className="text-[#84CC16] text-2xl font-bold">mulai belajar</h1>
          <h1 className="text-white text-4xl font-bold">
            category kelas online di Lime{" "}
            <span className="text-[#84CC16]">Code</span>
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-20 ">
          <div className="bg-[#1B1715] p-4 text-center items-center space-y-2
          hover:bg-[#84CC16]">
            <p className="flex justify-center">
              <AiFillCode className="w-10 h-10 text-[#84CC16]" />
            </p>
            <h1 className="text-2xl font-bold">Kelas Web Dev</h1>
            <p>belajar front end, back end ataupun full stack</p>
          </div>
          <div className="bg-[#1B1715] p-4 text-center items-center space-y-2 hover:bg-[#84CC16]">
            <p className="flex justify-center">
              <AiFillAndroid className="w-10 h-10 text-[#84CC16]" />
            </p>
            <h1 className="text-2xl font-bold">kelas android dev</h1>
            <p>belajar flutter, kotlin ataupun react native</p>
          </div>
          <div className="bg-[#1B1715] p-4 text-center items-center space-y-2 hover:bg-[#84CC16]">
            <p className="flex justify-center">
              <AiFillVideoCamera className="w-10 h-10 text-[#84CC16]" />
            </p>
            <h1 className="text-2xl font-bold">kelas design</h1>
            <p>belajar ui ux , 3D ataupun graphic design</p>
          </div>
          <div className="bg-[#1B1715] p-4 text-center items-center space-y-2 hover:bg-[#84CC16]">
            <p className="flex justify-center">
              <AiFillRead className="w-10 h-10 text-[#84CC16]" />
            </p>
            <h1 className="text-2xl font-bold">rood map</h1>
            <p>jelajah jalur belajar yang kamu mau</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Category;
