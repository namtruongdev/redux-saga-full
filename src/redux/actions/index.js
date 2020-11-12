import { IMAGES } from '../constants';

const loadImage = () => ({
  type: IMAGES.LOAD,
});

const setImages = (images) => ({
  type: IMAGES.LOAD_SUCCESS,
  images,
});

const setError = (error) => ({
  type: IMAGES.LOAD_FAIL,
  error,
});

export { loadImage, setImages, setError };
