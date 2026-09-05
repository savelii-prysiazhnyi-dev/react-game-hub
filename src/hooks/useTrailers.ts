import { useQuery } from '@tanstack/react-query';
import type Trailer from '../entities/Trailer';
import APIClient, { type FetchResponse } from '../services/api-client';

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
