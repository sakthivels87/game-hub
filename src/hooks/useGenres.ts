import Genres from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

//const useGenres = () => useData<Genre>("/genres")
const useGenres = () => ({ data: Genres, isLoading: false, error: null });

export default useGenres;
