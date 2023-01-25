import {useState, useEffect } from 'react'
import './projects.styles.scss'
// Data
import projectList from '../../data/projects';
// Components
import Card from '../../components/card/card.component';
// Images
import RightArrow from '../../assets/right-arrow.png'
import LeftArrow from '../../assets/left-arrow.png'

const ProjectsPage = () => {
  const [cardIdx, setCardIdx] = useState(0);
  const [projectArr] = useState(projectList)
  const [animationState, setAnimationState] = useState('')

  const moveRight = () => {
    handleArrowCLick('right');
    return cardIdx

  }

  const moveLeft = () => {
    handleArrowCLick('left');   
    return cardIdx

  }

  const handleArrowCLick = (direction) => {
    setAnimationState('fade-out')
    if (direction === 'right') {
      setTimeout(()=> {
        cardIdx === projectList.length - 1 ? 
          setCardIdx(0): 
          setCardIdx(cardIdx + 1);
          setAnimationState('fade-in')
      }, 500);
    } else {
      setTimeout(()=> {
        cardIdx === 0 ? 
          setCardIdx(projectList.length - 1): 
          setCardIdx(cardIdx - 1);
          setAnimationState('fade-in')
      }, 500);
    }
    return projectList.length;

  }


  useEffect(()=>{
    setCardIdx(0)

  }, [])

  return (
    <>
      <div className='slideshow'>
        <button className='slide-button icon' onClick={moveLeft}>
          <img src={LeftArrow} alt="left arrow icon" />
        </button>
        {projectArr && <Card animationState={animationState} {...projectList[cardIdx]}/>}      
        <button className='slide-button icon' onClick={moveRight}>
          <img src={RightArrow} alt="right arrow"/>
        </button>
      </div>
      <p>More Coming Soon...</p>
    </>

  )
}

export default ProjectsPage;