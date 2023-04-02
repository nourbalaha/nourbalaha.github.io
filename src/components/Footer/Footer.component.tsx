import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <Wrapper className="footer">
      <div>
        <Item
          onClick={() =>
            window.open("https://www.linkedin.com/in/nourbalaha0/", "_blank")
          }
        >
          <i className="fa fa-linkedin"></i>
        </Item>
        <Item
          onClick={() =>
            window.open("https://twitter.com/NourBalaha", "_blank")
          }
        >
          <i className="fa fa-twitter"></i>
        </Item>
        <Item
          onClick={() => window.open("https://github.com/nourbalaha", "_blank")}
        >
          <i className="fa fa-github"></i>
        </Item>
      </div>
      <span>© 2023 Nour Balaha</span>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.footer`
  height: 90px;
  background-color: #333333;
  color: #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
`;

const Item = styled.span`
  color: #cccccc;
  font-size: 32px;
  cursor: pointer;
  padding: 0 15px;
  &:hover{
    color: #777777;
  }
`;