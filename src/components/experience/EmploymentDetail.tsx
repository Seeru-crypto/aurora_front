import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface EmploymentDetailProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

const EmploymentDetail = ({ value }: EmploymentDetailProps): JSX.Element => {
  return <EmploymentDetailStyle>{value}</EmploymentDetailStyle>;
};

export default EmploymentDetail;

const EmploymentDetailStyle = styled.div`
  font-size: 12px;
`;
