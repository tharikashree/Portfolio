import React from "react";
import Img from "../assets/img.jpg";
import { TypeAnimation } from "react-type-animation";
import Socials from "./Socials";
import Button from "./Button";
import Header from "./Header";

const Home = () => {
    return (
        <div className="bg-neutral-950 text-neutral-100 min-h-screen font-sans selection:bg-purple-500 selection:text-black flex flex-col">
            <Header />
            
            <section className="flex-1 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-6 py-12 md:py-24 gap-12 w-full">
                {/* Profile Image Box Container */}
                <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
                    <div className="relative group">
                        {/* Soft Outer Neon Backglow Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-600 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
                        
                        <img
                            src={Img}
                            alt="Tharika Shree"
                            className="relative rounded-full object-cover w-56 sm:w-72 md:w-80 lg:w-[360px] border-2 border-neutral-800/80 shadow-2xl transition-all duration-500 ease-out group-hover:scale-105 group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.3)]"
                        />
                    </div>
                </div>

                {/* Hero Intro Typography Column */}
                <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1 flex flex-col justify-center">
                    <h2 className="text-sm font-semibold tracking-widest text-neutral-400 uppercase mb-2">
                        Welcome to my portfolio
                    </h2>
                    
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
                        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500 inline-block py-2">THARIKA SHREE</span>
                    </h1>
                    
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-200 mb-6 min-h-[40px]">
                        I build as a{' '}
                        <span className="text-purple-400 border-b border-purple-500/20 pb-0.5">
                            <TypeAnimation
                                sequence={[
                                    "Python Developer", 1200,
                                    "Backend Engineer", 1200,
                                    "Full Stack Developer", 1200,
                                    "Open Source Contributor", 1200,
                                    "AI/ML Enthusiast", 1200,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h3>
                    
                    <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                        Computer Science and Engineering major focused on building high-performance backend pipelines, intelligent automation scripts, and scalable database integrations. Passionate about AI solutions, clean code architectures, and continuous system optimization.
                    </p>
                    
                    {/* Action Row */}
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                        <div className="flex items-center">
                            <Button text="Hire Me" href="/contact" />
                        </div>
                        <div className="transform scale-110">
                            <Socials />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
