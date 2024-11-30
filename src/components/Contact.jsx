import React, { useState } from 'react';
import Socials from './Socials';
import Header from './Header';
import emailjs from 'emailjs-com';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID, 
                {
                    user_name: formData.name,
                    user_email: formData.email,
                    message: formData.message,                 },
                import.meta.env.VITE_USER_ID
            )
            .then(
                (response) => {
                    console.log('Email successfully sent!', response.status, response.text);
                    alert('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' }); 
                },
                (err) => {
                    console.error('Failed to send email:', err);
                    alert('Failed to send message. Please try again.');
                }
            );
    };

    return (
        <div className="bg-black text-white min-h-screen p-8">
            <Header />
            <header className="text-center mt-10 mb-8">
                <h1 className="text-4xl font-bold mb-2 text-purple-400">Contact</h1>
                <p className="text-gray-400 text-xl mt-4">Get in touch with me!</p>
            </header>

           <div className="flex justify-center gap-4">
                <Socials /> 
            </div>

           
            <div className="max-w-2xl mx-auto px-4">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block font-medium text-purple-400 mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Name..."
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-gray-800 text-white border-1 border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block font-medium text-purple-400 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Email..."
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-gray-800 border-1 border-purple-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block font-medium text-purple-400 mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Enter Message..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-gray-800 text-white border-1 border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className='px-4 mr-2 sm:px-6 py-2 rounded-full text-purple-400 border-2 border-purple-400 font-semibold hover:bg-purple-500 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(221,51,255,0.8)]'
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
