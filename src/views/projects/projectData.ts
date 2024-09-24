import { IProjectCard } from './ProjectCard';

export const projectData: IProjectCard[] = [{
  imageSrc: '/pic01.jpg',
  link: "",
  title: 'Aurora',
  desc: 'One of the first projects I did, with the emphasis on FE development and good SEO scrores. On the css side I tried to follow style systems (Tailwind colors 50 - 900). One of the main difficulties was to get it to look "right", goal which I hopefully achieved',
  tags: [
    {name: 'next.js', type: 'front'}
  ],
}, {
  imageSrc: '/pic02.jpg',
  link: "sdsd",
  title: 'Helmes homework',
  desc: 'A old homework project, which I used as a base to develop more advanced functionality. Currently you can create users, with dynamic sectors, and add custom filters to view said users.',
  tags: [
    { name: 'java 17', type: 'back' },
    { name: 'Postgre', type: 'back' },
    { name: 'vite', type: 'front' },
    { name: 'Redux', type: 'front' },
  ],
}, {
  imageSrc: '/resources/FreeNAS.png',
  title: 'TrueNas homelab',
  link: "",
  desc: 'A Home server/ home lab, which provides a number of services of personal use, including plex, keycloak, grafana, etc. Everything is behind a nginx proxy and keycloak auth service.',
  tags: [
    {name: 'TrueNas', type: 'other'},
    {name: 'Nginx', type: 'other'},
    {name: 'Keycloak', type: 'other'},
  ],
},
];