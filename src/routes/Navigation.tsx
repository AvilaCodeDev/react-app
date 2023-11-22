import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'

import logo from '../logo.svg'
import { routes } from './routes'



export const Navigation = () => {
  return (

    <Suspense fallback={null}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="" />

                    <ul>
                        { routes.map( (route, i) => <li key={i}><NavLink to={route.to} className={({ isActive }) => isActive?'nav-active':''}>{route.name}</NavLink></li> )}
                    </ul>
                </nav>

                <Routes>
                    {routes.map( (route, i) => <Route key={i} path={ route.path } element={ <route.Component /> }></Route> )}
                    <Route path='/*' element={ <Navigate to="lazy1" replace/> }></Route> 
                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
  )
}
