import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GameCard from "../components/GameCard";
import { getSessionCookie, decryptToken, clearSessionCookie } from "../utils/auth";
import { setUser, clearUser } from "../store/authSlice";
import HeroSection from "../components/HeroSection";
import card1 from "../assets/card1.png";
import CategoriesSection from "../features/home/categoriessection";
import Button from "../components/Button";
import { FaGreaterThan } from "react-icons/fa6"; 
import GamesList from "../features/home/GamesList";

export default function Home() {
  const userFromRedux = useSelector((state) => state.user);
  const [user, setUserState] = useState(userFromRedux);
  const [timeLeft, setTimeLeft] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

 
  useEffect(() => {
    const checkSession = () => {
      const token = getSessionCookie();
      const data = token ? decryptToken(token) : null;

      if (!data?.expiresAt || Date.now() > data.expiresAt) {
        clearSessionCookie();
        dispatch(clearUser());
        navigate("/login");
      } else {
        setUserState(data);
        dispatch(setUser(data));
        setTimeLeft(Math.floor((data.expiresAt - Date.now()) / 1000));
      }
    };

    checkSession();
    const interval = setInterval(checkSession, 1000);
    return () => clearInterval(interval);
  }, [dispatch, navigate]);

 
  useEffect(() => {
    if (!user?.expiresAt) return;

    const timerInterval = setInterval(() => {
      const secondsLeft = Math.floor((user.expiresAt - Date.now()) / 1000);
      setTimeLeft(secondsLeft > 0 ? secondsLeft : 0);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [user]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  if (!user) return <div className="text-center mt-10 text-white">Checking session...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-6">
     
    
<div className="w-full max-w-md sm:max-w-xl md:max-w-3xl text-right mb-4">
  <span className="text-blue-400 text-sm sm:text-base md:text-lg font-medium">
    Session Ends In: {formatTime(timeLeft)}
  </span>
</div>


  
      <div className="w-full max-w-md sm:max-w-xl md:max-w-3xl">
        <HeroSection />
      </div>

     
      <div className="text-center my-4 sm:my-6 px-0 sm:px-6">
        <p className="text-xs sm:text-sm md:text-base">THE GAMES YOU LOVE</p>
        <p className="text-lg sm:text-xl md:text-2xl font-medium mt-1">PLAY AND WIN</p>
        <p className="text-xs sm:text-sm md:text-base mt-1">JOIN MILLIONS OF PLAYERS IN PAKISTAN</p>
      </div>

    
      <div className="w-full max-w-md sm:max-w-xl md:max-w-3xl my-4">
        <GameCard
          image={card1}
          subtitle="CHALLENGE A FRIEND IN TIC-TAC-TOE"
          title="ULTIMATE BATTLE OF WITS, CAN YOU OUTSMART YOUR OPPONENT?"
          buttonText="START PLAYING NOW"
          onClick={() => console.log("Tic-Tac-Toe!")}
        />
      </div>

      <div className="text-center my-4 sm:my-6 px-0 sm:px-6">
        <p className="text-lg sm:text-xl md:text-2xl font-medium mt-1">NOW WITH AI ON YOUR SIDE</p>
        <p className="text-xs sm:text-sm md:text-base mt-1">
          GET INSTANT GAME TIPS, RULES AND STRATEGIES FROM OUR AI GAME CHAT BOT.
        </p>
      </div>

      <div className="w-full max-w-md sm:max-w-xl md:max-w-3xl my-4">
        <GameCard
          image={card1}
          subtitle="CHALLENGE A FRIEND IN TIC-TAC-TOE"
          title="ULTIMATE BATTLE OF WITS, CAN YOU OUTSMART YOUR OPPONENT?"
          buttonText="START PLAYING NOW"
          onClick={() => console.log("Tic-Tac-Toe!")}
        />
      </div>

     
      <div className="w-full max-w-md sm:max-w-xl md:max-w-3xl my-4">
        <CategoriesSection />
      </div>

      {/* Browse All Games */}
      <div className="w-full max-w-md sm:max-w-xl md:max-w-3xl flex items-center justify-between h-20 my-4">
        <h2 className="text-white font-bold tracking-wide text-lg sm:text-xl md:text-2xl">
          BROWSE ALL GAMES
        </h2>
        <Button variant="round">
          <FaGreaterThan />
        </Button>
      </div>

     
      <div className="w-full max-w-md sm:max-w-xl md:max-w-3xl my-4">
        <GameCard
          image="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2019/11/a-bunch-of-pumpkins-in-a-box.jpg?w=1155&h=1734"
          title="Pumpkin Challenge"
          rating={5}
          onPlay={() => console.log("Play Clicked!")}
        />
      </div>

   
      <div className="w-full max-w-md sm:max-w-xl md:max-w-3xl my-4">
        <GamesList />
      </div>
    </div>
  );
}
