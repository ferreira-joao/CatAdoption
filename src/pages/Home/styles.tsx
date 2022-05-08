import styled from "styled-components";

import { breakpoint, colors } from "../../global/theme";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const Header = styled.div`
  width: 100%;
  padding: 10px;
  border-end-start-radius: 10px;
  border-end-end-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.background};

  @media ${breakpoint.md} {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .figure {
    border: 3px solid rgb(247, 150, 116);
    border-radius: 70px;

    @media ${breakpoint.md} {
      margin-right: 50px;
    }
  }

  h1 {
    color: ${colors.text};
  }

  p {
    color: ${colors.text};
  }
`;

export const Logo = styled.img`
  width: 130px;
  height: 130px;
`;
