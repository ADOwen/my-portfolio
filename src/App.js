import { Routes, Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/navbar/navbar.component';
import Home from './views/home/home.component';
// import ProjectsPage from './views/projects/projects.component'
import SlideShow from './views/projects/projects.component';


function App() {
  return (    
      <div className='App'>
        <Routes>
          <Route path ='/' element={ <NavBar/> }>
            <Route index element={ <Home /> }/>
            <Route path='projects' element={<SlideShow />}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
