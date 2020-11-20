import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Product from "../../../types/Product";
import style from "./form.module.css";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

type Props = {
  product: Product;
  segment: "catalog" | "bag";

  buttonAction?: (product: Product) => void;
};

const ProductCard = (props: Props) => {
  function createSpecsTable() {
    const result = [];

    for (let i = 0; i < 3; i++) {
      result.push(
        <TableRow key={i}>
          <TableCell>{props.product.specs[i]}</TableCell>
          <TableCell>{props.product.values[i]}</TableCell>
        </TableRow>
      );
    }
    return result;
  }

  const table_component = createSpecsTable();

  return (
    <div className={style.form_wrapper}>
      <Paper className={style.form} variant="outlined">
        <Typography className={style.item} align="center" variant="h6">
          {props.product.name}
        </Typography>

        <Paper className={style.item} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Характеристики</TableCell>
                <TableCell>Значения</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{table_component}</TableBody>
          </Table>
        </Paper>
        <Typography className={style.item} variant="body1">
          Цена: {props.product.price}
        </Typography>
        {props.segment === "bag" ? (
          <>
            <Typography className={style.item} variant="body1">
              <strong>Количество: {props.product.quantity}</strong>
            </Typography>

            <Button
              className={style.item + " " + style.del_btn}
              variant="contained"
              disableElevation
              onClick={() => props.buttonAction!(props.product)}
            >
              Удалить
            </Button>
          </>
        ) : (
          <>
            <Button
              className={style.item}
              variant="contained"
              color="primary"
              disableElevation
              onClick={() => props.buttonAction!(props.product)}
            >
              В корзину
            </Button>
          </>
        )}
      </Paper>
    </div>
  );
};

export default ProductCard;
