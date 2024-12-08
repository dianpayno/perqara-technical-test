/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import MovieCard from '../MovieCard'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'


const ContainerMovieCard = () => {
  const {topHomepageMoviesList} = useSelector((state:RootState) => state.movies)
  return (
    <div className=' min-h-[700px] w-full flex justify-between items-start gap-[10px] flex-wrap'>
{
        topHomepageMoviesList.data?.map((item:any) => {
          return (
            <MovieCard data={item} key={item.imdbID}/>
          )
        })
      }
    </div> 
  )
}

export default ContainerMovieCard