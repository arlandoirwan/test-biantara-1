import { Navbar } from 'flowbite-react'
import Cookies from 'js-cookie'
import Link from 'next/link'
export default function Navigation() {
  // const handleLougout = () => {
  // Cookies.remove('token')
  //Cookies.remove('users')
  // window.location = '/auth/user-Login'
  //}
  let token
  return (
    <>
      <Navbar fluid={false} rounded={true} className="container">
        <div className="container flex flex-wrap items-center justify-between mx-auto p-2">
          <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Text Online
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="#">
                  <span
                    a
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </span>
                </Link>
              </li>

              {/* {!Cookies.get('token') &&  */}
              {!token && (
                <li>
                  <Link href="/auth/user-login">
                    <span className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      Login
                    </span>
                  </Link>
                </li>
              )}
              {/* } */}
              {/* //{Cookies.get('token') && (  */}
              {token && (
                <li>
                  <Link>
                    <span
                      // onClick={handleLougout}
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Logout
                    </span>
                  </Link>
                </li>
              )}
              {/* )} */}
            </ul>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}
