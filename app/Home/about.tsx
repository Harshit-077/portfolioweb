import React from 'react'

const Home = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
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
                    <p>
                        I’m always open to collaboration, learning opportunities, and exciting
                        projects that challenge me to grow.
                    </p>
                    <br/>
                    <button className="btn btn-accent">Get Started</button>
                </div>
            </div>
        </div>

    );
};
export default Home;
