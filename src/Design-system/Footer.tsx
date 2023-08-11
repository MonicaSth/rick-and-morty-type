import styled from "styled-components";

const FooterStyled = styled.div`
  height: 40px;
  padding-bottom: 5px;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>@Copyright Monica Sth 2023</p>
    </FooterStyled>
  );
};
export default Footer;
