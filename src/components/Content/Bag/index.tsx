import React from "react";
import style from "./style.module.css";
import DemandForm from "../../Forms/DemandForm/container";
import Product from "../../../types/Product";
import ProductCard from "../../Reusable/ProductCard";

type Props = {
  products: Product[];

  removeFromBag: (product: Product) => void;
};

const Bag = (props: Props) => {
  const products = props.products.map((product: Product, i: number) => (
    <ProductCard key={i} product={product} segment="bag" buttonAction={props.removeFromBag} />
  ));

  return (
    <div>
      <h1>Корзина</h1>
      <div className={style.wrapper}>
        <div className={style.item}>
          <DemandForm />
        </div>
        <div className={style.item}>{products}</div>
      </div>
    </div>
  );
};

export default Bag;
