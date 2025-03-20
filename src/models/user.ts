import type { Subscription } from './subscription'

export type DietaryRestrictions = string[]
export interface MedicalInfo {
  department: string
  doctor: string
}

export interface DietaryInfo {
  restrictions: DietaryRestrictions
  recommendedFoods: string[]
  foodsToAvoid: string[]
}

export interface User {
  id: string
  name: string
  phone: string
  address: string
  dietaryInfo: DietaryInfo
  medicalInfo: MedicalInfo
  subscription: Subscription | null
  isNewUser: boolean
}

export interface AuthState {
  user: User | null
  token: string | null
}
