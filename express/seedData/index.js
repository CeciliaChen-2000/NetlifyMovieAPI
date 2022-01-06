import genreModel from '../api/genres/genreModel';
import getGenres from '../api/tmdb-api';
import dotenv from 'dotenv';

dotenv.config();

async function loadGenres() {
  console.log('load genre Data');
  try {
    const genres = await getGenres();
    await genreModel.deleteMany();
    await genreModel.collection.insertMany(genres);
    console.info(`${genres.length} genres were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load genre Data: ${err}`);
  }
}

if (process.env.SEED_DB == 'true') {
  loadGenres();
}