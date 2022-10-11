import React, { useState } from "react";
import { Typography, Button, TextField, Paper, Box } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import { createPost } from "../../actions/posts";

//DONT FORGET TO SEPERATE THE COMPONENTS STYLES LATER!!!!

export const Form = ({ currentId, setCurrentId }) => {
	const dispatch = useDispatch();
	const [postData, setPostData] = useState({
		poster: "",
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createPost(postData));
	};
	const clear = () => {
		setPostData({
			poster: "",
			title: "",
			message: "",
			tags: "",
			selectedFile: "",
		});
	};

	return (
		<Paper sx={{ padding: "16px" }}>
			<Box
				//component="form"
				sx={{
					padding: "8px",
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				<form autoComplete="off" noValidate onSubmit={handleSubmit}>
					<Typography variant="h6">Post Something!</Typography>
					<TextField
						id="poster"
						label="Name"
						variant="outlined"
						fullWidth
						value={postData.poster}
						onChange={(e) => {
							setPostData({ ...postData, poster: e.target.value });
						}}
					/>
					<TextField
						id="title"
						label="Title"
						variant="outlined"
						fullWidth
						value={postData.title}
						onChange={(e) => {
							setPostData({ ...postData, title: e.target.value });
						}}
					/>
					<TextField
						id="message"
						label="Message"
						variant="outlined"
						fullWidth
						value={postData.message}
						onChange={(e) => {
							setPostData({ ...postData, message: e.target.value });
						}}
					/>
					<TextField
						id="tags"
						label="Tag"
						variant="outlined"
						fullWidth
						value={postData.tags}
						onChange={(e) => {
							setPostData({
								...postData,
								tags: e.target.value.trim().split(","),
							});
						}}
					/>
					<Box component="div" sx={{ width: "97%", margin: "10px 0" }}>
						<FileBase
							type="file"
							multiple={false}
							onDone={({ base64 }) =>
								setPostData({ ...postData, selectedFile: base64 })
							}
						/>
					</Box>
					<Button
						variant="contained"
						sx={{ marginY: 1.5 }}
						color="error"
						size="medium"
						onClick={clear}
						fullWidth
					>
						Clear
					</Button>
					<Button
						variant="contained"
						color="primary"
						size="large"
						type="submit"
						fullWidth
					>
						Post!
					</Button>
				</form>
			</Box>
		</Paper>
	);
};

export default Form;
