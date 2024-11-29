import React, { useState } from 'react'


const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navList = [
        {
            id: 1,
            link:"/",
            data: "Home"
        },
        {
            id: 2,
            link:"/skills",
            data: "Skills"
        },
        {
            id: 3,
            link:"/projects",
            data: "Projects"
        },
        {
            id: 4,
            link:"/education",
            data: "Education"
        },
        {
            id: 5,
            link:"/experience",
            data: "Experience"
        },
        {
            id: 6,
            link: "/contact",
            data: "Contact"
        },
    ]

    return (
        <header className="fixed top-0 left-0 w-full sm: flex justify-between items-center p-4">
            <a href="/" className='text-2xl text-center font-extrabold mb-2 text-purple-400 hover:scale-110 transition duration-300'>THARIKA SHREE</a>
            <button
                className="md:hidden block "
                onClick={() => setIsNavOpen(!isNavOpen)}
            >
                <span className="text-purple-500 text-2xl ">☰</span>
            </button>
            {isNavOpen && (
                <nav className="absolute rounded-lg top-16 right-2  w-1/4 bg-purple-500 bg-opacity-60 flex flex-col items-start space-y-2 p-4 md:hidden">
                    {navList.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            className="text-lg font-medium text-white hover:text-purple-500 border-b-2 border-transparent hover:border-purple-500"
                        >
                            {item.data}
                        </a>
                    ))}
                </nav>
            )}
            <nav className="hidden md:flex space-x-8">
                {navList.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        className="text-lg font-medium text-white hover:text-purple-500 border-b-2 border-transparent hover:border-purple-500"
                    >
                        {item.data}
                    </a>
                ))}
            </nav>
        </header>
    )
}

export default Header