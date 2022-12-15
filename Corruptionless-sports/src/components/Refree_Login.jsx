import React, { Component } from 'react'
import bg from './background.png'
import {Link} from 'react-router-dom';
export class Refree_Login extends Component {
  render() {
    return (
      <>
        <div className="text-white  h-screen bg-no-repeat bg-cover p-36 flex items-center justify-center" style={{ backgroundImage: `url(${bg})`}}>
            <div className='h-40v w-40v bg-white/20 rounded-md'>
                <form className="flex flex-col gap-3 p-5"action="">
                    <h1 className='text-center text-3xl font-semibold'>Welcome Refree!</h1>
                    <div className='px-20'>
                        <input  className="mt-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-black italic font-bold" type="text" placeholder="Enter Refree ID"/>
                        <input className="mt-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-black italic font-bold" type="password" placeholder='Enter password' />
                        <a className=' inline-block mt-4 px-3 py-1 text-black bg-white  text-center rounded cursor-pointer font-bold text-lg hover:text-white hover:bg-black duration-300'>Login</a>
                        <Link className='inline-block mt-4 px-3 py-1 text-black bg-white  text-center rounded cursor-pointer font-bold text-lg hover:text-white hover:bg-black duration-300 ml-5' to="/">Back</Link>
                    </div>
                </form>
                

            </div>

        </div>
      </>
    )
  }
}

export default Refree_Login