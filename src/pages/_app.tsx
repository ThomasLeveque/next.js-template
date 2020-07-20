import React from "react";
import { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import { myTheme } from "../theme/my-theme";

import { GlobalStyles } from "@styles/global.styles";

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <Component {...pageProps} key={router.route} />
    </ThemeProvider>
  );
};

export default MyApp;
