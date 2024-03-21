import { getDiscoverMovies } from "@/lib/getMovies";
import CarouselsBanner from "./CarouselsBanner";


type Props = {
  id?: string;
  keyword?: string;
};

const CarouselBannerWrapper = async ({id, keyword}:Props) => {
  const movies = await getDiscoverMovies(id, keyword)
  return <CarouselsBanner movies={movies} />
}

export default CarouselBannerWrapper;