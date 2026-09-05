import { useQuery } from '@tanstack/react-query';
import type Screenshot from '../entities/Screenshot';
import APIClient, { type FetchResponse } from '../services/api-client';

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
