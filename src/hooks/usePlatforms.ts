import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
//const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
//const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

const apiClient = new APIClient<Platform>("/platforms/list/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: { count: platforms.length, results: platforms },
  });
export default usePlatforms;
