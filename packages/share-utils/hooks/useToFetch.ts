import { useFetch } from '@vueuse/core';
import { host } from '../constants/url';

export function useGetRequest(path) {
  return useFetch(`${host}${path}`).get().json();
}

export function usePostRequest(path, params) {
  return useFetch(`${host}${path}`).post(params).json();
}
