import { PostCard, PostCardProps } from './post-card';

const getPosts = async (): Promise<PostCardProps[]> => {
	const response = await fetch('https://dummyjson.com/posts');
	const data = await response.json();

	return data.posts;
};

export const PostList = async () => {
	const posts = await getPosts();

	return (
		<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
			{posts.map((post) => (
				<PostCard
					key={post.id}
					{...post}
				/>
			))}
		</div>
	);
};
