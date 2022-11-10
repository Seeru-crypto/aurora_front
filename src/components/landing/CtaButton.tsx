import { BiChevronsDown } from 'react-icons/bi';
import styled from 'styled-components';
import data from '../../data.json';
import { RootState, useAppSelector } from '../../state/store';

export default function CtaButton(props: any): JSX.Element {
  const activeTheme = useAppSelector((state: RootState) => state.theme.activeTheme);

  const { CTA_LABEL } = data.text;
  return (
    <CtaStyle activeTheme={activeTheme} {...props}>
      <a href="#showcase" className="cta">
        {CTA_LABEL}
      </a>
      <BiChevronsDown className="chevrons" />
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
    background-color: ${(props) => props.theme.primary};
    border: 2px solid transparent;
    border-radius: ${(props) => props.theme.borderRadius};
    cursor: pointer;
    color: ${(props) => props.theme.gray.$100};
    font-size: 1.2em;
    font-weight: bold;
    margin: -2rem 0 2rem 0;
    padding: 1rem 2rem;
    text-decoration: none;
    transition: border-color ${(props) => props.theme.transition}, background-color ${(props) => props.theme.transition},
      color ${(props) => props.theme.transition};
    z-index: 10;

    :hover {
      border-color: ${(props) => props.theme.primaryColor.$500};
      background-color: ${(props) => props.theme.gray.$100};
      color: ${(props) => props.theme.primaryColor.$500};
    }
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
