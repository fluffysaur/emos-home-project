import type { User } from '@/models/user'

// This is a mock service - replace with actual API calls
export async function login(email: string, password: string): Promise<User> {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        const user: User = {
          id: '1',
          name: 'Patient Name',
          email: email,
          wardNumber: 'W12',
          bedNumber: 'B04',
          dietaryRestrictions: ['low-sodium'],
        }
        localStorage.setItem('user', JSON.stringify(user))
        resolve(user)
      } else {
        reject(new Error('Invalid credentials'))
      }
    }, 800)
  })
}

export async function register(userData: Partial<User>, password: string): Promise<User> {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData.name && userData.email && password) {
        const user: User = {
          id: Math.random().toString(36).substr(2, 9),
          name: userData.name!,
          email: userData.email!,
          wardNumber: userData.wardNumber,
          bedNumber: userData.bedNumber,
          dietaryRestrictions: userData.dietaryRestrictions || [],
        }
        localStorage.setItem('user', JSON.stringify(user))
        resolve(user)
      } else {
        reject(new Error('Invalid registration data'))
      }
    }, 800)
  })
}

export async function logout(): Promise<void> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem('user')
      resolve()
    }, 300)
  })
}
