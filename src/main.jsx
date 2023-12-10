import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Error from './components/Error.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Projects',
        element: <Projects />
      },
      {
        path: '/Resume',
        element: <Resume />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
