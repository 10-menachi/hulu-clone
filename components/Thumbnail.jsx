import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import React from 'react'

const BASE_URL = 'https://image.tmdb.org/t/p/original/'

const Thumbnail = (({ result }) =>  {
  return (
    <div className='group cursor-pointer transition-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50 m-5'>

        <Image
            layout='responsive'
            alt='movie-image'
            src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
            }
            height={1080}
            width={1920}
         />

         <div className='p-2'>
            <p className='truncate max-w-md'>{result.overview}</p>
            <h2 className='mt-2 text-xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name}</h2>
            <p className='flex items-center opacity-0 group-hover:opacity-100'>
                {result.media_type && `${result.media_type} *`}{" "}
                {result.release_date || `${result.first_air_date} *`}{" "}
                <HandThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
            </p>
         </div>
        
    </div>
  )
})

export default Thumbnail