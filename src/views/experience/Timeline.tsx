import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GoCalendar } from 'react-icons/go';
import TimelineElement, { ITimelineElement } from './TimelineElement';
import NetGroupIcon from '../../../public/resources/icons/NetGroupIcon.svg';
import HelmesIcon from '../../../public/resources/icons/HelmesIcon.svg';
import PPAIcon from '../../../public/resources/icons/PPAIcon.png';
import Image from 'next/image';

const Timeline = () => {
  const data: ITimelineElement[] = [
    {
      title: 'Helmes OÜ',
      position: 'Full-stack developer',
      desc: 'Main tasks were maintanace and new feature development on a microservice project, with over 20 modules.',
      date: '2023-2024',
      icon: <HelmesIcon className="HLM-icon" />,
      iconStyle: {background: 'beige', display: 'flex', justifyContent: 'center', alignItems: 'center'},
    },
    {
      title: 'Netgroup OÜ',
      position: 'Full-stack junior developer',
      desc: 'Implemented several projects which ranged from a few months to a year. In larger projects focused on UI development.',
      date: '2021-2023',
      icon: <NetGroupIcon className="NG-icon" />,
      iconStyle: { background: 'beige', color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' },
    },
    {
      title: 'Police and Border Guard Board',
      position: 'System a dministrator',
      desc: 'I was responsible for the PPA\'s management information system, which had over 150 users. I created data models, ETL pipelines, and wrote documentation (information models, user stories, detailed analysis of new functionalities, and descriptions of processes affecting services).',
      date: '2018-2020',
      icon: <Image alt="PPA icon missing" src={PPAIcon.src} height='42' width="42" />,
      iconStyle: { background: 'beige', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' },
    },
  ];

  return (
    <TimelineStyles>
      <VerticalTimeline>
        {data.map(item => <TimelineElement
          iconStyle={item.iconStyle}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
          date={item.date}
          key={item.title}
          position={item.position}
        />)}
        <VerticalTimelineElement
          className="first-element"
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<GoCalendar />}
        />
      </VerticalTimeline>
    </TimelineStyles>
  );
};

const TimelineStyles = styled.div`
  .vertical-timeline-element-content.bounce-in {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.timelineBkgColor};
  }
  
  .vertical-timeline-element--work > .vertical-timeline-element-content {
    box-shadow: 0 3px 0 ${(props) => props.theme.experienceBoxShadowColor};
  }

  .first-element > .vertical-timeline-element-content {
    background-color: transparent;
  }

  .HLM-icon {
    width: 156px;
    height: inherit;
    margin-left: 0;
    margin-top: 0;
    fill: blue;

    top: 40%;
    left: 25%;
  }

  .NG-icon {
    height: 36px;
    width: 36px;
    fill: beige;
    font-size: 2rem;
    background-color: red;

    left: 0;
    top: 0;
    margin-left: 0;
    margin-top: 0;
  }
`;


export default Timeline
