import { useState, useEffect } from 'react'
import Card from '../../components/card/card.component'
import projectList from './projects'
import './projects.styles.scss'

const ProjectsPage = () => {
  const [projects, setProjects] = useState(projectList)

  useEffect(() => {
    setProjects(projects)
  }, [projects])

  return (
    <>
    <div className='projects-page-container'>
      {projects.map(project => <Card key={project.id} {...project}/>)}
    </div>
    <p>More Coming Soon...</p>
    </>
  )
}

export default ProjectsPage;