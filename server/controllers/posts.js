import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
	try {
		const postMessages = await PostMessage.find();
		res.status(200).json(postMessages);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

export const createPost = async (req, res) => {
	const body = req.body;
	const newPost = new PostMessage(body);
	try {
		await newPost.save();
	} catch (err) {
		res.status(409).json({ message: err.message });
	}
};

export const updatePost = async (req, res) => {
	// /posts/(id param)
	const { id: _id } = req.params;
	const post = req.body;
	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send("Post Not Found!");
	const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
		new: true,
	});
	res.json(updatedPost);
};
