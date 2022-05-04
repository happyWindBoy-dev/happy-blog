import { useFetch } from "@vueuse/core";
import { host } from "../constants/url";

export function useGetRequest(path, params) {
  return useFetch(`${host}${path}`).get(params).json();
}

export function usePostRequest(path, params) {
  return useFetch(`${host}${path}`).post(params).json();
}
