import { useEffect, useRef, useState } from 'react'
import githubLogo from './assets/github.png'
import linkedInLogo from './assets/linkedin.png'
import springIcon from './assets/springicon.png'
import typescriptIcon from './assets/brand-typescript.svg'
import reactIcon from './assets/react.svg'
import javaIcon from './assets/5968231.png'
import gsap from 'gsap'
import './App.css'
import supabaseIcon from './assets/supabaselogo.png'
import sqlIcon from './assets/sqllogo.jpeg'
import stanfordNlpIcon from './assets/corenlp-logo.png'
import chessIcon from './assets/chess.svg';
import emailIcon from './assets/email.svg';
import gsapIcon from './assets/gsap.png';
import d3Icon from './assets/d3.png';
import HibernateIcon from './assets/hib.png'
import mySQLLogo from './assets/mysql.png'
import jsIcon from './assets/js.webp';
import cssIcon from './assets/css.png';
import htmlIcon from './assets/html.png';
import tailwind from './assets/tailwind.png';
import smtpIcon from './assets/smtp.webp';
import TypeScriptIcon2 from './assets/typescriptlogo.png';
import leetcodeIcon from './assets/leetcodeicon.png';

type Section = 'about' | 'portfolio' | 'hobbies' | 'miscellaneous'
//IBM Plex Mono-----
function App() {
    const techItemsRef = useRef<(HTMLSpanElement | null)[]>(Array(13).fill(null))
    const cursorRef = useRef<HTMLDivElement>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const trailRefs = useRef<(HTMLDivElement | null)[]>([])
    const trailPositions = useRef<{ x: number; y: number }[]>([])
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [currentSection, setCurrentSection] = useState<Section>('portfolio')
    const [terminalVisible, setTerminalVisible] = useState(true)

    useEffect(() => {
        const terminalOutput = document.getElementById('terminal-output')
        if (!terminalOutput) return

        const commands = ['cd C:\\Users\\samor\\Sammeh', 'mvn: spring-boot:run']
        const springBootLogs = `Standard Commons Logging discovery in action with spring-jcl: bruh just yeet commons-logging.jar outta the classpath 😭 don't make it awkward

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\
( ( )\\___ | '_ | '_| | '_ \\/ _\` | \\ \\ \\ \\
 \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_|\\__, | / / / /
 =========|_|==============|___/=/_/_/_/

 :: Spring Boot ::                (v3.4.4)

2025-06-03T18:38:33.004+01:00  INFO 17772 --- [           main] sam.is.unemployed                        : ayo we bootin’ 🚀           Sam O Reilly is goin live (Java 22.0.1, let’s ride) 💅 (C:\Users\samor\Sammeh)
2025-06-03T18:38:33.006+01:00  INFO 17772 --- [           main] sam.is.locked.in                         : no profile? bet. default it is 😎
2025-06-03T18:38:33.703+01:00  INFO 17772 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : scanning for JPA reps like a LinkedIn stalker 🕵️‍♀️
2025-06-03T18:38:33.836+01:00  INFO 17772 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : boom 💥 found 2 repo's in 122ms, slay
2025-06-03T18:38:33.988+01:00  INFO 17772 --- [           main] faultConfiguringBeanFactoryPostProcessor : no errorChannel? that’s suspicious… generating default ✨
2025-06-03T18:38:34.000+01:00  INFO 17772 --- [           main] faultConfiguringBeanFactoryPostProcessor : integrationHeaderChannelRegistry is MIA, so we manifesting one 💅
2025-06-03T18:38:34.557+01:00  INFO 17772 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat locked in on port 8080 🔐 it’s giving “web vibes”
2025-06-03T18:38:34.574+01:00  INFO 17772 --- [           main] o.apache.catalina.core.StandardService   : Tomcat service said “it’s showtime” 🎬
2025-06-03T18:38:34.574+01:00  INFO 17772 --- [           main] o.apache.catalina.core.StandardEngine    : engine go brrrrr 💨 (Apache Tomcat/10.1.39)
2025-06-03T18:38:34.641+01:00  INFO 17772 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : web context initialized and it’s kinda slappin 👀
2025-06-03T18:38:34.641+01:00  INFO 17772 --- [           main] w.s.c.ServletWebServerApplicationContext : App cooked and ready to serve 🍽️ (1593ms, no cap)
Standard Commons Logging discovery in action with spring-jcl: commons-logging.jar still loitering in classpath 😩 tell it to go home
2025-06-03T18:38:34.784+01:00  INFO 17772 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 hydration arc starting 💧🫧 stay hydrated, king
`
        let currentCommandIndex = 0
        let currentCharIndex = 0
        let typingInterval: number
        let logsAdded = false
        let logsCharIndex = 0

        const typeNextChar = () => {
            if (currentCommandIndex >= commands.length) {
                if (!logsAdded) {
                    if (logsCharIndex < springBootLogs.length) {
                        if (logsCharIndex === 0) {
                            terminalOutput.style.color = 'white'
                            terminalOutput.style.fontSize = '0.875rem' // text-sm (14px)
                            terminalOutput.textContent += '\n' // Add newline before logs
                        }
                        terminalOutput.textContent += springBootLogs[logsCharIndex]
                        logsCharIndex++
                    } else {
                        logsAdded = true
                        setTimeout(() => {
                            clearInterval(typingInterval)
                            setTerminalVisible(false)
                        }, 500)
                    }
                }
                return
            }

            const currentCommand = commands[currentCommandIndex]
            if (currentCharIndex < currentCommand.length) {
                if (currentCommandIndex === 0 && currentCharIndex === 0) {
                    terminalOutput.style.color = 'rgb(74, 222, 128)' // text-green-400
                    terminalOutput.style.fontSize = '1.25rem' // text-xl (20px)
                    terminalOutput.textContent = currentCommand[currentCharIndex]
                } else {
                    terminalOutput.textContent += currentCommand[currentCharIndex]
                }
                currentCharIndex++
            } else {
                if (currentCommandIndex === 0) {
                    terminalOutput.textContent += '\nC:\\Users\\samor\\Sammeh: '
                }
                currentCommandIndex++
                currentCharIndex = 0
            }
        }

        // Start with slow typing for commands
        typingInterval = window.setInterval(typeNextChar, 100)

        // When commands are done, switch to fast typing for logs
        const checkCommandsDone = setInterval(() => {
            if (currentCommandIndex >= commands.length && !logsAdded) {
                clearInterval(typingInterval)
                typingInterval = window.setInterval(typeNextChar, 0.000000000000000000000000000000000000000000000000000000000000000000000000001) // Much faster typing for logs (0.000001ms)
                clearInterval(checkCommandsDone)
            }
        }, 100)

        return () => {
            clearInterval(typingInterval)
            clearInterval(checkCommandsDone)
        }
    }, [])

    useEffect(() => {
        // Prevent text selection
        const preventSelection = (e: Event) => {
            e.preventDefault()
        }

        document.addEventListener('mousedown', preventSelection)
        document.addEventListener('selectstart', preventSelection)

        // Mouse down/up handlers
        const handleMouseDown = (e: MouseEvent) => {
            setIsMouseDown(true)
            // Set all trail positions and cursor to current mouse position (offset by half width/height)
            const offsetX = e.clientX - 6 // Half of cursor width (12px / 2)
            const offsetY = e.clientY - 6 // Half of cursor height (12px / 2)
            
            for (let i = 0; i < 5; i++) {
                trailPositions.current[i] = { x: offsetX, y: offsetY }
                if (trailRefs.current[i]) {
                    gsap.set(trailRefs.current[i], { left: offsetX, top: offsetY })
                }
            }
            if (cursorRef.current) {
                gsap.set(cursorRef.current, { left: offsetX, top: offsetY })
            }
            // Animate cursor and trail on mouse down
            if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                    scale: 1.8,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2)',
                    duration: 0.2,
                    ease: 'power2.out'
                })
            }
            trailRefs.current.forEach((trail, index) => {
                if (trail) {
                    gsap.to(trail, {
                        scale: 1.5 - (index * 0.15),
                        opacity: 0.8 - (index * 0.16),
                        duration: 0.2,
                        ease: 'power2.out'
                    })
                }
            })
        }

        const handleMouseUp = () => {
            setIsMouseDown(false)
            // Reset cursor and trail on mouse up
            if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                    scale: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.3)',
                    duration: 0.2,
                    ease: 'power2.out'
                })
            }
            trailRefs.current.forEach((trail, index) => {
                if (trail) {
                    gsap.to(trail, {
                        scale: 1 - (index * 0.08),
                        opacity: 0.6 - (index * 0.12),
                        duration: 0.2,
                        ease: 'power2.out'
                    })
                }
            })
        }

        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)

        // Mouse move handler
        const onMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
            if (isMouseDown) {
                // Update trail positions only when mouse is down (offset by half width/height)
                const offsetX = e.clientX - 6
                const offsetY = e.clientY - 6
                
                trailPositions.current.unshift({ x: offsetX, y: offsetY })
                trailPositions.current.pop()
                if (cursorRef.current) {
                    gsap.to(cursorRef.current, {
                        left: offsetX,
                        top: offsetY,
                        duration: 0.05,
                        ease: 'power2.out'
                    })
                }
                trailRefs.current.forEach((trail, index) => {
                    if (trail && trailPositions.current[index]) {
                        gsap.to(trail, {
                            left: trailPositions.current[index].x,
                            top: trailPositions.current[index].y,
                            duration: 0.08 + (index * 0.02),
                            ease: 'power2.out'
                        })
                    }
                })
            }
        }

        window.addEventListener('mousemove', onMouseMove)

        // Initialize GSAP animations for tech items
        techItemsRef.current.forEach((item, index) => {
            if (!item) return
            // Create hover animation
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: 'back.out(1.7)',
                    backgroundColor: 'rgba(59, 130, 246, 0.2)', // Blue tint
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                    zIndex: 10,
                })
                // Animate icon
                const icon = item.querySelector('img, svg')
                if (icon) {
                    gsap.to(icon, {
                        rotation: 360,
                        duration: 0.5,
                        ease: 'power2.out',
                    })
                }
            })
            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                    backgroundColor: 'rgba(17, 24, 39, 0.9)',
                    boxShadow: 'none',
                    zIndex: 1,
                })
                // Reset icon rotation
                const icon = item.querySelector('img, svg')
                if (icon) {
                    gsap.to(icon, {
                        rotation: 0,
                        duration: 0.3,
                        ease: 'power2.out',
                    })
                }
            })
        })

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('mousedown', preventSelection)
            document.removeEventListener('selectstart', preventSelection)
        }
    }, [isMouseDown])

    return (
        <div className="min-h-screen bg-black text-gray-200 select-none">
            {/* Terminal Overlay */}
            <div className="fixed inset-0 bg-black z-50 flex items-start justify-start p-2 sm:p-4" id="terminal-overlay" style={{ display: terminalVisible ? 'flex' : 'none' }}>
                <div className="font-mono text-sm sm:text-xl">
                    <pre id="terminal-output"></pre>
                </div>
            </div>

            {/* Custom Cursor Trail */}
            {[...Array(5)].map((_, index) => (
                <div
                    key={index}
                    ref={el => { trailRefs.current[index] = el }}
                    className="fixed w-2 h-3 sm:w-3 sm:h-4 pointer-events-none z-40"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.85)',
                        opacity: isMouseDown ? 0.6 - (index * 0.12) : 0,
                        scale: isMouseDown ? 1 - (index * 0.08) : 0,
                        visibility: isMouseDown ? 'visible' : 'hidden',
                        boxShadow: '0 0 12px rgba(255, 255, 255, 0.5), 0 0 25px rgba(255, 255, 255, 0.2)',
                        borderRadius: '50% 50% 50% 0',
                        transform: 'rotate(-45deg)'
                    }}
                />
            ))}
            {/* Custom Cursor */}
            <div
                ref={cursorRef}
                className="fixed w-3 h-4 pointer-events-none z-50"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    visibility: isMouseDown ? 'visible' : 'hidden',
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.3)',
                    borderRadius: '50% 50% 50% 0',
                    transform: 'rotate(-45deg)'
                }}
            />

            {/* INTEGRATED FULL-WIDTH NAVBAR (FIXED) */}
            <div className="fixed top-0 left-0 w-full bg-black py-2 sm:py-3 px-2 sm:px-4 shadow-md z-30">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 max-w-6xl mx-auto">
                    {/* Section Navigation */}
                    <div className="flex flex-row gap-1 sm:gap-2">
                        <button
                            onClick={() => setCurrentSection('portfolio')}
                            className={`text-md px-3 py-1 rounded transition-all ${currentSection === 'portfolio' ? 'bg-gray-800/30 text-white' : 'hover:bg-gray-800/70 text-gray-300'}`}
                        >
                            Portfolio
                        </button>
                        <button
                            onClick={() => setCurrentSection('about')}
                            className={`text-md px-3 py-1 rounded transition-all ${currentSection === 'about' ? 'bg-gray-800/30 text-white' : 'hover:bg-gray-800/70 text-gray-300'}`}
                        >
                            About Me
                        </button>
                        <button
                            onClick={() => setCurrentSection('hobbies')}
                            className={`text-md px-3 py-1 rounded transition-all ${currentSection === 'hobbies' ? 'bg-gray-800/30 text-white' : 'hover:bg-gray-800/70 text-gray-300'}`}
                        >
                            Hobbies
                        </button>
                        <button
                            onClick={() => setCurrentSection('miscellaneous')}
                            className={`text-md px-3 py-1 rounded transition-all ${currentSection === 'miscellaneous' ? 'bg-gray-800/30 text-white' : 'hover:bg-gray-800/70 text-gray-300'}`}
                        >
                            Miscellaneous
                        </button>
                    </div>
                    {/* Social Links */}
                    <div className="flex flex-row gap-4 mt-1">
                        <a
                            href="https://leetcode.com/u/Sam_OR/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center group"
                            title="Chess.com"
                        >
                            <img src={leetcodeIcon} alt="Leetcode icon" className="w-5 h-5 object-contain invert group-hover:scale-110 transition-transform" />
                            <span className="text-xs mt-1 text-gray-400 group-hover:text-white">Leetcode</span>
                        </a>
                        <a
                            href="https://www.chess.com/member/samoreilly2095"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center group"
                            title="Chess.com"
                        >
                            <img src={chessIcon} alt="Chess.com icon" className="w-5 h-5 object-contain invert group-hover:scale-110 transition-transform" />
                            <span className="text-xs mt-1 text-gray-400 group-hover:text-white">Chess</span>
                        </a>
                        <a
                            href="https://github.com/x23756575"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center group"
                            title="GitHub"
                        >
                            <img src={githubLogo} alt="GitHub logo" className="w-5 h-5 object-contain invert group-hover:scale-110 transition-transform" />
                            <span className="text-xs mt-1 text-gray-400 group-hover:text-white">GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sam-o-reilly-61a50329a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center group"
                            title="LinkedIn"
                        >
                            <img src={linkedInLogo} alt="LinkedIn logo" className="w-5 h-5 object-contain invert group-hover:scale-110 transition-transform" />
                            <span className="text-xs mt-1 text-gray-400 group-hover:text-white">LinkedIn</span>
                        </a>
                        <a
                            href="mailto:samore123ash@gmail.com"
                            className="flex flex-col items-center group"
                            title="Email"
                        >
                            <img src={emailIcon} alt="Email icon" className="w-5 h-5 object-contain invert group-hover:scale-110 transition-transform" />
                            <span className="text-xs mt-1 text-gray-400 group-hover:text-white">Email</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main content layout with padding-top to account for fixed navbar */}
            <div className="flex flex-row gap-8 px-4 sm:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12 items-start justify-center">
                {/* Tech stack animation and main content */}
                <div className="flex flex-col flex-1 max-w-4xl">
                    {/* Hero section */}
                    <section>
                        <div className="max-w-4xl mx-auto">
                            <div>
                                <h2 className="text-4xl sm:text-6xl mt-4 sm:mt-7 mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Hello I'm</h2>
                                <h2 className="text-4xl sm:text-6xl mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Sam O Reilly</h2>
                            </div>
                            <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                                On the journey to becoming a Backend Engineer. Building real apps, one feature at a time.
                            </p>
                            <span className="text-xs text-gray-400" style={{ fontFamily: "'IBM Plex Mono', monospace" }}> Ashbourne, Meath, Ireland</span>
                        </div>
                    </section>

                    {/* Main Content Area */}
                    <main className="flex-1 py-8 sm:py-12">
                        {/* Dynamic Content Sections */}
                        {currentSection === 'portfolio' && (
                            <section className="mb-12 sm:mb-20">
                                {/* Tech Stack Slideshow - Moved inside portfolio section */}
                                <div className="relative w-full sm:w-[500px] mx-auto overflow-hidden h-24 sm:h-32 mb-8 sm:mb-12 flex flex-col justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>
                                    {/* First Row - Moving Left */}
                                    <div className="absolute flex gap-6 animate-slide-left top-0">
                                        {/* First 5 items */}
                                        <span 
                                            ref={el => { techItemsRef.current[0] = el }}
                                            className="text-sm bg-gray-900/90 backdrop-blur-sm px-6 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap transition-all duration-300 min-w-fit"
                                        >
                                            <img src={springIcon} alt="Spring Boot" className="w-6 h-6 object-contain invert" />
                                            Spring Boot
                                        </span>
                                        <span 
                                            ref={el => { techItemsRef.current[1] = el }}
                                            className="text-sm bg-gray-900/90 backdrop-blur-sm px-6 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap transition-all duration-300 min-w-fit"
                                        >
                                            <img src={HibernateIcon} alt="React" className="w-4 h-4 object-contain" />
                                            Hibernate
                                        </span>
                                        <span 
                                            ref={el => { techItemsRef.current[2] = el }}
                                            className="text-sm bg-gray-900/90 backdrop-blur-sm px-6 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap transition-all duration-300 min-w-fit"
                                        >
                                            <img src={reactIcon} alt="React" className="w-6 h-6 object-contain" />
                                            React
                                        </span>
                                        <span 
                                            ref={el => { techItemsRef.current[3] = el }}
                                            className="text-sm bg-gray-900/90 backdrop-blur-sm px-6 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap transition-all duration-300 min-w-fit"
                                        >
                                            <img src={typescriptIcon} alt="TypeScript" className="w-6 h-6 object-contain" />
                                            TypeScript
                                        </span>
                                        <span 
                                            ref={el => { techItemsRef.current[4] = el }}
                                            className="text-sm bg-gray-900/90 backdrop-blur-sm px-6 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap transition-all duration-300 min-w-fit"
                                        >
                                            <img src={javaIcon} alt="Java" className="w-6 h-6 object-contain" />
                                            Java
                                        </span>
                                        <span
                                            ref={el => { techItemsRef.current[10] = el }}
                                            className="text-sm bg-gray-900/90 backdrop-blur-sm px-6 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap transition-all duration-300 min-w-fit"
                                        >
                                            <img src={supabaseIcon} alt="Supabase" className="w-6 h-6 object-contain" />
                                            Supabase
                                        </span>
                                    </div>
                                    {/* Second Row - Moving Right */}
                                    <div className="absolute flex gap-6 animate-slide-right bottom-0">
                                        {/* Add SQL and Stanford Core NLP to the second row - Starting here */}
                                         <span
                                            ref={el => { techItemsRef.current[11] = el }}
                                            className="text-sm bg-gray-900/90 backdrop-blur-sm px-6 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap transition-all duration-300 min-w-fit"
                                        >
                                            <img src={sqlIcon} alt="SQL" className="w-6 h-6 object-contain" />
                                             SQL
                                        </span>
                                        <span
                                            ref={el => { techItemsRef.current[12] = el }}
                                            className="text-sm bg-gray-900/90 backdrop-blur-sm px-6 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap transition-all duration-300 min-w-fit"
                                        >
                                            <img src={stanfordNlpIcon} alt="Stanford Core NLP" className="w-6 h-6 object-contain" />
                                             Stanford Core NLP
                                        </span>
                                        {/* Existing items - Moved after the new items */}
                                         <span
                                            ref={el => { techItemsRef.current[5] = el }}
                                            className="text-sm bg-gray-900/90 backdrop-blur-sm px-6 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap transition-all duration-300 min-w-fit"
                                        >
                                            <img src={reactIcon} alt="React" className="w-6 h-6 object-contain" />
                                            React
                                        </span>
                                        <span
                                            ref={el => { techItemsRef.current[6] = el }}
                                            className="text-sm bg-gray-900/90 backdrop-blur-sm px-6 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap transition-all duration-300 min-w-fit"
                                        >
                                            <img src={typescriptIcon} alt="TypeScript" className="w-6 h-6 object-contain" />
                                            TypeScript
                                        </span>
                                        <span
                                            ref={el => { techItemsRef.current[7] = el }}
                                            className="text-sm bg-gray-900/90 backdrop-blur-sm px-6 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap transition-all duration-300 min-w-fit"
                                        >
                                            <img src={javaIcon} alt="Java" className="w-6 h-6 object-contain" />
                                            Java
                                        </span>
                                        <span
                                            ref={el => { techItemsRef.current[8] = el }}
                                            className="text-sm bg-gray-900/90 backdrop-blur-sm px-6 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap transition-all duration-300 min-w-fit"
                                        >
                                            <img src={springIcon} alt="Spring Boot" className="w-6 h-6 object-contain invert" />
                                            Spring Boot
                                        </span>
                                        <span
                                            ref={el => { techItemsRef.current[9] = el }}
                                            className="text-sm bg-gray-900/90 backdrop-blur-sm px-6 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap transition-all duration-300 min-w-fit"
                                        >
                                            <img src={HibernateIcon} alt="React" className="w-4 h-4 object-contain" />
                                            Hibernate
                                        </span>
                                    </div>
                                </div>
                                {/* Projects Subsection with Interactive Timeline */}
                                <div className="mb-8 sm:mb-12 mt-4 sm:mt-5">
                                    <h1 className="text-3xl sm:text-5xl font-light mb-4 sm:mb-6" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Projects</h1>
                                    <div className="flex flex-col sm:flex-row items-start">
                                        {/* Timeline - Hidden on Mobile */}
                                        <div className="hidden sm:flex relative flex-col items-center mr-4 sm:mr-8 min-w-[100px]">
                                            {/* Vertical Line */}
                                            <div className="absolute left-1/2 top-6 bottom-6 w-1 bg-gray-700 transition-colors duration-300" style={{ transform: 'translateX(-50%)' }}></div>
                                            
                                            {/* Project 2 Timeline */}
                                            <div className="flex flex-col items-center z-10" style={{ marginTop: '0' }}>
                                                {/* End Circle */}
                                                <div className="relative">
                                                    <span className="absolute right-full mr-2 text-xs text-gray-400 whitespace-nowrap transition-colors duration-300 hover:text-gray-200">June 30th</span>
                                                    <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 hover:animate-pulse"></div>
                                                </div>
                                                {/* Vertical Line for Project 2 */}
                                                <div className="w-1 h-48 bg-gray-700 my-2"></div>
                                                {/* Start Circle */}
                                                <div className="relative">
                                                    <span className="absolute right-full mr-2 text-xs text-gray-400 whitespace-nowrap transition-colors duration-300 hover:text-gray-200">April 25th</span>
                                                    <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 hover:animate-pulse"></div>
                                                </div>
                                            </div>

                                            {/* Spacer between projects */}
                                            <div style={{ height: '80px' }}></div>

                                            {/* Project 1 Timeline */}
                                            <div className="flex flex-col items-center z-10">
                                                {/* End Circle */}
                                                <div className="relative">
                                                    <span className="absolute right-full mr-2 text-xs text-gray-400 whitespace-nowrap transition-colors duration-300 hover:text-gray-200">April 15th</span>
                                                    <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 hover:animate-pulse"></div>
                                                </div>
                                                {/* Vertical Line for Project 1 */}
                                                <div className="w-1 h-48 bg-gray-700 my-2"></div>
                                                {/* Start Circle */}
                                                <div className="relative">
                                                    <span className="absolute right-full mr-2 text-xs text-gray-400 whitespace-nowrap transition-colors duration-300 hover:text-gray-200">March 1st</span>
                                                    <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 hover:animate-pulse"></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Projects */}
                                        <div className="flex flex-col gap-8 sm:gap-16 flex-1">
                                            {/* Project 1 */}
                                            <div className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg relative">
                                                <a href="https://github.com/x23756575/JobTrackrr">
                                                    <h3 className="text-base sm:text-lg mb-2">PathToHire</h3>
                                                </a>
                                                <a className="absolute top-3 sm:top-4 right-3 sm:right-4 invert" href="https://github.com/x23756575/JobTrackrr">
                                                    <img className="rounded-2xl h-6 w-6 sm:h-8 sm:w-8" src={githubLogo}/>
                                                </a>
                                                <p className="text-xs sm:text-sm text-gray-400 mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                                                    PathToHire is a full-stack web application that helps job seekers manage their job search with AI-enhanced resume analysis and application tracking. The backend is built with Spring Boot, using Spring Security, OAuth2 for authentication, and Hibernate/JPA with Supabase for data persistence. It integrates Stanford CoreNLP for resume parsing and intelligent job matching. The frontend is developed with React, using JSessionID for session management, GSAP for smooth animations, and D3.js for data visualizations. Real-time features like chat and status updates are implemented using WebSockets, creating a responsive and interactive user experience.
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <img src={springIcon} alt="Spring Boot" className="w-4 h-4 object-contain invert" />
                                                        Spring Boot
                                                    </span>
                                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <img src={supabaseIcon} alt="Supabase" className="w-4 h-4 object-contain" />
                                                        Supabase
                                                    </span>
                                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <img src={HibernateIcon} alt="React" className="w-4 h-4 object-contain" />
                                                        Hibernate
                                                    </span>
                                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <img src={reactIcon} alt="React" className="w-4 h-4 object-contain" />
                                                        React
                                                    </span>
                                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <img src={stanfordNlpIcon} alt="Stanford Core NLP" className="w-4 h-4 object-contain" />
                                                        Stanford Core NLP
                                                    </span>
                                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <img src={TypeScriptIcon2} alt="Typescript Logo" className="w-4 h-4 object-contain" />
                                                        Typescript
                                                    </span>
                                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <img src={gsapIcon} alt="Gsap" className="w-4 h-4 object-contain" />
                                                        GSAP
                                                    </span>
                                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <img src={d3Icon} alt="D3.js" className="w-4 h-4 object-contain" />
                                                        D3.js
                                                    </span>
                                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <img src={tailwind} alt="D3.js" className="w-4 h-4 object-contain" />
                                                        Tailwind
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Project 2 */}
                                            <div className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg relative">
                                                <a href="https://github.com/x23756575/JobTrackrr">
                                                    <h3 className="text-base sm:text-lg mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>BetterStudy</h3>
                                                </a>
                                                <a className="absolute top-3 sm:top-4 right-3 sm:right-4 invert" href="https://github.com/x23756575/JobTrackrr">
                                                    <img className="rounded-2xl h-6 w-6 sm:h-8 sm:w-8" src={githubLogo}/>
                                                </a>
                                                <p className="text-xs sm:text-sm text-gray-400 mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                                                    BetterStudy is a full-stack social media platform designed for students to connect, share, and collaborate. Built with Spring Boot and Hibernate on the backend, it provides secure authentication, user management, and relational data handling. The frontend is developed using HTML, CSS, and JavaScript, with real-time messaging powered by STOMP.js for both group and direct chats. Users can register, log in, create and like posts, comment, and edit their profiles - including descriptions, profile photos, and college information. The app also supports email and password updates, password resets, and account deletion. A dynamic leaderboard highlights user engagement based on the total number of post likes, encouraging community interaction and contribution.
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <img src={springIcon} alt="Spring Boot" className="w-4 h-4 object-contain invert" />
                                                        Spring Boot
                                                    </span>
                                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <img src={mySQLLogo} alt="Supabase" className="w-4 h-4 object-contain" />
                                                        MySQL
                                                    </span>
                                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <img src={HibernateIcon} alt="React" className="w-4 h-4 object-contain" />
                                                        Hibernate
                                                    </span>
                                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <img src={htmlIcon} alt="React" className="w-4 h-4 object-contain" />
                                                        HTML
                                                    </span>
                                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <img src={cssIcon} alt="Stanford Core NLP" className="w-4 h-4 object-contain" />
                                                        CSS
                                                    </span>
                                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <img src={jsIcon} alt="Gsap" className="w-4 h-4 object-contain" />
                                                        JavaScript
                                                    </span>
                                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <img src={smtpIcon} alt="D3.js" className="w-4 h-4 object-contain" />
                                                        SMTP
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {currentSection === 'about' && (
                            <section className="mb-12 sm:mb-20">
                                <div className="bg-black backdrop-blur-sm p-4 sm:p-6 rounded-lg">
                                    <p className="text-xl sm:text-2xl font-bold mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Heyya!</p>
                                    <span className="text-sm sm:text-base text-gray-400 font-normal" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                                        <span className="text-white font-semibold"></span>Im a Computer Science student at the National College of Ireland. Whether I'm writing code, brainstorming ideas, or learning new concepts, I take joy in building things that are both functional and visually appealing. My work blends logic with creativity, and I wouldn't have it any other way.
                                        <br />
                                        Beyond the screen, I enjoy running and playing video games—they keep me balanced and energized.
                                        <br />
                                        <br/>
                                        I'm driven by curiosity and a desire to solve real-world problems through technology. Right now, I'm focused on building my skills in backend development and exploring new ways to create seamless user experiences.
                                        <br />
                                        I love working with others who are passionate about learning and growth, and I'm always up for a good challenge or collaboration.
                                    </span>
                                </div>
                            </section>
                        )}

                        {currentSection === 'hobbies' && (
                            <section className="mb-12 sm:mb-20">
                                <h2 className="text-xl sm:text-2xl font-light mb-6 sm:mb-8" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Hobbies</h2>
                                <div className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                                    <p className="text-sm sm:text-base text-gray-400">
                                        Outside of tech, a few things have shaped who I am just as much as code has.<br/>
                                        Running helps me clear my head and also before I ever wrote a line of code, I was deep into sports at a young age—I even placed 3rd in Ireland for high jump.<br/>
                                        I also love a game of chess, it's the perfect mix of strategy and chill.<br/>
                                        That competitive drive and commitment have stuck with me, and still pushes me to improve, both in life and in my work.
                                    </p>
                                </div>
                            </section>
                        )}

                        {currentSection === 'miscellaneous' && (
                            <section className="mb-12 sm:mb-20">
                                <h2 className="text-xl sm:text-2xl font-light mb-6 sm:mb-8">Miscellaneous</h2>
                                <div className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg">
                                    <p className="text-sm sm:text-base text-gray-400">Miscellaneous section coming soon...</p>
                                </div>
                            </section>
                        )}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default App