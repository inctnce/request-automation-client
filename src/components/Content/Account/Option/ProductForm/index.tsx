import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Category from "../../../../../types/Category";
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
import Specification from "../../../../../types/Specification";
import postProduct, { parseSpecs } from "./helpers";

type Props = {
  creator_id: string;

  selected_category: Category;
  categories: Category[];

  name: string;
  specs: Specification[];
  price: string;
  extra_info: string;

  updNumOfRows: (action: "increase" | "decrease") => void;

  updTable: (type: "spec" | "value", index: number, value: string) => void;
  updForm: (
    segment: "category" | "other",
    key: number,
    value: string | Category
  ) => void;

  postProduct: (
    name: string,
    specs: string[],
    values: string[],
    price: string,
    extra_info: string,
    creator_id: string,
    category_id: string
  ) => void;
};

const ProductForm = (props: Props) => {
  const [category, setCategory] = React.useState(
    props.categories[0].name || ""
  );

  React.useEffect(() => {
    props.updForm("category", 0, props.categories[0]);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);

    const category: Category | undefined = props.categories.find(
      (currentValue: Category) => {
        return currentValue.name === event.target.value;
      }
    );

    props.updForm("category", 0, category!);
  };

  const nameRef: React.RefObject<HTMLInputElement> = React.createRef();
  const priceRef: React.RefObject<HTMLInputElement> = React.createRef();
  const extraInfoRef: React.RefObject<HTMLInputElement> = React.createRef();
  const specRefs: React.RefObject<HTMLInputElement>[] = [];
  const valueRefs: React.RefObject<HTMLInputElement>[] = [];

  function createSpecsTable() {
    const result = [];

    for (let i = 0; i < props.specs.length; i++) {
      const specRef: React.RefObject<HTMLInputElement> = React.createRef();
      const valueRef: React.RefObject<HTMLInputElement> = React.createRef();
      specRefs.push(specRef);
      valueRefs.push(valueRef);
      result.push(
        <TableRow key={i}>
          <TableCell>
            <InputBase
              placeholder="характеристика"
              value={props.specs[i].spec}
              inputRef={specRefs[i]}
              onChange={() =>
                props.updTable("spec", i, specRefs[i].current!.value)
              }
            />
          </TableCell>
          <TableCell>
            <InputBase
              placeholder="значение"
              value={props.specs[i].value}
              inputRef={valueRefs[i]}
              onChange={() =>
                props.updTable("value", i, valueRefs[i].current!.value)
              }
            />
          </TableCell>
        </TableRow>
      );
    }
    return result;
  }

  const table_component = createSpecsTable();

  return (
    <Paper className={style.form} variant="outlined">
      <Typography className={style.form_item} align="center">
        Добавить товар
      </Typography>

      <TextField
        className={style.form_item}
        required
        select
        label="Категория"
        value={category}
        onChange={handleChange}
      >
        {props.categories.map((category: Category, index: number) => (
          <MenuItem key={index} value={category.name}>
            {category.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        className={style.form_item}
        required
        label="Название"
        inputRef={nameRef}
        value={props.name}
        onChange={() => props.updForm("other", 0, nameRef.current!.value)}
      />

      <Paper variant="outlined" className={style.form_item}>
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

      <div className={style.table_btn}>
        <IconButton
          color="primary"
          onClick={() => props.updNumOfRows("increase")}
        >
          <Add />
        </IconButton>
        <IconButton
          color="primary"
          onClick={() => props.updNumOfRows("decrease")}
        >
          <Remove />
        </IconButton>
      </div>

      <TextField
        className={style.form_item}
        required
        label="Дополнительная информация"
        inputRef={extraInfoRef}
        value={props.price}
        onChange={() => props.updForm("other", 1, extraInfoRef.current!.value)}
      />

      <TextField
        className={style.form_item}
        required
        label="Цена"
        inputRef={priceRef}
        value={props.extra_info}
        onChange={() => props.updForm("other", 2, priceRef.current!.value)}
      />

      <Button
        variant="contained"
        color="primary"
        className={style.form_item}
        disableElevation
        onClick={() =>
          postProduct(
            props.name,
            parseSpecs("specs", props.specs),
            parseSpecs("values", props.specs),
            props.price,
            props.extra_info,
            props.creator_id,
            props.selected_category.id!,
            props.postProduct
          )
        }
      >
        Добавить
      </Button>
    </Paper>
  );
};

export default ProductForm;
