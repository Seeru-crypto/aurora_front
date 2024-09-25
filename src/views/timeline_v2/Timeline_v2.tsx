import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GoAlert, GoDatabase } from 'react-icons/go';
import { GoCalendar } from "react-icons/go";
import  MyIcon from '../../../public/NetGroup_icon.svg';
import TimelineElement, { ITimelineElement } from './TimelineElement'; // Update the path to your image

const Timeline_v2 = () => {
  const data: ITimelineElement[] = [
    {
      title: "test",
      desc: "desc",
      date: "date",
      icon: <GoAlert />,
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' }
    }
  ]

  return (
    <TimelineStyles>
      <VerticalTimeline animate={false}>
        {data.map(item => <TimelineElement
          key={item.title}
          date={item.date}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
          iconStyle={item.iconStyle}
        />)}
      </VerticalTimeline>
    </TimelineStyles>
  )

}



const TimelineStyles = styled.div`

`;


export default Timeline_v2;