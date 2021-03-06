import {
	CREATE_PRODUCT_SUCCESS,
	LOAD_FILTERED_PRODUCTS_SUCCESS,
	LOAD_PRODUCT_SUCCESS
} from "../actions/product";

const initialState = {
	products: {},
	productForm: {
		name: "",
		brand: "",
		description: "",
		imageUrl: "",
		availableSizes: [],
		categories: [],
		price: "",
		tags: []
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CREATE_PRODUCT_SUCCESS:
			return {
				...state
			};

		case LOAD_FILTERED_PRODUCTS_SUCCESS: {
			const products = action.payload.reduce((acc, item) => {
				acc[item.id] = item;
				return acc;
			}, {});

			return {
				...state,
				products: {
					...state.products,
					...products
				}
			};
		}

		case LOAD_PRODUCT_SUCCESS:
			return {
				...state,
				products: {
					...state.products,
					[action.payload.id]: action.payload
				}
			};

		default:
			return state;
	}
};

export const getProductById = (state, productId) => {
	return state.products[productId];
};

export const getProductByCategory = (state, category) => {
	return Object.values(state.products).filter(item =>
		new Set(item.categories).has(category)
	);
};
