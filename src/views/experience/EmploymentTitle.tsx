import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface EmploymentProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    employer: string;
}

const EmploymentDetail = ({title, employer} : EmploymentProps) : JSX.Element => {
    return (
        <EmploymentStyle>
            <span className="employer">{employer}, </span>
            <span className="title">{title}</span>
        </EmploymentStyle>
    )
}

export default EmploymentDetail;

const EmploymentStyle = styled.div`
  font-weight: 700;
  .employer {
    color: ${(props) => props.theme.primary};
  }

`