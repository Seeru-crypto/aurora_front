import { TypesOfEmployment } from '../../data';

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

export const TIMELINE_DATA  : TimelineCard[] = [
  {
    startDate: "2023-09-30T21:00:00.000Z",
    employer: 'Helmes OÜ',
    durationMonths: 10,
    title: 'Full-stack developer',
    typeOfEmployment: 'full-time',
    responsibilities: [
      'Ut justo ipsum, commodo volutpat molestie in, vehicula a neque.',
      'Vestibulum finibus, turpis ac dignissim malesuada, libero turpis lacinia quam, ut tristique nibh nunc in tortor.',
      'Aliquam non velit id justo interdum bibendum vitae vitae ipsum.',
      'Fusce eu aliquet nisl, ut rhoncus lacus, fucse maximus interdum laoreet, nam quis pharetra velit.',
    ],
    techStack: ['spring-boot', 'angular'],
  },
  {
    startDate: "2021-03-31T21:00:00.000Z",
    employer: 'Net Group OÜ',
    title: 'Full-stack developer',
    durationMonths: 32,
    typeOfEmployment: 'full-time',
    responsibilities: [
      'Sed facilisis arcu at arcu tincidunt tincidunt.',
      'In quis metus sit amet felis tincidunt facilisis.',
      'Duis vitae semper elit, et sollicitudin dui, quisque lacinia urna in lacinia tristique, proin nec ipsum metus.',
    ],
    techStack: ['java', 'react', 'kotlin', 'angular'],
  },
  {
    startDate: "2018-06-30T21:00:00.000Z"   ,
    employer: 'Police and Border Patrol',
    title: 'System administrator',
    durationMonths: 24,
    typeOfEmployment: 'full-time',
    responsibilities: [
      'Sed facilisis arcu at arcu tincidunt tincidunt.',
      'In quis metus sit amet felis tincidunt facilisis.',
      'Duis vitae semper elit, et sollicitudin dui, quisque lacinia urna in lacinia tristique, proin nec ipsum metus.',
    ],
    techStack: ['SQL', 'TQL', 'HTML'],
  }
];
