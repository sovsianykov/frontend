import React from "react";
import Page from "@/shared/components/Page/Page";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { theme } from "@/app/constants/theme";
import BackToHomeBtn from "@/shared/components/BackToHomeBtn/BackToHomeBtn";
import { useProduct } from "@/app/hooks/useProduct";

const useStyles = makeStyles(() =>({
  root: {
    width: "100%",
    display:"flex",
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(3)
  },
  leftBlock: {
    width: "50%",
    display:'flex',
    justifyContent:"center"
  },
  imageWrapper: {
    width: 400,
    height: 250,
    overflow:'hidden',
    border: '2px solid #FFF',
    background: theme.palette.primary.main

  },
  image: {
    display:"block",
    width:"100%",
    // objectFit:"contain"
  },
  text: {
    width: "50%",
    padding: theme.spacing(3),
    color: theme.palette.primary.contrastText
  },
  price : {

  }

}) )



const Detail = () => {
  const classes = useStyles()
  const { product  } = useProduct()

  return (
    <Page pageTitle={product!.title} centered  >
      <Box className={classes.root}>
        <Box className={classes.leftBlock}>
       <Box className={classes.imageWrapper}>
         <img src={product!.imageUrl} alt={product!.title} className={classes.image}/>
       </Box>
        </Box>
       <Box>
         <Box className={classes.text}>
         <Typography variant='body1' color='textPrimary'>
           {product!.desc}
         </Typography>
         <Typography variant='body2' color='textPrimary' >
         price: ${product!.price}
         </Typography>
         </Box>
       </Box>
      </Box>
      <BackToHomeBtn title='Back to Home '/>
    </Page>
  );
};

export default Detail;
