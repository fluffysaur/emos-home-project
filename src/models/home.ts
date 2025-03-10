export interface NavItem {
  icon: string
  label: string
  isActive?: boolean
}

export interface ActionCard {
  icon: string
  title: string
  color: string
  route: string
}

export interface MealDelivery {
  name: string
  deliveryTime: string
  address: string
}
