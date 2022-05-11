import Link from 'next/link'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout_action } from '../redux/actions/auth'

export default function Navbar() {

  const userStatus = useSelector(e => e.auth)

  const navRef = useRef()
  const user = userStatus.user

  const dispatch = useDispatch()

  const handlerHidden = () => {
    const className = navRef.current.classList
    className.toggle('hidden')
  }

  return (
    <nav className='bg-slate-900 text-white py-4 px-2 md:px-24'>
      <div className='flex justify-between items-center'>
        {user &&
          <p className='font-bold text-[25px]'>
            {user.username}
          </p>
        }
        <Link href='/'>
          <a className='font-bold text-[25px]'>
            Call App <span className='text-sm border px-1'>Beta</span>
          </a>
        </Link>

        <button onClick={handlerHidden} className='flex md:hidden ' >[--]</button>


        <ul ref={navRef} className='hidden md:flex items-center space-x-8 text-[15px]'>

          {user ?
            <li onClick={() => dispatch(logout_action())} className='hover:bg-slate-300 hover:text-slate-900 px-5 py-2 rounded-[5rem]' >
              Logout
            </li>


            :
            <div className='flex items-center'>
              <Link href='/user/login'>
                <a className='hover:bg-slate-300 hover:text-slate-900 px-5 py-2 rounded-[5rem]' >
                  login
                </a>
              </Link>
              <Link href='/user/register'>
                <a className='hover:bg-slate-300 hover:text-slate-900 px-5 py-2 rounded-[5rem]'>
                  register
                </a>
              </Link>
            </div>


          }


        </ul>
      </div>

    </nav>
  )
}
