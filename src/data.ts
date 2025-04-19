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
  GREETING_MORNING: 'Mornen!',
  GREETING_DAY: 'Have a nice day!',
  GREETING_EVENING: 'Good evening!',
  GREETING_DEFAULT: 'Howdy!',
  GREETING_MAIN_BODY: 'My name is Fred',
};
