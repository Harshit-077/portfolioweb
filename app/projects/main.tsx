import React from 'react'

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
    { title: "CoWrite", description: "An AI-powered collaborative writing tool that helps generate and refine content in real-time.", link:"https://github.com/Harshit-077/CoWrite" },
    { title: "AIE", description: "An AI exploration toolkit for experimenting with models, datasets, and custom workflows.", link:"https://github.com/Harshit-077/AIE" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  )
}

export default Main
