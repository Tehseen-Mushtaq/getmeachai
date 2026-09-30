"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  // if(session) {
  //   return <> <div className='text-white flex flex-col justify-center items-center'>

  //     Signed in as {session.user.email} <br/>
  //     <button className='bg-purple-500 rounded-full p-2' onClick={() => signOut()}>Sign out</button>
  //   </div>
  //   </>
  // }
  return (
    <nav className='bg-black text-white flex justify-between px-4 h-14 items-center'>
      <div className="logo font-bold text-lg flex"> <img src="tea.gif" width={44} alt="" /> <span>GetMeAChai</span> </div>

      <div>
        {session && <>
          <button id="multiLevelDropdownButton" data-dropdown-toggle="multi-dropdown" className=" mx-4 inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
            {/* Dropdown button  */}
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
          </button>

          {/* <!-- Dropdown menu --> */}
          <div id="multi-dropdown" className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="multiLevelDropdownButton">
              <li>
                <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
              </li>
              <li>
                <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                  Dropdown
                  <svg className="h-4 w-4 ms-auto rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" /></svg>
                </button>
                <div id="doubleDropdown" className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
                  <ul className="p-2 text-sm text-body font-medium" aria-labelledby="doubleDropdownButton">
                    <li>
                      <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Overview</a>
                    </li>
                    <li>
                      <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">My downloads</a>
                    </li>
                    <li>
                      <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Billing</a>
                    </li>
                    <li>
                      <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Rewards</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
              </li>
            </ul>
          </div>
        </>

        }
        {session &&
          <Link href={"/dashboard"}>
            <button type="button" className="mx-4 rounded-2xl text-white bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5" >Dashboard</button>
          </Link>}
        {session &&
          <button type="button" className="rounded-2xl text-white bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5" onClick={() => { signOut() }}>Log out</button>}
        {!session &&
          <Link href={"/login"}>
            <button type="button" className="rounded-2xl text-white bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5" >Login</button>
          </Link>
        }
      </div>
    </nav>
  )
}

export default Navbar
