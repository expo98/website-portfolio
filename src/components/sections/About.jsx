import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {

    
    const frontendSkills = [
        "React",
        "JavaScript",
        "TailwindCSS"
    ];
    const backendSkills = [
        "Node.js",
        "Postgres",
        "C",
        "C++",
        "Java"
    ]
    return (
    <section 
        id="about" 
        className="min-h-screen flex items-center justify-center py-20"
    >

        <div
            className="max-w-3xl mx-auto px-4"        
        >   <RevealOnScroll>
            <h2
                className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
            >
                About Me
            </h2>
            </RevealOnScroll>

            <div 
                className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all"
                >
                <RevealOnScroll>
                <p 
                    className="text-gray-300 mb-6 text-center"
                    > 
                    A travelled person that have met a lot of different cultures
                    from a young age.
                    Current Administrator for my Student Association 
                    NEI/AAC. Former Coordinator for Pedagogy of Informatics at NEI/AAC.
                    Did a weekly show at my hometown's local radio. Currently interested
                    in Software Architecture, Embedded Systems and Linux. 
                </p>
                </RevealOnScroll>

                <RevealOnScroll>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <div
                        className="rounded-xl p-6 hover:-translate-y-1 transtition-all"
                    >
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech,key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition                                              
                                            ">
                                            {tech}

                                </span>
                            ))}
                        </div>
                    </div>

                    <div
                        className="rounded-xl p-6 hover:-translate-y-1 transtition-all"
                    >
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech,key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition                                              
                                            ">
                                            {tech}

                                </span>
                            ))}
                        </div>
                    </div>

                </div>
                </RevealOnScroll>
            </div>
            
            
            <RevealOnScroll>               
            <div
                className="grid gric-cols-1 md:grid-cols-2 gap-6 mt-8"
            >   

                <div
                    className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
                >
                    <h3
                        className="text-cl font-bold mb-4"    
                    >
                        Education
                    </h3>
                    <ul className="list-inside text-gray-300 space-y-6">
                       <li>
                            <strong>B.S. in Informatics Engineering</strong> - Universidade de Coimbra (2022-Currently)
                            <p className="mt-1">
                            <strong>Relevant Coursework:</strong> Data Structures, Distributed Systems, Compilers
                            </p>   
                        </li> 
                         
                        <li>
                            <strong>M.S. in Informatics Engineering (Software Engineering Branch)</strong> - Universidade de Coimbra (Unofficially)
                            <p className="mt-1">
                                <strong>Relevant Coursework: </strong>Software Architecture, Software Quality, Automated Software Engineering, Systems Integration
                            </p>
                        </li>
                            
                        
                        
                    </ul>
                </div>

                <div
                    className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
                >
                    <h3
                        className="text-cl font-bold mb-4"    
                    >
                        Experience
                    </h3>
                    <ul
                        className="list-inside space-y-6 text-gray-300"
                    >
                        
                            <li>
                                <strong>Administrator at NEI/AAC Student Association (2025-2026)</strong> 
                                <p className="mt-1">
                                    Supervising the Pedagogy and Development Coordinators.
                                    Part of the Consultation Team  of UpToData, Portugal's Data Science Student Meeting.
                                    Manager and keeper of the association's inventory and collection.
                                </p>
                            </li>
                       
                            <li>
                                <strong>Pedagogy Department Coordinator at NEI/AAC Student Association (2024-2025) </strong> 
                                <p className="mt-1">
                                    Coordinated a 10 people team to help give voice to the students.
                                    Organized semestrly Assemblies where students, faculty and degree coordinators 
                                    discussed problems and possible improvements.
                                </p>
                            </li>
                               
                    </ul>
                </div>
            </div>
            </RevealOnScroll>
        </div>
    </section>
);}