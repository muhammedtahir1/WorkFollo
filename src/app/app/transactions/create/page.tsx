
"use client"

import TranscationForm from '@/components/transaction-form'

import React from 'react'


// function CreateNav(){
//   const Pathname = usePathname()
//   const title = Pathname.split('/')[2]?.replace(/^\w/, (c) => c.toUpperCase()) || '';
//   const backPath = Pathname.split('/').slice(0, -1).join('/')
  
//   return(
//     <nav className='flex justify-between items-center h-12 border-b w-full' >
//       <CreateButton link={backPath} className=' rounded-none h-12 px-5 bg-white shadow-none text-gray-600 border'><X/></CreateButton>
//       <h1 className='text-[24px] font-semibold '>Create {title}</h1>
//       <CreateButton link={backPath} className='rounded-none h-12 px-8 capitalize'>Create{title}</CreateButton>
//     </nav>
//   )
// }

function page() {
  
  return (
    <div className="flex flex-col justify-center items-start gap-10" >
      {/* <CreateNav/> */}
      <div className="flex flex-col gap-8 p-10 ">
      <h1 className="text-4xl font-semibold "> Transcation</h1>
        <TranscationForm/>
        {/* <ProjectForm/> */}
      </div>
    </div>
  )
}

export default page

