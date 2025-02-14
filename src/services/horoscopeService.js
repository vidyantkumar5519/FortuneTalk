import axios from 'axios';

const AZTRO_API_BASE_URL = 'https://aztro.sameerkumar.website/';

export const ZODIAC_SIGNS = [
  'aries', 'taurus', 'gemini', 'cancer', 
  'leo', 'virgo', 'libra', 'scorpio', 
  'sagittarius', 'capricorn', 'aquarius', 'pisces'
];

export const getHoroscopePrediction = async (sign, timeframe = 'today') => {
  try {
    const response = await axios.post(AZTRO_API_BASE_URL, {
      sign: sign,
      day: timeframe
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching horoscope for ${sign}:`, error);
    return null;
  }
};

export const getAllHoroscopePredictions = async (timeframe = 'today') => {
  const predictions = {};
  for (const sign of ZODIAC_SIGNS) {
    predictions[sign] = await getHoroscopePrediction(sign, timeframe);
  }
  return predictions;
};
