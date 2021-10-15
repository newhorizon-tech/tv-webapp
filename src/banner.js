import fallback from './assets/fallback.jpg';
import { getImages } from './api';

const displayBanner = async (bannerElement, id) => {
  let imageUrl = fallback;
  const imgData = await getImages(id);
  const banners = imgData.filter((img) => img.type === 'banner');
  const backgrounds = imgData.filter((img) => img.type === 'background');

  if (backgrounds.length > 0) {
    imageUrl = backgrounds[0].resolutions.original.url;
  } else if (banners.length > 0) {
    imageUrl = banners[0].resolutions.original.url;
  }

  bannerElement.src = imageUrl;
};

export default displayBanner;
