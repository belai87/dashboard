export const API_CONFIG = {
  BASE_URL: 'https://dummyjson.com',
  TIMEOUT: 30000,
} as const

export const API_ENDPOINTS = {
  USERS: '/users',
  USER_BY_ID: (id: string | number) => `/users/${id}`,
  SEARCH_USERS: '/users/search',
} as const

export const DEFAULT_QUERY_PARAMS = {
  LIMIT: 30,
  SKIP: 0,
} as const
