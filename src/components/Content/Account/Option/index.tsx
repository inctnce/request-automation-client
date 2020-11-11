import React from "react";
import style from "../../../../assets/styles/page.module.css";

import CategoryForm from "./CategoryForm";
import ProductForm from "./ProductForm/container";

type Props = {
  user_id: string;
  selected_option: number;

  postCategory: (user_id: string, name: string) => void;
};

const Option = (props: Props) => {
  if (props.selected_option === 0) {
    return <div className={style.option}>История</div>;
  }
  if (props.selected_option === 1) {
    return (
      <CategoryForm user_id={props.user_id} postCategory={props.postCategory} />
    );
  }
  if (props.selected_option === 2) {
    return <ProductForm />;
  }
  return <></>;
};

export default Option;
