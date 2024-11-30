import React from 'react';
import Header from './Header';

const EducationPage = () => {
    const educationDetails = [
        { id: 1, edu: 'School', time: '2010 - 2020', name: 'Sudarshan Vidya Mandir', percentage: '94', board: 'ICSE Board' },
        { id: 2, edu: 'Pre-University', time: '2020 - 2022', name: 'Deeksha C F L PU College', percentage: '93', board: 'State Board' },
        { id: 3, edu: 'Bachelor of Engineering, Computer Science', time: '2022 - 2026', name: 'Dayananda Sagar College of Engineering', gpa: '9.44', board: 'Autonomous' },
    ];

    return (
        <div className="bg-black text-white min-h-screen p-10">
            <Header />
            <header className="text-center mt-10 mb-8">
                <h1 className="text-4xl font-bold mb-2 text-purple-400">Education</h1>
                <p className="text-gray-400 text-xl mt-4">My Educational Background:</p>
            </header>

            {/* Education Cards Grid */}
            <div className="flex items-center flex-col text-center gap-10">
                {educationDetails.map((edu) => (
                    <div
                        key={edu.id}
                        className='px-4 mr-2 w-1/2 sm:px-6 py-9 rounded-3xl text-purple-400 border-2 border-purple-400 font-semibold hover:bg-purple-500 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(221,51,255,0.8)]'
                    >
                        <h3 className="text-xl font-semibold text-white mb-2">{edu.name}</h3>
                        <p className="text-gray-300 font-medium">{edu.edu}</p>
                        {edu.percentage && <p className="text-gray-300 text-l">Percentage: {edu.percentage}%</p>}
                        {edu.gpa && <p className="text-gray-300">CGPA : {edu.gpa} GPA</p>}
                        <p className="text-gray-300">{edu.board}<div className="text-gray-300 ml-3 font-mono text-center ">{edu.time}</div></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationPage;
