import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Category from "../../../types/Category";
import Product from "../../../types/Product";
import style from "../../../assets/styles/page.module.css";
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
    <div className={style.wrapper}>
      {props.didGetCategories || props.didGetProducts ? (
        <>
          <h1 className={style.title}>Каталог</h1>
          <div className={style.wrapper}>
            <div className={style.side_wrapper}>
              <Paper className={style.side}>
                <List>
                  {props.categories.map((category: Category) => (
                    <ListItem key={category.id} button>
                      {category.name}
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </div>
            <div className={style.main}>{products_component}</div>
          </div>
        </>
      ) : (
        <div className={style.progress_wrapper}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default Catalog;
