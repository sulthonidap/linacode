import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <main className="container mx-auto capitalize">
      <div className="w-full px-28 py-16 bg-[#1B1715]">
        <div>
          <img src="limeCode.png" alt="" className="w-[200px] mb-4" />
        </div>
        <div className="flex justify-between">
          <div className="text-white ">
            <h1 className="text-2xl font-lg mb-2">
              Lime Code Belajar Coding Simpel.
            </h1>
            <div className="space-y-4">
              <p className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                jl. adama makassar, indonesia
              </p>
              <p className="flex gap-2 items-center">
                <AiOutlinePhone />
                +62 822 - 3843-4234
              </p>
              <p className="flex gap-2 items-center">
                <AiOutlineMail />
                limecode@gmail.com
              </p>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                stay update to our newsletter
              </h1>
            </div>
            <div className="flex justify-between gap-4">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 mt-8 rounded-md"
              />
              <button className="bg-[#84CC16] text-black px-4 py-2 rounded-md mt-8">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="text-white mt-16 bg-[#84CC16] flex justify-between px-8 py-8">
          <p className="text-black font-semibold text-lg">dibuat oleh sulthonidap, menggunakan tailwind dan Vite js @2024</p>
          <div className="flex gap-4 px-16">
            <p>
              <AiFillFacebook className="w-8 h-8" />
            </p>
            <p>
              <AiFillTwitterSquare className="w-8 h-8" />
            </p>
            <p>
              <AiFillInstagram className="w-8 h-8" />
            </p>
            <p>
              <AiFillYoutube className="w-8 h-8" />
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
