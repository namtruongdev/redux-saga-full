const URL = 'https://5fa3d0d9f10026001618df85.mockapi.io/';

const fetchImages = async () => {
  const response = await fetch(`${URL}users`);
  const data = await response.json();
  if (!response.ok && response.status === 404) {
    console.error('404: Không thể lấy dữ liệu!');
    throw new Error('404: Không thể lấy dữ liệu!');
  }
  return data;
};

export { fetchImages };
