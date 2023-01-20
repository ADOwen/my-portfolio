import crownImage from '../../assets/crown-clothing-img.jpg'
import roboImage from '../../assets/robo-portfolio.jpg';

const projectList = [
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
  {
    id: 1,
    title: 'Robofriends',
    url: 'https://adowen.github.io/robofriends/',
    description: `
                  A react app where you can search for robots. Uses Redux for state managment.
                `,
    image: roboImage,
    altImgDes: 'Image of a clothing department store'
  },
  
]

export default projectList;