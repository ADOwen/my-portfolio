import { BsGithub, BsGlobe } from 'react-icons/bs'
import './card.styles.scss'

function Card({title, url, description, image, altImgDes, animationState, github}) {
  return (
      <div className={`project-container ${animationState}`} >
        <div className="card-header">
          <h1>{title}</h1>
        </div>
        <div className="card-body">
          <div className="card-image">
            <a href={url} target='_blank' rel="noreferrer">
              <img src={image} alt={altImgDes} />
            </a>
          </div>
          <div className="card-description">
            <p>
              {description}
            </p>
          </div>
          <div className='card-icons'>
            <a href={github} target='_blank' rel="noreferrer" className='card-item'><BsGithub className='icon'/></a>
            <a href={url} target='_blank' rel="noreferrer" className='card-item'><BsGlobe className='icon'/></a>
          </div>
        </div>
      </div>
  )
}

export default Card;