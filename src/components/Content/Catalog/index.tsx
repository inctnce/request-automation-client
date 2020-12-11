import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Category from "../../../types/Category";
import Product from "../../../types/Product";
import style from "./style.module.css";
import ProductCard from "../../Reusable/ProductCard";

type Props = {
  didGetCategories: boolean;
  needLoadUpProducts: boolean;

  selected_category: Category;
  categories: Category[];

  products: Product[];

  selectCategory: (category: Category) => void;

  getProducts: (key: string, id: string) => void;

  addToBag: (product: Product) => void;
};

const Catalog = (props: Props) => {
  React.useEffect(() => {
    console.log(props.needLoadUpProducts);
    if (props.selected_category && props.needLoadUpProducts) {
      props.getProducts("category", props.selected_category.id!);
    }
  }, [props.selected_category]);

  const products_component = props.products.map((product: Product, i: number) => (
    <ProductCard key={i} product={product} segment="catalog" buttonAction={props.addToBag} />
  ));

  return (
    <div>
      {props.didGetCategories || props.needLoadUpProducts ? (
        <>
          <h1>Каталог</h1>
          <div className={style.wrapper}>
            <div>
              <Paper className={style.item}>
                <List>
                  {props.categories.map((category: Category) => (
                    <ListItem
                      key={category.id}
                      button
                      onClick={() => props.selectCategory(category)}
                      selected={props.selected_category === category ? true : false}
                    >
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
