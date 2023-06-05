import { FaInstagram, FaWhatsapp, FaArrowAltCircleUp } from "react-icons/fa"
import { HiOutlineEnvelope } from "react-icons/hi2"

function Contacts() {

    const contacts = [
        {
          name: "WhatsApp",
          description: "+55 53 99118-5868",
          link: "https://wa.me/5553991185868?text=Olá...",
          icon: <FaWhatsapp className="h-10 w-10" />,
        },
        {
          name: "Email",
          description: "mmedicci@gmail.com.com",
          link: "mailto:mmedicci@gmail.com?subject=Olá...",
          icon: <HiOutlineEnvelope className="h-10 w-10" />,
        },{
          name: "Instagram",
          description: "@mariamedicci",
          link: "https://www.instagram.com/mariamedicci/",
          icon: <FaInstagram className="h-10 w-10" />,
        },
    ]

    return(
        <section id="contact" className="bg-gradient-to-tr from-black to-emerald-900 text-white">
            <div className="container bg-[url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Stars.svg?sanitize=true)] mx-auto max-w-4xl p-4 py-8">
                <div className="mb-6">
                  <h2 className="z-50 mb-2">
                  <span>
                    <a href="#">
                        <FaArrowAltCircleUp className="h-6 w-6"/></a>                                     
                    </span> 
                    <span className="mr-2 font-headline text-3xl font-semibold">
                      Contact
                    </span>
                    <span className="font-handwriting text-4xl">me</span>
                  </h2>
                </div>
                <div className="basis-1/2">
                    <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-3">
                        {contacts.map((contact, index) => (
                            <div
                                key={`contact-${index}`}
                                className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4"
                            >
                                {contact.icon}
                                    <div>
                                        <p className="font-headline font-semibold">{contact.name}</p>
                                        <a
                                            href={contact.link}
                                            target="_blank"
                                            className="text-gray-300 underline underline-offset-2"
                                        >
                                            {contact.description}
                                        </a>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;