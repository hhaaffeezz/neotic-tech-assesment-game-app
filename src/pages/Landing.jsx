import React from 'react'
import HeroSection from '../components/HeroSection'
import GameCard from '../components/GameCard'
import ImageGrid from '../features/landing/ImageGrid'
import LandingGamesSection from '../features/landing/LandingGamesSection'
import card1 from '../assets/card1.png'

const Landing = () => {
  return (
    <div className="flex flex-col text-white">
      
    
      <HeroSection />

      <div className="text-center my-6 px-4 sm:px-6 md:px-12">
        <p className="text-xs sm:text-sm md:text-base">THE GAMES YOU LOVE</p>
        <p className="text-lg sm:text-xl md:text-2xl font-medium mt-1">PLAY AND WIN</p>
        <p className="text-xs sm:text-sm md:text-base mt-1">JOIN MILLIONS OF PLAYERS IN PAKISTAN</p>
      </div>

      <div className="px-4 sm:px-6 md:px-12 my-6 flex justify-center">
        <GameCard
  image={card1}
  subtitle="CHALLENGE A FRIEND IN TIC-TAC-TOE"
  title="ULTIMATE BATTLE OF WITS, CAN YOU OUTSMART YOUR OPPONENT?"
  buttonText="START PLAYING NOW"
  onClick={() => console.log("Tic-Tac-Toe!")}
/>
      </div>

    
      <div className="px-4 sm:px-6 md:px-12 my-6 flex flex-col items-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 text-center">FREE FOR YOU</h2>
        <ImageGrid />
      </div>

    
      <div className="px-4 sm:px-6 md:px-12 my-6 text-center">
        <h2 className="text-sm sm:text-base md:text-lg">
          DOWNLOAD YOUR FAVOURITE GAME FOR <br />
          <span className="block font-medium">FREE!</span>
        </h2>
      </div>

  
      <div className="w-full flex justify-center px-0 sm:px-4 md:px-12">
        <div className="max-w-[960px] w-full flex justify-center">
          <LandingGamesSection />
        </div>
      </div>
    </div>
  )
}

export default Landing
