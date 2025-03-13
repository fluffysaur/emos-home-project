import type { User } from '@/models/user'

export default {
  id: 'S1234567A',
  name: 'ANDY TAN WEE MING',
  phone: '91234567',
  address: 'Blk 123 Bukit Batok Central #13-142',
  isNewUser: true,
  dietaryRestrictions: ['Low salt', 'Low sugar', 'Blended food'],
  subscription: null,
  medicalInfo: {
    department: 'MEDICAL ONCOLOGY',
    doctor: 'DR. LIM LAUREN UY',
  },
} as User
