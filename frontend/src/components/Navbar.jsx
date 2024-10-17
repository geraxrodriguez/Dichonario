import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "border border-slate-800 bg-indigo-400 text-white rounded-md px-3 py-2"
      : "border border-slate-800 text-white hover:bg-amber-500 rounded-md px-3 py-2"

  return (
    <nav className='border-b border-indigo-500'>

      <div className='mx-auto max-w-5xl min-w-80 md:px-6 lg:px-8'>

        <div className='flex h-20 items-center'>

          <div className="flex flex-1 items-center justify-center  md:items-stretch md:justify-start"> {/* flex-1 items grow and shrink to distribute space evenly */}

            <NavLink className="flex items-center mr-2 md:ml-16" to="/"> {/* flex-shrink-0 => item will not shrink */}
              <span className="hidden md:block text-white text-3xl font-bold"> {/* hidden md:block => hides element until md breakpoint is reached, typically >= 768px */}
                Dichonario
              </span>
              <span className='w-auto text-white text-4xl font-bold md:hidden '>
                DN
              </span>
            </NavLink>

            <div className='flex md:ml-auto'>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
              <NavLink to="/dichos" id={styles.dichoLink} className={linkClass}>
                Dichos
              </NavLink>
              <NavLink to="/submit-dicho" className={linkClass}>
                Submit a Dicho
              </NavLink>
            </div>

          </div>

        </div>

      </div>

    </nav>
  )
}

export default Navbar
