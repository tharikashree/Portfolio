import React from 'react';
import Header from './Header';

const SkillsPage = () => {
    // Grouping your technical skills by category for a cleaner presentation
const skillCategories = [
        {
            title: "Languages",
            items: [
                { name: 'Python', icon: "https://skillicons.dev/icons?i=python" },
                { name: 'TypeScript', icon: "https://skillicons.dev/icons?i=ts" },
                { name: 'JavaScript', icon: "https://skillicons.dev/icons?i=javascript" },
                { name: 'Java', icon: "https://skillicons.dev/icons?i=java" },
                { name: 'C++', icon: "https://skillicons.dev/icons?i=cpp" },
                { name: 'C', icon: "https://skillicons.dev/icons?i=c" },
                { name: 'HTML5', icon: "https://skillicons.dev/icons?i=html" },
                { name: 'CSS3', icon: "https://skillicons.dev/icons?i=css" },
            ]
        },
        {
            title: "Libraries & Frameworks",
            items: [
                { name: 'React', icon: "https://skillicons.dev/icons?i=react" },
                { name: 'Next.js', icon: "https://skillicons.dev/icons?i=nextjs" },
                { name: 'FastAPI', icon: "https://skillicons.dev/icons?i=fastapi" },
                { name: 'Node.js', icon: "https://skillicons.dev/icons?i=nodejs" },
                { name: 'Express.js', icon: "https://skillicons.dev/icons?i=expressjs" },
                { name: 'Flask', icon: "https://skillicons.dev/icons?i=flask" },
                { name: 'Tailwind CSS', icon: "https://skillicons.dev/icons?i=tailwind" },
                { name: 'Bootstrap', icon: "https://skillicons.dev/icons?i=bootstrap" },
            ]
        },
        {
            title: "Automation & Data Scraping",
            items: [
                { name: 'Selenium', icon: "https://skillicons.dev/icons?i=selenium" },
                { name: 'Beautiful Soup', icon: "https://skillicons.dev/icons?i=python" }, // Uses Python icon as fallback
                { name: 'Postman', icon: "https://skillicons.dev/icons?i=postman" },
            ]
        },
        {
            title: "Databases, Cloud & DevOps",
            items: [
                { name: 'PostgreSQL', icon: "https://skillicons.dev/icons?i=postgresql" },
                { name: 'MySQL', icon: "https://skillicons.dev/icons?i=mysql" },
                { name: 'MongoDB', icon: "https://skillicons.dev/icons?i=mongodb" },
                { name: 'Docker', icon: "https://skillicons.dev/icons?i=docker" },
                { name: 'Kubernetes', icon: "https://skillicons.dev/icons?i=kubernetes" },
                { name: 'Apache Kafka', icon: "https://skillicons.dev/icons?i=kafka" },
                { name: 'Google Cloud', icon: "https://skillicons.dev/icons?i=gcp" },
            ]
        },
        {
            title: "Developer Tools & Platforms",
            items: [
                { name: 'Git', icon: "https://skillicons.dev/icons?i=git" },
                { name: 'GitHub', icon: "https://skillicons.dev/icons?i=github" },
                { name: 'Netcracker OSS/BSS', icon: "https://skillicons.dev/icons?i=aws" }, // You can swap with a custom telecom icon if preferred
            ]
        }
    ];

    return (
        <div className="bg-neutral-950 text-neutral-100 min-h-screen font-sans selection:bg-purple-500 selection:text-black">
            <Header />
            
            <main className="max-w-6xl mx-auto px-6 py-20">
                {/* Header Section with Fix for Text Clipping */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500 inline-block py-2">
                        Technical Skills
                    </h1>
                    <p className="text-neutral-400 mt-2 text-sm md:text-base">
                        My technical toolkit and the technologies I use to build scalable applications.
                    </p>
                </div>

                {/* Categorized Skills Stack */}
                <div className="space-y-12">
                    {skillCategories.map((category, catIndex) => (
                        <div key={catIndex} className="bg-neutral-900/20 border border-neutral-900 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-bold text-purple-400 mb-6 tracking-wide border-b border-neutral-800 pb-2">
                                {category.title}
                            </h2>
                            
                            {/* Inner Responsive Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {category.items.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 bg-neutral-900/40 backdrop-blur-md border border-neutral-800/80 p-3.5 rounded-xl transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(168,85,247,0.08)] group"
                                    >
                                        <img 
                                            src={skill.icon} 
                                            alt={skill.name} 
                                            className="w-8 h-8 object-contain transition-transform duration-350 group-hover:scale-110" 
                                            loading="lazy"
                                        />
                                        <h3 className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors duration-200 truncate">
                                            {skill.name}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default SkillsPage;
