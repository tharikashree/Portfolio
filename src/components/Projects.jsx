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
            domain:"Web Development",
            description: 'All in one recipe platform for foodies to share and explore recipes.',
            techStack: 'React, Node.js, Firebase-Firestore',
            githubLink: 'https://github.com/tharikashree/ReciEasy',
            demoLink: 'https://reci-easy.vercel.app/',
            image: recieasy,
        },
        {
            id: 2,
            name: 'CliMate',
            domain: "Web Development",
            description: 'An AI-powered web app that provides weather updates and lifestyle tips',
            techStack: 'React, Node.js, OpenWeatherMap API,Gemini API',
            demoLink: 'https://cli-mate-beta.vercel.app/',
            githubLink: 'https://github.com/tharikashree/CliMate',
            image: climate,
        },
        {
            id: 3,
            name: 'E-Commerce Website',
            domain: "Web Development",
            description: 'A full-fledged e-commerce website with payment gateway integration.',
            techStack: 'React, Strapi, Stripe, Redux',
            githubLink: 'https://github.com/tharikashree/glamio',
            image: glamio,
        },
        {
            id: 4,
            name: 'Stock Trading System',
            domain: "Web Development",
            description: 'A full-fledged stock trading website with stock data.',
            techStack: 'React, Material UI, Django, PostgreSQL',
            githubLink: 'https://github.com/Stock-Trading-System',
            image: stock_trading,
        },
    ];

    return (
        <div className="bg-black p-8 text-white">
            <Header/>
            <header className="text-center mt-10 mb-8">
                <h1 className="text-4xl font-bold mb-2 text-purple-400">Projects</h1>
                <p className="text-gray-400 text-xl mt-4">Some of my recent projects domain-wise</p>
            </header>

            <div className="space-y-10">
                {projects.map((project) => (
                    <div key={project.id} className="flex flex-col sm:flex-row items-center text-center justify-between gap-8 px-4">
                
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold text-white mb-4">{project.name}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <p className="text-gray-400 mb-4"><strong>Domain:</strong> {project.domain}</p>
                            <p className="text-gray-400 mb-8"><strong>Tech Stack:</strong> {project.techStack}</p>
                            {project.githubLink && (<Button text="GitHub" href={project.demoLink}></Button>)}
                            {project.demoLink && (
                                <Button text="Demo" href={project.demoLink}></Button>)}
                        </div>

                        <div className="flex-1">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full box-border h-auto rounded-lg shadow-lg hover:shadow-[0_0_15px_3px_rgba(221,51,255,0.8)] hover:scale-105 transition duration-300 "
                            />
                        </div>
                    </div>
                ))}
                <p className='text-center text-lg mr-2'>Check out more of my works on <a href='https://github.com/tharikashree/' className='px-4 ml-2 sm:px-6 py-2 rounded-full text-purple-400 border-2 border-purple-400 font-semibold hover:bg-purple-500 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(221,51,255,0.8)]'>Github</a>  </p>
            </div>
        </div>
    );
};

export default ProjectsPage;
