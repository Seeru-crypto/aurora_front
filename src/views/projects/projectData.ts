import { IProjectCard } from './ProjectCard';

export const projectData: IProjectCard[] = [{
  imageSrc: '/resources/pictures/aurora.png',
  alternativeImageSrc: '/resources/pictures/aurora_dm.png',
  codeRepository: "https://github.com/Seeru-crypto/aurora_front",
  liveInstance: "https://fredoja.com/",
  title: 'Aurora',
  desc: 'One of the first projects I did, with the emphasis on FE development and good SEO scores. On the css side I tried to follow style systems (Tailwind colors 50 - 900). One of the main difficulties was to get it to look "right", goal which I hopefully achieved',
  tags: [
    {name: 'next.js', type: 'front'}
  ],
}, {
  imageSrc: '/resources/pictures/ilya-pavlov-OqtafYT5kTw-unsplash.jpg',
  codeRepository: "https://github.com/Seeru-crypto/helmes_homework",
  title: 'Helmes homework',
  desc: 'A old homework project, which I used as a base to develop more advanced functionality. Currently you can create users, with dynamic sectors, and add custom filters to view said users.',
  tags: [
    { name: 'java 17', type: 'back' },
    { name: 'PostgreSQL', type: 'back' },
    { name: 'vite', type: 'front' },
    { name: 'Redux', type: 'front' },
  ],
}, {
  imageSrc: '/resources/pictures/TrueNas.png',
  title: 'TrueNas homelab',
  desc: 'A Home server/ home lab, which provides a number of services for personal use, including plex, keycloak, grafana, etc. Everything is behind a nginx proxy and keycloak auth service.',
  tags: [
    {name: 'TrueNas', type: 'other'},
    {name: 'Nginx', type: 'other'},
    {name: 'Keycloak', type: 'other'},
  ],
},{
  imageSrc: '/resources/pictures/vitalitas_image_2.png',
  title: 'Vitalitas',
  desc: 'A custom portfolio, website made for a researcher. With a emphasis on pulling live data from third party sources.',
  codeRepository: "https://github.com/Seeru-crypto/vitalitas",
  liveInstance: "https://test.leilaoja.eu/et",
  tags: [
    {name: 'next.js', type: 'front'},
    {name: 'Strapi', type: 'back'},
    {name: 'PostgreSQL', type: 'db'},
    {name: 'Traefik', type: 'other'},
  ],
},{
  imageSrc: '/resources/pictures/TrafficLight.png',
  title: 'Lights',
  desc: 'A small educational project, where the main focus was on learning websockets and java threads',
  codeRepository: "https://github.com/Seeru-crypto/Lights",
  tags: [
    {name: 'vite.js', type: 'front'},
    {name: 'H2', type: 'db'},
    {name: 'Java 21', type: 'back'}
  ],
},
];