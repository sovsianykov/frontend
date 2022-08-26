import React from "react";
import BackToHomeBtn from "@/shared/components/BackToHomeBtn/BackToHomeBtn";
import Page from "@/shared/components/Page/Page";

const EmptyCart = () => {
  return (
    <Page pageTitle="Your Cart is Empty" withoutBg  centered >
      <BackToHomeBtn title='back to Home'/>
    </Page>
  );
};

export default EmptyCart;
