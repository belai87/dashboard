import { API_CONFIG } from './constants';

export interface ApiResponse<T = any> {
  data: T | null;
  error: string | null;
  status: number;
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get<T = any>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    try {
      const url = new URL(`${this.baseURL}${endpoint}`);
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            url.searchParams.append(key, String(value));
          }
        });
      }

      const response = await fetch(url.toString());

      if (!response.ok) {
        return {
          data: null,
          error: `HTTP error ${response.status}`,
          status: response.status,
        };
      }

      const data = await response.json();
      return {
        data: data as T,
        error: null,
        status: response.status,
      };
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
        status: 500,
      };
    }
  }
}

export const apiClient = new ApiClient(API_CONFIG.BASE_URL);