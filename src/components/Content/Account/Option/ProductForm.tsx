import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Category from "../../../../types/Category";
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

type Props = {
  selected_category: Category;
  categories: Category[];

  name: string;
  specs: string[];
  values: string[];
  price: string;
  extra_info: string;

  setCategory: (category: Category) => void;
  updForm: (isTable: boolean, key: number, value: string) => void;
};

const ProductForm = (props: Props) => {
  const [category, setCategory] = React.useState(props.categories[0].name || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };
  return (
    <Paper className={style.option + " " + style.category_form} variant="outlined">
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
        {props.categories.map((category: Category) => (
          <MenuItem key={category.id} value={category.name}>
            {category.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField className={style.form_item} required label="Название" />

      <Paper variant="outlined" className={style.form_item}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Характеристики</TableCell>
              <TableCell>Значения</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <InputBase placeholder="характеристика" />
              </TableCell>
              <TableCell>
                <InputBase placeholder="значение" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <div className={style.table_btn}>
        <IconButton color="primary">
          <Add />
        </IconButton>
        <IconButton color="primary">
          <Remove />
        </IconButton>
      </div>

      <TextField className={style.form_item} required label="Цена" />

      <TextField label="Дополнительная информация" multiline />

      <Button variant="contained" color="primary" className={style.add_btn}>
        Добавить
      </Button>
    </Paper>
  );
};

export default ProductForm;
