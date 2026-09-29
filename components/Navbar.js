"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  if(session) {
    return <> <div className='text-white flex flex-col justify-center items-center'>
      
      Signed in as {session.user.email} <br/>
      <button className='bg-purple-500 rounded-full p-2' onClick={() => signOut()}>Sign out</button>
    </div>
    </>
  }
  return (
    <nav className='bg-black text-white flex justify-between px-4 h-14 items-center'>
      <div className="logo font-bold text-lg flex"> <img src="tea.gif" width={44} alt="" /> <span>GetMeAChai</span> </div>

      <div>
        <Link href={"/login"}>
        <button type="button" className="rounded-2xl text-white bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5" >Login</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
