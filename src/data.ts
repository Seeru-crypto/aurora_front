import { ProjectJsonInterface } from './lib/load-data';

export const PROJECTS: ProjectJsonInterface[] = [
  {
    repo_name: 'Dater_FE',
    project_name: 'Dater',
    description: '',
    picture_url: '/resources/Dater.png',
    project_type: 'personal',
    showcase: true,
    updatedAt: '',
  },
  {
    repo_name: '',
    project_name: 'NAS server',
    picture_url: '/resources/FreeNAS.png',
    project_type: 'personal',
    showcase: true,
    topics: ['freenas'],
    description: 'A freeNas home server',
    updatedAt: '2020-09-04T17:11:11.164Z',
  },
  {
    repo_name: '',
    project_name: 'Archive prj 1',
    picture_url: '/resources/FreeNAS.png',
    project_type: 'personal',
    showcase: false,
    topics: ['a topic'],
    description: '',
    updatedAt: '2020-09-04T17:11:11.164Z',
  },
  {
    repo_name: '',
    project_name: 'Archive prj 2',
    picture_url: '',
    project_type: 'freelance',
    showcase: false,
    topics: ['react', 'a second topic!'],
    description: '',
    updatedAt: '2010-09-04T17:11:11.164Z',
  },
  {
    repo_name: 'protocol',
    project_name: 'Protocol',
    picture_url: '',
    project_type: 'personal',
    showcase: false,
    updatedAt: '',
    description: '',
  },
  {
    repo_name: 'aurora_front',
    project_name: 'Aurora',
    picture_url: '/resources/default.jpg',
    project_type: 'personal',
    showcase: true,
    updatedAt: '',
    description: '',
  },
  {
    repo_name: 'user-registration',
    project_name: 'user registration',
    picture_url: '',
    project_type: 'personal',
    showcase: false,
    updatedAt: '',
    description: 'A mini project',
  },
];

export interface TimelineCard {
  startDate: string;
  employer: string;
  title: string;
  durationMonths?: number;
  typeOfEmployment: TypesOfEmployment;
  responsibilities: string[];
  achievements?: string[];
  techStack: string[];
}

export const EXPERIENCE_DATA: TimelineCard[] = [
  {
    startDate: '2022-09-09T16:04:47.418Z',
    employer: 'Company A',
    title: 'Best position employee',
    durationMonths: 2,
    typeOfEmployment: 'self-employed',
    responsibilities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Integer lorem mi, suscipit eu lacinia nec, viverra nec magna.',
      'Phasellus sit amet libero eget quam maximus mollis.',
      'Duis est velit, euismod scelerisque ullamcorper quis, ullamcorper non nunc.',
    ],
    achievements: ['Best Power bottom of 2022'],
    techStack: ['react'],
  },
  {
    startDate: '2016-06-09T16:04:47.518Z',
    employer: 'Deep state',
    title: 'Local spy-man',
    durationMonths: 0,
    typeOfEmployment: 'part-time',
    responsibilities: ['Confidential'],
    techStack: ['ngnix'],
  },

  {
    startDate: '2022-09-09T16:04:47.618Z',
    employer: 'Company B',
    durationMonths: 1,
    title: 'Employee of the year',
    typeOfEmployment: 'freelance',
    responsibilities: [
      'Ut justo ipsum, commodo volutpat molestie in, vehicula a neque.',
      'Vestibulum finibus, turpis ac dignissim malesuada, libero turpis lacinia quam, ut tristique nibh nunc in tortor.',
      'Aliquam non velit id justo interdum bibendum vitae vitae ipsum.',
      'Fusce eu aliquet nisl, ut rhoncus lacus, fucse maximus interdum laoreet, nam quis pharetra velit.',
    ],
    techStack: ['spring-boot'],
  },
  {
    startDate: '2021-04-09T16:04:48.318Z',
    employer: 'Company C',
    title: 'Employee',
    durationMonths: 24,
    typeOfEmployment: 'training',
    responsibilities: [
      'Sed facilisis arcu at arcu tincidunt tincidunt.',
      'In quis metus sit amet felis tincidunt facilisis.',
      'Duis vitae semper elit, et sollicitudin dui, quisque lacinia urna in lacinia tristique, proin nec ipsum metus.',
    ],
    techStack: ['java', 'react', 'tailwind-css'],
  },
  {
    startDate: '2022-09-09T16:04:49.318Z',
    employer: 'Company D',
    title: 'Employee',
    durationMonths: 13,
    typeOfEmployment: 'full-time',
    responsibilities: [
      'Etiam a placerat dui. Aliquam accumsan molestie pulvinar. Fusce ut metus quis augue fermentum dignissim vitae id sem.',
      'Curabitur ultrices id lacus a aliquam. Donec placerat pharetra fringilla. Sed vel efficitur nunc, sit amet suscipit urna.',
      'Sed sollicitudin ipsum elit, eget finibus nisl consectetur et. Suspendisse tempor accumsan nulla sed tincidunt.',
    ],
    achievements: ['Best Power bottom of 2022'],
    techStack: ['vercel-deployment', 'nextjs'],
  },
  {
    startDate: '2021-04-09T16:04:41.318Z',
    employer: 'Net Grouz.RU',
    title: 'Local door stop',
    durationMonths: 12,
    typeOfEmployment: 'full-time',
    responsibilities: [
      'Nam ligula nulla, hendrerit vitae tellus non, fringilla mollis velit. Ut pretium eros eget justo ultricies, id viverra leo dapibus.',
      'Sed iaculis aliquam tincidunt. Duis molestie felis at ex sagittis, eu aliquet dui feugiat. Cras convallis pretium ligula.',
      'Nulla tellus lacus, sollicitudin sed dignissim a, mattis eu sapien. Mauris ac nibh at sem maximus tincidunt.',
    ],
    techStack: ['java', 'redux'],
  },
  {
    startDate: '2022-09-09T16:04:42.318Z',
    employer: 'Best Kahvi OY',
    durationMonths: 34,
    title: ' Junior whipping boy;',
    typeOfEmployment: 'full-time',
    responsibilities: [
      'Praesent accumsan fringilla sollicitudin. Suspendisse sagittis arcu sit amet ex tempor laoreet.',
      'Nulla ullamcorper, neque nec lobortis tempus, elit metus dapibus est, condimentum rutrum velit turpis et ex.',
      'Maecenas bibendum efficitur feugiat. Curabitur in augue bibendum, consectetur lectus nec, gravida est. Nam convallis tempus accumsan.',
    ],
    achievements: ['Best Power bottom of 2022'],
    techStack: ['docker'],
  },
  {
    startDate: '2021-04-09T16:04:43.318Z',
    employer: 'Net Grouz.RU',
    title: 'Local door stop',
    durationMonths: 1,
    typeOfEmployment: 'full-time',
    responsibilities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mauris vel justo suscipit sagittis. Vestibulum posuere eros eget odio vestibulum scelerisque. Pellentesque ullamcorper arcu a diam dignissim, sit amet iaculis neque bibendum. Sed ullamcorper nibh sed turpis egestas efficitur. Nulla aliquet nibh sapien, nec efficitur velit venenatis ac. Quisque varius neque nec ex consectetur egestas ut quis mi. Ut tincidunt lorem mauris, id sagittis velit molestie eleifend. Nullam non risus est.',
      'In volutpat imperdiet turpis, ac fringilla dui egestas volutpat. Nunc non efficitur lectus, sed suscipit sem. Quisque feugiat velit ac purus tempor feugiat. Etiam pretium risus nec malesuada accumsan. Suspendisse potenti. Vivamus ullamcorper quis justo congue tincidunt. Curabitur pulvinar quam sed ex iaculis fringilla.',
      'Lead coffee procurer',
    ],
    techStack: ['primereact', 'react', 'nextjs'],
  },
];

const TYPES_OF_TECH = ['front', 'back', 'db', 'other'] as const;
export type TypesOfTech = typeof TYPES_OF_TECH[number];

const TYPES_OF_EMPLOYMENT = ['full-time', 'part-time', 'self-employed', 'freelance', 'training'] as const;
export type TypesOfEmployment = typeof TYPES_OF_EMPLOYMENT[number];

const PROJECT_TYPES = ['personal', 'freelance', 'main'] as const;
export type ProjectTypes = typeof PROJECT_TYPES[number];

export interface Tech {
  name: string;
  type: TypesOfTech;
}

export const TECHNOLOGIES: Tech[] = [
  { name: 'react', type: 'front' },
  { name: 'spring-boot', type: 'back' },
  { name: 'java', type: 'back' },
  { name: 'docker', type: 'other' },
  { name: 'heroku', type: 'other' },
  { name: 'mongodb', type: 'db' },
  { name: 'ngnix', type: 'other' },
  { name: 'primereact', type: 'front' },
  { name: 'redux', type: 'front' },
  { name: 'styled-components', type: 'front' },
  { name: 'twilio', type: 'other' },
  { name: 'github-api', type: 'other' },
  { name: 'nextjs', type: 'front' },
  { name: 'prisma', type: 'other' },
  { name: 'azurespeechservices', type: 'other' },
  { name: 'nextauth', type: 'other' },
  { name: 'tailwind-css', type: 'front' },
  { name: 'vercel-deployment', type: 'other' },
  { name: 'freenas', type: 'other' },
];

export const LABELS = {
  CONTACT_BODY:
    "You can share your impressions on why would someone need your services or whatnot, I don't know, I'm not the all-seeing entity of all.",
  CONTACT_HEADER: 'Get in touch with me!',
  CTA_LABEL: 'Check out my projects',
  GREETING_MORNING: 'Mornen!',
  GREETING_DAY: 'Have a nice day!',
  GREETING_EVENING: 'Good evening!',
  GREETING_DEFAULT: 'Howdy!',
  GREETING_MAIN_BODY: 'My name is Fred',
  LANDING_HERO_TEXT: 'I do stuff for the interwebz',
  HERO_SECTION_PROJECTS_TITLE: 'Number of projects',
  HERO_SECTION_CODING_SINCE: ['Coding since', '2016'],
  HERO_SECTION_LAST_UPDATED_TITLE: 'Site last updated',
  HERO_SECTION_LOCATION: ['Current location', 'Estonia, Tallinn '],
};
