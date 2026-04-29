export interface SearchBarInputProps {
  searchTerm: string
  setSearchTerm: (value: string) => void
  resetFilters: () => void
  hasActiveFilters: boolean | string // так как searchTerm может быть строкой
}
