import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
  `}
`;
export const ImageBox = styled.a`
  min-height: 14rem;
  position: relative;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 1rem;
  }
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`;
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`;
export const GameInfo = styled.a`
  max-width: calc(100% - 2.5rem);
  text-decoration: none;
`;
export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`;
export const BuyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: ${theme.spacings.xxsmall};

    span {
      /* background-color: ${theme.colors.secondary}; */
      color: ${theme.colors.white};
      padding: 0.6rem ${theme.spacings.xsmall};
      font-weight: ${theme.font.bold};

      border: none;
      border-radius: ${theme.border.radius};
    }
  `}
`;
export const Price = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    font-weight: ${theme.font.bold};
    height: 3rem;
    align-items: center;
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
    border-radius: ${theme.border.radius};
  `}
`;
