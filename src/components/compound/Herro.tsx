'use client';

import { data } from '@/utils/Data';
import Button from '../base/Button';

const Hero = () => {
	return (
		<div className='w-full flex flex-col justify-center items-center mt-[100px]'>
			<div className='w-[50%] text-center'>
				<div>
					<p className='text-base text-[#fff] font-semibold'>{data?.Header}</p>
					<h3 className='text-[72px] text-[#fff] font-semibold'>{data?.Subheader}</h3>
					<h5 className='text-[20px] text-[#fff] font-[400] mt-5'>{data?.Description}</h5>
					<div className='flex justify-center mt-10 mb-10 gap-5'>
						<Button className='bg-white text-[#344054] px-4 py-2 rounded-lg'>Demo</Button>
						<Button className='text-base text-[#fff] font-semibold bg-[#7f56d9] px-4 py-2 rounded-lg'>
							Sign up
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
