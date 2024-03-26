import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contacts = () => {
  return (
    <main className="container mx-auto capitalize ">
      <div className="w-full px-28 py-8 bg-[#1B1715]  flex justify-between items-center text-white">
        <div className="flex gap-8 mt">
          <p className="flex gap-2 items-center"><FaMapMarkerAlt />jl. adama makassar, indonesia</p>
          <p className="flex gap-2 items-center"><AiOutlinePhone />+62 822 - 3843-4234</p>
          <p className="flex gap-2 items-center" ><AiOutlineMail />limecode@gmail.com</p>
        </div>
        <div className="flex gap-4 px-16">
            <p><AiFillFacebook className="w-8 h-8" /></p>
            <p><AiFillTwitterSquare className="w-8 h-8" /></p>
            <p><AiFillInstagram className="w-8 h-8" /></p>
            <p><AiFillYoutube className="w-8 h-8" /></p>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
