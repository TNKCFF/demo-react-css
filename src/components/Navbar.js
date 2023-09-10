import logo from "../assets/icons/bear.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import line from "../assets/icons/line.png";
import user from "../assets/icons/user.png";
import github from "../assets/icons/github.png";

const Navbar = () =>{
    return(
        <div className="flex justify-between items-center ">
            <img src={user} alt="user" width={35} className="cursor-pointer"/>
            <ul className="hidden md:flex">
                <li className="px-2">
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src={facebook} alt="facebook" width={30}/>

                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src={instagram} alt="instagram" width={30}/>
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.line.com/" target="_blank">
                        <img src={line} alt="line" width={30}/>
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://github.com/" target="_blank">
                        <img src={github} alt="github" width={30}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;