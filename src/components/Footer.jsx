import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongoose } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";



const Footer = () => {
  
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
  <p className="text-sm">
    © {new Date().getFullYear()} Mohammed Ismail. All rights reserved.
  </p>
  <p className="text-sm">
    Created with ❤️ by{" "}
    <a
      href="https://ismaildevcode.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-500 font-semibold hover:underline"
    >
      Mohammed Ismail
    </a>{" "}
    using: <br/>
    <span className='flex flex-row item-center justify-center gap-1'><FaReact size='15' className='text-[#00B6FF]'/> <BiLogoTailwindCss size='20'className='text-[#00D2FF]'/> <IoLogoNodejs size='15' className='text-[#60FF00]'/> <SiExpress size='15'/> <SiMongoose size='20' className='text-red-600'/> <BiLogoMongodb size='20' className='text-[#0BAE00]'/>
    </span>
  </p>
</footer>
    )
}


export default Footer;