import {
  signOutUserFailure,
  signOutUserStart,
  signOutUserSuccess,
} from '@/redux/user/userSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoMenu } from 'react-icons/io5'
import { MdCancel } from 'react-icons/md'
const Nav2 = ({ currentUser, currentUrl }) => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const [showNav, setShowNav] = useState()
  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart())
      const res = await fetch(`/api/auth/signout`)
      const data = await res.json()
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message))
        return
      }
      dispatch(signOutUserSuccess(data))
    } catch (error) {
      dispatch(signOutUserFailure(error.message))
    }
  }
  const [isHovered, setIsHovered] = useState(false)
  return (
    <>
      <div
        className="fixed top-7 left-4 text-red-900 text-3xl"
        onClick={() => setShowNav(true)}
      >
        <IoMenu />
      </div>
      <div
        className={`bg-gray-200 w-[220px] z-10 flex items-center justify-between bottom-0 flex-col py-10 fixed left- [-300px] ${
          showNav ? 'left-0' : 'left-[-300px]'
        } top-0`}
      >
        <div>
          <div className="relative" onClick={() => setShowNav(false)}>
            <p className="absolute top-[-30px] left-[170px]">
              <MdCancel />
            </p>
          </div>
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/logo/logo2.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FANTASIES
            </span>
          </a>
        </div>
        <ul className="flex w-full items-center gap-5 justify-center flex-col">
          <li>
            <a
              href="/"
              className="text-xl block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              About
            </a>
          </li>
          <div className="w-f ull mx-auto flex items-center justify-center w-[220px]">
            <li
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-full  flex items-center justify-center mx-auto "
            >
              <a
                href="#"
                className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Events
              </a>
              {isHovered && (
                <div className="absolute w-[200px] flex flex-col items-center gap-2 justify-center rounded-md  top-0 p-2 bg-white left-44">
                  <a
                    href="/events?category=sports"
                    className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Sports
                  </a>
                  <a
                    href="/events?category=performing"
                    className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Performing Arts
                  </a>
                  <a
                    href="/events?category=fine"
                    className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Fine Arts
                  </a>
                  <a
                    href="/events?category=it"
                    className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    IT
                  </a>

                  <a
                    href="/events?category=literary"
                    className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Literary
                  </a>
                  <a
                    href="/events?category=rhapsody"
                    className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Rhapsody
                  </a>
                </div>
              )}
            </li>
          </div>
        </ul>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {currentUser ? (
            // <Link to="/profile">
            <div className="relative">
              <Link to={'/profile'}>
                <div>
                  <img
                    className="rounded-full h-7 w-7  cursor-pointer object-cover"
                    src={currentUser?.avatar}
                    alt="profile"
                  />
                </div>
              </Link>

              {/* {show && (
                <div className="absolute w-[120px] cursor-pointer flex flex-col items-center gap-2 right-2 top-10 bg-gray-100 p-2">
                  <Link to={'/profile'}>
                    <p>Profile</p>
                  </Link>
                  <p onClick={handleSignOut}>Sign Out</p>
                </div>
              )} */}
            </div>
          ) : // </Link>
          currentUrl === 'sign-in' ? (
            <Link to="/sign-up">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign up
              </button>
            </Link>
          ) : (
            <Link to="/sign-in">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign in
              </button>
            </Link>
          )}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Nav2
