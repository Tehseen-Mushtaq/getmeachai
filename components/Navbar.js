"use client"
import React, {useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)
  // if(session) {
  //   return <> <div className='text-white flex flex-col justify-center items-center'>

  //     Signed in as {session.user.email} <br/>
  //     <button className='bg-purple-500 rounded-full p-2' onClick={() => signOut()}>Sign out</button>
  //   </div>
  //   </>
  // }
  return (
    <nav className='bg-black text-white flex justify-between px-4 h-14 items-center'>
      <Link href={'/'}><div className="logo font-bold text-lg flex"> <img src="tea.gif" width={44} alt="" /> <span>GetMeAChai</span> </div></Link>

      <div className='relative'>
        {session && <>
          <button onClick={()=>{setshowdropdown(!showdropdown)}} onBlur={()=> setTimeout(() => {
             {setshowdropdown(false)}
          }, 100)  }   id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="inline-flex items-center justify-center text-white bg-blue-950 rounded-2xl shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
            {session.user.email}
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-14  bg-neutral-primary-medium  rounded-base shadow-lg w-44 `}>
            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="inline-flex items-center w-full p-2 bg-blue-900 hover:bg-gray-400 ">Dashboard</Link>
              </li>
              <li>
                <Link href="#" className="inline-flex items-center w-full p-2 bg-blue-900 hover:hover:bg-gray-400 ">Your Page</Link>
              </li>
              <li>
                <Link href="#" className="inline-flex items-center w-full p-2 bg-blue-900 hover:hover:bg-gray-400 ">Earnings</Link>
              </li>
              <li>
                <Link href="#" onClick={() => { signOut() }} className="inline-flex items-center w-full p-2 bg-blue-900 hover:hover:bg-gray-400 ">Sign out</Link>
              </li>
            </ul>
          </div>

        </>}


        
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
