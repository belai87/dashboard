import { apiClient } from './api'
import { API_ENDPOINTS, DEFAULT_QUERY_PARAMS } from './constants'
import type { UsersResponse } from '../types'
import { User } from '@/src/store/types'

export interface GetUsersParams {
  limit?: number
  skip?: number
  search?: string
}

export const userApi = {
  getUsers: async (params?: GetUsersParams): Promise<UsersResponse> => {
    const queryParams: Record<string, any> = {
      limit: params?.limit || DEFAULT_QUERY_PARAMS.LIMIT,
      skip: params?.skip || DEFAULT_QUERY_PARAMS.SKIP,
    }

    if (params?.search) {
      queryParams.q = params.search
      const response = await apiClient.get<UsersResponse>(
        API_ENDPOINTS.SEARCH_USERS,
        queryParams,
      )
      if (response.error) throw new Error(response.error)
      return response.data!
    }

    const response = await apiClient.get<UsersResponse>(
      API_ENDPOINTS.USERS,
      queryParams,
    )
    if (response.error) throw new Error(response.error)
    return response.data!
  },

  getUserById: async (id: string | number): Promise<User> => {
    const response = await apiClient.get<User>(API_ENDPOINTS.USER_BY_ID(id))
    if (response.error) throw new Error(response.error)
    return response.data!
  },
}
