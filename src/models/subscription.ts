import type { Provider } from './meal'

export interface MealPlanType {
  id: 'lunchAndDinner' | 'lunchOnly' | 'dinnerOnly'
  label: string
  selected?: boolean
}

export interface PaymentType {
  id: 'payNow' | 'creditCard' | 'cheque'
  label: string
  selected?: boolean
}

export interface DurationType {
  id: 'weekly' | 'monthly'
  label: string
  selected?: boolean
}

export interface Subscription {
  id: string
  provider: Provider
  startDate: Date
  endDate: Date
  totalPrice: number
  mealPlanType: MealPlanType
  durationType: DurationType
  paymentType: PaymentType
  paymentStatus?: string
  deliveryAddress: string
}

export interface SubscriptionState {
  selectedSubscription: Subscription | null
}
