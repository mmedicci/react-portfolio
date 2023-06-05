import { FaArrowAltCircleUp, FaLaptopCode } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";

function About() {
    return(
        <section className="bg-gradient-to-tr from-black to-emerald-900 text-white">        
            <div className="container relative bg-[url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Stars.svg?sanitize=true)] 
                            mx-auto max-w-4xl p-1 py-8 flex flex-col md:bg-repeat md:flex-row">
                <div> 
                    <h2 className="relative z-50 mb-2 font-bold text-center">
                        <span><a href="#">
                            <FaArrowAltCircleUp className="h-6 w-6"/></a>                                     
                        </span>   
                        <span id="about"className="mr-2 font-headline text-4xl"> About me</span>
                    </h2> 
                    <div className="basis-1/2 text-white font-sans md:flex-row"> 
                        <div className="text-lg font-sans font-semibold">
                            <div className="relative w-full -left-12 ps-20 md:h-64 md:ps-32"> 
                                <HiOutlineAcademicCap className="h-10 w-10"/>                                          
                                <p className="rounded-lg bg-gray-900 bg-[url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Stars.svg?sanitize=true)] p-6">
                                    Hello, I'm Maria! Biologist and developer. I'm finishing my PhD in Biological Oceanography 
                                    at the Federal University of Rio Grande - FURG. I work with space-time models, GIS, remote 
                                    sensing, image geoprocessing and R programming language. I like to learn and work in a 
                                    team and I'm always willing to learn.
                                </p> 
                            </div> 
                            <div className="relative w-full -left-12 ps-20 md:h-64 md:ps-32"> 
                                <FaLaptopCode className="h-10 w-10" />
                                <p className="rounded-lg bg-gray-900 bg-[url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Stars.svg?sanitize=true)] p-6">
                                    Currently in a career transition process in the technology area, I concluded the Full Stack 
                                    Programming training at Toti, developing contents such as: Programming Logic, Technology Tools, 
                                    Code Versioning with Git, Front-end, Back-end, Project Management and Agile Methodologies. 
                                </p>
                            </div>                      
                        </div>      
                    </div>    
                </div>              
            </div> 

                  
        </section>
    )
}

export default About;