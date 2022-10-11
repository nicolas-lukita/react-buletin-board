import React from "react";
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";
//import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAl";
//import DeleteIcon from "@material-ui/icons/Delete";
//import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Post = (props) => {
	const { post } = props;
	return (
		<Card>
			<CardMedia
				style={{ height: 0, paddingTop: "56%" }}
				image={
					post.selectedFile ||
					"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
				}
				title={post.title}
			/>
			<CardContent>
				<div>
					<Typography gutterBottom variant="h5" component="div">
						{post.title}
					</Typography>
					<Typography variant="body2" component="div">
						{moment(post.createdAt).fromNow()}
					</Typography>
				</div>
				<div>
					<Typography variant="subtitle1">{post.message}</Typography>
					<Typography variant="body2">by: {post.poster}</Typography>
				</div>
				<div>
					<Typography variant="body2" color="textSecondary">
						{post.tags.map((tag) => `#${tag} `)}
					</Typography>
				</div>
			</CardContent>
			<CardActions>
				<Button size="small">
					<FavoriteIcon />
				</Button>
				<Button size="small">Edit</Button>
				<Button size="small">Delete</Button>
			</CardActions>
		</Card>
	);
};

export default Post;
