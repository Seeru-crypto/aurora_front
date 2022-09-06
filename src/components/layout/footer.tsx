import styled from "styled-components";

const Footer = () => {
    return (
        <FooterStyle>
            <p>Copyright 2022 Aurora</p>
        </FooterStyle>
    );
};

export default Footer;

const FooterStyle = styled.footer`
  display: block;
  text-align: center;
  padding: 30px 0;
  margin-top: 60px;
  color: #777;
  border-top: 1px solid #eaeaea;
`