import React from "react";
import style from "./style.module.css";

import CategoryForm from "./CategoryForm/container";
import CategoryHistory from "./CategoryHistory/container";
import ProductForm from "./ProductForm/container";

type Props = {
  selected_option: number;
};

const Option = (props: Props) => {
  if (props.selected_option === 0) {
    return <div className={style.option}>История</div>;
  }
  if (props.selected_option === 1) {
    return (
      <div className={style.wrapper}>
        <CategoryForm />
        <CategoryHistory />
      </div>
    );
  }
  if (props.selected_option === 2) {
    return <ProductForm />;
  }
  return <></>;
};

export default Option;
