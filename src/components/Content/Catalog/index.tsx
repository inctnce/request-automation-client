import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Category from "../../../types/Category";
import Product from "../../../types/Product";
import style from "./style.module.css";
import ProductCard from "./ProductCard";

type Props = {
  didGetCategories: boolean;
  didGetProducts: boolean;

  categories: Category[];
  products: Product[];
};

const Catalog = (props: Props) => {
  const products_component = props.products.map((product: Product) => (
    <ProductCard product={product} />
  ));

  return (
    <div>
      {props.didGetCategories || props.didGetProducts ? (
        <>
          <h1>Каталог</h1>
          <div className={style.wrapper}>
            <div>
              <Paper className={style.item}>
                <List>
                  {props.categories.map((category: Category) => (
                    <ListItem key={category.id} button>
                      {category.name}
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </div>
            <div className={style.item}>{products_component}</div>
          </div>
        </>
      ) : (
        <div className={style.progress}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default Catalog;
