const reducers = (state = [], actions) => {
	switch (actions.type) {
		case "CREATE":
			return [...state, actions.payload];
		case "FETCH_ALL":
			return actions.payload;
		default:
			return state;
	}
};

export default reducers;
