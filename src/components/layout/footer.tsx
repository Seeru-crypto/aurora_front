import styled from 'styled-components';

export default function Footer(): JSX.Element {
  return (
    <FooterStyle>
      <small>&copy; Aurora {new Date().getFullYear()}</small>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  font-family: ${(props) => props.theme.secondaryFont};
  padding: 1rem 0;
  text-align: center;
`;
