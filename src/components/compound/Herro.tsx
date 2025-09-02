'use client';

import { data } from '@/utils/Data';
import Button from '../base/Button';

const Hero = () => {
	return (
		<div className='w-full flex flex-col  lg:justify-center items-center  mt-[100px]'>
			<div className='w-[90%] lg:w-[50%] lg:text-center'>
				<div>
					<p className='text-[14px] lg:text-base text-[#fff] font-semibold'>{data?.Header}</p>
					<h3 className='text-[36px] lg:text-[72px] text-[#fff] font-semibold'>{data?.Subheader}</h3>
					<h5 className='text-[18px] leading-[28px] lg:leading-[30px] lg:text-[20px] text-[#fff] font-[400] mt-5'>{data?.Description}</h5>
					<div className='flex flex-col-reverse  lg:flex-row justify-center items-center mt-10 mb-10 gap-5'>
						<Button className='bg-white w-full lg:w-[20%] justify-center flex gap-2 text-[#344054] px-5 py-3 rounded-lg'>
							<img src="/play.svg" alt="" />
							Demo</Button>
						<Button className='text-base w-full lg:w-[20%] text-[#fff] font-semibold bg-[#7f56d9] px-5 py-3 rounded-lg'>
							Sign up
						</Button>
					</div>
				</div>
			</div>

			<div>
				<img src="/hero-banner.png" alt="Hero Image" className='hidden lg:block w-full h-full ' />
				<img src="/hero-banner-mob.png" alt="Hero Image" className='lg:hidden w-full h-full ' />
			</div>
		</div>
	);
};

export default Hero;
