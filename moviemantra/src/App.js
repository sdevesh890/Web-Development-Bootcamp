import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import About from './Components/Header/About';
import Error from './Components/Body/Error';
import Contact from './Components/Body/Contact';
import {createBrowserRouter , Outlet} from "react-router-dom";
import MovieDetails from './Components/Body/MovieDetails';

function App() {
  return (
      <div>
        <Header/>
        <Outlet/>
      </div>
  );
}

const appRouter = createBrowserRouter([

  {
     path : "/",
     element : <App/> ,
     errorElement : <Error/>,
     children : [
      {
         path: "/",
         element : <Body/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/movie/:id",
        element : <MovieDetails/>
      }
     ]
  } 
])

export default appRouter;
