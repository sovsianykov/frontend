import React, {
  ChangeEvent,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextareaAutosize,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../../constants/theme";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { postProduct } from "../../../../store/thunks";


const useStyles = makeStyles(()=>({
  root: {
    width:350,
    display:"flex",
    height: "auto",
    flexDirection:'column',
    alignItems:"center",
    background: "antiquewhite",
    '& .MuiSelect-selectMenu' :{
      width: 162,
      height: 20,
      padding: theme.spacing(0.5 ,1),
      background: "#FFF",
      marginTop: theme.spacing(2),
      color:"#838383",
    },
    '& input': {
      width: 182,
      height: 30,
      padding: theme.spacing(0.5 ,1),
      color:"#838383",
      marginTop: theme.spacing(2)
    }
  }
}))


const initialProduct = {
  _id: "",
  title: "",
  desc: "",
  imageUrl: "",
  category: "",
  price: 0,
};

const PostForm: FunctionComponent = () => {
  const [titleDirty, setTitleDirty] = useState<boolean>(false);
  const [title, setTitle] = useState(initialProduct.title);
  const [imageUrl, setImageUrl] = useState(initialProduct.imageUrl);
  const [category, setCategory] = useState(initialProduct.category);
  const [desc, setDesc] = useState(initialProduct.desc);
  const [price, setPrice] = useState(initialProduct.price);
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const descRef = React.useRef<HTMLTextAreaElement | null>(null);

  const classes = useStyles()

 const dispatch = useAppDispatch()

  useEffect(() => {
    titleRef.current?.focus();
    setTitleDirty(true);
  }, []);

  const onTitleInputHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );
  const onDescInputHandler = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (!titleDirty || !!title) {
        setDesc(e.target.value);
      } else {
        titleRef.current!.style.cssText =
          "border: 1px solid red ;padding : 7px; border-radius: 3px";
      }
    },
    [title, titleDirty]
  );
  const onImageUrlInputHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setImageUrl(e.target.value);
    },
    []
  );
  const onPriceInputHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPrice(+e.target.value);
    },
    []
  );
  const onCategoryInputHandler = useCallback((e: ChangeEvent<any>) => {
    setCategory(e.target.value);
  }, []);

  const onSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      const newProduct = {
        ...initialProduct,
        title: title,
        description: desc,
        imageUrl: imageUrl,
        category:category,
        price: price,
      };
      if (!!desc && !!title && !!category && !!price && !!imageUrl) {
        dispatch(postProduct(newProduct))
        setTitle("");
        setDesc("");
        setImageUrl("");
        setCategory("");
        setPrice(0);
        setTitleDirty(false);
      } else {
        alert("Please, fill the form!");
      }
    },
    [desc, title, imageUrl, price,category]
  );
  return (
    <form onSubmit={onSubmitHandler} className={classes.root}>
      <input
        type="text"
        placeholder="product title"
        id="title"
        value={title}
        name="title"
        ref={titleRef}
        onChange={onTitleInputHandler}
      />
      <TextareaAutosize
        style={{ marginTop: 10, border: "1px solid #ccc" ,padding: 5}}
        placeholder="product description"
        minRows={4}
        id="desc"
        value={desc}
        name="desc"
        ref={descRef}
        onChange={(e) => onDescInputHandler(e)}
      />
      <input
        type="text"
        placeholder="image url"
        id="imageUrl"
        value={imageUrl}
        name="imageUrl"
        onChange={onImageUrlInputHandler}
      />
      <FormControl  className='select'>
        <Select
          value={category}
          onChange={onCategoryInputHandler}
          displayEmpty
          name="category"

        >
          <MenuItem value={category}>
            <em>all</em>
          </MenuItem>
          <MenuItem value={"photo"}>photo</MenuItem>
          <MenuItem value={"phones"}>phones</MenuItem>
          <MenuItem value={"watches"}>watches</MenuItem>
        </Select>
        <FormHelperText>category</FormHelperText>
      </FormControl>
      <input
        type="text"
        placeholder="price"
        id="imageUrl"
        value={price}
        name="price"
        onChange={onPriceInputHandler}
      />
      <Button style={{ marginTop: 1 }} onClick={onSubmitHandler}>
        submit
      </Button>
    </form>
  );
};

export default PostForm;
