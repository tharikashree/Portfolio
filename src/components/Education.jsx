import React from 'react';
import Header from './Header';

const EducationPage = () => {
    const educationDetails = [
        { 
            id: 1, 
            edu: 'Bachelor of Engineering, Computer Science', 
            time: '2022 - 2026', 
            name: 'Dayananda Sagar College of Engineering', 
            gpa: '9.2', 
            board: 'Autonomous' 
        },
        { 
            id: 2, 
            edu: 'Pre-University (12th Grade)', 
            time: '2020 - 2022', 
            name: 'Deeksha C F L PU College', 
            percentage: '93', 
            board: 'State Board' 
        },
        { 
            id: 3, 
            edu: 'High School (10th Grade)', 
            time: '2010 - 2020', 
            name: 'Sudarshan Vidya Mandir', 
            percentage: '94', 
            board: 'ICSE Board' 
        },
    ];

    return (
        <div className="bg-neutral-950 text-neutral-100 min-h-screen font-sans selection:bg-purple-500 selection:text-black">
            <Header />
            
            <main className="max-w-4xl mx-auto px-6 py-20">
                {/* Header Section with Clipping Prevention padding */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500 inline-block py-2">
                        Education
                    </h1>
                    <p className="text-neutral-400 mt-2 text-sm md:text-base">
                        My academic foundation and educational milestones.
                    </p>
                </div>

                {/* The Vertical Timeline Container */}
                <div className="relative border-l-2 border-neutral-800 ml-4 md:ml-6 space-y-10 py-2">
                    {educationDetails.map((edu) => (
                        <div key={edu.id} className="relative pl-8 group">
                            
                            {/* Animated Glowing Node Dot */}
                            <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-neutral-900 border-2 border-neutral-700 group-hover:border-purple-500 group-hover:bg-purple-500 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_10px_2px_rgba(168,85,247,0.5)]" />
                            
                            {/* Card Body Container */}
                            <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800/80 p-6 rounded-2xl transition-all duration-300 hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(168,85,247,0.06)] flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                                        <div>
                                            <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded mr-2 bg-purple-950/60 text-purple-400 border border-purple-800/50">
                                                {edu.board}
                                            </span>
                                            <h3 className="text-xl font-bold text-white tracking-tight inline-block group-hover:text-purple-400 transition-colors duration-200 mt-1 sm:mt-0">
                                                {edu.name}
                                            </h3>
                                        </div>
                                        <span className="text-xs font-semibold text-neutral-400 bg-neutral-800/60 px-2.5 py-1 rounded-md border border-neutral-700/50 whitespace-nowrap">
                                            {edu.time}
                                        </span>
                                    </div>
                                    
                                    <p className="text-neutral-300 text-sm mb-3">
                                        <span className="text-neutral-500 font-medium">Degree:</span> {edu.edu}
                                    </p>
                                </div>

                                {/* Score Badge Row */}
                                <div className="pt-3 border-t border-neutral-850 flex items-center">
                                    {edu.gpa && (
                                        <div className="text-sm">
                                            <span className="text-neutral-500 font-medium">Score:</span>{' '}
                                            <span className="font-bold text-white bg-neutral-800 px-2.5 py-1 rounded-md border border-neutral-700 text-xs ml-1">
                                                CGPA: {edu.gpa}
                                            </span>
                                        </div>
                                    )}
                                    {edu.percentage && (
                                        <div className="text-sm">
                                            <span className="text-neutral-500 font-medium">Score:</span>{' '}
                                            <span className="font-bold text-white bg-neutral-800 px-2.5 py-1 rounded-md border border-neutral-700 text-xs ml-1">
                                                {edu.percentage}%
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default EducationPage;
