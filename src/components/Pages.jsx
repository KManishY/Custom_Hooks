import React from "react";
import Pagination from "@mui/material/Pagination";
import { usePagination } from "../Hooks/pagination.js";

const Pages = ({ data }) => {
	const [totalPages, startPageIndex, endPageIndex, displayPage] =
		usePagination(5, data.length);
	return (
		<div>
			{(() => {
				const displayPost = [];
				for (let i = startPageIndex; i <= endPageIndex; i++) {
					displayPost.push(
						<div key={data[i].userId}>
							<h3>
								<span>{i + 1}</span>
								{data[i].title}
							</h3>
							<p>{data[i].body}</p>
						</div>
					);
				}
				return displayPost;
			})()}
			<Pagination
				color="primary"
				count={totalPages}
				onChange={(event, value) => displayPage(value)}
			/>
		</div>
	);
};

export default Pages;
