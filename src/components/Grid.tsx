import styled, { css } from "styled-components";

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-gap: ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 0;
    background-color: white;
    padding: ${theme.spacings.xsmall};
  `}
`;
