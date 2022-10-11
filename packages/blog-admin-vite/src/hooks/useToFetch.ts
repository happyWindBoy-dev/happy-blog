import { useFetch } from '@vueuse/core';

export const host = 'http://124.220.189.226:4000';

export function useGetRequest(path: string) {
  return useFetch(`${host}${path}`).get().json();
}

export function usePostRequest(path: string, params: Record<string, any>) {
  return useFetch(`${host}${path}`).post(params).json();
}
