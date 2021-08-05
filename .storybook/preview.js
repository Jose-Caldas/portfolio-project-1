import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/globals";
import {CartContext, CartContextDefaultValues} from '../src/hooks/use-cart'
import theme from "styles/theme";

export const parameters = {
  backgrounds: {
    default: "won-light",
    values: [
      {
        name: "won-light",
        value: theme.colors.white,
      },
      {
        name: "won-dark",
        value: theme.colors.mainBg,
      },
    ],
  },
};

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
   <CartContext.Provider  value={{
          ...CartContextDefaultValues,
          ...(context?.args?.cartContextValue || {}),
          ...context.args
        }}>
   <GlobalStyles removeBg />
      <Story />
   </CartContext.Provider>
    </ThemeProvider>
  ),
];
