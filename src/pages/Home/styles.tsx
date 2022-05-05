import styled from "styled-components";

import { colors, breakpoint } from "../../global/theme";

export const Figure = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media ${breakpoint.lg} {
    width: 400px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: blur(2px);
    border-radius: 10px;

    @media ${breakpoint.md} {
      object-fit: contain;
      filter: blur(0);
    }

    @media ${breakpoint.lg} {
      object-fit: initial;
      width: 400px;
      height: 400px;
    }

    @media ${breakpoint.xl} {
      object-fit: initial;
      width: 500px;
      height: 500px;
    }
  }

  &::before {
    width: 100%;
    height: 100%;
    position: absolute;
    content: "";
    background-color: rgba(225, 180, 84, 0.5);
    left: 0;
    top: 0;
    z-index: 1;

    @media ${breakpoint.md} {
      display: none;
    }
  }
`;
export const MainButton = styled.button`
  background-color: #fff;
  margin-top: 10px;
  padding: 10px 30px;
  border: 1px solid #fff;
  border-radius: 20px;
  transition: 0.5s;

  font-size: 15px;
  color: ${colors.primary};
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: ${colors.primary};
    border: 1px solid ${colors.primary};
    color: #fff;
  }

  @media ${breakpoint.lg} {
    width: 100%;
  }
`;
export const ThirdTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: ${colors.background};

  margin-bottom: 20px;

  @media ${breakpoint.lg} {
    font-size: 30px;
    color: ${colors.primary};
  }

  @media ${breakpoint.xl} {
    font-size: 40px;
  }
`;
export const SecondTitle = styled.p`
  font-size: 30px;
  color: ${colors.text};

  @media ${breakpoint.lg} {
    font-size: 30px;
  }

  @media ${breakpoint.xl} {
    font-size: 40px;
  }
`;
export const Title = styled.h1`
  font-size: 50px;
  color: ${colors.text};

  @media ${breakpoint.lg} {
    font-size: 55px;
  }

  @media ${breakpoint.xl} {
    font-size: 60px;
  }
`;
export const DescriptionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media ${breakpoint.lg} {
    position: relative;
    align-items: flex-start;

    width: 300px;
  }
`;
export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.background};

  @media ${breakpoint.lg} {
    display: flex;
    column-gap: 50px;
    justify-content: center;
  }

  @media ${breakpoint.xl} {
    column-gap: 100px;
  }
`;
