import { nowPlayingAction } from "@/core/actions/movies/now-playing";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, //24 horas
  });
  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, //24 horas
  });
  const topRatedQuery = useQuery({
    queryKey: ["movies", "top-rated"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, //24 horas
  });
  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, //24 horas
  });
  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
