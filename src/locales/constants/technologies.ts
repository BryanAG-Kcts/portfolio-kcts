export const technologyImagePath = '/images/technologies/'

export const technologies = {
  html5: {
    publicName: 'HTML 5',
    name: 'html5',
    icon: technologyImagePath + 'html5.svg'
  },
  css3: {
    publicName: 'CSS 3',
    name: 'css3',
    icon: technologyImagePath + 'css3.svg'
  },
  javascript: {
    publicName: 'JavaScript',
    name: 'javascript',
    icon: technologyImagePath + 'javascript.svg'
  },
  reactjs: {
    publicName: 'React',
    name: 'reactjs',
    icon: technologyImagePath + 'reactjs.svg'
  },
  nodejs: {
    publicName: 'Node.js',
    name: 'nodejs',
    icon: technologyImagePath + 'nodejs.svg'
  },
  expressjs: {
    publicName: 'Express.js',
    name: 'expressjs',
    icon: technologyImagePath + 'expressjs.svg'
  },
  java: {
    publicName: 'Java',
    name: 'java',
    icon: technologyImagePath + 'java.svg'
  },
  tailwindcss: {
    publicName: 'Tailwind CSS',
    name: 'tailwindcss',
    icon: technologyImagePath + 'tailwindcss.svg'
  },
  git: {
    publicName: 'Git',
    name: 'git',
    icon: technologyImagePath + 'git.svg'
  },
  github: {
    publicName: 'GitHub',
    name: 'github',
    icon: technologyImagePath + 'github.svg'
  },
  typescript: {
    publicName: 'TypeScript',
    name: 'typescript',
    icon: technologyImagePath + 'typescript.svg'
  },
  postgresql: {
    publicName: 'PostgreSQL',
    name: 'postgresql',
    icon: technologyImagePath + 'postgresql.svg'
  },
  nextjs: {
    publicName: 'Next.js',
    name: 'nextjs',
    icon: technologyImagePath + 'nextjs.svg'
  },
  threejs: {
    publicName: 'Three.js',
    name: 'threejs',
    icon: technologyImagePath + 'threejs.svg'
  },
  angular: {
    publicName: 'Angular',
    name: 'angular',
    icon: technologyImagePath + 'angular.svg'
  },
  springboot: {
    publicName: 'Spring Boot',
    name: 'springboot',
    icon: technologyImagePath + 'springboot.svg'
  }
} as const

export const technologiesEntities = Object.values(technologies)
