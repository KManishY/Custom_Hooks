//Complete the Custom Image component based on the props that it expects to receive

export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
	return (
		<img
			height={height}
			width={width}
			style={{
				borderRadius: `${borderRadius}`,
				fit: `${fit}`,
			}}
			alt={alt}
			src={src}
		/>
	);
};