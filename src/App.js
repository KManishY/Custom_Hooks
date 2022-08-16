import "./App.css";
import { useEffect, useState } from "react";
import Pages from "./components/Pages.jsx";
import { Image } from "./components/Image.jsx";
import { useCounter } from "./Hooks/useCounter";

import { Input } from "./components/Input.jsx";
function App() {
	const [data, setData] = useState([]);
	// console.log("data: ", data.userId);
	const [value, setValue] = useState(0);
	console.log("value: ", value);
	const { countValue, incCount, decCount } = useCounter({
		initialValue: 10,
		minValue: 5,
		maxValue: 15,
	});
	const paginationFunc = async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await res.json();
		setData(data);
		// .then((res) => {
		// 	console.log("data: ", data);
		// })
		// .then((data) => console.log(data));
	};

	useEffect(() => {
		paginationFunc();
	}, []);
	let src =
		"https://imgs.search.brave.com/BAYeAaw6XJPKD5aEQ73nvOyQjOFoEtO940OtMqfbSoI/rs:fit:1024:768:1/g:ce/aHR0cDovL2Nkbi50/aGluZ2xpbmsubWUv/YXBpL2ltYWdlLzM0/NzE1MTE5MDU0MDE1/NjkyOC8xMDI0LzEw/L3NjYWxldG93aWR0/aC8wLzAvMS8xL2Zh/bHNlL3RydWU_d2Fp/dD10cnVl";

return (
	<div className="App">
		<h3>Value: {countValue}</h3>
		<button onClick={() => incCount()}>Increment</button>
		<button onClick={() => incCount(3)}>Increment 3</button>
		<button onClick={() => decCount(2)}>Decrement 2</button>
		<button onClick={() => decCount(4)}>Decrement 4</button>

		{data.length > 0 ? <Pages data={data} /> : <p>Loading...</p>}

		<Input
			placeholder="Input the value in Number"
			size="lg"
			variant="filled"
			type="text"
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>

		<Image
			src={src}
			alt="props"
			borderRadius="100%"
			width="500px"
			height="500px"
			fit="cover"
		/>
	</div>
);
}

export default App;
