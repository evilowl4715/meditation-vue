export interface Data {
  meditations: Meditation[]
}

export interface Meditation {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: string | null
  title: string
  description: string
  duration_min: number
}
