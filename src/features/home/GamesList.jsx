import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GamesListCard from "./GamesListCard";
import { fetchGames } from "../../store/gamesSlice";

const GamesList = () => {
  const dispatch = useDispatch();
  const { games, loading, error } = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  if (loading)
    return <p className="text-white text-center">Loading games...</p>;
  if (error)
    return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-white font-bold tracking-wide text-[18px] text-center">
        SELECTED FOR YOU
      </h2>

      <div className="flex flex-col gap-1 items-center">
        {games.map((game) => (
          <GamesListCard
            key={game.id}
            image={game.image}
            title={game.title}
            stars={game.stars}
          />
        ))}
      </div>
    </div>
  );
};

export default GamesList;
