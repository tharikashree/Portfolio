import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Button from './Button';

const ExperiencePage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [proofUrl, setProofUrl] = useState('');
    const [proofType, setProofType] = useState('');
    const openProofModal = (originalUrl) => {
        let url = originalUrl;
        let type = 'other';

        if (originalUrl.includes('drive.google.com/file/d/')) {
            url = originalUrl.replace('/view', '/preview');
            url = url.split('?')[0] + (url.includes('/preview') ? '' : '/preview');
            type = 'drive';
        } else if (originalUrl.includes('linkedin.com') || originalUrl.includes('holopin.me')) {
            type = 'external_link';
        } else if (originalUrl.match(/\.(pdf|jpg|jpeg|png)$/i)) {
            type = 'direct_file';
        }
        
        setProofUrl(url);
        setProofType(type);
        setModalOpen(true);
    };

    const experiences = [
        {
            id: 1,
            company: 'EISystems Technologies',
            role: 'Python Developer Intern',
            proofs: [
                { text: 'Certificate', url: 'https://drive.google.com/file/d/1S-xCOFObstdDvdKyjxPze6rip8rWoT5o/preview' },
            ],
            duration: 'July 2025 - September 2025',
        },
        {
            id: 2,
            company: 'Polysia Innovate X',
            role: 'Research and Development Intern',
            proofs: [
                { text: 'Certificate', url: 'https://drive.google.com/file/d/1J8PdLmysLNgVhR94iN-PkDEA1QgMFHMd/preview' },
            ],
            duration: 'March 2025 - September 2025',
        },
        {
            id: 3,
            company: 'Afame Technologies',
            role: 'Data Analyst Intern',
            proofs: [
                { text: 'Certificate', url: 'https://drive.google.com/file/d/1y4Obu2USW-7raZCHAKHvHPDw8Uvm_dSv/preview' },
                { text: 'LOR', url: 'https://drive.google.com/file/d/1vcl3fzg0w74ODEHr_g1KIJljogmE_CgZ/preview' },
            ],
            duration: 'June 2025',
        },{
            id: 4,
            company: 'InnoSynth',
            role: 'Jr Python Developer',
            proofs: [
                { text: 'LOR', url: 'https://drive.google.com/file/d/1UjTb0XJxXz9t0r0y_gwdX4DBN-POdd57/preview' },
            ],
            duration: 'Mar 2025 - May 2025',
        },
        {
            id: 5,
            company: 'iPixxel',
            role: 'Frontend Developer Intern',
            proofs: [
                { text: 'LOR', url: 'https://drive.google.com/file/d/1OWUoR2EK1yPHb0FG2tCYqX5OuI_hNycY/preview' },
            ],
            duration: 'Oct 2024 - Dec 2024',
        }
    ];

    const achievements = [
        {
            id: 1,
            company: 'GirlScript Summer of Code',
            role: 'Contributor',
            proofs: [
                { text: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/tharika-shree-r_opensource-gssoc-apidevelopment-activity-7265340689251471360-3QhX' },
            ],
            date: 'Oct 2024 - Nov 2024',
        },
        {
            id: 2,
            company: 'Hacktoberfest',
            role: 'Open Source Contributor',
            proofs: [
                { text: 'Holopin Profile', url: 'https://holopin.me/tharikashree' },
            ],
            date: 'Oct 2024',
        },
    ];

    const ProofButton = ({ text, onClick }) => (
        <button
            onClick={onClick}
            className="px-4 py-2 border-2 border-purple-400 rounded-full font-bold text-purple-400 hover:bg-purple-400 hover:text-black transition duration-300 text-sm whitespace-nowrap"
        >
            {text}
        </button>
    );

    return (
        <div className="bg-black text-white p-8 min-h-screen">
            <Header />
            <header className="text-center mt-10 mb-8">
                <h1 className="text-4xl font-bold mb-16 text-purple-400">Experience</h1>
                
            </header>

            <div className="space-y-10 flex items-center flex-col text-center gap-8">
                {experiences.map((experience) => (
                    <div key={experience.id} className="flex flex-col w-1/2 px-8 py-6 mr-2 rounded-3xl text-purple-400 border-2 border-purple-400 font-semibold  hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(221,51,255,0.8)] hover:scale-105 transition duration-300  sm:flex-row items-center justify-between gap-8">
                        <div className="flex-1 ">
                            <h3 className="text-xl font-semibold text-white mb-2 sm:text-2xl ">{experience.company}</h3>
                            <p className="text-gray-300 mb-2"><strong>Role:</strong> {experience.role}</p>
                            <p className="text-gray-400 mb-6"><strong>Duration:</strong> {experience.duration}</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {experience.proofs && experience.proofs.map((proof, index) => (
                                    <ProofButton 
                                        key={index}
                                        text={proof.text} 
                                        onClick={() => openProofModal(proof.url)} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <header className="text-center mt-10 mb-8">
                <h1 className="text-4xl font-bold mb-16 text-purple-400">Achievements</h1>
            </header>

            <div className="space-y-10 flex items-center flex-col text-center gap-8">
                {achievements.map((achievement) => (
                    <div key={achievement.id} className="flex flex-col w-1/2 px-8 py-6 mr-2 rounded-3xl text-purple-400 border-2 border-purple-400 font-semibold  hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(221,51,255,0.8)] hover:scale-105 transition duration-300  sm:flex-row items-center justify-between gap-8">
                        <div className="flex-1 ">
                            <h3 className="text-xl font-semibold text-white mb-2 sm:text-2xl ">{achievement.company}</h3>
                            <p className="text-gray-300 mb-2"><strong>Role:</strong> {achievement.role}</p>
                            <p className="text-gray-400 mb-6"><strong>Date:</strong> {achievement.date}</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {achievement.proofs && achievement.proofs.map((proof, index) => (
                                    <Button text="View" href={proof.url} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {modalOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                    onClick={() => setModalOpen(false)} 
                >
                    <div 
                        className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl h-5/6 relative"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-3 right-3 text-white text-3xl font-bold p-1 leading-none hover:text-purple-400 z-50"
                        >
                            &times;
                        </button>
                        <div className="w-full h-full p-6">
                            {proofType === 'drive' || proofType === 'direct_file' ? (
                                <iframe
                                    src={proofUrl}
                                    title="Proof of Experience"
                                    className="w-full h-full border-0 rounded-md"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            ) : (

                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <h2 className="text-2xl text-red-400 mb-4">Cannot Display Proof Inline</h2>
                                    <p className="text-gray-300 mb-6">
                                        This link is from an external site like LinkedIn, which prevents embedding for security.
                                    </p>
                                    <a 
                                        href={proofUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 border-2 border-purple-400 rounded-full font-bold text-purple-400 hover:bg-purple-400 hover:text-black hover:bg-purple-400 transition duration-300"
                                    >
                                        Click to Open in New Tab
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExperiencePage;
