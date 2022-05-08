import styled from "styled-components";

import { breakpoint } from "../../global/theme";

export const Container = styled.ul`
  padding: 10px;
  margin-top: 10px;

  @media ${breakpoint.md} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
  }
`;
