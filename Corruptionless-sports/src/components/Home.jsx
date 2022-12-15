import React from 'react'
import bg from './background.png'
import { Link, Routes, Route} from 'react-router-dom'
import Player_Login from './Player_Login'
import Refree_Login from './Refree_Login'
import Association_Login from './Association_Login'
function Home() {
  return (
    <>
        <div className="h-screen text-white p-32 flex justify-center items-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className='w-1/2 h-3/4 bg-white/20 rounded-md p-8'>
                <h1 className='text-3xl text-center font-semibold'>Welcome to Sports Portal</h1>
                <h2 className='text-2xl mt-5'>Select Role</h2>
                <div className='flex flex-col'>
                    <Link className="font-bold text-xl mt-4 ml-5 px-3 py-2 hover:bg-black duration-300 rounded-md bg-white/10" to="/playerLogin">Player</Link>
                    <Link className="font-bold text-xl mt-4 ml-5 px-3 py-2 hover:bg-black duration-300 rounded-md bg-white/10" to="/refreeLogin">Refree</Link>
                    <Link className="font-bold text-xl mt-4 ml-5 px-3 py-2 hover:bg-black duration-300 rounded-md bg-white/10" to="/associationLogin">Association</Link>
                </div>
            </div>
        </div>

    </>
  )
}

export default Home