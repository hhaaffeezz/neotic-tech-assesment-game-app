import React from 'react'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'


const ImageGrid = () => {
  return (
    <div className="flex gap-2">
 
  <div className="w-[164px] h-[229px] bg-cover bg-center rounded-xl overflow-hidden">
    <img
      src={img4}
      alt="Game 1"
      className="w-full h-full object-cover"
    />
  </div>


  <div className="flex flex-col gap-2">
    
    <div className="w-[164px] h-[110px] bg-cover bg-center rounded-xl overflow-hidden">
      <img
        src={img5}
        alt="Game 2"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="w-[164px] h-[110px] bg-cover bg-center rounded-xl overflow-hidden">
      <img
        src={img6}
        alt="Game 3"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</div>
  )
}

export default ImageGrid

