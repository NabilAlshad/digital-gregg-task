/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { data } from '@/utils/Data'
import Button from '../base/Button'

const GetStarted = () => {
    return (
      <div className='w-full flex flex-col justify-center items-center mt-5 mb-[100px]'>
        <div className="w-[85%] items-center bg-[#53389e] rounded-xl grid grid-cols-1 lg:grid-cols-10">
          <div className="lg:col-span-6 p-6 flex flex-col justify-center mt-[20px] mb-[20px] lg:mt-[70px] lg:mb-[70px] items-start gap-4">
            <h1 className="text-white text-[30px] lg:font-[36px] font-semibold mb-0 lg:mb-2">Give us a shot</h1>
            <p className="text-white text-[18px] lg:text-[20px] mb-3 font-[400] lg:mb-6 w-full">{data?.Getstarted_description}</p>
            <div className="flex lg:flex-row w-full lg:w-[45%] justify-center lg:justify-items-start flex-col-reverse items-center lg:items-start gap-2">
              <Button className="bg-white w-full text-base font-[600] text-center text-[#344054] px-1 py-3 rounded-lg">
                 Learn more
              </Button>
              <Button className="text-base font-[600] w-full text-[#fff]  bg-[#7f56d9] px-1 py-3 rounded-lg">
                Get started
              </Button>
            </div>
          </div>
           <div className="lg:col-span-4">
         
          <img 
            src="/get-started.png" 
            alt="Get Started" 
            className="hidden lg:block h-[100%] rounded-b-xl w-full object-cover"
          />
       
          <img 
            src="/get-started-mob.png" 
            alt="Get Started Mobile" 
            className="block lg:hidden h-[100%] rounded-b-xl w-full object-cover"
          />
        </div>
        </div>
      </div>
    )
}

export default GetStarted