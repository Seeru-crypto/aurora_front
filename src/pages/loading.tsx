import styled from 'styled-components';

export default function Loading() {
  return (
    <LoadingStyle>
    </LoadingStyle>
  )
}

const LoadingStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  background-color: #EEEEEE; // GRAY 0
  color: #e2e8f0; // gray 200
  
  body {
    background-color: #EEEEEE; // GRAY 0
  }
`;
