import React, { FunctionComponent } from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../constants/theme";
import { BrowserRouter } from "react-router-dom";

interface Props {
  children: JSX.Element[]
}


const ProvidersUtil:FunctionComponent<Props> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
    </ThemeProvider>
  );
};

export default ProvidersUtil;
