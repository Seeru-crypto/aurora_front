import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GoAlert, GoCalendar } from 'react-icons/go';
import TimelineElement, { ITimelineElement } from './TimelineElement'; // Update the path to your image

const Timeline_v2 = () => {
  const data: ITimelineElement[] = [
    {
      title: 'Helmes OÜ',
      position: 'Full-stack developer',
      desc: 'Main tasks were maintanace and new feature development on a microservice project, with over 20 modules.',
      date: '2023-2024',
      icon: <GoAlert />,
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    },
    {
      title: 'Netgroup OÜ',
      position: 'Full-stack junior developer',
      desc: 'Implemented several projects which ranged from a few months to a year. In larger projects focused on UI development.',
      date: '2021-2023',
      icon: <GoAlert />,
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    },
    {
      title: 'Police and Border patrol',
      position: 'System administrator',
      desc: 'I was responsible for the PPA\'s management information system, which had over 150 users. I created data models, ETL pipelines, and wrote documentation (information models, user stories, detailed analysis of new functionalities, and descriptions of processes affecting services).',
      date: '2018-2020',
      icon: <GoAlert />,
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
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
  
  .first-element > .vertical-timeline-element-content {
    background-color: transparent;
  }
`;


export default Timeline_v2;