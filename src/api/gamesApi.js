import api from "./api"; 

// getGmaesApi
const GamesAPI = {

  fetchGames: async () => {
    try {
      const response = await api.get("/games"); 
      return response.data; 
    } catch (error) {
      throw error.response?.data || error; 
    }
  },
};

export default GamesAPI;
