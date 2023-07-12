import React, { Suspense} from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/navbar/navbar.component';

const Home = React.lazy(() => import('./views/home/home.component'))
const SlideShow = React.lazy(() => import('./views/projects/projects.component'))


function App() {
  return (    
      <div className='App'>
        <Routes>
          <Route path ='/' element={ <NavBar/> }>
            <Route 
              index 
              element={ 
                <Suspense fallback={<>...</>}>
                  <Home /> 
                </Suspense>
              }
            />
            <Route 
              path='projects' 
              element={
                <Suspense fallback={<>...</>}>
                  <SlideShow />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
