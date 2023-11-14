'use client';

import { useRouter } from 'next/navigation';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export const Modal = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();

	return (
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
