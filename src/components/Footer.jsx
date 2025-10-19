export const Footer = () => {

    return( <nav className=" w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-t border-white-10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="https://github.com/expo98/website-portfolio" className="font-mono text-medium font-bold text-gray-300">
                    License 🄯 2025 Miguel Pereira
                </a>


                <div className="hidden md:flex items-center space-x-8">
                    <a href="https://www.x.com/migueltmpereira" className="text-gray-300 hove:text-white transition-colors"> 
                        Twitter
                    </a>
                    <a href="https://www.github.com/expo98" className="text-gray-300 hove:text-white transition-colors"> 
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/migueltmpereira" className="text-gray-300 hove:text-white transition-colors"> 
                        LinkedIn 
                    </a>
                </div>
            </div>
        </div>
    </nav>
);}