import { Outlet, Link  } from 'react-router-dom'
import { Background } from './Background'
import { useEffect } from 'react'
export const Click = () =>{
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}


const Nav = () => {




    return (
        < >

       
          <nav>
          
            <ul>
              <li>
                <Link to="/" className='link' onClick={() => Click()}>Hem</Link>
              </li>
            
             <li>

<Link to="/animals" className='link'  onClick={() => Click()}>Alla djur</Link>

             </li>
              
            </ul>
            
          </nav>
          <section className='all'>
          <Background />

          <Outlet />
          </section>
        </>
      )
}
export default Nav
