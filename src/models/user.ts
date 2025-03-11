export type DietaryRestrictions = string[];
export interface Subscription {
  id: string
  vendor: string
  startDate: Date
  endDate: Date
  totalPrice: number
  dietaryRestrictions: DietaryRestrictions
  paymentStatus: string
  deliveryAddress: string
}

export interface MedicalInfo {
  department: string,
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