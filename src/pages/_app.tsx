import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";

import GlobalStyles from "../styles/globals";
import { lightTheme } from "../themes/lightTheme";
import { CartProvider } from "../hooks/useCart";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}
