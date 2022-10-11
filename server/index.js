import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//every routes inside postRoutes will starts with /posts
app.use("/posts", postRoutes);

//hide in env later!!
const CONNECTION_URL =
	"mongodb+srv://nicolas-lu:nicolaslumongodb@cluster0.i1ekxhw.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL)
	.then(() => {
		console.log("connected!!!!!!");
		app.listen(PORT, () => {
			console.log(`server running on port: ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err.message);
	});
