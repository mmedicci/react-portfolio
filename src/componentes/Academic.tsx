import { FaArrowAltCircleUp } from "react-icons/fa";

function Academic() {
    const educations = [
        {
          name: "Developer Full Stack | Toti | 2022",
        },
        {
          name: "PhD student in Biological Oceanography | FURG | in progress ",
          
        },
        {
           name: "MSc Wildlife Management and Conservation | ICOMVIS | 2006",
           
        },
        {
           name: "Biologist | Universidad de Los Andes | 2000",
        
        },
    ]
    
    return(
        <section className="bg-gradient-to-tr from-black to-gray-800 text-white">
            <div className="container mx-auto bg-[url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Stars.svg?sanitize=true)] max-w-4xl p-4">
                <div className="relative mb-4 p-4 text-center">
                    <h2 className="relative z-50 mb-2 font-bold">
                        <span><a href="#">
                            <FaArrowAltCircleUp className="h-6 w-6"/></a>                                     
                        </span>   
                        <span id="academic"className="mr-2 font-headline text-4xl">
                            Academic experiences                            
                        </span>
                    </h2>                       
                </div>
                 
                <div className="mt-6 flex flex-col gap-2 md:flex-row">
                    <div className="flex-col h-full pb-6 items-center md:flex-row md:mx-40">       
                        {educations.map((education, index) => (
                            <div
                                key={`education-${index}`}
                                className="mb-2 rounded-lg bg-emerald-800 bg-[url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Stars.svg?sanitize=true)] p-4 "
                            >
                                <p className="text-lg font-sans font-semibold">{education.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Academic;