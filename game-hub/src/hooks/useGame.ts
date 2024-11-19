import { Game } from "@/entities/Game";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
