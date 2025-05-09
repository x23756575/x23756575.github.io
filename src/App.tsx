import backgroundImage from './assets/giphy.gif'
import githubLogo from './assets/github.png'
import linkedInLogo from './assets/linkedin.png'
import './App.css'
//hello

function App() {
    return (
        <div
            className="relative h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
        
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[550px] -translate-x-1/2 -translate-y-1/2">
                <div className="h-full w-full rounded-3xl bg-white-500/30 backdrop-blur-md flex flex-col justify-center items-center px-6 py-8 space-y-6">

                    <div className="flex justify-center items-center text-4xl">
                        <span className="font-sans text-white">Sam O Reilly</span>

                    </div>
            
                    <a
                        href="https://github.com/x23756575"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 bg-white/80 hover:bg-white transition rounded-xl p-4 w-full shadow-lg"
                    >
                        <img
                            src={githubLogo}
                            alt="GitHub logo"
                            className="w-12 h-12 object-contain"
                        />
                        <span className="text-lg font-semibold text-gray-800">GitHub Page</span>
                    </a>

                
                    <a
                        href="https://www.linkedin.com/in/sam-o-reilly-61a50329a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 bg-white/80 hover:bg-white transition rounded-xl p-4 w-full shadow-lg"
                    >
                        <img
                            src={linkedInLogo}
                            alt="LinkedIn logo"
                            className="w-12 h-12 object-contain"
                        />
                        <span className="text-lg font-semibold text-gray-800">LinkedIn Profile</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App
