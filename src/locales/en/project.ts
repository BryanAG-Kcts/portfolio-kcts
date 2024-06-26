import { getLocaleProject } from '../constants/project/projects'

export const projectsDesc = {
  tictactoe: 'A simple game that we all like',
  simpleTranslate: 'A simple translator',
  kactusKraft: 'A Minecraft clone',
  tsDo: 'A list of pending tasks',
  infoCountry: 'Select a country and observe some characteristics',
  wapiw: 'A practical test of how to consume an Api',
  button:
    'One click and you lose everything, or one click and then... another one',
  sittingnt:
    'My first college project. It is a presentation of a mobile application for monitoring daily activities. It is incomplete and close to renew',
  game2048:
    'A game with a tactic that is easy to analyze but difficult to master, play, score points and save your best record',
  portfolio:
    'You are here 🌵! Welcome to my personal portfolio, you will find information about me and what I do. I hope you enjoy it',
  kctsExpressGenerator: 'Simple expressJs project generator',
  backGame2048:
    'A game with a tactic that is easy to analyze but difficult to master, play, score points and save your best record',
  kctshort:
    'A link shortener, simple, fast and free. There are no ads or waiting time!',
  landing:
    'A simple home page with a 3D touch. Explore and watch it move! Credits to Prismic',
  kctsground:
    'A large playground of code, simple and fast. Share your code with only the Url or export it in pdf'
}

export const projects = {
  nameGithub: 'GitHub projects',
  nameWeb: 'Web projects',
  anchorName: 'visit',
  projects: getLocaleProject(projectsDesc)
}
