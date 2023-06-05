import { HiComputerDesktop } from "react-icons/hi2";
import { FaPython, FaArrowAltCircleUp } from "react-icons/fa"; 
import { VscMap } from "react-icons/vsc";

  
function Services() {
    const services = [
        {
            title: "Full stack",
            description:
              "Application development from front-end to back-end with HTML5, CSS3, JS, React, Next.js, Node.js, MongoDB.",
            icon: <HiComputerDesktop className="h-12 w-12" />,
          },
          {
            title: "Data Science",
            description: 
                "Analyzing and interpreting data, solving problems and communicating all relevant information extracted from the analyzed data with SQL, R, Python, Power BI.",
            icon: <FaPython className="h-12 w-12" />,
          },
          {
            title: "GIS analyst",
            description: 
                "Spatial data analysis using geographic information systems with ArcGIS, QGIS and TerraView.",
            icon: <VscMap className="h-12 w-12" />,
          },
    ]
    return(
        <section className="bg-gradient-to-tr from-black to-gray-800 text-white">
            <div className="container mx-auto bg-[url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Stars.svg?sanitize=true)] max-w-4xl p-4"> 
                <div className="p-1 font-sans text-center">
                    <h2 className="mb-2 font-bold">
                        <span className="mr-2 font-headline"></span>  
                        <span><a href="#">
                        <FaArrowAltCircleUp className="h-6 w-6"/></a>                                     
                    </span>                         
                        <span id="services"className="text-4xl">Services</span>                       
                    </h2>
                    <p className="text-m text-with">
                        I can handle a full range of services, from front-end to back-end
                        with database and GIS.
                    </p> 
                     
                </div>
                <div className="mt-6 flex flex-col gap-2 mb-14 md:flex-row">
                    {
                        services.map((service, index) => (
                            <div
                                className="basis-1/3 rounded-lg bg-emerald-800 p-4 text-white
                                bg-[url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Stars.svg?sanitize=true)]"
                                key={`service-${index}`}
                            >
                                <div className="mb-2">{service.icon}</div>
                                <h3 className="text-xl font-bold">{service.title}</h3>
                                <p className="text-sm font-sans font-semibold py-2">{service.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services;