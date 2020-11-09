import React from "react";
import style from "./style.module.css";

import CateogryForm from "./CategoryForm";
import ProductForm from "./ProductForm";
import Category from "../../../../types/Category";

type Props = {
  user_id: string;
  selected_option: number;

  selected_category: Category;
  categories: Category[];
  product_name: string;
  specs: string[];
  vals: string[];
  product_price: string;
  extra_info: string;

  postCategory: (user_id: string, name: string) => void;

  setCategory: (category: Category) => void;
  updForm: (isTable: boolean, key: number, value: string) => void;
};

const Option = (props: Props) => {
  if (props.selected_option === 0) {
    return <div className={style.option}>История</div>;
  }
  if (props.selected_option === 1) {
    return <CateogryForm user_id={props.user_id} postCategory={props.postCategory} />;
  }
  if (props.selected_option === 2) {
    return (
      <ProductForm
        selected_category={props.selected_category}
        categories={props.categories}
        name={props.product_name}
        specs={props.specs}
        values={props.vals}
        price={props.product_price}
        extra_info={props.extra_info}
        setCategory={props.setCategory}
        updForm={props.updForm}
      />
    );
  }
  return <></>;
};

export default Option;
