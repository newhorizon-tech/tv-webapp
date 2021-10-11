export const getShows = async () => {
  try {
    const response = await fetch(' https://api.tvmaze.com/shows');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};