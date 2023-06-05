import { HiDownload } from 'react-icons/hi';
import Perfil_maria  from "./Perfil_maria.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Hero() {
    return(
        <section className="bg-gradient-to-tr from-gray-900 to-gray-800 text-white">
            <div className="container bg-[url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Stars.svg?sanitize=true)] mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row">                                    
                <div className="basis-1/2"> 
                    <h1 className="mb-6 text-center md:text-left">
                        <span className="font-sans block p-8 text-3xl text-center md:text-left">My name is</span>
                        <span className="font-headline block text-4xl font-semibold">Maria de Los Angeles</span>
                        <span className="font-headline block text-4xl font-ligth text-emerald-600"> Rondon-Medicci</span>
                    </h1>
                     <h2 className="font-semibold flex items-center gap-3 text-center md:text-left"> 
                        <div className="h-2 w-10 rounded-full bg-emerald-600" />
                        Fullstack Developer | Data Scientist | Biologist   
                    </h2>                        
                    <div className="flex justify-center gap-4 p-6 md:justify-start">
                        <a href="#contact" className="underling font-bold text-white">Contact me</a>
                        <span className="italic text-gray-500">or</span>
                        <a href="https://drive.google.com/file/d/1glzjbRfW2PR4PiKA2rAe-WKCUx6mzByr/view" target="_blank" 
                            className="button text-gray-600 hover:text-gray-900 flex items-center gap-2">
                            <HiDownload />
                            Download CV
                        </a>
                    </div>    
                </div>
                <div className="basis-1/2"> 
                    <div className='flex justify-center gap-2 p-6'>
                        <img className="relative object-center h-92 w-52 rounded-full" src={Perfil_maria} alt="Imagem_perfil" />
                    </div>
                    <div className="flex justify-center gap-4 p-2 md:justify-center">
                        <a href="https://github.com/mmedicci" target="_blank">
                            <FaGithub className="h-10 w-10"/>
                        </a> 
                        <a href="https://www.linkedin.com/in/mariamedicci/" target="_blank">
                            <FaLinkedin className="h-10 w-10"/>
                        </a>  
                    </div>
                </div>                             
            </div>    
        </section>
    )
}

export default Hero;