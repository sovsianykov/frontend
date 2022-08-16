import React, { FunctionComponent } from "react";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../../app/constants/theme";

interface PageProps {
  children: JSX.Element | JSX.Element[];
  pageTitle?: string;
}
 const useStyles = makeStyles(() =>({
   root: {
     minHeight: "100vh",
     display:"flex",
     flexDirection:"column"
   },
   titleBlock:{
     margin: "0 auto",
     padding: theme.spacing(2),
     fontSize: 20,
     letterSpacing:".1rem",
     fontWeight: 600
   }

 }))


const Page:FunctionComponent<PageProps> = ({children,pageTitle}) => {
 const classes = useStyles()
  return (
    <Container maxWidth='lg'>
      <Box width={"100%"} height={"80px"}></Box>
      { pageTitle && <Box className={classes.titleBlock}>{pageTitle}</Box> }
      {children}
    </Container>
  );
};

export default Page;
