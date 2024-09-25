import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import * as React from 'react';
import { CSSProperties } from 'react';

export interface ITimelineElement {
  date: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  iconStyle?: CSSProperties;
  position: string;
}

const TimelineElement = (props: ITimelineElement) => {
  return (
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      date={props.date}
      iconStyle={props.iconStyle}
      icon={props.icon}>
      <h3 className='vertical-timeline-element-title'>{props.title}</h3>
      <h4>{props.position}</h4>
      <p>{props.desc}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;