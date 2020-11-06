import { CircularProgress } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Category from "../../../types/Category";
import Product from "../../../types/Product";
import style from "./style.module.css";

type Props = {
  didGetCategories: boolean;
  didGetProducts: boolean;

  categories: Category[];
  products: Product[];
};

const Catalog = (props: Props) => {
  return (
    <>
      {props.didGetCategories || props.didGetProducts ? (
        <>
          <h1 className={style.title}>Каталог</h1>
          <div className={style.wrapper}>
            <Paper className={style.categories}>
              <List>
                {props.categories.map((category: Category) => (
                  <ListItem key={category.id} button>
                    {category.name}
                  </ListItem>
                ))}
              </List>
            </Paper>
            <Paper className={style.products}>products</Paper>
          </div>
        </>
      ) : (
        <div className={style.progress_wrapper}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default Catalog;
