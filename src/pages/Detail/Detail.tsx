import React from "react";
import Page from "@/shared/components/Page/Page";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import { useAppSelector } from "@/app/hooks/useAppDispatch";
import { filteredProducts } from "@/store/selectors";
import { makeStyles } from "@material-ui/styles";
import { theme } from "@/app/constants/theme";
import BackToHomeBtn from "@/shared/components/BackToHomeBtn/BackToHomeBtn";

const useStyles = makeStyles(() =>({
  root: {
    width: "100%",
    display:"flex",
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(3)
  },
  imageWrapper: {
    maxWidth: 400,
    height: 'auto',
    maxHeight: 500,
    overflow:'hidden',
    border: '2px solid #FFF',

  },
  image: {
    display:"block",
    width:"100%",
    objectFit:"contain"
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
  const { id } = useParams()
  const { products } = useAppSelector(filteredProducts)
  const product = products.find(p => p._id === id)

  return (
    <Page pageTitle={product!.title} centered  >
      <Box className={classes.root}>
       <Box className={classes.imageWrapper}>
         <img src={product!.imageUrl} alt={product!.title} className={classes.image}/>
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
