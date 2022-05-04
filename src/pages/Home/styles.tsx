import styled from "styled-components";

import { colors } from "../../global/theme";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};

  > .sub-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  > .description-container {
    display: flex;
    flex-direction: column;
    margin-right: 70px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 70px;
`;

export const Title = styled.h1`
  color: ${colors.text};
  font-size: 70px;
`;

export const SecondTitle = styled.p`
  color: ${colors.text};
  font-size: 50px;
`;

export const ThirdTitle = styled.p`
  font-size: 50px;
  color: ${colors.primary};
  font-weight: bold;
`;

export const MainButton = styled.button`
  background-color: #fff;
  margin-top: 10px;
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 20px;
  transition: 0.5s;

  > span {
    font-size: 15px;
    color: ${colors.primary};
    text-transform: uppercase;
    font-weight: bold;
  }

  :hover {
    cursor: pointer;
    background-color: ${colors.primary};
    border: 1px solid ${colors.primary};

    > span {
      color: #fff;
    }
  }
`;

export const Logo = styled.img`
  border-radius: 5px;
  width: 700px;
  height: 700px;
`;
