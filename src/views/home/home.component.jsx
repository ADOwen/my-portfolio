import header from '../../assets/header.jpg'

import './home.styles.scss'

const Home = () => {
  return (
    <div>
      <div className="header-container">
        <div className="background-image" style={{
          backgroundImage: `url(${header})`
        }}/> 
        <div className="header-text">
          <h1>Hello ;</h1>
          <h2>I'm Allan. Software Engineer.</h2>
        </div>
      </div>
    </div>
  )
}

export default Home;