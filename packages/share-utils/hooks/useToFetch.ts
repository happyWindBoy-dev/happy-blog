import { useFetch } from '@vueuse/core';
import { host } from '../constants/url';

export function useGetRequest(path:string) {
  return useFetch(`${host}${path}`).get().json();
}

export function usePostRequest(path: string, params: Record<string, any>) {
  return useFetch(`${host}${path}`).post(params).json();
}
