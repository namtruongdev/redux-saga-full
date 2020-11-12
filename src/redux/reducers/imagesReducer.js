import { IMAGES } from '../constants';

const imagesReducer = (state = [], action) => {
  switch (action.type) {
    case IMAGES.LOAD:
      return [...state, { loading: true }];
    case IMAGES.LOAD_SUCCESS:
      return [...state, ...action.images];
    case IMAGES.LOAD_FAIL:
      return [...state, ...action.error];
    default:
      return state;
  }
};

export default imagesReducer;
