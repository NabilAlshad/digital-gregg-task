'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { data } from '@/utils/Data';
import Button from '../base/Button';
const Navbar: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
		document.body.style.overflow = '';
		};
	}, [menuOpen]);

	return (
		<nav className='flex  justify-between px-7 py-5 lg:justify-around bg-[#53389E] w-full lg:p-5'>
			<div className='flex'>
				<div className='flex justify-between items-center mr-5'>
					<Image src='/logo.png' alt='Logo' width={30} height={30} className='mr-2' priority />
					<h5 className='text-base text-[#fff] font-semibold'>Untitled UI</h5>
				</div>

				<div className='hidden lg:flex gap-8 mx-5 items-center'>
					{data?.MenuItems.map((item, index) => (
						<Link key={index} href='#' className='text-base text-[#fff] font-semibold flex items-center gap-1'>
							{item}
							{(item === 'Products' || item === 'Resources') && (
								<img src='/lower-arrow.svg' alt='Dropdown' className='w-3 h-3' />	
							)}
						</Link>
					))}
				</div>
			</div>
			<div className='hidden lg:flex gap-5'>
				<Button className='text-base text-[#fff] font-semibold'>Login</Button>
				<Button className='text-base text-[#fff] font-semibold bg-[#7f56d9] px-4 py-2 rounded-lg'>
					Sign up
				</Button>
			</div>

			<button
				className='lg:hidden flex flex-col justify-center items-center w-10 h-10'
				onClick={() => setMenuOpen((open) => !open)}
				aria-label='Toggle menu'>
				<span
					className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
						menuOpen ? 'rotate-45 translate-y-1.5' : ''
					}`}></span>
				<span
					className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
						menuOpen ? 'opacity-0' : ''
					}`}></span>
				<span
					className={`block w-6 h-0.5 bg-white transition-all ${
						menuOpen ? '-rotate-45 -translate-y-1.5' : ''
					}`}></span>
			</button>

			{menuOpen && (
				<div className='fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-black shadow-lg rounded-l-lg flex flex-col items-end p-6 gap-6 lg:hidden z-50  overflow-y-auto'>
					<button
						className='mb-4 text-white text-2xl self-end'
						onClick={() => setMenuOpen(false)}
						aria-label='Close menu'>
						&times;
					</button>

					<div className=''>
						<div className='flex flex-col gap-3'>
							{data?.MenuItems.map((item, index) => (
								<Link
									onClick={() => setMenuOpen(false)}
									key={index}
									href='#'
									className='text-base text-[#fff] font-semibold'>
									{item}
								</Link>
							))}
						</div>
						<div className='my-[100px] w-full flex flex-col gap-4'>
							<Button className='text-base text-[#fff] font-semibold'>Login</Button>
							<Button className='text-base text-[#fff] font-semibold bg-[#7f56d9] px-4 py-2 rounded-lg'>
								Sign up
							</Button>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
