import React from "react";
import Img from "../assets/img.jpg";
import { TypeAnimation } from "react-type-animation";
import Socials from "./Socials";
import Button from "./Button";
import Header from "./Header";

const Home = () => {
    return (
        <div className="bg-black text-white h-[120vh]">
            <Header />
            <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6">
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={Img}
                        alt="Tharika"
                        className="rounded-full mt-2 w-48 sm:w-64 md:w-80 lg:w-[350px] xl:w-[400px] shadow-lg hover:scale-110 transition duration-300 hover:shadow-[0_0_15px_3px_rgba(221,51,255,0.8)]"
                    />
                </div>
                <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
                    <h1 className="text-4xl sm:text-7xl font-bold mb-4">
                        Hi, It's <span className="text-purple-400">THARIKA</span>
                    </h1>
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                        I am a <span className="text-purple-400">


                            <TypeAnimation
                                sequence={
                                    [
                                        "CSE Student", 1000,
                                        "Full Stack Developer", 1000,
                                        "Open Source Contributor", 1000,
                                        "AIML Enthusiast", 1000,
                                    ]
                                }
                                speed={50}
                                style={{ fontSize: "1re" }}
                                repeat={Infinity}
                            />


                        </span>
                    </h3>
                    <p className="text-sm sm:text-lg mb-6">
                        👻 I am a passionate Computer Science major👩‍💻 I am currently pursuing BE in Dayananda Sagar College of Engineering, Banglore 📚 I am interested in data science 📊,
                        in machine learning, artificial intelligence 🤖, and management, I am always ready to learn new things and explore new technologies💻
                    </p>
                    <Socials></Socials>
                    <Button text="Hire Me" href="/contact"></Button>
                </div>
            </section>
        </div>
    );
};

export default Home;