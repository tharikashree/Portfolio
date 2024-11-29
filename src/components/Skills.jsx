import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs,FaJava } from 'react-icons/fa'; 
import Header from './Header';

const SkillsPage = () => {
    const skills = [
        { id: 1, name: 'HTML5', icon:"https://skillicons.dev/icons?i=html" },
        { id: 2, name: 'CSS3',icon: "https://skillicons.dev/icons?i=css" },
        { id: 3, name: 'JavaScript', icon: "https://skillicons.dev/icons?i=javascript" },
        { id: 4, name: 'Node.js', icon: "https://skillicons.dev/icons?i=nodejs" },
        { id: 5, name: 'Express.js', icon: "https://skillicons.dev/icons?i=expressjs" },
        { id: 6, name: 'React', icon: "https://skillicons.dev/icons?i=react" },
        { id: 7, name: 'Tailwind CSS', icon: "https://skillicons.dev/icons?i=tailwind" },
        { id: 8, name: 'Git', icon: "https://skillicons.dev/icons?i=git" },
        { id: 9, name: 'GitHub',icon: "https://skillicons.dev/icons?i=github" },
        { id: 10, name: 'mySQL', icon: "https://skillicons.dev/icons?i=mysql" },
        { id: 11, name: 'PostgreSQL', icon: "https://skillicons.dev/icons?i=postgresql" },
        { id: 12, name: 'MongoDB', icon: "https://skillicons.dev/icons?i=mongodb" },
        { id: 13, name: 'C', icon: "https://skillicons.dev/icons?i=c" },
        { id: 14, name: 'C++', icon: "https://skillicons.dev/icons?i=cpp" },
        { id: 15, name: 'Java', icon: "https://skillicons.dev/icons?i=java" },
        { id: 16, name: 'Python', icon: "https://skillicons.dev/icons?i=python" },
        { id: 17, name: 'Flask', icon: "https://skillicons.dev/icons?i=flask" },
        { id: 18, name: 'Selenium', icon: "https://skillicons.dev/icons?i=selenium" },
        { id: 19, name: 'Google Cloud Platform', icon: "https://skillicons.dev/icons?i=gcp" },
        { id: 20, name: 'Postman', icon: "https://skillicons.dev/icons?i=postman" },
        // { id: 21, name: 'Typescript', icon: "https://skillicons.dev/icons?i=ts" },
        // { id:22, name: 'NextJs', icon: "https://skillicons.dev/icons?i=nextjs" },
    ];

    return (
        <div className="bg-black text-white min-h-screen p-8">
            <Header />
            <header className="text-center  mt-10 mb-8">
                <h1 className="text-4xl font-bold mb-2 text-purple-400">Skills</h1>
                <p className="text-white text-xl mt-4">Technologies Known:</p>
            </header>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                {skills.map((skill) => (
                    <div
                        key={skill.id}
                        className="flex flex-col items-center bg-purple-500 bg-opacity-30 p-5 rounded-lg shadow-md hover:shadow-[0_0_15px_3px_rgba(221,51,255,0.8)]"
                    >
                        <img src={skill.icon} alt={skill.name} className="w-16 h-16 m-1" />
                        
                        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsPage;
