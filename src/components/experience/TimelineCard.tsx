import React from "react";
import {ExperienceType} from "./Experience";
import styled from "styled-components";

const TimelineCard = ({event}: {event: ExperienceType}) => {
    return(
        <CardStyle>
            {event.title}
        </CardStyle>
    )
}

export default TimelineCard

const CardStyle = styled.div`
    border: 1px solid orange;
`
