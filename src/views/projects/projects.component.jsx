import { useState, useEffect } from 'react'
import Project from '../../components/project/project.component'

import './projects.styles.scss'

import crownImage from '../../assets/crown-clothing-img.jpg'


const ProjectsPage = () => {
  

  const [projects, setProjects] = useState([
      {
        id: 1,
        title: 'Crown Clothing',
        url: 'https://allans-crown-clothing.netlify.app/',
        description: `
                      An e-commerce website I engineered using React. 
                      I leveraged Firebase for User Auth and utilized a Firebase NoSQL DB to store user and product data. 
                      Additionally I applied Context API for state management. 
                    `,
        image: crownImage,
        altImgDes: 'Image of a clothing department store'
      },
      
    ])

  useEffect(() => {
    setProjects(projects)
  }, [projects])

  return (
    <div className='projects-page-container'>
      {projects.map(project => <Project key={project.id} {...project}/>)}
      <h3>More Coming Soon...</h3>
    </div>
  )
}

export default ProjectsPage;