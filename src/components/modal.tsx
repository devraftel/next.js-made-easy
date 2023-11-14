'use client';

import {
	Dialog,
	DialogContent,
	// DialogDescription,
	// DialogHeader,
	// DialogTitle,
	// DialogTrigger,
} from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';

export const Modal = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();

	return (
		// <div
		// 	style={{
		// 		position: 'fixed',
		// 		top: 0,
		// 		left: 0,
		// 		width: '100%',
		// 		height: '100%',
		// 		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		// 		display: 'flex',
		// 		justifyContent: 'center',
		// 		alignItems: 'center',
		// 	}}
		// >
		// 	<div
		// 		style={{
		// 			backgroundColor: 'gray',
		// 			padding: '1em',
		// 			borderRadius: '8px',
		// 		}}
		// 	>
		// 		{children}
		// 	</div>
		// </div>
		<Dialog
			defaultOpen
			onOpenChange={() => {
				router.push('/posts');
			}}
		>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
};
