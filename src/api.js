const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const getShows = async () => getData('https://api.tvmaze.com/shows');

const getLikes = async () => getData('');

const getComments = async () => getData('');

const searchShows = async (query) => getData(`https://api.tvmaze.com/search/shows?q=${query}`);

export {
  getShows, getLikes, getComments, postData, searchShows,
};
