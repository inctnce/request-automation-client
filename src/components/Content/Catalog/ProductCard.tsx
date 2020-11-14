import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Product from "../../../types/Product";
import style from "../../../assets/styles/form.module.css";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

type Props = {
  product: Product;
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
    <Paper className={style.form} variant="outlined">
      <Typography className={style.form_item} align="center" variant="h6">
        {props.product.name}
      </Typography>
      <Paper className={style.form_item} variant="outlined">
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
      <Typography className={style.form_item} variant="body1">
        {props.product.price}
      </Typography>
      <Button
        className={style.card_btn}
        variant="contained"
        color="primary"
        disableElevation
      >
        В корзину
      </Button>
    </Paper>
  );
};

export default ProductCard;
