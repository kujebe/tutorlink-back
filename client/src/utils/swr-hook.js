import useSwr from "swr";

const apiUrl = "/api/v2"; //root is in proxy property in package.json

export const useRequest = (path, params) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = params ? apiUrl + path + "/" + params : apiUrl + path;
  const { data, error } = useSwr(url);

  return { data, error };
};
