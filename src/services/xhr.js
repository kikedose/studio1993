import axios from 'axios';

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(endpoint);

    console.log('status: ', response.status);
    console.log('server: ', response.data);

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchData;
