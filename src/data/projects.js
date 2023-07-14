import crownImage from '../assets/crown-clothing-img.jpg'
import roboImage from '../assets/robo-portfolio.jpg';
import gameHubImage from '../assets/game-hub-sm.png'

const projectList = [
  {
    id: 1,
    title: 'Crown Clothing',
    url: 'https://allans-crown-clothing.netlify.app/',
    github: 'https://github.com/ADOwen/crown-clothing',
    description: `
                  An e-commerce website I engineered using React. 
                  I leveraged Firebase for User Auth and utilized a Firebase NoSQL DB to store user and product data. 
                  Additionally I applied Context API for state management. 
                `,
    image: crownImage,
    altImgDes: 'Image of a clothing department store'
  },
  {
    id: 2,
    title: 'GameHub',
    url: 'https://game-hub-allan.vercel.app/',
    github: 'https://github.com/ADOwen/game-hub',
    description: `
                  A game discovery app where you can search for video games using
                  the Rawg.io API.
                `,
    image: gameHubImage,
    altImgDes: 'Image of a game discovery website'
  },
  
  {
    id: 3,
    title: 'Robofriends',
    url: 'https://adowen.github.io/robofriends/',
    github: 'https://github.com/ADOwen/robofriends',
    description: `
                  A react app where you can search for robots. Uses Redux for state managment.
                `,
    image: roboImage,
    altImgDes: 'Image of a clothing department store'
  },
  
]

export default projectList;