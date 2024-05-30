import { type ReactNode, type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export function Button(props: ButtonProps): JSX.Element {
	const { className, children, ...otherProps } = props;

	return (
		<button
			className={`ui-p-4 ui-border ui-border-[#eee] ui-rounded ui-cursor-pointer ${className}`}
			type="button"
			{...otherProps}>
			{children}
		</button>
	);
}
