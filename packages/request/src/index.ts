import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse
} from "axios";

export interface CreateHttpClientOptions {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export function createHttpClient(
  options: CreateHttpClientOptions
): AxiosInstance {
  return axios.create({
    baseURL: options.baseURL,
    timeout: options.timeout ?? 10000,
    headers: options.headers
  });
}

export async function getJson<T>(
  client: AxiosInstance,
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse<T> = await client.get(url, config);
  return response.data;
}

export function buildApiUrl(baseURL: string, pathname: string): string {
  const normalizedBase = baseURL.replace(/\/+$/, "");
  const normalizedPath = pathname.replace(/^\/+/, "");
  return `${normalizedBase}/${normalizedPath}`;
}
