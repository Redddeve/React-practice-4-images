import axios from 'axios';
import { toast } from 'react-toastify';

const API_KEY = '39009655-5531f53105d0117785bd13541';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export default async function getImages(params) {
  return await axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        ...params,
      },
    })
    .then(({ status, message, data }) => {
      if (status !== 200) {
        throw new Error(message);
      }
      if (data.total === 0) {
        toast.error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      return data;
    });
}
