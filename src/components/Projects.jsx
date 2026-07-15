import React from 'react';
import Header from './Header';
import Button from './Button';
import recieasy from '../assets/recieasy.png';
import climate from '../assets/climate.png';
import glamio from '../assets/glamio.png';
import stock_trading from '../assets/stock_trading.jpg';

const ProjectsPage = () => {
    const projects = [
        {
            id: 1,
            name: 'ReciEasy',
            domain: "Web Development",
            description: 'All in one recipe platform for foodies to share and explore recipes seamlessly.',
            techStack: 'React, Node.js, Firebase-Firestore',
            githubLink: 'https://github.com/tharikashree/ReciEasy',
            demoLink: 'https://reci-easy.vercel.app/',
            image: recieasy,
        },
        {
            id: 2,
            name: 'CliMate',
            domain: "Web Development",
            description: 'An AI-powered web application that provides real-time weather updates and tailored lifestyle tips.',
            techStack: 'React, Node.js, OpenWeatherMap API, Gemini API',
            demoLink: 'https://cli-mate-beta.vercel.app/',
            githubLink: 'https://github.com/tharikashree/CliMate',
            image: climate,
        },
        {
            id: 3,
            name: 'Glamio E-Commerce Website',
            domain: "Web Development",
            description: 'A full-fledged luxury e-commerce platform featuring robust payment gateway integration and cart flows.',
            techStack: 'React, Strapi, Stripe, Redux',
            githubLink: 'https://github.com/tharikashree/glamio',
            image: glamio,
        },
        {
            id: 4,
            name: 'Stock Trading System',
            domain: "Web Development",
            description: 'A data-driven stock trading application showcasing secure mock portfolios and real-time market trends.',
            techStack: 'React, Material UI, Django, PostgreSQL',
            githubLink: 'https://github.com/Stock-Trading-System',
            image: stock_trading,
        },
    ];

    return (
        <div className="bg-neutral-950 text-neutral-100 min-h-screen font-sans selection:bg-purple-500 selection:text-black">
            <Header />

            <main className="max-w-6xl mx-auto px-6 py-20">
                {/* Header Section with Clipping Fix */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500 inline-block py-2">
                        Featured Projects
                    </h1>
                    <p className="text-neutral-400 mt-2 text-sm md:text-base">
                        A curated selection of my engineering, web architecture, and full-stack projects.
                    </p>
                </div>

                {/* Projects Showcase Stream */}
                <div className="space-y-24">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div 
                                key={project.id} 
                                className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-neutral-900/20 border border-neutral-900/60 rounded-3xl p-6 md:p-8 lg:p-12 hover:border-purple-500/20 transition-all duration-300 group"
                            >
                                {/* Content Block Column */}
                                <div className={`flex-1 flex flex-col justify-center order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-purple-950/60 text-purple-400 border border-purple-800/50">
                                            {project.domain}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 group-hover:text-purple-400 transition-colors duration-200 tracking-tight">
                                        {project.name}
                                    </h3>
                                    
                                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Tags Grid */}
                                    <div className="mb-8">
                                        <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Built With</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.split(',').map((tech, tIdx) => (
                                                <span 
                                                    key={tIdx} 
                                                    className="px-3 py-1 bg-neutral-900 text-neutral-300 text-xs font-medium rounded-lg border border-neutral-800/80"
                                                >
                                                    {tech.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Link Action Container */}
                                    <div className="flex flex-wrap items-center gap-4">
                                        {project.githubLink && (
                                            <Button text="GitHub" href={project.githubLink} />
                                        )}
                                        {project.demoLink && (
                                            <Button text="Live Demo" href={project.demoLink} />
                                        )}
                                    </div>
                                </div>

                                {/* Visual Image Container */}
                                <div className={`flex-1 w-full order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <div className="relative overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-900/40">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-auto object-cover transform scale-100 group-hover:scale-102 transition duration-500 shadow-2xl"
                                        />
                                        <div className="absolute inset-0 bg-purple-500/5 mix-blend-overlay pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer Github Banner Callout */}
                <div className="text-center mt-24 pt-12 border-t border-neutral-900">
                    <p className="text-neutral-400 text-base flex flex-col sm:flex-row items-center justify-center gap-4">
                        <span>Want to explore deeper architectural source files?</span>
                        <a 
                            href="https://github.com/tharikashree/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-5 py-2 rounded-full text-purple-400 border border-purple-500/30 font-semibold bg-purple-950/20 hover:bg-purple-500 hover:text-black hover:border-purple-500 transition-all duration-300 shadow-md text-sm"
                        >
                            Explore More on GitHub
                        </a>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default ProjectsPage;
