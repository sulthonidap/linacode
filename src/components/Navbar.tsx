import { AiOutlineLogin } from "react-icons/ai"

const Navbar = () => {
  return (
        <div className="w-full py-8 bg-black md:px-28">
            <nav className="container mx-auto flex justify-between items-center px-4">
            <div>
                <img src="/limeCode.png" alt="" className="w-40" />
            </div>
            <div className="hidden md:block">
                <ul className="text-white capitalize flex gap-8">
                    <li><a href="" className="hover:text-[#84CC16]">beranda</a></li>
                    <li><a href="" className="hover:text-[#84CC16]" >kelas</a></li>
                    <li><a href="" className="hover:text-[#84CC16]" >alur</a></li>
                    <li><a href="" className="hover:text-[#84CC16]" >event</a></li>
                    <li><a href="" className="hover:text-[#84CC16]" >blog</a></li>
                    <li><a href="" className="hover:text-[#84CC16]" >kontak</a></li>
                </ul>
            </div>
            <div className="hidden md:block">
                <button className="bg-[#84CC16] px-8 py-2 text-black rounded-full flex gap-2 items-center">Register <span><AiOutlineLogin /></span></button>
            </div>
            </nav>
        </div>
  )
}

export default Navbar