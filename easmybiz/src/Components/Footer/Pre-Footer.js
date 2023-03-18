import React from 'react'
import { Button } from 'react-bootstrap'
const PreFooter = () => {
  return (
    <div className="grid grid-cols-5 gap-4 w-full p-12 bg-green-900">
        <div className='col-span-2'> 
        <h3 className="text-3xl font-bold my-4 text-white">
            Join Our Growing Community!
        </h3>
        <p className='text-xl my-4 text-white'>Sign up for Newsletter and WhatsApp communication for amazing deals and tips.</p>
        </div>
        <div className="items-center justify-center flex">
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="text" placeholder="Email"></input>
    </div>
        <div className="flex items-center justify-center">
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Mobile" type="text" placeholder="Mobile"></input>
    </div>
    <div className='flex items-center justify-center'>
    <Button variant="danger" className='w-48'>Send</Button>
      </div>
    </div>
  )
}

export default PreFooter
