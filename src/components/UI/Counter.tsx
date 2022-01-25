import { PlusIcon, MinusIcon } from "@heroicons/react/outline";

type ButtonEvent = (
	e: React.MouseEvent<HTMLButtonElement | MouseEvent>
) => void;

type CounterProps = {
	value: number;
	onDecrement: ButtonEvent;
	onIncrement: ButtonEvent;
	className?: string;
	disabled?: boolean;
};

const Counter: React.FC<CounterProps> = ({
	value,
	onDecrement,
	onIncrement,
	className,
	disabled,
}) => {
	return (
		<div
			className={
				"flex overflow-hidden flex-col-reverse items-center w-8 h-24 bg-gray-100 text-heading rounded-full"
			}
		>
			<button
				onClick={onDecrement}
				className={
					"cursor-pointer p-2 transition-colors duration-200 focus:outline-none hover:bg-accent-hover hover:!bg-gray-100"
				}
			>
				<span className="sr-only">"-"</span>
				<MinusIcon className="h-3 w-3 stroke-2.5" />
			</button>
			<div
				className={
					"flex-1 flex items-center justify-center text-sm font-semibold"
				}
			>
				{value}
			</div>
			<button
				onClick={onIncrement}
				disabled={disabled}
				className={
					"cursor-pointer p-2 transition-colors duration-200 focus:outline-none hover:bg-accent-hover hover:!bg-gray-100"
				}
				title={disabled ? "Out of Stock" : ""}
			>
				<span className="sr-only">"+"</span>
				<PlusIcon className="h-3.5 w-3.5 md:h-4.5 md:w-4.5 stroke-2.5" />
			</button>
		</div>
	);


};

export default Counter;
