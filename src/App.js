import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';


const router = createBrowserRouter([{path: '/', element: <Home/>, children: [
  {path: 'about', element: <About/>},
  {path: 'contact', element: <Contact/>}
]}])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
