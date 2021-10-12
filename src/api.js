const apiId = 'O69f71qI6jn4R8wRQZmw';

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const targetUrl = `${baseUrl + apiId}/`;

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

const getShows = async () => getData(' https://api.tvmaze.com/shows');

const getLikes = async () => getData(`${targetUrl}likes`);

const getComments = async () => getData(`${targetUrl}comments`);

const searchShows = async (query) => getData(`https://api.tvmaze.com/search/shows?q=${query}`);

export {
  getShows, getLikes, getComments, postData, searchShows,
};
