import { IProjectCard } from './ProjectCard';

export const projectData: IProjectCard[] = [{
  imageSrc: '/pic01.jpg',
  title: 'Aurora',
  desc: 'a very nifty portfolio page',
  tags: [
    {name: 'next.js', type: 'front'}
  ],
}, {
  imageSrc: '/pic02.jpg',
  title: 'Helmes homework',
  desc: 'A advanced version of a old homework, with advanced filtering and user registration logic',
  tags: [
    { name: 'java 17', type: 'back' },
    { name: 'Postgre', type: 'db' },
    { name: 'vite', type: 'front' },
    { name: 'Redux', type: 'front' },
  ],
}, {
  imageSrc: '/resources/FreeNAS.png',
  title: 'TrueNas homelab',
  desc: 'A Homeserver, which provides a number of services, including plex, keycloak, grafana, etc',
  tags: [
    {name: 'TrueNas', type: 'other'},
    {name: 'Nginx', type: 'other'},
    {name: 'Keycloak', type: 'other'},
  ],
},
];