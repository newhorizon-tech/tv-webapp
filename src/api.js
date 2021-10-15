const apiId = 'KIwE3ehvMSLohr1Qv6dH';

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
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.text();
  } catch (error) {
    throw new Error(error.message);
  }
};

const getShows = async () => getData('https://api.tvmaze.com/shows');

const getLikes = async () => getData(`${targetUrl}likes`);

const getComments = async (itemId) => getData(`${targetUrl}comments?item_id=${itemId}`);

const postLikes = async (like) => postData(`${targetUrl}likes`, like);

const postComments = async (comment) => postData(`${targetUrl}comments`, comment);

const searchShows = async (query) => getData(`https://api.tvmaze.com/search/shows?q=${query}`);

const getImages = async (id) => getData(`https://api.tvmaze.com/shows/${id}/images`);

export {
  getShows, getLikes, getComments, postData, searchShows, postComments, postLikes, getImages,
};
