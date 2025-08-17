import Angular from '@/assets/logos/angular.svg'
import Astro from '@/assets/logos/astro.svg'
import Aws from '@/assets/logos/aws.svg'
import Biomejs from '@/assets/logos/biomejs.svg'
import Css from '@/assets/logos/css.svg'
import Electron from '@/assets/logos/electron.svg'
import EsLint from '@/assets/logos/eslint.svg'
import Expo from '@/assets/logos/expo.svg'
import Expressjs from '@/assets/logos/expressjs.svg'
import Figma from '@/assets/logos/figma.svg'
import Git from '@/assets/logos/git.svg'
import Github from '@/assets/logos/github.svg'
import Html5 from '@/assets/logos/html5.svg'
import Java from '@/assets/logos/java.svg'
import Javascript from '@/assets/logos/javascript.svg'
import Mongodb from '@/assets/logos/mongodb.svg'
import Mysql from '@/assets/logos/mysql.svg'
import Nestjs from '@/assets/logos/nestjs.svg'
import Nextjs from '@/assets/logos/nextjs.svg'
import Nodejs from '@/assets/logos/nodejs.svg'
import Postgresql from '@/assets/logos/postgresql.svg'
import Prettier from '@/assets/logos/prettier.svg'
import Prisma from '@/assets/logos/prisma.svg'
import Python from '@/assets/logos/python.svg'
import React from '@/assets/logos/react.svg'
import ReactRouter from '@/assets/logos/reactrouter.svg'
import ShadcnUi from '@/assets/logos/shadcn-ui.svg'
import TailwindCSS from '@/assets/logos/tailwindcss.svg'
import Threejs from '@/assets/logos/threejs.svg'
import Typescript from '@/assets/logos/typescript.svg'
import Vercel from '@/assets/logos/vercel.svg'
import Vitejs from '@/assets/logos/vitejs.svg'
import Vscode from '@/assets/logos/vscode.svg'
import ZenBrowser from '@/assets/logos/zen-browser.svg'
import Zod from '@/assets/logos/zod.svg'

export interface Technology {
  name: string
  Logo: ((_props: astroHTML.JSX.SVGAttributes) => unknown) & ImageMetadata
  level: 0 | 1 | 2 | 3 | 4
}

export const myTools: Technology[] = [
  {
    name: 'Biome JS',
    Logo: Biomejs,
    level: 3
  },
  {
    name: 'EsLint',
    Logo: EsLint,
    level: 3
  },
  {
    name: 'Figma',
    Logo: Figma,
    level: 2
  },
  {
    name: 'Git',
    Logo: Git,
    level: 2
  },
  {
    name: 'Github',
    Logo: Github,
    level: 3
  },
  {
    name: 'Prettier',
    Logo: Prettier,
    level: 3
  },
  {
    name: 'Vercel',
    Logo: Vercel,
    level: 2
  },
  {
    name: 'Vite JS',
    Logo: Vitejs,
    level: 2
  },
  {
    name: 'Visual Studio Code',
    Logo: Vscode,
    level: 4
  },
  {
    name: 'Zen Browser',
    Logo: ZenBrowser,
    level: 3
  },
  {
    name: 'Zod',
    Logo: Zod,
    level: 3
  }
]

export const myFrontend: Technology[] = [
  {
    name: 'Angular',
    Logo: Angular,
    level: 2
  },
  {
    name: 'Astro',
    Logo: Astro,
    level: 3
  },
  {
    name: 'CSS',
    Logo: Css,
    level: 4
  },
  {
    name: 'Expo',
    Logo: Expo,
    level: 2
  },
  {
    name: 'HTML 5',
    Logo: Html5,
    level: 4
  },
  {
    name: 'JavaScript',
    Logo: Javascript,
    level: 4
  },
  {
    name: 'Nextjs',
    Logo: Nextjs,
    level: 3
  },
  {
    name: 'React',
    Logo: React,
    level: 4
  },
  {
    name: 'React Router',
    Logo: ReactRouter,
    level: 3
  },
  {
    name: 'Shadcn UI',
    Logo: ShadcnUi,
    level: 3
  },
  {
    name: 'Tailwind CSS',
    Logo: TailwindCSS,
    level: 4
  },
  {
    name: 'Threejs',
    Logo: Threejs,
    level: 3
  }
]

export const myBackend: Technology[] = [
  {
    name: 'Express JS',
    Logo: Expressjs,
    level: 3
  },
  {
    name: 'Java',
    Logo: Java,
    level: 2
  },
  {
    name: 'Mongodb',
    Logo: Mongodb,
    level: 2
  },
  {
    name: 'Mysql',
    Logo: Mysql,
    level: 1
  },
  {
    name: 'Nodejs',
    Logo: Nodejs,
    level: 3
  },
  {
    name: 'PostgreSQL',
    Logo: Postgresql,
    level: 3
  },
  {
    name: 'Python',
    Logo: Python,
    level: 2
  },
  {
    name: 'TypeScript',
    Logo: Typescript,
    level: 4
  }
]

export const myLearning: Technology[] = [
  {
    name: 'Aws',
    Logo: Aws,
    level: 0
  },
  {
    name: 'Electron',
    Logo: Electron,
    level: 0
  },
  {
    name: 'Nestjs',
    Logo: Nestjs,
    level: 0
  },
  {
    name: 'Prisma',
    Logo: Prisma,
    level: 0
  }
]
