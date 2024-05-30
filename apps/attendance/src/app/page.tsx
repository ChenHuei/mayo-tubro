'use client';
import { type ReactNode } from 'react';
import { Button } from '@repo/ui/button';

export default function Home(): ReactNode {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Button
				onClick={() => {
					console.log('attendance');
				}}>
				attendance
			</Button>
		</main>
	);
}
