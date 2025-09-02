import Companies from '@/components/compound/Companies';
import GetStarted from '@/components/compound/GetStarted';
import Hero from '@/components/compound/Herro';
import Navbar from '@/components/compound/Navbar';

export default function Home() {
	return (
		<>
			<header className='bg-[#53389E]'>
				<Navbar />
				<Hero />
			</header>
			<main>
				<Companies />
				<GetStarted/>
			</main>
		</>
	);
}
