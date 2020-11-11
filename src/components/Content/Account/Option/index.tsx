import React from "react";
import style from "../../../../assets/styles/page.module.css";

import CategoryForm from "./CategoryForm";
import ProductForm from "./ProductForm";
import Category from "../../../../types/Category";
import Specification from "../../../../types/Specification";

type Props = {
  user_id: string;
  selected_option: number;

  selected_category: Category;
  categories: Category[];
  product_name: string;
  num_of_rows: number;
  specs: Specification[];
  product_price: string;
  extra_info: string;

  postCategory: (user_id: string, name: string) => void;

  updNumOfRows: (action: "increase" | "decrease") => void;
  updProductFormTable: (
    type: "spec" | "value",
    index: number,
    value: string
  ) => void;
  updProductForm: (
    segment: "category" | "other",
    key: number,
    value: string | Category
  ) => void;
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
    return (
      <ProductForm
        selected_category={props.selected_category}
        categories={props.categories}
        name={props.product_name}
        specs={props.specs}
        price={props.product_price}
        extra_info={props.extra_info}
        updNumOfRows={props.updNumOfRows}
        updTable={props.updProductFormTable}
        updForm={props.updProductForm}
      />
    );
  }
  return <></>;
};

export default Option;
