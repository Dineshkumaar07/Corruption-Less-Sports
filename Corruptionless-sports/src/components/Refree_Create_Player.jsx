import React, { Component } from 'react'
import bg from './background.png'
export class Refree_Create_Player extends Component {
  render() {
    return (
      
    <>
        <div className=" h-screen bg-no-repeat bg-cover p-28" style={{ backgroundImage: `url(${bg})`}}>
            <div className='flex flex-col gap-4 items-end mt-7'>
                
                <form action="" className='flex flex-col w-3/12 gap-5'>
                    <h1 className='text-white text-3xl font-bold '>SPORTA</h1>
                    <input  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm " type="text" placeholder="Enter Name"/>
                    <input  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm " type="text" placeholder="Enter Sport"/>
                    <input  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm " type="text" placeholder="Enter Email-id"/>
                    <input  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm " type="text" placeholder="Enter Phone number"/>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="password" placeholder='Enter password' />
                    <input  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm " type="text" placeholder="Repeat Password"/>

                    <a className='text-black bg-white  py-1 w-1/3 text-center rounded cursor-pointer font-bold text-lg hover:text-white hover:bg-black duration-300'>Next</a>
                </form>
                
            </div>

        </div>
    </>
      
    )
  }
}

export default Refree_Create_Player