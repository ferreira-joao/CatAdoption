import styled from "styled-components";

import { breakpoint, colors } from "../../global/theme";

export const TabList = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: row;

  li {
    width: 50%;
    padding: 10px;
    border: 1px solid ${colors.primary};
    border-top-left-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    background-color: ${colors.primary};

    p {
      text-align: center;
      font-size: 12px;
      color: ${colors.text};
    }
  }

  li.active {
    border: 1px solid ${colors.primary};
    border-bottom: #fff;
    background-color: #fff;

    p {
      font-size: 12px;
      color: ${colors.primary};
    }
  }

  li:nth-child(2) {
    border-radius: 0;
    border-top-right-radius: 8px;
  }

  li:hover {
    border: 1px solid ${colors.primary};
    border-bottom: #fff;
    background-color: ${colors.secondary};

    p {
      font-size: 12px;
      color: #fff;
    }
  }
`;
