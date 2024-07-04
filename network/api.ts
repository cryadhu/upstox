import axios from "axios";

const _axios = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
});

function Get<T>(url: string, params = {}, headers = {}) {
  const config = { headers, params };
  return _axios.get<T>(url, config);
}

export { Get };
