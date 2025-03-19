import React from 'react';
import Header from './Header';
import Button from './Button';

const ExperiencePage = () => {
    const experiences = [
        {
            id: 1,
            company: 'InnoSynth',
            role: 'Jr Python Developer Intern',
            duration: 'Mar 2025 - Present',
        },
        {
            id: 2,
            company: 'iPixxel',
            role: 'Frontend Developer Intern',
            duration: 'Oct 2024 - Dec 2024',
        },
        {
            id: 3,
            company: 'GirlScript Summer of Code',
            role: 'Contributor',
            proof: 'https://www.linkedin.com/posts/tharika-shree-r_opensource-gssoc-apidevelopment-activity-7265340689251471360-3QhX',
            duration: 'Oct 2024 - Nov 2024',
        },
        {
            id: 4,
            company: 'Hacktoberfest',
            role: 'Open Source Contributor',
            proof: 'https://holopin.me/tharikashree',
            duration: 'Oct 2024',
        },
    ];

    return (
        <div className="bg-black text-white p-8 min-h-screen">
            <Header />
            <header className="text-center mt-10 mb-8">
                <h1 className="text-4xl font-bold mb-16 text-purple-400">Experience & Achievements</h1>
                
            </header>

            <div className="space-y-10 flex items-center flex-col text-center gap-8">
                {experiences.map((experience) => (
                    <div key={experience.id} className="flex flex-col w-1/2 px-8 py-6 mr-2 rounded-3xl text-purple-400 border-2 border-purple-400 font-semibold  hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(221,51,255,0.8)] hover:scale-105 transition duration-300  sm:flex-row items-center justify-between gap-8">
                        <div className="flex-1 ">
                            <h3 className="text-xl font-semibold text-white mb-2 sm:text-2xl ">{experience.company}</h3>
                            <p className="text-gray-300 mb-2"><strong>Role:</strong> {experience.role}</p>
                            <p className="text-gray-400 mb-6"><strong>Duration:</strong> {experience.duration}</p>
                            {experience.proof && (
                                <Button text="View" href={experience.proof} />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperiencePage;
