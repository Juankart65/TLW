import React from "react";
import Options from "../components/other/Options";
import ReactPlayer from "react-player"


export default function Home() {
  return (
    <>
      <div className='flex flex-row justify-center items-center mt-7 mb-10'>
        <img src="https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/MundoLiterario/g5dlhwe94d0aphosqfks"
          className='w-2/2 md:w-1/3' />
      </div>
      <div
        className="flex items-center justify-center"
        id="home"
      >
        <Options />
      </div>
    </>
  );
}