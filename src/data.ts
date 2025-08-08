import type { Project, Experience, Education } from './types'

export const personal = {
  name: 'Nandayala Abhirama Varma',
  title: 'Software Engineer',
  location: 'Hyderabad, India',
  email: 'abhiramavarma@gmail.com',
  phone: '+91-9000001289',
  links: {
    linkedin: 'https://linkedin.com/in/abhiramavarma',
    github: 'https://github.com/abhiramavarma',
    leetcode: 'https://leetcode.com/abhiramavarma',
    codechef: 'https://www.codechef.com/users/abhiramavarma',
    gfg: 'https://www.geeksforgeeks.org/user/abhiramwwz7/',
    smartinterviews: 'https://www.smartinterviews.in/profile/abhiramavarma',
  },
}

export const education: Education[] = [
  { degree: 'B.Tech CSE (AI & ML)', school: 'GRIET', period: '2022–2026', score: '8.9 CGPA' },
  { degree: 'Intermediate', school: 'Sri Chaitanya Jr. College', period: '—', score: '91.3%' },
  { degree: '10th Grade', school: 'Sri Chaitanya Techno School', period: '—', score: '10 CGPA' },
]

export const experience: Experience[] = [
  {
    role: 'AI/ML Intern',
    company: 'Infosys',
    period: 'Aug 2025 – Oct 2025',
    details: [
      'Worked with Spring Boot, Java, REST APIs, and ML integration',
    ],
  },
]

export const achievements: string[] = [
  '2nd – Coding Premier League (Intra-college)',
  '3rd – Generative AI Hackathon',
  'Smart Coder Badge (SmartInterviews)',
  '600+ problems on LeetCode',
]

export const skills = {
  languages: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS'],
  frameworks: ['React', 'Node.js', 'Flask', 'Bootstrap'],
  databases: ['MySQL', 'MongoDB'],
  tools: ['Git', 'VSCode'],
  core: ['DSA', 'OOPs', 'REST APIs'],
}

export const projects: Project[] = [
  {
    title: 'Mock Interview AI',
    description:
      'AI-based interview simulator with real-time transcription and feedback.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Gemini AI'],
    links: {
      live: 'https://mock-interview-ai.vercel.app',
      github: 'https://github.com/abhiramavarma/mock-interview-ai',
    },
  },
  {
    title: 'PrioritizeAI',
    description:
      'Smart task manager that uses ML to prioritize tasks. Achieved 97% accuracy on 500+ samples.',
    tech: ['Flask', 'Machine Learning'],
    links: {
      github: 'https://github.com/abhiramavarma/prioritize-ai',
    },
  },
  {
    title: 'Calorie Estimator from Food Images',
    description:
      'Image-based food calorie estimator using Gemini API.',
    tech: ['Python', 'OpenCV'],
    links: {
      github: 'https://github.com/abhiramavarma/calorie-estimator',
    },
  },
]


