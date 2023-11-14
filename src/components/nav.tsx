import Link from 'next/link';

const Nav = () => {
	return (
		<header className='flex items-center justify-center py-2 px-4 '>
			<nav className='flex items-center justify-center space-x-2 md:space-x-4 bg-slate-100/10 hover:bg-slate-900 py-2 px-4 rounded-md'>
				<Link
					href='/'
					className='text-slate-100 hover:text-slate-300 hover:underline text-xs sm:text-sm'
				>
					Home
				</Link>
				<Link
					href='/posts'
					className='text-slate-100 hover:text-slate-300 hover:underline text-xs sm:text-sm'
				>
					Posts
				</Link>
			</nav>
		</header>
	);
};

export default Nav;
