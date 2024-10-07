import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

const NotFound = () => {
  const router = useRouter();
  const timer = 10 * 1000;

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, timer);
  }, [timer, router]);

  return (
    <NotFoundStyle>
      <h1>Ooops.. </h1>
      <h2>The page cannot be found</h2>
    </NotFoundStyle>
  );
};
export default NotFound;

const NotFoundStyle = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rebeccapurple;
`;
