import styled from "styled-components";

import { colors } from "../../global/theme";

export const Container = styled.div`
  padding: 0 10px 10px 10px;

  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  button {
    width: 100%;
    padding: 10px;
    border: 1px solid ${colors.primary};
    border-radius: 8px;
    background-color: ${colors.primary};
    color: ${colors.text};
    transition: 0.5s;
    cursor: pointer;
  }

  button:hover {
    background-color: #fff;
    color: ${colors.primary};
  }
`;
