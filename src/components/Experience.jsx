import React from 'react';
import Header from './Header';

const ExperiencePage = () => {
    const experiences = [
        {
            id: 1,
            company: 'Springreen',
            role: 'Frontend Developer',
            duration: 'Nov 2024 - Present',
        },
        {
            id: 2,
            company: 'GirlScript Summer of Code',
            role: 'Contributor',
            proof: 'https://www.linkedin.com/posts/tharika-shree-r_opensource-gssoc-apidevelopment-activity-7265340689251471360-3QhX',
            duration: 'Oct 2024 - Nov 2024',
        },
        {
            id: 3,
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
                <h1 className="text-4xl font-bold mb-16 text-purple-400">Experience & Achievemants</h1>
                
            </header>

            <div className="space-y-10 flex items-center flex-col text-center gap-8">
                {experiences.map((experience) => (
                    <div key={experience.id} className="flex flex-col bg-purple-500 bg-opacity-30 p-6 rounded-lg w-1/2 shadow-md hover:shadow-[0_0_15px_3px_rgba(221,51,255,0.8)] sm:flex-row items-center justify-between gap-8 px-4">
                        <div className="flex-1 ">
                            <h3 className="text-2xl font-semibold text-white mb-2 ">{experience.company}</h3>
                            <p className="text-gray-300 mb-2"><strong>Role:</strong> {experience.role}</p>
                            <p className="text-gray-400 mb-4"><strong>Duration:</strong> {experience.duration}</p>
                            {experience.proof && (
                                <a
                                    href={experience.proof}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block text-center px-6 py-2 bg-purple-500 hover:shadow-[0_0_15px_3px_rgba(221,51,255,0.8)] text-white rounded-lg"
                                >
                                    View
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperiencePage;
