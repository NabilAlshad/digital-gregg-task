import { data } from '@/utils/Data'
import React from 'react'

const Companies = () => {
  return (
      <div className='p-8 lg:p-[100px] text-[#475467] font-[500]'>
          <h5 className='text-center text-[16px] font-semibold'>{data?.Compnanytitle}</h5>
          <div className='grid grid-cols-2 lg:flex items-center justify-center gap-10 mt-8'>
             {data?.companies?.map((company, idx) =>
              <div key={company?.alt ?? idx} className=''>
                <img src={company?.img} alt={company?.alt} />
              </div>
        )} 
          </div>
        
    </div>
  )
}

export default Companies