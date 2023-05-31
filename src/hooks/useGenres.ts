import Genres from "../data/genre";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

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
    staleTime: ms("24h"),
    initialData: Genres,
  });
export default useGenres;
