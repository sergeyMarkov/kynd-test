export interface Member {
  id: string
  firstName: string
  lastName: string
  joinedAt: string // ISO datetime
  memberSince?: string
  age: number
  lastMessage: string
}