import React from 'react'

const Button = ({ text, href }) => {
    return (
        <a href={href} className='px-4 mr-2 sm:px-6 py-2 rounded-full text-purple-400 border-2 border-purple-400 font-semibold hover:bg-purple-500 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(221,51,255,0.8)]'>{text}</a>
    )
}

export default Button