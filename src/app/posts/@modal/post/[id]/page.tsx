import { PostCardProps, PostCard } from '@/components/post-card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Modal } from '@/components/modal';
import { Suspense } from 'react';

const getPost = async ({ id }: { id: string }): Promise<PostCardProps> => {
	const response = await fetch(`https://dummyjson.com/posts/${id}`, {
		cache: 'no-store',
	});
	const data = await response.json();

	return data;
};

interface Props {
	params: {
		id: string;
	};
}

const page = async ({ params }: Props) => {
	const id = params.id;
	const post = await getPost({ id });

	return (
		<Modal>
			<main className='mx-auto p-5'>
				<Link
					href='/posts'
					className='text-slate-100 flex items-center gap-1'
				>
					<ArrowLeft /> All Posts
				</Link>
				<Suspense fallback={<div>Loading.....</div>}>
					<div className='my-5'>
						<PostCard
							key={post.id}
							{...post}
						/>
					</div>
				</Suspense>
			</main>
		</Modal>
	);
};

export default page;
