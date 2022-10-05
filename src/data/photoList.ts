import {Photo} from '../components/PhotoGallery/GalleryBuilder';
import {Utils} from '../misc/Utils';
import photosMetadata from './photoListMetadata.json';

const result: Photo[] = [];

for (let i = 1; i < photosMetadata.photoCount; i++) {
  result.push({
    thumbUrl: `images/gallery/${i}_thumb.jpeg`,
    url: `images/gallery/${i}.jpeg`,
    orientation: photosMetadata.portraitPhotos.includes(i) ? 'portrait' : 'landscape',
  });
}

export const photoList = Utils.shuffleArray(result);
