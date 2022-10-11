import * as api from "../api";

//ACTION Creator
//REDUX THUNK for async logic!
export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		dispatch({ type: "FETCH_ALL", payload: data }); //dispatch instead of return. dispatched as action in reducers
	} catch (error) {
		console.log(error.message);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		dispatch({ type: "CREATE", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
