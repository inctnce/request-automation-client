import React from "react";
import style from "./style.module.css";

import CategoryForm from "./CategoryForm/container";
import History from "./History";
import ProductForm from "./ProductForm/container";
import Category from "../../../../types/Category";
import Product from "../../../../types/Product";

type Props = {
  selected_option: number;

  creator_id: string;
  categories: Category[];
  products: Product[];
};

const Option = (props: Props) => {
  if (props.selected_option === 0) {
    return <div className={style.option}>История</div>;
  }
  if (props.selected_option === 1) {
    return (
      <div className={style.wrapper}>
        <CategoryForm />
        <History
          items={props.categories.filter((currentValue) => {
            return currentValue.creator_id === props.creator_id;
          })}
        />
      </div>
    );
  }
  if (props.selected_option === 2) {
    return (
      <div className={style.wrapper}>
        <ProductForm />
        <History
          items={props.products.filter((currentValue) => {
            return currentValue.creator_id === props.creator_id;
          })}
        />
      </div>
    );
  }
  return <></>;
};

export default Option;
