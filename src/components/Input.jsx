//Complete the custom Input component based on the props that it expects to receive


import "../App.css";

export const Input = ({
	size,
	variant,
	type,
	value,
	onChange,
	placeholder,
}) => {
	console.log("value: ", value);

	return (
		<input
			placeholder={placeholder}
			type={type}
			className={` ${size || "md" || "lg"} ${variant || "filled"}`}
			value={value}
			onChange={onChange}
		/>
	);
};
