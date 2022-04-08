import { Routes, Route } from 'react-router-dom'
import './App.css';

import NavBar from './views/navigation/navbar.component';
import Home from './views/home/home.component';
import ProjectsPage from './views/projects/projects.component'

function App() {
  return (    
      <Routes>
        <Route path ='/' element={ <NavBar/> }>
          <Route index element={ <Home /> }/>
          <Route path='projects' element={<ProjectsPage />}/>
        </Route>
      </Routes>  
  );
}

export default App;
