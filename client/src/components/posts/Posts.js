import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@mui/material";

import Post from "./post/Post";

const Posts = ({ setCurrentId }) => {
	const posts = useSelector((state) => state.posts); //POSTS IS FROM REDUCERS

	console.log(posts);

	return !posts.length ? (
		<CircularProgress></CircularProgress>
	) : (
		<Grid container alignItems="stretch" spacing={3}>
			{posts.map((post) => (
				<Grid key={post._id}>
					<Post post={post}></Post>
				</Grid>
			))}
		</Grid>
	);
};

export default Posts;
