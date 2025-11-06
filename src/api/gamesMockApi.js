import img14 from "../assets/img14.png";
import img15 from "../assets/img15.png";
import img16 from "../assets/img16.png";
import img17 from "../assets/img17.png";

const mockGamesData = [
  { id: 1, title: "Halloween Memory", image: img14, stars: 5, description: "Test your memory with Halloween theme." },
  { id: 2, title: "Stick Soldier", image: img15, stars: 4, description: "Fight as a stick soldier and complete missions." },
  { id: 3, title: "Memory Game", image: img16, stars: 5, description: "Classic memory game with fun cards." },
  { id: 4, title: "Track Racer", image: img17, stars: 3, description: "Race on different tracks and be the fastest." },
];

const MockGamesAPI = {
  
  fetchGames: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500)); 
    return mockGamesData;
  },

 
  fetchGameById: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const game = mockGamesData.find((g) => g.id === id);
    if (!game) throw new Error("Game not found");
    return game;
  },
};

export default MockGamesAPI;
