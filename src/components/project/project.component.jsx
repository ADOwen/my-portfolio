import React from 'react'

function Project({title, url, description, image, altImgDes}) {
  return (
          <div className="project-container">
        <h1>{title}</h1>
        <a href={url} target='_blank' rel="noreferrer">
          <img src={image} alt={altImgDes} />
        </a>
        <p>
          {description}
        </p>
      </div>
  )
}

export default Project