import { LocationError } from '@/types';
import React, { useState } from 'react'
import { FaRegFolder } from "react-icons/fa";
interface DicListProps{
  folders?:string[];
}

const DicList = ({folders = []}:{folders?: LocationError[]}) => {
  const [location,setLocation] = useState<LocationError[]>(folders.length > 0 ? folders : [])
  
  return (
    <div className='flex flex-col justify-center items-start gap-10'>
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Dictonary:
          </h1>
          <ul className='flex flex-col justify-start items-start overflow-y-auto h-140 w-140 gap-5 p-4'>
        
           {folders.map((loc,i) => (
               <li key={i} className='border-2 w-full hover:border-zinc-50 py-3 px-6 border-transparent transition-all duration-200 ease-in-out rounded-md cursor-pointer'>
                <FaRegFolder className='text-6xl'/>
                <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {loc.errorLocation}
          
          </p></li>
           ))}
          </ul>
    </div>
  )
}

export default DicList

    // <li className='border-2 hover:border-zinc-50 py-3 px-6 border-transparent transition-all duration-200 ease-in-out rounded-md cursor-pointer'>
    //             <FaRegFolder className='text-6xl'/>
    //             <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         src/
          
    //       </p></li>