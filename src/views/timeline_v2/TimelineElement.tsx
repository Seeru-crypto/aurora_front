import styled from 'styled-components';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import * as React from 'react';
import { CSSProperties } from 'react';

export interface ITimelineElement {
  date: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  iconStyle?:  CSSProperties;
}

const TimelineElement = (props: ITimelineElement) => {
  return (
    <TimelineElementStyle>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={props.date}
        iconStyle={props.iconStyle}
        icon={props.icon}>
        <h3 className="vertical-timeline-element-title">{props.title}</h3>
        <p>{props.desc}</p>
      </VerticalTimelineElement>
    </TimelineElementStyle>
  )
}

const TimelineElementStyle = styled.div`
`;


export default TimelineElement;