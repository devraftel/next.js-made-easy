import { PostList } from '@/components/post-list';

const PostPage = () => {
	return (
		<main className='container max-w-7xl mx-auto my-12'>
			<h1 className='text-3xl font-semibold text-slate-100 text-center my-10'>
				Posts
			</h1>
			<PostList />
		</main>
	);
};

export default PostPage;
