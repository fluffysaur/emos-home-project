import type { Subscription } from './subscription'

export type DietaryRestrictions = string[]
export interface MedicalInfo {
  department: string
  doctor: string
}

export interface User {
  id: string
  name: string
  phone: string
  address: string
  dietaryRestrictions: DietaryRestrictions
  medicalInfo: MedicalInfo
  subscription: Subscription | null
  isNewUser: boolean
}

export interface AuthState {
  user: User | null
  token: string | null
}
