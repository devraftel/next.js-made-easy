import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export interface PostCardProps {
	id: string;
	title: string;
	body: string;
	tags: string[];
}

export const PostCard = ({ body, id, tags, title }: PostCardProps) => {
	return (
		<Link href={`/posts/post/${id}`}>
			<Card
				key={id}
				className='bg-slate-800 text-slate-100 border border-slate-600 hover:border-slate-400 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-400'
			>
				<CardHeader>
					<CardTitle className='text-slate-300'>{title}</CardTitle>
				</CardHeader>
				<CardContent className='text-slate-400'>{body}</CardContent>
				<CardFooter>
					{tags.map((tag) => (
						<span
							key={tag}
							className='text-sm text-slate-600 dark:text-slate-500'
						>
							{tag}
						</span>
					))}
				</CardFooter>
			</Card>
		</Link>
	);
};
