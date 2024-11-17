import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new ApiClient<Platform>("platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
  });

// useData<Platform>("platforms/lists/parents");

export default usePlatforms;
