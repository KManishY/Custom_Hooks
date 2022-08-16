import { useState } from "react";

export const useCounter = (init) => {
	const [countValue, setCount] = useState(init.initialValue);

	const incCount = (...args) => {
		if (countValue + Number(args) < init.maxValue) {
			if (args.length === 0) {
				setCount(countValue + 1);
			} else {
				setCount(countValue + Number(args));
			}
		}
	};

	const decCount = (...args) => {
		if (countValue - Number(args) >= init.minValue) {
			if (args.length === 0) {
				setCount(countValue - 1);
			} else {
				setCount(countValue - Number(args));
			}
		}
	};

	console.log(init);
	return { countValue, incCount, decCount };
};
