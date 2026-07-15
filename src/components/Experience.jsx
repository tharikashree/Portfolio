import React, { useState } from 'react';
import Header from './Header';

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
            company: 'Netcracker Technology',
            role: 'Business Analyst Intern',
            type: 'Experience',
            proofs: [
                { text: 'Offer Letter', url: 'https://drive.google.com/file/d/1gjhozN0DiM65yr4DFQv_BdjYDyJ4MLQ7/preview' },
            ],
            duration: 'February 2026 - Present',
        },
        {
            id: 2,
            company: 'EISystems Technologies',
            role: 'Python Developer Intern',
            type: 'Experience',
            proofs: [
                { text: 'Certificate', url: 'https://drive.google.com/file/d/1S-xCOFObstdDvdKyjxPze6rip8rWoT5o/preview' },
            ],
            duration: 'July 2025 - September 2025',
        },
        {
            id: 3,
            company: 'Polysia Innovate X',
            role: 'Research and Development Intern',
            type: 'Experience',
            proofs: [
                { text: 'Certificate', url: 'https://drive.google.com/file/d/1J8PdLmysLNgVhR94iN-PkDEA1QgMFHMd/preview' },
            ],
            duration: 'March 2025 - September 2025',
        },
        {
            id: 4,
            company: 'Afame Technologies',
            role: 'Data Analyst Intern',
            type: 'Experience',
            proofs: [
                { text: 'Certificate', url: 'https://drive.google.com/file/d/1y4Obu2USW-7raZCHAKHvHPDw8Uvm_dSv/preview' },
                { text: 'LOR', url: 'https://drive.google.com/file/d/1vcl3fzg0w74ODEHr_g1KIJljogmE_CgZ/preview' },
            ],
            duration: 'June 2025',
        },
        {
            id: 5,
            company: 'InnoSynth',
            role: 'Jr Python Developer',
            type: 'Experience',
            proofs: [
                { text: 'LOR', url: 'https://drive.google.com/file/d/1UjTb0XJxXz9t0r0y_gwdX4DBN-POdd57/preview' },
            ],
            duration: 'Mar 2025 - May 2025',
        },
        {
            id: 6,
            company: 'iPixxel',
            role: 'Frontend Developer Intern',
            type: 'Experience',
            proofs: [
                { text: 'LOR', url: 'https://drive.google.com/file/d/1OWUoR2EK1yPHb0FG2tCYqX5OuI_hNycY/preview' },
            ],
            duration: 'Oct 2024 - Dec 2024',
        },
        {
            id: 7,
            company: 'GirlScript Summer of Code',
            role: 'Contributor',
            type: 'Achievement',
            proofs: [
                { text: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/tharika-shree-r_opensource-gssoc-apidevelopment-activity-7265340689251471360-3QhX' },
            ],
            duration: 'Oct 2024 - Nov 2024',
        },
        {
            id: 8,
            company: 'Hacktoberfest',
            role: 'Open Source Contributor',
            type: 'Achievement',
            proofs: [
                { text: 'Holopin Profile', url: 'https://holopin.me/tharikashree' },
            ],
            duration: 'Oct 2024',
        }
    ];

    const ProofButton = ({ text, onClick, isAchievement }) => (
        <button
            onClick={onClick}
            className={`px-4 py-1.5 rounded-full font-bold transition-all duration-300 text-xs tracking-wide shadow-sm ${
                isAchievement 
                ? 'bg-purple-500 text-black hover:bg-purple-400' 
                : 'bg-purple-950/40 border border-purple-500/40 text-purple-300 hover:bg-purple-500 hover:text-black hover:border-purple-500'
            }`}
        >
            {text === 'LinkedIn Post' || text === 'Holopin Profile' ? 'View Verification' : text}
        </button>
    );

    return (
        <div className="bg-neutral-950 text-neutral-100 min-h-screen font-sans selection:bg-purple-500 selection:text-black">
            <Header />
            
            <main className="max-w-4xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500 inline-block py-2">
                        Journey & Experience
                    </h1>
                    <p className="text-neutral-400 mt-2 text-sm md:text-base">
                        A chronological breakdown of my internships, open-source milestones, and developer roles.
                    </p>
                </div>

                {/* The Central Timeline Container */}
                <div className="relative border-l-2 border-neutral-800 ml-4 md:ml-6 space-y-10 py-2">
                    {experiences.map((item) => (
                        <div key={item.id} className="relative pl-8 group">
                            
                            {/* Animated Glowing Node Dot */}
                            <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-neutral-900 border-2 border-neutral-700 group-hover:border-purple-500 group-hover:bg-purple-500 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_10px_2px_rgba(168,85,247,0.5)]" />
                            
                            {/* Card Body */}
                            <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800/80 p-6 rounded-2xl transition-all duration-300 hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(168,85,247,0.06)] flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                                        <div>
                                            <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded mr-2 ${
                                                item.type === 'Achievement' 
                                                ? 'bg-fuchsia-950/60 text-fuchsia-400 border border-fuchsia-800/50' 
                                                : 'bg-purple-950/60 text-purple-400 border border-purple-800/50'
                                            }`}>
                                                {item.type}
                                            </span>
                                            <h3 className="text-xl font-bold text-white tracking-tight inline-block group-hover:text-purple-400 transition-colors duration-200 mt-1 sm:mt-0">
                                                {item.company}
                                            </h3>
                                        </div>
                                        <span className="text-xs font-semibold text-neutral-400 bg-neutral-800/60 px-2.5 py-1 rounded-md border border-neutral-700/50 whitespace-nowrap">
                                            {item.duration}
                                        </span>
                                    </div>
                                    <p className="text-neutral-300 text-sm mb-4">
                                        <span className="text-neutral-500 font-medium">Role:</span> {item.role}
                                    </p>
                                </div>

                                {/* Bottom Interactive Action Row */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-850">
                                    {item.proofs && item.proofs.map((proof, index) => (
                                        <ProofButton 
                                            key={index}
                                            text={proof.text} 
                                            onClick={() => openProofModal(proof.url)} 
                                            isAchievement={item.type === 'Achievement'}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Modal Overlay Windows */}
            {modalOpen && (
                <div 
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={() => setModalOpen(false)} 
                >
                    <div 
                        className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl w-full max-w-4xl h-5/6 relative overflow-hidden"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-4 right-4 bg-neutral-800 hover:bg-neutral-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold transition duration-200 z-50"
                        >
                            &times;
                        </button>
                        <div className="w-full h-full p-6 pt-14">
                            {proofType === 'drive' || proofType === 'direct_file' ? (
                                <iframe
                                    src={proofUrl}
                                    title="Proof Profile Window"
                                    className="w-full h-full border-0 rounded-xl bg-white"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                                    <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4 text-xl font-bold">!</div>
                                    <h2 className="text-xl font-bold text-white mb-2">External Verification Required</h2>
                                    <p className="text-neutral-400 text-sm max-w-md mb-6">
                                        This portfolio credential safely points to an external site secure record that denies frame displays.
                                    </p>
                                    <a 
                                        href={proofUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-6 py-2.5 bg-purple-500 text-black font-bold rounded-full hover:bg-purple-400 transition duration-300 text-sm shadow-md"
                                    >
                                        Open Link in New Window
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
