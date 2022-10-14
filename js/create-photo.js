import { getRandomNumber } from './util.js';

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: 'Как уже неоднократно упомянуто, реплицированные с зарубежных источников.',
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(0, 200),
});

export { createPhoto };
