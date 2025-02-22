import { ISkillCard } from './SkillCard';

export const SkillData: ISkillCard[] = [
  {
    title: 'back-end',
    desc: 'I specialize in developing scalable, high-performance back-end systems with <b>Java</b> (Spring Boot). I\'m experienced in both SQL and NoSQL databases, ensuring efficient data management. Additionally, I have expertise in headless CRM solutions like <b>Strapi</b> and full CRM platforms such as <b>WordPress</b> when needed.',
    icon: 'FaCode'
  },  {
    title: 'Hosting',
    desc: 'I manage self-hosted environments and cloud infrastructure, ensuring secure and efficient deployments using <b>Docker</b> and <b>Nginx</b>. With expertise in automating processes through <b>github actions</b>, I ensure that applications run smoothly and scale effortlessly.',
    icon: 'FaServer'
  }, {
    title: 'Front-end',
    desc: 'On the front end side, I create intuitive, responsive, and dynamic user interfaces using <b>Next.js</b> (React) and <b>Angular</b>. My focus is on delivering seamless user experiences through clean, modular code, ensuring that web applications are fast, accessible, and visually appealing across all devices.',
    icon: 'FiMonitor'
  }, {
    title: 'Other',
    desc: 'Thanks to my experience in running a self-hosted enviorment, I have experience in setting up new accessable services, adding SSL certificates, securing using <b>Keycloak</b> and mainting good observability through <b>grafana</b> and <b>loki</b>.',
    icon: 'MdSettings'
  },
]