import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img
        className="absolute w-full h-[400px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/b5309ddd-a611-4df5-abc9-f48ac6da2d23/GB-en-20230403-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"
      />

      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'> My Shows</h1>
      </div>
      <SavedShows/>
    </div>
    </>
  )
}

export default Account