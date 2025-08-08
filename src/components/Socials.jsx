import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'
import { SiGooglecloud } from "react-icons/si"

const icons = [
    {   id: 1,
        href: "https://www.linkedin.com/in/tharika-shree-r/",
        components: <FaLinkedin />
    },
    {   id: 2,
        href: "https://github.com/tharikashree",
        components: <FaGithub />
    },
    {   id: 3,
        href: "https://x.com/tharika_shree_r",
        components: <FaTwitter />
    }
    , { id: 4,
        href: "https://www.instagram.com/tharika_shree_r/profilecard/?igsh=MWIxcWdhY3cwOWExdA==",
        components: <FaInstagram />
    },
    {     id: 5,
        href: "https://www.cloudskillsboost.google/public_profiles/ccb77551-73a0-4052-8176-0a61a553df4c",
        components: <SiGooglecloud />
    }
]
const Socials = () => {
    return (
        <div className='flex justify-center md:justify-start space-x-4 mb-6 sm:mb-6'>
            {icons.map((icon, index) => (
                <a key={icon.id} href={icon.href} className='w-10 h-10 flex items-center justify-center border-2 border-purple-500 rounded-full text-purple-500 hover:bg-purple-500 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(221,51,255,0.8)]'>{icon.components}</a>
            ))}
        </div>
    )
};

export default Socials;