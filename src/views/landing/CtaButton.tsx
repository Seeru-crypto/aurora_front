import { BiChevronsDown } from 'react-icons/bi';
import styled from 'styled-components';
import { RootState, useAppSelector } from '../../state/store';
import AnimatedButton, { AnimatedButtonType } from '../../components/AnimatedButton';

export default function CtaButton(props: any): JSX.Element {
  const activeTheme = useAppSelector((state: RootState) => state.theme.activeTheme);

  return (
    <CtaStyle activeTheme={activeTheme} {...props}>
      <a href='#projects' className="cta">
        <AnimatedButton buttonType={AnimatedButtonType.ANIMATED_CTA} onClick={() => console.log("project")}>Check out my projects</AnimatedButton>
      </a>
      <BiChevronsDown className='chevrons' />
    </CtaStyle>
  );
}

const CtaStyle = styled.div<{
  activeTheme: string;
}>`
  display: flex;
  flex-flow: column wrap;
  position: relative;

  .cta {
    text-decoration: none;
    z-index: 10;
  }

  .chevrons {
    animation: float 3s ease-in-out infinite;
    fill: ${(props) => props.theme.primaryColor.$500};
    height: 48px;
    margin: 0 auto;
    width: 48px;
    z-index: 0;
  }

  @keyframes float {
    0% {
      transform: translate3d(0, -75%, 0);
      opacity: 0;
    }

    30% {
      opacity: 100%;
    }

    100% {
      transform: translate3d(0, 0, 0);
      opacity: 0;
    }
  }
`;
