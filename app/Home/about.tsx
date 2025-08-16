import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Home = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex flex-col items-center text-center">
                
                {/* Profile Image */}
                <div className="mb-8">
                    <Image
                        src='/harshit.jpg'
                        alt="Harshit Sharma"
                        width={150}
                        height={150}
                        className="rounded-full border-4 border-accent shadow-lg"
                    />
                </div>

                {/* Hero Text */}
                <div className="max-w-xl">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">
                        Hi, I’m <span className='font-bold'>Harshit Sharma</span> — a 3rd-year Computer Science student with a passion for turning ideas into
                        clean, functional, and impactful digital experiences.<br />
                        I love building web applications that not only work seamlessly but also feel intuitive and engaging to use. My core stack includes Next.js,
                        React, Tailwind CSS, and modern JavaScript tooling, but I’m always exploring new frameworks, design systems, and best practices to sharpen
                        my skills.<br />
                        Beyond coding, I enjoy solving problems — whether it’s fixing a tricky bug, optimizing performance, or finding a creative approach to a UI
                        challenge. I believe in writing code that’s not just for machines to run, but also for humans to read and maintain.<br />
                        Tech I’ve been working with recently:
                        <br />
                    </p>
                    <ul>
                        <li>
                            <span className='font-bold'>Frontend: </span> Next.js, React, Tailwind CSS, DaisyUI, TypeScript
                        </li>
                        <li>
                            <span className='font-bold'>Backend: </span>Node.js, Express, MongoDB
                        </li>
                        <li>
                            <span className='font-bold'>Tools & Workflow: </span>Git/GitHub, Vercel, Postman, VS Code
                        </li>
                    </ul>
                    <p className="mt-4">
                        I’m always open to collaboration, learning opportunities, and exciting
                        projects that challenge me to grow.
                    </p>
                    <button className="btn btn-accent mt-6"><Link href='https://www.linkedin.com/in/harshitsharma77' target='_blank'>Get Started</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Home;