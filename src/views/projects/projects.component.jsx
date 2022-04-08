import { Link } from 'react-router-dom'

import './projects.styles.scss'

import crownImage from '../../assets/crown-clothing-img.jpg'

const ProjectsPage = () => {
  return (
    <div className='projects-page-container'>
      <div className="project-container">
        <h1>Crown Clothing</h1>
        <a href='https://jovial-douhua-e8dc23.netlify.app/' target='_blank'>
          <img src={crownImage} alt="image of a retail store" />
        </a>
        <p>
          This is an e-commerce website I engineered using React as the front end framework. 
          I leveraged Firebase for User Auth as well as Firestore's noSQL Database for Product 
          and User data storage. I utilized React hooks to maintain state and fetch database data only when necessary.
          Applied userContext to avoid uneccesary prop drilling as well.
        </p>
      </div>
    </div>
  )
}

export default ProjectsPage;