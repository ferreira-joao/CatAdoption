import styled from "styled-components";

import { colors } from "../../global/theme";

export const Container = styled.li`
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${colors.secondary};
  transition: 0.5s;
  list-style-type: none;
  cursor: pointer;

  img {
    border-radius: 10px 10px 5px 5px;
    width: 100%;
    height: 220px;
    transition: 0.2s;
  }

  img:hover {
    transform: scale(1.1);
  }

  h3 {
    margin-bottom: 5px;
  }

  span {
    font-weight: bold;
  }

  .cat_description {
    padding: 5px;
    text-align: center;
  }

  :hover {
    background-color: ${colors.primary};
  }
`;
