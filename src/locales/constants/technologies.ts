export const technologyImagePath = '/images/technologies/'

export const technologies = {
  html5: {
    publicName: 'HTML 5',
    name: 'html5'
  },
  css3: {
    publicName: 'CSS 3',
    name: 'css3'
  },
  javascript: {
    publicName: 'JavaScript',
    name: 'javascript'
  },
  reactjs: {
    publicName: 'React',
    name: 'reactjs'
  },
  nodejs: {
    publicName: 'Node.js',
    name: 'nodejs'
  },
  expressjs: {
    publicName: 'Express.js',
    name: 'expressjs'
  },
  java: {
    publicName: 'Java',
    name: 'java'
  },
  tailwindcss: {
    publicName: 'Tailwind CSS',
    name: 'tailwindcss'
  },
  git: {
    publicName: 'Git',
    name: 'git'
  },
  github: {
    publicName: 'GitHub',
    name: 'github'
  },
  typescript: {
    publicName: 'TypeScript',
    name: 'typescript'
  },
  postgresql: {
    publicName: 'PostgreSQL',
    name: 'postgresql'
  },
  nextjs: {
    publicName: 'Next.js',
    name: 'nextjs'
  },
  threejs: {
    publicName: 'Three.js',
    name: 'threejs'
  },
  angular: {
    publicName: 'Angular',
    name: 'angular'
  },
  springboot: {
    publicName: 'Spring Boot',
    name: 'springboot'
  }
}

export const technologiesEntities = Object.values(technologies).map(
  (technology) => ({
    ...technology,
    icon: technologyImagePath + technology.name + '.svg'
  })
)
