import { useState } from "react";
import { FiMenu } from "react-icons/fi";

function Menu() {
    const [open, setOpen] = useState(false);
    
    const handleClick = () => setOpen(!open)

    return(
        <div className="w-full h-[80px] flex justify-between items-center px-4 font-sans bg-gradient-to-tr from-gray-900 to-gray-800 border-b border-emerald-900 text-white">
            <br/>
            <ul className="hidden md:flex justify-between">
                <li>    
                    <a href="#" className="py-6 px-3 text-xl text-white hover:text-emerald-600 ">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" className="py-6 px-3 text-xl text-white hover:text-emerald-600">
                        About
                    </a>                                
                </li> 
                <li>
                    <a href="#academic" className="py-6 px-3 text-xl text-white hover:text-emerald-600">
                        Academic
                    </a>
                </li>
                <li>
                    <a href="#services" className="py-6 px-3 text-xl text-white hover:text-emerald-600">
                        Services
                    </a> 
                </li>
                <li>
                    <a href="#projects" className="py-6 px-3 text-xl text-white hover:text-emerald-600">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" className="py-6 px-3 text-xl text-white hover:text-emerald-600">
                        Contact
                    </a> 
                </li>          
            </ul> 

            <div onClick={handleClick} className="md:hidden z-10">
                <FiMenu/>
            </div>         
            <nav className="flex items-left w-auto x">               
                <ul className={!open ? "hidden" : "absolute top-0 left-0 w-full h-screen flex flex-row"}> 
                    <li>    
                        <a href="#" className="py-6 px-3 text-sm text-white hover:text-emerald-600 ">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="py-6 px-3 text-sm text-white hover:text-emerald-600">
                            About
                        </a>                                
                    </li> 
                    <li>
                        <a href="#academic" className="py-6 px-3 text-sm text-white hover:text-emerald-600">
                           Academic
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="py-6 px-3 text-sm text-white hover:text-emerald-600">
                           Services
                        </a> 
                    </li>
                    <li>
                        <a href="#projects" className="py-6 px-3 text-sm text-white hover:text-emerald-600">
                           Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="py-6 px-3 text-sm text-white hover:text-emerald-600">
                            Contact
                        </a> 
                    </li>   
                </ul>                                                
            </nav>            
        </div>       
    )
}

export default Menu;