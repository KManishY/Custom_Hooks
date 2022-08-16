import "./App.css";
import { useEffect, useState } from "react";
import Pages from "./components/Pages.jsx";

function App() {
	const [data, setData] = useState([]);
	// console.log("data: ", data.userId);

	const paginationFunc = async () => {
		const res = await fetch(
			"https://jsonplaceholder.typicode.com/posts"
		);
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

	return (
		<div className="App">
			{data.length > 0 ? <Pages data={data} /> : <p>Loading...</p>}
		</div>
	);
}

export default App;
