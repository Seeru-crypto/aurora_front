import styled from 'styled-components';

export default function Footer(): JSX.Element {

  return (
    <FooterStyle>
      <small>&copy; Aurora v{process.env.NEXT_PUBLIC_VERSION_NUMBER} {new Date().getFullYear()}</small>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  align-items: center;
  display: flex;
  font-family: ${(props) => props.theme.secondaryFont};
  height: 55px;
  justify-content: center;
  text-align: center;
`;
