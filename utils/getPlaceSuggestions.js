import axios from 'axios';

const AUTOCOMPLETE_API_URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';

export const getPlaceSuggestions = async (input, apiKey) => {
  try {
    const response = await axios.get(AUTOCOMPLETE_API_URL, {
      params: {
        input,
        key: apiKey,
      },
    });

    if (response.data.status === 'OK') {
      return response.data.predictions;
    }

    return [];
  } catch (error) {
    console.error('Error fetching place suggestions:', error);
    return [];
  }
};