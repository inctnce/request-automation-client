import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Category from "../../../types/Category";
import style from "./style.module.css";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import submit from "./helpers";
import Delete from "@material-ui/icons/Delete";
import Product from "../../../types/Product";

type Props = {
  categories: Category[];

  product: Product;
  creator_id?: string;

  request: "post" | "put" | string;

  formTitle: string;
  submitBtnTitle: string;

  updNumOfRows: (action: "increase" | "decrease") => void;

  updTable: (type: "spec" | "setting", index: number, value: string) => void;
  updForm: (segment: string, key: number, value: string) => void;

  postProduct?: (product: Product) => void;
  putProduct?: (product: Product) => void;
  deleteProduct?: (product_id: string) => void;
};

const ProductForm = (props: Props) => {
  const [category, setCategory] = React.useState(props.categories[0].name || "");

  React.useEffect(() => {
    if (props.request === "post") {
      props.updForm("category", 0, props.categories[0].id!);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);

    const category: Category | undefined = props.categories.find((currentValue: Category) => {
      return currentValue.name === event.target.value;
    });

    props.updForm("category", 0, category!.id!);
  };

  const nameRef: React.RefObject<HTMLInputElement> = React.createRef();
  const priceRef: React.RefObject<HTMLInputElement> = React.createRef();
  const extraInfoRef: React.RefObject<HTMLInputElement> = React.createRef();
  const specRefs: React.RefObject<HTMLInputElement>[] = [];
  const valueRefs: React.RefObject<HTMLInputElement>[] = [];

  function createSpecsTable() {
    const result = [];

    for (let i = 0; i < props.product.specs.length; i++) {
      const specRef: React.RefObject<HTMLInputElement> = React.createRef();
      const valueRef: React.RefObject<HTMLInputElement> = React.createRef();
      specRefs.push(specRef);
      valueRefs.push(valueRef);
      result.push(
        <TableRow key={i}>
          <TableCell>
            <InputBase
              placeholder="характеристика"
              value={props.product.specs[i]}
              inputRef={specRefs[i]}
              onChange={() => props.updTable("spec", i, specRefs[i].current!.value)}
            />
          </TableCell>
          <TableCell>
            <InputBase
              placeholder="значение"
              value={props.product.settings[i]}
              inputRef={valueRefs[i]}
              onChange={() => props.updTable("setting", i, valueRefs[i].current!.value)}
            />
          </TableCell>
        </TableRow>
      );
    }
    return result;
  }

  const table_component = createSpecsTable();

  return (
    <div>
      <Paper className={style.form} variant="outlined">
        <Typography className={style.item} align="center" variant="h6">
          {props.formTitle}
        </Typography>

        <TextField className={style.item} required select label="Категория" value={category} onChange={handleChange}>
          {props.categories.map((category: Category, index: number) => (
            <MenuItem key={index} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className={style.item}
          required
          label="Название"
          inputRef={nameRef}
          value={props.product.name}
          onChange={() => props.updForm("name", 0, nameRef.current!.value)}
        />

        <Paper variant="outlined" className={style.item}>
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

        <div className={style.item}>
          <IconButton color="primary" onClick={() => props.updNumOfRows("increase")}>
            <Add />
          </IconButton>
          <IconButton color="primary" onClick={() => props.updNumOfRows("decrease")}>
            <Remove />
          </IconButton>
        </div>

        <TextField
          className={style.item}
          required
          label="Дополнительная информация"
          inputRef={extraInfoRef}
          value={props.product.extra_info}
          onChange={() => props.updForm("extra_info", 0, extraInfoRef.current!.value)}
        />

        <TextField
          className={style.item}
          required
          label="Цена"
          inputRef={priceRef}
          value={props.product.price}
          onChange={() => props.updForm("price", 0, priceRef.current!.value)}
        />

        <div>
          <Button
            variant="contained"
            color="primary"
            className={style.item}
            disableElevation
            onClick={() =>
              submit(props.product, props.request, props.postProduct!, props.putProduct!, props.creator_id)
            }
          >
            {props.submitBtnTitle}
          </Button>
          {props.request === "put" ? (
            <IconButton
              className={style.item + " " + style.error_color}
              onClick={() => props.deleteProduct!(props.product.id!)}
            >
              <Delete />
            </IconButton>
          ) : (
            <></>
          )}
        </div>
      </Paper>
    </div>
  );
};

export default ProductForm;
