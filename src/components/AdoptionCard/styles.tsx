import styled from "styled-components";

import { breakpoint, colors } from "../../global/theme";

export const MainContainer = styled.div`
  padding: 20px;

  .cat_data {
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 220px;
      border-radius: 10px;
    }

    h3 {
      color: ${colors.background};
    }

    span {
      font-weight: bold;
    }

    @media ${breakpoint.md} {
      display: flex;
      flex-direction: row;
      justify-content: center;

      img {
        width: 50%;
        height: 220px;
        margin-right: 10px;
        border-radius: 10px;
      }
    }

    @media ${breakpoint.md} {
      display: flex;
      flex-direction: row;
      justify-content: center;

      img {
        width: 50%;
        height: 10%;
        margin-right: 10px;
        border-radius: 10px;
      }

      h3 {
        font-size: 40px;
      }

      span {
        font-size: 20px;
      }

      p {
        font-size: 20px;
      }
    }
  }

  .cat_adoption {
    display: flex;
    justify-content: center;
  }
`;
