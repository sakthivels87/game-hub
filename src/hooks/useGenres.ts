import Genres from "../data/genre";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

//const useGenres = () => useData<Genre>("/genres")
//const useGenres = () => ({ data: Genres, isLoading: false, error: null });
//const useQuery

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: Genres,
  });
export default useGenres;
