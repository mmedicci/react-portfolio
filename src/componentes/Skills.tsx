import { FaArrowAltCircleUp } from "react-icons/fa";

function Skills() {
    const skills = [
        {
            name: "HTML5",
            icon: "https://raw.githubusercontent.com/DevSamurai/react-portfolio/03d917db0925d9e83bed9f4631928ac4e2a01e9e/public/images/html.svg",
            level: 80,
        },
        {
            name: "CSS3",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png?20160530175649",
            level: 65,
        },
        {
            name: "Bootstrap",
            icon: "https://en.vetores.org/d/bootstrap.svg",
            level: 75, 
        },
        {
            name: "JavaScript",
            icon: "https://raw.githubusercontent.com/DevSamurai/react-portfolio/03d917db0925d9e83bed9f4631928ac4e2a01e9e/public/images/javascript.svg",
            level: 80,
        },
        {
            name: "React.js",
            icon: "https://raw.githubusercontent.com/DevSamurai/react-portfolio/03d917db0925d9e83bed9f4631928ac4e2a01e9e/public/images/react.svg",
            level: 75,
        },
        {
            name: "Node.js",
            icon: "https://raw.githubusercontent.com/DevSamurai/react-portfolio/03d917db0925d9e83bed9f4631928ac4e2a01e9e/public/images/nodejs.svg",
            level: 65,
        },
    ]

    const skillsDados = [
        {
            name: "R",
            icon: "https://download.logo.wine/logo/R_(programming_language)/R_(programming_language)-Logo.wine.png",
            level: 85,
        },
        {
            name: "Python",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png",
            level: 65,
        },
        {
            name: "SQL",
            icon: "https://www.stonebranch.com/integration-hub/media/3c/64/66/1636642258/Stonebranch_SQL_Vendor_Product_Logo.svg",
            level: 65, 
        },
        {
            name: "Power BI",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/2048px-New_Power_BI_Logo.svg.png",
            level: 60,
        },
        {
            name: "ArcGIS",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZ1-WuN24eOMYKUMZ9xwuubEEZijJbkp0RRuBXND1_qy4eA7A5_wXDNtC8Dk7Ikvofcg&usqp=CAU",
            level: 90,
        },
        {
            name: "QGIS",
            icon: "data:image/jpeg;base64,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",
            level: 65,
        },
    ]

    return (
        <section className="bg-gradient-to-tr from-black to-gray-800 text-white">
            <div className="container mx-auto bg-[url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Stars.svg?sanitize=true)] max-w-4xl p-4 py-12">
                <div className="relative mb-4 p-4 text-center">
                    <h2 className="relative z-50 mb-2 font-bold">
                        <span><a href="#">
                            <FaArrowAltCircleUp className="h-6 w-6"/></a>                                     
                        </span>   
                        <span className="mr-2 font-headline text-4xl">
                            Skills
                        </span>                        
                    </h2>
                </div>
                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="basis-1/2">
                        <div className="grid grid-cols-3 gap-4 font-semibold md:grid-cols-3">
                            {skills.map((skill, index) => (
                                <div
                                    key={`skill-${index}`}
                                    className="flex flex-row items-center gap-2 md:flex-col md:items-start"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                                        <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="h-10 w-10 rounded"
                                        />
                                    </div>
                                    <div className="w-full flex-grow">
                                        <h4 className="font-headlin">{skill.name}</h4>
                                        <div className="h-2.5 w-full rounded-full">
                                            <div
                                                className="h-2.5 rounded-full bg-emerald-600"
                                                style={{ width: `${skill.level}%` }}
                                            >                                   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <div className="grid grid-cols-3 gap-4 font-semibold md:grid-cols-3">
                            {skillsDados.map((skillDado, index) => (
                                <div
                                    key={`skill-${index}`}
                                    className="flex flex-row items-center gap-2 md:flex-col md:items-start"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                                        <img
                                        src={skillDado.icon}
                                        alt={skillDado.name}
                                        className="h-10 w-10 rounded"
                                        />
                                    </div>
                                    <div className="w-full flex-grow">
                                        <h4 className="font-headlin">{skillDado.name}</h4>
                                        <div className="h-2.5 w-full rounded-full">
                                            <div
                                                className="h-2.5 rounded-full bg-emerald-600"
                                                style={{ width: `${skillDado.level}%` }}
                                            >                                   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>      
        </section>
    )
}

export default Skills;