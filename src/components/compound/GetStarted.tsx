import React from 'react'
import Image from 'next/image'
import { data } from '@/utils/Data'
import Button from '../base/Button'

const GetStarted = () => {
    return (
      <div className='w-full flex flex-col justify-center items-center mt-5 mb-[100px]'>
        <div className="w-[85%] items-center bg-[#53389e] rounded-xl grid grid-cols-1 lg:grid-cols-10">
          <div className="lg:col-span-6 p-6 flex flex-col justify-center mt-[50px] mb-[50px] lg:mt-[70px] lg:mb-[70px] items-start gap-4">
            <h1 className="text-white text-2xl font-bold mb-2">Give us a Shot</h1>
            <p className="text-white mb-6 w-full">{data?.Getstarted_description}</p>
            <div className="flex lg:flex-row w-full lg:w-[45%] justify-center lg:justify-items-start flex-col-reverse items-center lg:items-start gap-2">
              <Button className="bg-white w-full text-base font-[600] text-center text-[#344054] px-1 py-3 rounded-lg">
                 Learn more
              </Button>
              <Button className="text-base font-[600] w-full text-[#fff]  bg-[#7f56d9] px-1 py-3 rounded-lg">
                Get started
              </Button>
            </div>
          </div>
          <div
            className="lg:col-span-4 h-[250px] flex justify-center rounded-b-xl items-center p-6 bg-center bg-no-repeat bg-cover w-full lg:h-full"
            style={{ backgroundImage: "url('/get-started.png')" }}
          >
          
          </div>
        </div>
      </div>
    )
}

export default GetStarted