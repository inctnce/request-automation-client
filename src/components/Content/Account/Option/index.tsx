import React from "react";
import style from "./style.module.css";

import CategoryForm from "../../../Forms/CategoryForm/container";
import History from "./History";
import ProductForm from "../../../Forms/ProductForm/container";
import Category from "../../../../types/Category";
import Product from "../../../../types/Product";
import Demand from "../../../../types/Demand";
import Alert from "../../../../types/Alert";

type Props = {
  selected_option: number;

  creator_id: string;

  categories: Category[];

  didGetProducts: boolean;
  products: Product[];
  getProducts: (key: string, id: string) => void;

  didGetDemands: boolean;
  demands: Demand[];
  getDemands: (id?: string) => void;

  putCategory?: (user_id: string, name: string) => void;

  updNumOfRows?: (action: "increase" | "decrease") => void;
  updTable?: (type: "spec" | "setting", index: number, value: string) => void;
  updForm?: (segment: string, key: number, value: string) => void;
  putProduct?: (product: Product) => void;

  postDemand?: (demand: Demand) => void;
  updDemandForm?: (key: number, value: string) => void;

  alert?: (alert: Alert) => void;
};

const Option = (props: Props) => {
  if (!props.didGetProducts) {
    props.getProducts("user", props.creator_id);
  }
  if (!props.didGetDemands) {
    props.getDemands(props.creator_id);
  }

  if (props.selected_option === 0) {
    return (
      <div className={style.wrapper}>
        <History
          itemsType="demand"
          items={props.demands}
          request="put"
          categories={props.categories}
          updDemandForm={props.updDemandForm!}
          alert={props.alert}
        />
      </div>
    );
  }
  if (props.selected_option === 1) {
    return (
      <div className={style.wrapper}>
        <CategoryForm />
        <History
          itemsType="category"
          items={props.categories}
          request="put"
          categories={props.categories}
          putCategory={props.putCategory}
          alert={props.alert}
        />
      </div>
    );
  }
  if (props.selected_option === 2) {
    return (
      <div className={style.wrapper}>
        <ProductForm />
        <History
          request="put"
          itemsType="product"
          categories={props.categories}
          items={props.products}
          updNumOfRows={props.updNumOfRows!}
          updTable={props.updTable!}
          updForm={props.updForm!}
          putProduct={props.putProduct!}
          alert={props.alert}
        />
      </div>
    );
  }
  return <></>;
};

export default Option;
