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
  }

  .adoption_info {
  }
`;
