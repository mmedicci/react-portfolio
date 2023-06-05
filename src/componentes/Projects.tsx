import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaArrowAltCircleUp } from "react-icons/fa";

function Projects() {
    const projects = [
        {
          title: "Project 1",
          description: "Universo_cinetamografico_DatVisao",
          image:
            "https://media.licdn.com/dms/image/D4D22AQFEZCCbkDIcVQ/feedshare-shrink_2048_1536/0/1685666663912?e=1688601600&v=beta&t=rCAufF3VGc7dsPwKTwPT6esf-OlaWsDc8aZEI-AQE7s",
          link: "https://github.com/mmedicci/Universo_cinetamografico_DatVisao",
          colSpan: "col-span-1 md:col-span-2",
        },
        {
          title: "Project 2",
          description: "Desafio Lacrei",
          image:
            "https://mir-s3-cdn-cf.behance.net/projects/404/858267151311291.Y3JvcCwxMTAzMiw4NjI5LDExNDYsMA.jpg",
          link: "https://mmedicci.github.io/Frontend_Lacrei/",
          colSpan: "col-span-1",
        },
        {
          title: "Project 3",
          description: "Loja de carros",
          image:
            "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
          link: "https://github.com/mmedicci/carshop",
          colSpan: "col-span-1",
        },
        {
          title: "Project 4",
          description: "Agenda de contatos",
          image:
            "https://img.freepik.com/vetores-premium/livro-de-contatos-da-agenda-telefonica-ou-notebook-estilo-minimalista-dos-desenhos-animados_645574-97.jpg",
          link: "https://github.com/mmedicci/AgendaContactos",
          colSpan: "col-span-1",
        },
        {
          title: "Project 5",
          description: "Tartarugas Marinhas",
          image:
            "https://images.unsplash.com/photo-1581345357822-5e482149d0b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          link: "https://github.com/mmedicci/Template_CSS",
          colSpan: "col-span-1",
        },
      ]
    return(        
        <section className="bg-gradient-to-tr from-black to-emerald-900 text-white">
            <div className="container mx-auto max-w-4xl bg-[url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Stars.svg?sanitize=true)] p-4 py-12">
                <div className="relative p-1 text-center">
                    <h2 className="relative z-50 mb-2">                       
                      <span><a href="#">
                        <FaArrowAltCircleUp className="h-6 w-6"/></a>                                     
                      </span>  
                      <span id="projects"className="mr-2 mb-2 font-headline text-4xl font-semibold">
                        Projects
                      </span>                         
                    </h2>
                </div>

                <div className="grid grid-cols-1 mt-6 gap-4 md:grid-cols-3">
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                        style={{ backgroundImage: `url('${project.image}')` }}
                      >
                        <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-emerald-800 text-white opacity-0 transition-opacity group-hover:opacity-100">
                          <h4 className="font-headline text-lg font-semibold">
                            {project.title}
                          </h4>
                          <p className=" mb-4 text-sm">{project.description}</p>
                          <a href={project.link} target="_blank">
                            <HiArrowTopRightOnSquare className="h-6 w-6" />
                          </a>    
                        </div>
                      </div>
                    ))}
                </div>
            </div>
        </section>      
       
    )
}

export default Projects;