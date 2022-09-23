import React from 'react';
import styled from 'styled-components';

const YearBox = ({ year }: { year: number }): JSX.Element => {
  return <StyledYearBox>{year}</StyledYearBox>;
};
export default YearBox;

const StyledYearBox = styled.div`
  font-weight: bold;
  padding: 1rem;
  border-bottom: 2px solid black;
`;
