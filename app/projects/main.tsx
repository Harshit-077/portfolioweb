// import React, { useEffect, useState } from 'react'

// type CardProps = {
//     title: string
//     description: string
//     link?: string
// }


// const Card: React.FC<CardProps> = ({ title, description, link }) => (
//     <div className="card bg-neutral-content text-neutral w-96">
//         <div className="card-body items-center text-center">
//             <h2 className="card-title">{title}</h2>
//             <p>{description}</p>
//             <div className="card-actions justify-end">
//                 {link && (
//                     <a
//                         href={link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="btn btn-accent"
//                     >
//                         Visit
//                     </a>
//                 )}
//             </div>
//         </div>
//     </div>
// )

// const Main = () => {
//     const cards: CardProps[] = [
//         {
//             title: "Book Recommender",
//             description: "A personalized recommendation engine that suggests books using collaborative filtering and similarity metrics.",
//             link: "https://github.com/Harshit-077/Book-Recommender"
//         },
//         {
//             title: "LangGraph",
//             description: "A framework for building stateful, graph-based workflows with language models.",
//             link: "https://github.com/Harshit-077/LangGraph"
//         },
//         { title: "CoWrite", description: "An AI-powered collaborative writing tool that helps generate and refine content in real-time.", link: "https://github.com/Harshit-077/CoWrite" },
//         { title: "AIE", description: "An AI exploration toolkit for experimenting with models, datasets, and custom workflows.", link: "https://github.com/Harshit-077/AIE" },
//     ]

//     return (
//         <>
//             <div className="flex flex-wrap justify-center gap-8 p-8">
//                 {cards.map((card, index) => (
//                     <Card key={index} {...card} />
//                 ))}
//             </div>
//             <div className='flex justify-center'>
//                 <div className="stats stats-vertical lg:stats-horizontal shadow">
//                     <div className="stat">
//                         <div className="stat-title">Downloads</div>
//                         <div className="stat-value">31K</div>
//                         <div className="stat-desc">Jan 1st - Feb 1st</div>
//                     </div>

//                     <div className="stat">
//                         <div className="stat-title">New Users</div>
//                         <div className="stat-value">4,200</div>
//                         <div className="stat-desc">↗︎ 400 (22%)</div>
//                     </div>

//                     <div className="stat">
//                         <div className="stat-title">New Registers</div>
//                         <div className="stat-value">1,200</div>
//                         <div className="stat-desc">↘︎ 90 (14%)</div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Main
"use client"
import React, { useEffect, useState } from 'react'

type CardProps = {
    title: string
    description: string
    link?: string
}

const Card: React.FC<CardProps> = ({ title, description, link }) => (
    <div className="card bg-neutral-content text-neutral w-96">
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-accent"
                    >
                        Visit
                    </a>
                )}
            </div>
        </div>
    </div>
)

const Main = () => {
    const [stats, setStats] = useState<{ issues: number; pullRequests: number; repos: number } | null>(null)

    useEffect(() => {
        async function fetchGitHubStats() {
            try {
                // Fetch issues
                const issuesRes = await fetch("https://api.github.com/search/issues?q=author:Harshit-077+type:issue");
                const issuesData = await issuesRes.json();

                // Fetch pull requests
                const prsRes = await fetch("https://api.github.com/search/issues?q=author:Harshit-077+type:pr");
                const prsData = await prsRes.json();

                // Fetch repositories
                const reposRes = await fetch("https://api.github.com/users/Harshit-077/repos");
                const reposData = await reposRes.json();
                const reposCount = Array.isArray(reposData) ? reposData.length : 0;

                setStats({
                    issues: issuesData.total_count,
                    pullRequests: prsData.total_count,
                    repos: reposCount
                });
            } catch (err) {
                console.error("Error fetching GitHub stats:", err);
            }
        }

        fetchGitHubStats();
    }, []);

    const cards: CardProps[] = [
        {
            title: "Book Recommender",
            description: "A personalized recommendation engine that suggests books using collaborative filtering and similarity metrics.",
            link: "https://github.com/Harshit-077/Book-Recommender"
        },
        {
            title: "LangGraph",
            description: "A framework for building stateful, graph-based workflows with language models.",
            link: "https://github.com/Harshit-077/LangGraph"
        },
        {
            title: "CoWrite",
            description: "An AI-powered collaborative writing tool that helps generate and refine content in real-time.",
            link: "https://github.com/Harshit-077/CoWrite"
        },
        {
            title: "AIE",
            description: "An AI exploration toolkit for experimenting with models, datasets, and custom workflows.",
            link: "https://github.com/Harshit-077/AIE"
        },
    ]

    return (
        <>
            <div className="flex flex-wrap justify-center gap-8 p-8">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>

            {stats && (
                <div className="flex flex-col items-center mt-8">
                    <h2 className="text-2xl font-bold mb-4">GitHub Activity</h2>
                    <div className="stats stats-vertical lg:stats-horizontal shadow">
                        <div className="stat">
                            <div className="stat-title">Open Issues</div>
                            <div className="stat-value">{stats.issues}</div>
                            <div className="stat-desc">Currently active issues</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Pull Requests</div>
                            <div className="stat-value">{stats.pullRequests}</div>
                            <div className="stat-desc">Total PRs made</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Repositories</div>
                            <div className="stat-value">{stats.repos}</div>
                            <div className="stat-desc">Public repositories</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Main
