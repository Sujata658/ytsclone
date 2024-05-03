import { Movie } from '../../../types/LatestMovies';
import { ImageCard } from '../ImageCard'
import { MidDetail } from '../MidDetail';
import { SimilarMovies } from '../SimilarMovies';

interface FirstHalfProps{
    bg: string  | undefined;
    medium_cover: string | undefined;
    large: string | undefined;
    title: string | undefined;
    year:number | undefined;
    genres: string[] | undefined;
    uniqueQualities: string[] | undefined;
    like_count: number | undefined;
    rating: number | undefined;
    similarmovies: Movie[] | undefined;

}

export const FirstHalf = ({bg, medium_cover, large, title, year, genres, uniqueQualities, like_count, rating, similarmovies}: FirstHalfProps) => {
    
  return (
    <div className='flex items-center'  style={{backgroundImage:`url(${bg})`, backgroundSize: 'cover' ,}}>
    <div className='grid grid-cols-4 gap-16 mx-32 py-8 ' >
      <div className='col-span-1' >

      <ImageCard img={medium_cover} bgimg={large}/>
      </div>
      <div className='col-span-2'>

      <MidDetail 
        title={title} 
        year={year} 
        genres={genres} 
        available={uniqueQualities} 
        like_count={like_count}
        rating={rating}
      />
      </div>
      <div className='col-span-1'>

      <SimilarMovies movies={similarmovies} />
      </div>
    </div>
    </div>
  )
}