import { Outlet, Link  } from 'react-router-dom'

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
         
           

          <Outlet />
        </>
      )
}
export default Nav
