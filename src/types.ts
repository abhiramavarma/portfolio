export type Project = {
  title: string
  description: string
  tech: string[]
  links: {
    live?: string
    github?: string
  }
}

export type Experience = {
  role: string
  company: string
  period: string
  details: string[]
}

export type Education = {
  degree: string
  school: string
  period: string
  score?: string
}


