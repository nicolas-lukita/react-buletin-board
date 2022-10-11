import React, { useState, useEffect } from "react";
import { AppBar, Typography, Grid, Container, Grow, Box } from "@mui/material";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Posts from "./components/posts/Posts";
import Form from "./components/form/Form";
import pigeon from "./assets/pigeon.png";

//DONT FORGET TO SEPERATE THE COMPONENTS STYLES LATER!!!!

const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<Container maxWidth="lg">
			<AppBar
				position="static"
				color="inherit"
				sx={{
					borderRadius: 15,
					margin: "30px 0",
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box
					component="img"
					src={pigeon}
					alt="pigeon logo"
					sx={{ marginLeft: 15, height: 60, width: 60 }}
				></Box>
				<Typography variant="h3" align="center" sx={{ color: "#1e88e5" }}>
					Welcome to Buletin Board!
				</Typography>
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						container
						justify="space-between"
						alignItems="stretch"
						spacing="3"
					>
						{/*max width value is 12. xs for small device, sm for small and medium */}
						<Grid item xs={12} sm={3.5}>
							<Form currentId={currentId} setCurrentId={setCurrentId}></Form>
						</Grid>
						<Grid item xs={12} sm={8}>
							<Posts setCurrentId={setCurrentId} />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
