import React from 'react'
import { FaRegFolder } from "react-icons/fa";

const DicList = () => {
  return (
    <div className='flex flex-col justify-center items-start gap-10'>
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Dictonary:
          </h1>
          <ul className='flex justify-start items-center gap-5'>
            <li className='border-2 hover:border-zinc-50 py-3 px-6 border-transparent transition-all duration-200 ease-in-out rounded-md cursor-pointer'>
                <FaRegFolder className='text-6xl'/>
                <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            src/
           
          </p></li>
          </ul>
    </div>
  )
}

export default DicList