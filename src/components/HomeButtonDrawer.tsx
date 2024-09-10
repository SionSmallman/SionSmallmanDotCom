import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function HomeButtonDrawer() {
  return (
    <div id="link-drawer">
        <ul className="flex gap-x-16 my-5 text-center">
            <li className="hover:scale-110 transition">
                <Link to={"https://github.com/SionSmallman"} className="text-white hover:text-white">
                    <FaGithub className="inline mx-2" size={35} /> Github
                </Link>
            </li>
            <li className="hover:scale-110 transition">
                <Link to={"https://linkedin.com/SionSmallman"} className="text-white hover:text-white">
                    <FaLinkedinIn className="inline mx-2" size={35}  />LinkedIn
                </Link>
            </li>
            <li className="hover:scale-110 transition">
                <Link to={"mailto:SionSmallman1@gmail.com"} className="text-white hover:text-white">
                    <IoMail className="inline mx-2" size={35}  />Contact
                </Link>
            </li>
        </ul>
    </div>
  )
}
