import { IMAGES } from '../constants';

const initialState = {
  images: [],
  error: null,
  isLoading: false,
};
const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES.LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case IMAGES.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        images: action.images,
      };
    case IMAGES.LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default imagesReducer;
