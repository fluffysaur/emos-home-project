export interface User {
  id: string
  name: string
  email: string
  wardNumber?: string
  bedNumber?: string
  dietaryRestrictions?: string[]
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}
