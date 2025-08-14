"use client"
import React from "react"
import Navbar from "../navbar/navbar"
import Footer from "../end/footer"

type ExperienceProps = {
    role: string
    organization: string
    duration: string
    description: string
    link?: string
}

const ExperienceCard: React.FC<ExperienceProps> = ({ role, organization, duration, description, link }) => (
    <div className="card bg-neutral-content text-neutral w-96 shadow-md mb-8">
        <div className="card-body">
            <h2 className="card-title">{role}</h2>
            <h3 className="font-semibold">{organization}</h3>
            <p className="text-sm text-gray-500">{duration}</p>
            <p className="mt-2">{description}</p>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent mt-4"
                >
                    Learn More
                </a>
            )}
        </div>
    </div>
)

const ExperiencePage = () => {
    const experiences: ExperienceProps[] = [
        {
            role: "Software Developer Intern",
            organization: "SkillFied Mentor",
            duration: "July 2025 - August 2025",
            description: "Completed a 1-month internship focusing on practical software development skills, building projects and learning industry best practices.",
            link: "https://skillfiedmentor.com"
        },
        {
            role: "Accepted Contributor",
            organization: "Google Summer of Code (GSoC)",
            duration: "2025",
            description: "Accepted as a contributor in Google Summer of Code to work on open source projects under mentor guidance.",
            link: "https://summerofcode.withgoogle.com/"
        },
        {
            role: "Contributor",
            organization: "Girlscript Summer of Code",
            duration: "2025",
            description: "Contributing to Girlscript Summer of Code projects by collaborating with mentors and other contributors on open source initiatives.",
            link: "https://gssoc.girlscript.tech"
        },
    ]

    return (
        <>
        <Navbar />
        <div className="flex flex-col items-center p-8">
            <h1 className="text-4xl font-bold mb-12">Experience</h1>
            <div className="flex flex-col items-center gap-6">
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} {...exp} />
                ))}
            </div>
        </div>
        <Footer />
        </>
    )
}

export default ExperiencePage
