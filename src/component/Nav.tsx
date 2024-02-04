import { Outlet, Link  } from 'react-router-dom'
import { Background } from './Background'

const Nav = () => {





    return (
        <>

       
          <nav>
          
            <ul>
              <li>
                <Link to="/" className='link'>Home</Link>
              </li>
            
             <li>

<Link to="/animals" className='link'>Animals</Link>

             </li>
              
            </ul>
          </nav>
  
        <Background />

          <Outlet />
        </>
      )
}
export default Nav
