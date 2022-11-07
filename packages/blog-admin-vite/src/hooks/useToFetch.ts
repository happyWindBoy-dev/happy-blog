import { useFetch } from '@vueuse/core';

const productHost = 'http://124.220.189.226:4000';
const developHost = 'http://127.0.0.1:4000';

export const host = productHost;

export function useGetRequest(path: string) {
  return useFetch(`${host}${path}`).get().json();
}

export function usePostRequest(path: string, params: Record<string, any>) {
  return useFetch(`${host}${path}`).post(params).json();
}
