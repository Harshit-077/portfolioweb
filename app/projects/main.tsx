import React from 'react'

const Card = ({ title, description, imgSrc }) => (
  <div className="card bg-base-100 w-96 shadow-sm h-[60vh] m-[20px]">
    <figure className="px-10 pt-10">
      <img
        src={imgSrc}
        alt={title}
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <div className="card-actions">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
)

const Main = () => {
  const cardsRow1 = [
    {
      title: "Card Title",
      description: "A card component has a figure, a body part, and inside body there are title and actions parts",
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    },
    {
      title: "Card Title",
      description: "A card component has a figure, a body part, and inside body there are title and actions parts",
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    },
    {
      title: "Card Title",
      description: "A card component has a figure, a body part, and inside body there are title and actions parts",
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    }
  ]

  const cardsRow2 = [
    {
      title: "GG Title",
      description: "A card component has a figure, a body part, and inside body there are title and actions parts",
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    },
    {
      title: "Card Title",
      description: "A card component has a figure, a body part, and inside body there are title and actions parts",
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    },
    {
      title: "Card Title",
      description: "A card component has a figure, a body part, and inside body there are title and actions parts",
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    }
  ]

  return (
    <>
      <div className='flex justify-around'>
        {cardsRow1.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <div className='flex justify-around'>
        {cardsRow2.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </>
  )
}

export default Main
