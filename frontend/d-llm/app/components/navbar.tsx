import React from 'react'
import { Unbounded } from 'next/font/google'
import logo from '../../assets/logo2.png';
import Image from 'next/image'

const navbar = () => {
    return (
        <div className='mx-auto w-full justify-between flex border-b p-5  font-unbounded'>
               <h1 className='text-4xl'>DLLM</h1>
              
                <Image
          src={logo}
          width={40}
          height={40}
          alt="Picture of the author"
        
        />
        </div>

    )
}

export default navbar