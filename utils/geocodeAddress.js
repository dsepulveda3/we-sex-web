import axios from 'axios';

const LOCATIONIQ_API_URL = 'https://us1.locationiq.com/v1/search';

export const geocodeAddress = async (address, apiKey) => {
  try {
    const response = await axios.get(LOCATIONIQ_API_URL, {
      params: {
        key: apiKey,
        q: address,
        format: 'json',
      },
    });

    if (response.data.length > 0) {
      const result = response.data[0];
      const { display_name, lat, lon } = result;

      return {
        formattedAddress: display_name,
        location: { lat, lon },
      };
    }

    return null;
  } catch (error) {
    console.error('Error geocoding address:', error);
    return null;
  }
};