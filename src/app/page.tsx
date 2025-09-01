import Hero from '@/components/compound/Herro';
import Navbar from '@/components/compound/Navbar';

export default function Home() {
	return (
		<>
			<div className='bg-[#53389E]'>
				<Navbar />
				<Hero />
			</div>
		</>
	);
}
